import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { wedding as w } from '../data/weddingData'
export default function FinalSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const op = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])
  return (
    <div ref={ref} className="final">
      <motion.div className="ph final-bg" style={{ y }}><img loading="lazy" src={w.final.image} alt="" onError={e => (e.currentTarget.hidden = true)} /></motion.div>
      <motion.div className="final-copy" style={{ opacity: op }}>
        <h2>{w.couple.groom}<em>&amp;</em>{w.couple.bride}</h2><p className="hero-date">{w.date.short}</p>
        <p className="body-serif">{w.final.line}</p><p className="body-serif">{w.final.sign}</p>
        <small className="label light">Made with love</small>
      </motion.div>
    </div>
  )
}
