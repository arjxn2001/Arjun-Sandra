import { wedding as w } from '../data/weddingData'
// Burgundy envelope artwork with a window: the couple's photo (cardPhoto) shows through it.
export default function EnvelopeCard() {
  return (
    <div className="ecard">
      <div className="ephoto ph"><img src={w.cardPhoto} alt="Arjun and Sandra" onError={e => (e.currentTarget.hidden = true)} /></div>
      <img className="eimg" src={import.meta.env.BASE_URL + 'envelope-card.png'} alt="" />
    </div>
  )
}
