import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { wedding as w } from '../data/weddingData'
import Lightbox from './Lightbox'
// Auto-playing carousel. Each photo's shape (portrait or landscape) is detected automatically.
const shape = r => Math.min(1.6, Math.max(0.7, r || 0.75))
export default function EditorialGallery() {
  const n = w.gallery.length, reduce = useReducedMotion()
  const [i, setI] = useState(0), [open, setOpen] = useState(null), [hold, setHold] = useState(false), [ratios, setRatios] = useState({})
  const go = d => setI(v => (v + d + n) % n)
  useEffect(() => { if (reduce || hold || open !== null) return; const t = setInterval(() => go(1), 4500); return () => clearInterval(t) }, [hold, open, reduce])
  const g = w.gallery[i], cur = shape(ratios[i])
  return (
    <>
      <div className="gal-head"><p className="label">Chapter by chapter</p><h2>{w.galleryTitle}</h2></div>
      <div className={'car' + (cur > 1 ? ' land' : '')} style={{ '--r': cur }} onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
        <motion.div className="car-stage" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} dragSnapToOrigin
          onDragStart={() => setHold(true)} onDragEnd={(e, p) => { setHold(false); if (p.offset.x < -50 || p.velocity.x < -400) go(1); else if (p.offset.x > 50 || p.velocity.x > 400) go(-1) }}>
          {w.gallery.map((s, k) => {
            const d = ((k - i + 1.5 * n) % n) - n / 2, r = shape(ratios[k])
            return (
              <motion.figure key={s.src} className="ph slide" initial={false} onTap={() => (d === 0 ? setOpen(k) : Math.abs(d) <= 1 && setI(k))}
                animate={{ x: `${d * 74}%`, y: '-50%', scale: d === 0 ? 1 : 0.8, opacity: d === 0 ? 1 : Math.abs(d) <= 1 ? 0.5 : 0, zIndex: d === 0 ? 3 : 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ pointerEvents: Math.abs(d) <= 1 ? 'auto' : 'none', '--sr': r, '--w': r > 1 ? 'var(--lw)' : 'var(--sw)' }}>
                <img src={s.src} alt={s.title} draggable={false} className={s.bw ? 'bw' : ''} loading="eager"
                  onLoad={e => { const v = e.currentTarget.naturalWidth / e.currentTarget.naturalHeight; setRatios(o => (o[k] === v ? o : { ...o, [k]: v })) }}
                  onError={e => (e.currentTarget.hidden = true)} />
              </motion.figure>
            )
          })}
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={i} className="car-cap" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <span className="label">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span><h3>{g.title}</h3><p className="body-serif center">{g.story}</p>
        </motion.div>
      </AnimatePresence>
      <div className="dots">{w.gallery.map((s, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={'Photo ' + (k + 1)} />)}</div>
      <AnimatePresence>{open !== null && <Lightbox items={w.gallery} index={open} setIndex={setOpen} />}</AnimatePresence>
    </>
  )
}
