import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[92vh] bg-gp-bg overflow-hidden">
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12 pt-32 md:pt-40 pb-16">
                <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-end min-h-[680px]">
                    <div className="relative z-10 pb-4">
                        <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="gp-eyebrow mb-7">
                            AI Creative · Digital Growth · Karnataka
                        </motion.div>
                        <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}} className="font-heading text-[clamp(3.7rem,8vw,7.8rem)] font-extrabold leading-[.86] tracking-[-.065em] text-gp-black">
                            We make<br />
                            <span className="text-primary italic">brands</span><br />
                            impossible<br className="hidden md:block" /> to ignore.
                        </motion.h1>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7,delay:.35}} className="mt-9 flex flex-col sm:flex-row gap-5 sm:items-center">
                            <p className="text-base md:text-lg text-gp-grey leading-relaxed max-w-[470px]">
                                GrowPlus builds the creative, content and digital systems modern businesses need to look better, reach more people and convert attention into growth.
                            </p>
                            <a href="#work" className="hidden sm:flex w-14 h-14 rounded-full bg-gp-black text-white items-center justify-center hover:bg-primary transition-colors shrink-0">
                                <ArrowDown className="w-5 h-5" />
                            </a>
                        </motion.div>
                        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.5}} className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[.68rem] font-heading font-bold uppercase tracking-[.16em] text-gp-grey">
                            <span>Bangalore</span><span>Mangalore</span><span>Puttur</span>
                        </motion.div>
                    </div>

                    <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:1,delay:.2}} className="relative w-full aspect-video overflow-hidden rounded-[2rem] bg-gp-black">
                        <video autoPlay muted loop playsInline className="w-full h-full object-contain opacity-90">
                            <source src="/growplus/hero.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute left-6 bottom-6 right-6 flex justify-between items-end text-white">
                            <div>
                                <p className="text-[.62rem] uppercase tracking-[.22em] font-bold text-white/60 mb-2">GrowPlus</p>
                                <p className="font-heading text-2xl font-extrabold">Creative built for growth.</p>
                            </div>
                            <a href="https://wa.me/919686965553" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white text-gp-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
