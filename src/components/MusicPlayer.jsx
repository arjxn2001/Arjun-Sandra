import { Music, Pause } from 'lucide-react'
export default function MusicPlayer({ playing, onToggle }) {
  return <button className={'music' + (playing ? ' on' : '')} onClick={onToggle} aria-label={playing ? 'Pause music' : 'Play music'}>{playing ? <Pause size={16} /> : <Music size={16} />}</button>
}
