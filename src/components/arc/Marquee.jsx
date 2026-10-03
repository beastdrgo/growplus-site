import { useState } from "react"
import { Pause, Play } from "lucide-react"

export default function Marquee({ items, label = "Capabilities" }) {
    const [paused, setPaused] = useState(false)

    return (
        <div className="arc-marquee" aria-label={label}>
            <div className={`arc-marquee-track ${paused ? "is-paused" : ""}`}>
                {[0, 1].map((copy) => (
                    <div className="arc-marquee-set" key={copy} aria-hidden={copy === 1}>
                        {items.map((item, index) => (
                            <span className="arc-marquee-item" key={`${copy}-${item}-${index}`}>
                                <span className="arc-marquee-dot" />
                                {item}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="arc-marquee-control"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? `Play ${label} animation` : `Pause ${label} animation`}
            >
                {paused ? <Play size={14} /> : <Pause size={14} />}
                {paused ? "Play" : "Pause"}
            </button>
        </div>
    )
}
