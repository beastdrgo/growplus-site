import * as React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { clients, sectors } from "@/data/clients"
import { mediaUrl } from "@/utils/media"

const featured = clients.slice(0, 12)

export default function BrandWorkCarousel({ onSelect }) {
    const [active, setActive] = React.useState(0)
    const activeClient = featured[active]

    const next = React.useCallback(() => setActive((value) => (value + 1) % featured.length), [])
    const prev = React.useCallback(() => setActive((value) => (value - 1 + featured.length) % featured.length), [])

    React.useEffect(() => {
        const timer = window.setInterval(next, 5000)
        return () => window.clearInterval(timer)
    }, [next])

    return (
        <div className="relative overflow-hidden rounded-[2rem] bg-[#111] min-h-[620px] md:min-h-[700px] border border-black/10">
            <div className="absolute inset-0 pointer-events-none" style={{ perspective: "1100px", perspectiveOrigin: "50% 52%" }}>
                <div className="absolute inset-0 overflow-hidden">
                    {[featured, [...featured].reverse()].map((rail, railIndex) => (
                        <div key={railIndex} className={railIndex === 0 ? "brand-work-rail brand-work-rail-right" : "brand-work-rail brand-work-rail-left"}>
                            {rail.map((client, index) => (
                                <button
                                    key={`${railIndex}-${client.id}-${index}`}
                                    type="button"
                                    onClick={() => setActive(railIndex === 0 ? index : (featured.length - 1 - index + featured.length) % featured.length)}
                                    className="brand-work-card pointer-events-auto group"
                                    style={{ animationDelay: `-${index * 2.1 + railIndex * 1.05}s` }}
                                >
                                    <img src={mediaUrl(client.thumbnail)} alt={client.title} draggable={false} />
                                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 to-transparent text-left">
                                        <span className="text-[8px] uppercase tracking-[.18em] text-white/70">{client.category}</span>
                                        <span className="block text-xs font-bold text-white">{client.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(17,17,17,.12)_42%,rgba(17,17,17,.78)_100%)] pointer-events-none" />

            <div className="absolute inset-0 z-20 flex items-center justify-center px-5 md:px-10 pointer-events-none">
                <motion.div key={activeClient.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} className="w-full max-w-[470px] text-center pointer-events-auto">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[9px] uppercase tracking-[.22em] font-bold text-white/80">{sectors[activeClient.sector]?.label || activeClient.sector}</span>
                    </div>
                    <h3 className="font-heading text-4xl md:text-6xl font-extrabold tracking-[-.045em] text-white leading-[.92]">{activeClient.title}</h3>
                    <p className="mt-5 text-sm md:text-base leading-relaxed text-white/65 max-w-md mx-auto">{activeClient.description}</p>
                    <div className="mt-7 flex items-center justify-center gap-3">
                        <button onClick={prev} aria-label="Previous brand" className="w-11 h-11 rounded-full border border-white/20 bg-black/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                        <button onClick={() => onSelect(activeClient)} className="h-11 rounded-full bg-white text-black px-6 text-[10px] font-bold uppercase tracking-[.18em] hover:bg-primary hover:text-white transition-colors">View project <ArrowUpRight className="inline-block ml-2 w-3.5 h-3.5" /></button>
                        <button onClick={next} aria-label="Next brand" className="w-11 h-11 rounded-full border border-white/20 bg-black/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
                {featured.map((client, index) => (
                    <button key={client.id} onClick={() => setActive(index)} aria-label={`Select ${client.title}`} className={cn("h-1 rounded-full transition-all duration-300", index === active ? "w-8 bg-primary" : "w-2 bg-white/30 hover:bg-white/60")} />
                ))}
            </div>
        </div>
    )
}
