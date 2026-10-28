import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wedding as w } from '../data/weddingData'
import EnvelopeCard from './EnvelopeCard'
export default function EnvelopeIntro({ onOpen }) {
  const [open, setOpen] = useState(false)
  const [gone, setGone] = useState(false)
  const hearts = useMemo(() => Array.from({ length: 26 }, (_, i) => ({ id: i, x: (Math.random() - 0.5) * 360, y: 40 + Math.random() * 380, s: 0.6 + Math.random(), r: (Math.random() - 0.5) * 100, c: i % 3 })), [])
  const go = () => { if (open) return; setOpen(true); onOpen(); setTimeout(() => setGone(true), 2300) }
  return (
    <AnimatePresence>
      {!gone && (
        <motion.div className="intro" exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 1 }}>
          <motion.div className="intro-stack" animate={open ? { scale: [1, 1.04, 0.92], opacity: [1, 1, 0], y: -30 } : { y: [0, -6, 0] }} transition={open ? { duration: 1.7, delay: 0.3 } : { repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
            <div className="ibox"><EnvelopeCard /></div>
            <h1 className="i-names">{w.couple.groom} <i>&amp;</i> {w.couple.bride}</h1>
            <p className="i-date">{w.date.display} · Cordially invites you</p>
            <button className="pill light" onClick={go}>Open our invitation</button>
          </motion.div>
          {open && hearts.map(h => (
            <motion.span key={h.id} className={'bh c' + h.c} initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{ x: h.x, y: h.y, scale: [0, h.s, h.s * 0.8], opacity: [1, 1, 0], rotate: h.r }} transition={{ duration: 2.2, ease: 'easeOut' }} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
