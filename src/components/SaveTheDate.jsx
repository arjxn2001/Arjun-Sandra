import EnvelopeCard from './EnvelopeCard'
import { wedding as w } from '../data/weddingData'
export default function SaveTheDate() {
  return (
    <div className="std-scene">
      <p className="label">Save the date</p>
      <div className="std-card"><EnvelopeCard /></div>
      <h2>{w.couple.groom}<em>&amp;</em>{w.couple.bride}</h2>
      <p className="body-serif center">{w.date.display}</p>
    </div>
  )
}
