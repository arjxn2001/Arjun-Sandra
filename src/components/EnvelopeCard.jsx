import { useEffect, useState } from 'react'
import { wedding as w } from '../data/weddingData'

const envelope = import.meta.env.BASE_URL + 'envelope-card.png'
const load = src => new Promise(res => { const i = new Image(); i.onload = i.onerror = res; i.src = src })

export default function EnvelopeCard() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let on = true
    const t = setTimeout(() => on && setReady(true), 3000)
    Promise.all([load(w.cardPhoto), load(envelope)]).then(() => on && setReady(true))
    return () => { on = false; clearTimeout(t) }
  }, [])
  return (
    <div className="ecard" style={{ opacity: ready ? 1 : 0, transition: 'opacity .8s ease' }}>
      <div className="ephoto ph"><img src={w.cardPhoto} alt="Arjun and Sandra" fetchpriority="high" decoding="async" onError={e => (e.currentTarget.hidden = true)} /></div>
      <img className="eimg" src={envelope} alt="" fetchpriority="high" decoding="async" />
    </div>
  )
}