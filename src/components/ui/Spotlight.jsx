import { useRef } from "react"

export default function Spotlight({ children, className = "" }) {
    const ref = useRef(null)
    const move = (event) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        ref.current.style.setProperty("--mx", `${event.clientX - rect.left}px`)
        ref.current.style.setProperty("--my", `${event.clientY - rect.top}px`)
    }
    return <div ref={ref} onMouseMove={move} className={`arc-spotlight ${className}`}>{children}</div>
}
