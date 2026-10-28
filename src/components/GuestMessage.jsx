import { motion } from 'framer-motion'
import { wedding as w } from '../data/weddingData'
export default function GuestMessage() {
  return (
    <motion.div className="note" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.6 }}>
      <h2>{w.note.title}</h2><p className="body-serif">{w.note.text}</p>
    </motion.div>
  )
}
