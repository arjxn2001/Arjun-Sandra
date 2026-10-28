import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// A panel that rises over the previous scene, its top corners softening to square as it takes over.
export default function ScrollScene({ children, className = '', z = 2, id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 25%'] })
  const r = useTransform(scrollYProgress, [0, 1], [56, 0])
  return <motion.section id={id} ref={ref} className={'scene ' + className} style={{ borderTopLeftRadius: r, borderTopRightRadius: r, zIndex: z }}>{children}</motion.section>
}
