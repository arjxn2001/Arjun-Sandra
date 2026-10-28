import { useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'
// Little hearts drifting down (cream, red, gold).
export default function FloatingPetals({ count = 14 }) {
  const reduce = useReducedMotion()
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i, left: Math.random() * 100, size: 12 + Math.random() * 12, dur: 12 + Math.random() * 14,
    delay: -Math.random() * 25, op: 0.5 + Math.random() * 0.4, drift: (Math.random() - 0.5) * 140,
  })), [count])
  if (reduce) return null
  return (
    <div className="petals" aria-hidden="true">
      {items.map(p => <span key={p.id} className={'petal c' + (p.id % 3)} style={{ left: p.left + '%', width: p.size, height: p.size, opacity: p.op, animationDuration: p.dur + 's', animationDelay: p.delay + 's', '--drift': p.drift + 'px' }} />)}
    </div>
  )
}
