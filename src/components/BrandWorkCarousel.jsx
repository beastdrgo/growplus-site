import * as React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import InView from "@/components/arc/InView"
import { clients, sectors } from "@/data/clients"
import { mediaUrl } from "@/utils/media"

const featured = clients.slice(0, 12)

function relativePosition(index, active, total) {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
}

export default function BrandWorkCarousel({ onSelect }) {
    const [active, setActive] = React.useState(0)
    const activeClient = featured[active]

    const next = () => setActive((value) => (value + 1) % featured.length)
    const prev = () => setActive((value) => (value - 1 + featured.length) % featured.length)

    return (
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0b0b0b] min-h-[650px] md:min-h-[720px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,.18)]">
            <div className="absolute inset-x-0 top-0 z-30 flex justify-between items-center p-6 md:p-8 pointer-events-none">
                <span className="absolute left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[.28em] text-white/20 hidden md:block">Selected / GrowPlus</span>
                <span className="text-[9px] uppercase tracking-[.22em] font-bold text-white/50">Brand work</span>
                <span className="text-[9px] uppercase tracking-[.22em] font-bold text-white/40">{String(active + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ perspective: "1200px" }}>
                {featured.map((client, index) => {
                    const position = relativePosition(index, active, featured.length)
                    const visible = Math.abs(position) <= 3
                    const isActive = position === 0

                    return (
                        <motion.button
                            key={client.id}
                            type="button"
                            onClick={() => setActive(index)}
                            initial={false}
                            animate={{
                                x: position * 225,
                                scale: isActive ? 1 : Math.max(0.52, 0.82 - Math.abs(position) * 0.09),
                                rotateY: position * -10,
                                opacity: visible ? (isActive ? 1 : Math.max(0.18, 0.58 - Math.abs(position) * 0.12)) : 0,
                            }}
                            transition={{ type: "spring", stiffness: 150, damping: 22, mass: 0.8 }}
                            className={cn(
                                "absolute w-[230px] md:w-[270px] aspect-[4/5] rounded-[22px] overflow-hidden bg-[#222] shadow-[0_30px_90px_rgba(0,0,0,.55)] border border-white/10",
                                isActive ? "ring-2 ring-white/20" : "cursor-pointer"
                            )}
                            style={{ transformStyle: "preserve-3d", zIndex: 20 - Math.abs(position) }}
                            aria-label={`Select ${client.title}`}
                        >
                            <img src={mediaUrl(client.thumbnail)} alt={client.title} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
                            <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                                <span className="text-[8px] uppercase tracking-[.18em] font-bold text-white/65">{sectors[client.sector]?.label || client.sector}</span>
                                <span className="block mt-1 text-lg font-heading font-extrabold text-white">{client.title}</span>
                            </div>
                        </motion.button>
                    )
                })}
            </div>

            <div className="absolute inset-x-0 bottom-8 z-40 flex flex-col items-center">
                <motion.div
                    key={activeClient.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .35 }}
                    className="text-center max-w-[460px] px-6"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/[.07] backdrop-blur-xl border border-white/10 px-4 py-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[9px] uppercase tracking-[.22em] font-bold text-white/75">{activeClient.category}</span>
                    </div>
                    <p className="mt-3 text-sm text-white/55">{activeClient.description}</p>
                    <button onClick={() => onSelect(activeClient)} className="mt-4 h-10 rounded-full bg-white text-black px-5 text-[9px] font-bold uppercase tracking-[.18em] hover:-translate-y-0.5 hover:bg-primary hover:text-white transition-all duration-300">
                        View project <ArrowUpRight className="inline-block ml-2 w-3.5 h-3.5" />
                    </button>
                </motion.div>

                <div className="mt-6 flex items-center gap-3">
                    <button onClick={prev} aria-label="Previous brand" className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                    <div className="flex gap-1.5">
                        {featured.map((client, index) => (
                            <button key={client.id} onClick={() => setActive(index)} aria-label={`Select ${client.title}`} className={cn("h-1 rounded-full transition-all", index === active ? "w-7 bg-primary" : "w-1.5 bg-white/25 hover:bg-white/50")} />
                        ))}
                    </div>
                    <button onClick={next} aria-label="Next brand" className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ChevronRight className="w-4 h-4" /></button>
                </div>
            </div>
        </div>
    )
}
