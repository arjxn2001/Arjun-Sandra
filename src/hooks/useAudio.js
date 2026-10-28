import { useEffect, useRef, useState } from 'react'
export default function useAudio(src, max = 0.18) {
  const ref = useRef(null); const [playing, setPlaying] = useState(false)
  useEffect(() => { const a = new Audio(src); a.loop = true; a.volume = 0; ref.current = a; return () => a.pause() }, [src])
  const fade = (to, done) => { const a = ref.current; clearInterval(a._f); a._f = setInterval(() => { a.volume = Math.max(0, Math.min(max, a.volume + (to ? 0.01 : -0.02))); if (a.volume === (to ? max : 0)) { clearInterval(a._f); done?.() } }, 100) }
  const play = () => ref.current.play().then(() => { setPlaying(true); fade(true) }).catch(() => setPlaying(false))
  const toggle = () => (playing ? (setPlaying(false), fade(false, () => ref.current.pause())) : play())
  return { playing, play, toggle }
}
