import { motion } from "framer-motion"

export default function SectionRule({ label = "GrowPlus" }) {
    return (
        <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
            <motion.div initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true, amount: .8 }} transition={{ duration: .9, ease: [0.16,1,0.3,1] }} className="origin-left border-t border-black/10 pt-3 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[.22em] text-black/35">{label}</span>
                <span className="text-[9px] font-bold uppercase tracking-[.22em] text-black/25">AI × Creative × Growth</span>
            </motion.div>
        </div>
    )
}
