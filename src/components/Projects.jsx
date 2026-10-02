import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { clients, sectors } from "@/data/clients"
import { useState } from "react"
import ClientWork from "@/components/ClientWork"
import { mediaUrl } from "@/utils/media"

export default function Projects() {
    const [selectedClient, setSelectedClient] = useState(null)
    const [active, setActive] = useState(0)

    const client = clients[active]

    const next = () => setActive((active + 1) % clients.length)
    const prev = () => setActive((active - 1 + clients.length) % clients.length)

    return (
        <section id="work" className="py-24 md:py-32 bg-white border-y border-border2">
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                    <div>
                        <span className="gp-eyebrow">Selected work</span>
                        <h2 className="mt-5 font-heading text-5xl md:text-7xl font-extrabold tracking-[-.045em] text-gp-black leading-[.95]">
                            Work with<br /><span className="text-primary italic">a reason.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-gp-grey leading-relaxed text-base md:text-lg">
                        A rotating view of the brands we have worked with. Open a project to see the actual content, not just a thumbnail.
                    </p>
                </div>

                <motion.div key={client.id} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="grid lg:grid-cols-[1.15fr_.85fr] min-h-[560px] border border-border2 bg-gp-bg2 overflow-hidden">
                    <button onClick={() => setSelectedClient(client)} className="relative min-h-[430px] lg:min-h-[560px] overflow-hidden text-left group">
                        <img src={mediaUrl(client.thumbnail)} alt={client.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                        <div className="absolute top-6 left-6">
                            <span className="px-3 py-2 bg-white text-gp-black text-[.6rem] font-heading font-bold uppercase tracking-[.18em]">{sectors[client.sector]?.label || client.sector}</span>
                        </div>
                        <div className="absolute bottom-7 left-7 right-7 flex justify-between items-end text-white">
                            <div>
                                <p className="text-[.62rem] uppercase tracking-[.2em] font-bold text-white/60 mb-2">{client.category}</p>
                                <h3 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">{client.title}</h3>
                            </div>
                            <span className="w-12 h-12 rounded-full bg-white text-gp-black flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                <ArrowUpRight className="w-5 h-5" />
                            </span>
                        </div>
                    </button>

                    <div className="p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <p className="text-[.65rem] uppercase tracking-[.2em] font-heading font-bold text-primary mb-5">Project context</p>
                            <h3 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-gp-black mb-5">{client.title}</h3>
                            <p className="text-gp-grey leading-relaxed text-base md:text-lg">{client.description}</p>
                            <div className="mt-9 pt-7 border-t border-border2">
                                <p className="text-[.62rem] uppercase tracking-[.2em] font-heading font-bold text-gp-grey mb-3">What we created</p>
                                <p className="text-gp-black leading-relaxed">{client.content?.length || 0} pieces of content across video and visual creative.</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4 mt-10">
                            <button onClick={() => setSelectedClient(client)} className="font-heading text-[.67rem] uppercase tracking-[.18em] font-bold text-gp-black hover:text-primary transition-colors">View project ↗</button>
                            <div className="flex gap-2">
                                <button onClick={prev} aria-label="Previous project" className="w-11 h-11 border border-border2 flex items-center justify-center hover:bg-gp-black hover:text-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                                <button onClick={next} aria-label="Next project" className="w-11 h-11 border border-border2 flex items-center justify-center hover:bg-gp-black hover:text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2">
                    {clients.map((item, i) => (
                        <button key={item.id} onClick={() => setActive(i)} className={`shrink-0 px-4 py-2 text-[.6rem] font-heading font-bold uppercase tracking-[.16em] border transition-colors ${i === active ? "bg-gp-black text-white border-gp-black" : "bg-white text-gp-grey border-border2 hover:border-gp-black"}`}>
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>

            <ClientWork client={selectedClient} isOpen={!!selectedClient} onClose={() => setSelectedClient(null)} />
        </section>
    )
}
