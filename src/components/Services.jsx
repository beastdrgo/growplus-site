import { motion } from "framer-motion"
import InView from "@/components/arc/InView"
import { Video, Globe, Palette, Calendar, Camera } from "lucide-react"

const services = [
    { icon: Globe, number: "01", title: "Digital Marketing", description: "Strategy, campaigns and content systems built around visibility and conversion.", link: "/digital-marketing-agency-bangalore" },
    { icon: Globe, number: "02", title: "Website Development", description: "Fast, modern websites with clear positioning, strong UX and conversion paths.", link: "/website-development-company-bangalore" },
    { icon: Calendar, number: "03", title: "Social Media", description: "A consistent content engine across reels, campaigns, stories and branded creative.", link: "/social-media-marketing-bangalore" },
    { icon: Palette, number: "04", title: "AI Creative", description: "AI-assisted visuals and campaign concepts that give brands more creative range.", link: "/ai-creative-agency-bangalore" },
    { icon: Video, number: "05", title: "AI Video Production", description: "Product films, social-first videos and commercial creative made to move attention.", link: "/ai-video-production-bangalore" },
    { icon: Camera, number: "06", title: "Production", description: "Photography and video shoots for products, food, properties, jewellery and more.", link: "/ai-video-production-bangalore" },
]

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-gp-bg">
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
                <InView className="grid lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-24 mb-16">
                    <div>
                        <span className="gp-eyebrow">What we do</span>
                        <h2 className="mt-5 font-heading text-5xl md:text-6xl font-extrabold tracking-[-.045em] leading-[.95] text-gp-black">One team.<br /><span className="text-primary italic">Many ways</span><br />to grow.</h2>
                    </div>
                    <div className="flex items-end">
                        <p className="max-w-xl text-lg text-gp-grey leading-relaxed">From strategy to the final frame, GrowPlus brings creative direction, digital execution and AI-assisted production into one system.</p>
                    </div>
                </InView>

                <div className="border-t border-border2">
                    {services.map((service, index) => (
                        <motion.a href={service.link} key={service.number} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45,delay:index*.05}} className="group arc-spotlight grid grid-cols-[52px_1fr_auto] md:grid-cols-[72px_1fr_1.2fr_auto] gap-4 md:gap-8 items-center py-7 md:py-9 border-b border-border2 px-2 md:px-5 transition-all duration-300 hover:px-4 md:hover:px-7">
                            <span className="font-heading text-[.65rem] font-bold tracking-[.18em] text-primary">{service.number}</span>
                            <h3 className="font-heading text-xl md:text-3xl font-extrabold tracking-tight text-gp-black">{service.title}</h3>
                            <p className="hidden md:block text-sm md:text-base text-gp-grey leading-relaxed max-w-md">{service.description}</p>
                            <span className="w-10 h-10 rounded-full border border-border2 flex items-center justify-center group-hover:bg-gp-black group-hover:text-white group-hover:border-gp-black transition-all">↗</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
