import { motion, useReducedMotion } from "framer-motion"

export default function InView({ children, className = "", delay = 0, y = 24, scale = 1, amount = 0.18 }) {
    const reduced = useReducedMotion()

    return (
        <motion.div
            className={className}
            initial={reduced ? false : { opacity: 0, y, scale, filter: "blur(8px)" }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount }}
            transition={reduced ? { duration: 0 } : { duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    )
}
