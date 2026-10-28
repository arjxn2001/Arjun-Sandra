import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
export default function Lightbox({ items, index, setIndex }) {
  const n = items.length, go = d => setIndex((index + d + n) % n)
  useEffect(() => { const k = e => { if (e.key === 'Escape') setIndex(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }; addEventListener('keydown', k); return () => removeEventListener('keydown', k) })
  const it = items[index]
  return (
    <motion.div className="lightbox" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button className="lb-btn lb-x" onClick={() => setIndex(null)} aria-label="Close"><X /></button>
      <button className="lb-btn lb-p" onClick={() => go(-1)} aria-label="Previous"><ChevronLeft /></button>
      <motion.div key={index} className="ph lb-img" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <img src={it.src} alt={it.title} className={it.bw ? 'bw' : ''} onError={e => (e.currentTarget.hidden = true)} />
      </motion.div>
      <button className="lb-btn lb-n" onClick={() => go(1)} aria-label="Next"><ChevronRight /></button>
      <p className="lb-count">{String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</p>
      <p className="lb-story"><b>{it.title}.</b> {it.story}</p>
    </motion.div>
  )
}
