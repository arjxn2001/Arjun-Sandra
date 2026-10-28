import { wedding as w } from '../data/weddingData'
import EventScene from './EventScene'
export default function EventsSection() {
  return <div className="events"><h2>Come celebrate with us</h2>{w.events.map(e => <EventScene key={e.name} e={e} />)}</div>
}
