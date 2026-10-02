import { motion } from "framer-motion"

const steps = [
    ["01","Discover","We understand your brand, audience, offer and what growth actually needs to look like."],
    ["02","Strategy","We turn the brief into a clear content, creative and digital direction."],
    ["03","Create","Our team produces the assets, campaigns, websites and AI-assisted creative."],
    ["04","Improve","We learn from performance and keep refining what gets attention and action."],
]

export default function Process() {
    return (
        <section id="process" className="py-24 md:py-32 bg-gp-bg2">
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
                    <div>
                        <span className="gp-eyebrow">The process</span>
                        <h2 className="mt-5 font-heading text-5xl md:text-7xl font-extrabold tracking-[-.045em] leading-[.95] text-gp-black">Simple on the<br /><span className="text-primary italic">surface.</span> Serious<br />underneath.</h2>
                    </div>
                    <p className="max-w-md text-gp-grey text-base md:text-lg leading-relaxed">Good creative starts with understanding the business. We keep the process focused, collaborative and built around useful output.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border2">
                    {steps.map(([num,title,description], i) => (
                        <motion.div key={num} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45,delay:i*.08}} className="min-h-[300px] p-7 md:p-9 border-r border-b border-border2 hover:bg-white transition-colors">
                            <span className="font-heading text-[.65rem] font-bold tracking-[.18em] text-primary">{num}</span>
                            <h3 className="mt-16 font-heading text-2xl md:text-3xl font-extrabold text-gp-black">{title}</h3>
                            <p className="mt-4 text-sm md:text-base text-gp-grey leading-relaxed">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
