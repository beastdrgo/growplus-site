import { motion } from "framer-motion"
import { Video, Globe, Palette, Calendar, Camera, Bot } from "lucide-react"

const services = [
    {
        icon: Globe,
        title: "Digital Marketing",
        description: "Strategy, content, campaigns and conversion-focused digital marketing for modern businesses.",
        link: "/digital-marketing-agency-bangalore"
    },
    {
        icon: Globe,
        title: "Website Development",
        description: "Modern, responsive business websites designed around clear positioning, UX and conversion.",
        link: "/website-development-company-bangalore"
    },
    {
        icon: Calendar,
        title: "Social Media Marketing",
        description: "Content strategy, reels, creatives and AI-assisted social media execution.",
        link: "/social-media-marketing-bangalore"
    },
    {
        icon: Palette,
        title: "AI Creative",
        description: "AI-assisted product visuals, campaign concepts and branded creative systems.",
        link: "/ai-creative-agency-bangalore"
    },
    {
        icon: Video,
        title: "AI Video Production",
        description: "AI-assisted commercial videos, product stories and social-first video creatives.",
        link: "/ai-video-production-bangalore"
    },
    {
        icon: Camera,
        title: "Photography & Videography",
        description: "Professional shoots for products, properties, jewellery and food that elevate your brand.",
        link: "/ai-video-production-bangalore"
    }
]

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-gp-bg2">
            <div className="container px-6 md:px-12 mx-auto max-w-[1400px]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="font-heading text-[0.66rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 flex items-center gap-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-primary">
                            AI & Creative Services
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-gp-black tracking-tight leading-[1.05]">
                            Build a stronger digital presence.
                        </h2>
                    </div>
                    <p className="text-lg text-gp-grey leading-relaxed max-w-[500px]">
                        GrowPlus combines digital strategy, websites, social media and AI-powered creative production for businesses across Bangalore, Mangalore and Puttur.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="p-10 md:p-12 relative overflow-hidden group rounded-2xl gp-glow-card">
                            <div className="absolute top-0 left-0 right-full h-[3px] bg-primary transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:right-0 z-10" />
                            <div className="w-14 h-14 rounded-full bg-gp-bg flex items-center justify-center mb-8 text-primary shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-2xl font-extrabold text-gp-black mb-4 tracking-[0.02em]">{service.title}</h3>
                            <p className="text-[0.95rem] text-gp-grey leading-relaxed mb-6">{service.description}</p>
                            <a href={service.link} className="inline-flex items-center gap-3 font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-gp-black mt-2 transition-all hover:text-primary group/link">
                                Learn More <span className="w-6 h-6 rounded-full bg-gp-bg flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-colors duration-300">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
