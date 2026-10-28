import { motion, useScroll, useTransform } from 'framer-motion'
import { wedding as w } from '../data/weddingData'
export default function Hero() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 700], [1, 0.93])
  const fade = useTransform(scrollY, [0, 700], [1, 0.4])
  return (
    <motion.header className="hero" style={{ scale, opacity: fade }}>
      <div className="ph hero-bg"><img src={w.hero.image} alt="Arjun and Sandra" onError={e => (e.currentTarget.hidden = true)} /></div>
      <div className="hero-copy">
        <motion.p className="label light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1.5 }}>The beginning of forever</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}>
          {w.couple.groom}<em>&amp;</em>{w.couple.bride}
        </motion.h1>
        <p className="hero-date">{w.date.short}</p><p className="label light">{w.hero.line}</p>
      </div>
      <p className="gently">Scroll gently</p>
    </motion.header>
  )
}
