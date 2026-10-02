import { useState } from "react"
import { motion } from "framer-motion"
import ClientWork from "@/components/ClientWork"
import BrandWorkCarousel from "@/components/BrandWorkCarousel"

export default function Projects() {
    const [selectedClient, setSelectedClient] = useState(null)

    return (
        <section id="work" className="py-24 md:py-32 bg-white border-y border-border2">
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                    <div>
                        <span className="gp-eyebrow">Selected work</span>
                        <h2 className="mt-5 font-heading text-5xl md:text-7xl font-extrabold tracking-[-.045em] text-gp-black leading-[.95]">Brands<br /><span className="text-primary italic">we build with.</span></h2>
                    </div>
                    <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-md text-gp-grey leading-relaxed text-base md:text-lg">Scroll through the work. Pick a brand to open the full project and see the content behind the thumbnail.</motion.p>
                </div>

                <BrandWorkCarousel onSelect={setSelectedClient} />

                <div className="mt-8 flex items-center justify-between gap-6">
                    <p className="text-[10px] uppercase tracking-[.2em] font-heading font-bold text-gp-grey">A selection of GrowPlus work across food, jewellery, fashion and real estate.</p>
                    <a href="#services" className="hidden md:inline-flex text-[10px] uppercase tracking-[.2em] font-heading font-bold text-gp-black hover:text-primary transition-colors">Explore services ↗</a>
                </div>
            </div>
            <ClientWork client={selectedClient} isOpen={!!selectedClient} onClose={() => setSelectedClient(null)} />
        </section>
    )
}
