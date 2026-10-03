import { motion, useReducedMotion } from "framer-motion"

export default function TextReveal({ children, as = "h2", className = "", delay = 0, align = "left" }) {
    const reduced = useReducedMotion()
    const Tag = as
    const text = String(children)
    const words = text.split(/\\s+/).filter(Boolean)

    return (
        <Tag className={className} aria-label={text} style={{ textAlign: align }}>
            {words.map((word, index) => (
                <motion.span
                    key={`${word}-${index}`}
                    aria-hidden="true"
                    className="arc-word"
                    initial={reduced ? false : { opacity: 0, y: "0.55em", filter: "blur(7px)" }}
                    whileInView={reduced ? undefined : { opacity: 1, y: "0em", filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={reduced ? { duration: 0 } : {
                        duration: 0.7,
                        delay: delay + index * 0.035,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    {word}{index < words.length - 1 ? " " : ""}
                </motion.span>
            ))}
        </Tag>
    )
}
