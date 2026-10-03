import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"

export default function Magnetic({ children, strength = 0.18, className = "" }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 })
    const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 })

    const move = (event) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
    }
    const reset = () => { x.set(0); y.set(0) }

    return <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={reset} className={className}>{children}</motion.div>
}
