import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
export default function EventScene({ e }) {
  return (
    <motion.article className={'event' + (e.main ? ' main' : '')} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1 }}>
      <div className="ph ev-img"><img loading="lazy" src={e.image} alt="" onError={x => (x.currentTarget.hidden = true)} /></div>
      <div className="ev-body">
        <h3>{e.name}</h3><p className="when">{e.date}</p><p>{e.time}</p><p>{e.venue}</p><p className="muted">{e.note}</p>
        {e.maps && <a className="btn" href={e.maps} target="_blank" rel="noreferrer"><MapPin size={15} /> Take me there</a>}
      </div>
    </motion.article>
  )
}
