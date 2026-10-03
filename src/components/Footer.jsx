import { mediaUrl } from "@/utils/media"

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gp-bg border-t border-border2 py-16 md:py-24 arc-texture">
            <div className="container relative z-10 px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={mediaUrl("/logo.jpg")} alt="Growplus" className="h-8 w-auto object-contain rounded-full shadow-sm" />
                            <span className="font-heading text-xl font-bold text-gp-black tracking-wide">GROW<span className="text-primary">+</span></span>
                        </div>
                        <p className="text-[0.8rem] text-gp-grey leading-relaxed max-w-xs">
                            AI creative and digital marketing for modern businesses, combining strategy, content, websites, social media and AI-powered production.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-heading text-[0.65rem] font-bold tracking-[0.25em] uppercase text-gp-black mb-6">Services</h4>
                        <div className="flex flex-col gap-3">
                            <a href="/digital-marketing-agency-bangalore" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Digital Marketing</a>
                            <a href="/website-development-company-bangalore" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Website Development</a>
                            <a href="/social-media-marketing-bangalore" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Social Media Marketing</a>
                            <a href="/ai-creative-agency-bangalore" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">AI Creative</a>
                            <a href="/ai-video-production-bangalore" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">AI Video Production</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-heading text-[0.65rem] font-bold tracking-[0.25em] uppercase text-gp-black mb-6">Locations</h4>
                        <div className="flex flex-col gap-3">
                            <a href="/digital-marketing-agency-bangalore" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Bangalore</a>
                            <a href="/digital-marketing-agency-mangalore" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Mangalore</a>
                            <a href="/digital-marketing-agency-puttur" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Puttur</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-heading text-[0.65rem] font-bold tracking-[0.25em] uppercase text-gp-black mb-6">Agency</h4>
                        <div className="flex flex-col gap-3">
                            <a href="/about" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">About GrowPlus</a>
                            <a href="/reviews" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Client Reviews</a>
                            <a href="/#work" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Our Work</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-heading text-[0.65rem] font-bold tracking-[0.25em] uppercase text-gp-black mb-6">Connect</h4>
                        <div className="flex flex-col gap-3">
                            <a href="https://instagram.com/growplus" target="_blank" rel="noopener noreferrer" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">Instagram</a>
                            <a href="https://wa.me/919686975553" target="_blank" rel="noopener noreferrer" className="font-heading text-[0.7rem] font-bold tracking-[0.1em] text-gp-grey hover:text-primary transition-colors">WhatsApp Audit</a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border2 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-body text-[0.75rem] text-gp-grey2">&copy; 2026 Growplus.site | AI Creative & Digital Marketing Agency</div>
                    <div className="flex gap-6"><p className="text-[0.7rem] text-gp-grey2 uppercase tracking-widest font-bold">Bangalore • Mangalore • Puttur</p></div>
                </div>
            </div>
        </footer>
    )
}
