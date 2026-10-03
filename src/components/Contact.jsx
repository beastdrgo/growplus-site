import { useState } from "react"
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react"
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from "@/components/ui/GlassCard"

export default function Contact() {
    const [selectedSector, setSelectedSector] = useState("")
    const WHATSAPP_URL = "https://wa.me/919686975553"

    const doForm = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const name = formData.get("name")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const industry = formData.get("industry")
        const message = formData.get("message")

        const industryMap = { fb: "Food & Beverage", re: "Real Estate", je: "Jewellery", ot: "Other" }
        const industryLabel = industry ? industryMap[industry] : "Not specified"
        const waText = `*New Lead from Growplus Website!*\n\n*Name:* ${name}\n*Phone:* ${phone || "Not provided"}\n*Email:* ${email}\n*Industry:* ${industryLabel}\n\n*Message:*\n${message || "No specific message."}`
        const waLink = `https://wa.me/919686975553?text=${encodeURIComponent(waText)}`

        window.open(waLink, "_blank")

        const btn = form.querySelector('button[type="submit"]')
        const originalText = btn.innerHTML
        btn.textContent = "Redirecting…"
        setTimeout(() => {
            btn.innerHTML = "✓ Sent to WhatsApp!"
            const success = document.getElementById("fsuc")
            success.classList.remove("hidden")
            setTimeout(() => {
                btn.innerHTML = originalText
                success.classList.add("hidden")
                form.reset()
                setSelectedSector("")
            }, 4000)
        }, 1000)
    }

    const inputClass = "w-full rounded-xl border border-black/10 bg-white/65 px-4 py-3.5 text-sm text-gp-black outline-none placeholder:text-gp-grey/60 backdrop-blur-sm transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
    const labelClass = "mb-2 block text-[.62rem] font-heading font-bold uppercase tracking-[.2em] text-gp-grey"

    return (
        <section id="contact" className="relative overflow-hidden bg-gp-bg2 py-24 md:py-32 arc-texture arc-grain">
            <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

            <SectionRule label="Start a conversation" />
            <div className="relative z-10 container mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
                <div className="flex flex-col justify-center py-6 lg:py-12">
                    <span className="gp-eyebrow">Get in touch</span>
                    <h2 className="font-heading text-5xl font-extrabold leading-[.94] tracking-[-.05em] text-gp-black md:text-7xl">
                        Ready to elevate<br />your <span className="text-primary italic">brand?</span>
                    </h2>
                    <p className="mt-7 max-w-md text-base leading-relaxed text-gp-grey md:text-lg">
                        Tell us what you are building. We’ll turn the brief into a clear creative and digital direction.
                    </p>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gp-black text-white transition-colors group-hover:bg-primary"><MessageCircle className="h-4 w-4" /></span>
                            <span><span className="block text-[.6rem] font-bold uppercase tracking-[.2em] text-gp-grey">WhatsApp</span><span className="mt-1 block font-heading font-bold text-gp-black">+91 96869 75553</span></span>
                        </a>
                        <a href="mailto:connect@growplus.site" className="group flex items-center gap-4">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gp-black text-white transition-colors group-hover:bg-primary"><Mail className="h-4 w-4" /></span>
                            <span><span className="block text-[.6rem] font-bold uppercase tracking-[.2em] text-gp-grey">Email</span><span className="mt-1 block font-heading font-bold text-gp-black">connect@growplus.site</span></span>
                        </a>
                    </div>
                    <p className="mt-10 text-[.62rem] font-heading font-bold uppercase tracking-[.2em] text-gp-grey">Bangalore · Mangalore · Puttur</p>
                </div>

                <GlassCard className="relative rounded-[2rem] border-black/10 bg-white/65 shadow-[0_24px_70px_rgba(13,13,13,.08)] backdrop-blur-2xl">
                    <GlassCardHeader>
                        <GlassCardTitle>Send a Message</GlassCardTitle>
                        <GlassCardDescription>Share the basics and we’ll get back to you with the next step.</GlassCardDescription>
                    </GlassCardHeader>
                    <GlassCardContent>
                        <form className="flex flex-col gap-5" onSubmit={doForm}>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div><label className={labelClass}>Your Name</label><input type="text" name="name" className={inputClass + " focus:-translate-y-px"} placeholder="Enter your name" required /></div>
                                <div><label className={labelClass}>Phone</label><input type="tel" name="phone" className={inputClass} placeholder="+91 00000 00000" /></div>
                            </div>
                            <div><label className={labelClass}>Email</label><input type="email" name="email" className={inputClass} placeholder="your@email.com" required /></div>
                            <div>
                                <label className={labelClass}>Industry</label>
                                <select name="industry" value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)} className={inputClass}>
                                    <option value="" disabled>Select your industry</option>
                                    <option value="fb">Food & Beverage</option>
                                    <option value="re">Real Estate</option>
                                    <option value="je">Jewellery</option>
                                    <option value="ot">Other</option>
                                </select>
                            </div>
                            <div><label className={labelClass}>Message</label><textarea name="message" className={inputClass + " min-h-[120px] resize-y"} placeholder="Tell us about your project..." /></div>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs leading-relaxed text-gp-grey">Your details go directly to our WhatsApp for a quick response.</p>
                                <Magnetic strength={0.08}><button type="submit" className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gp-black px-7 py-3.5 font-heading text-[.68rem] font-bold uppercase tracking-[.16em] text-white transition-all hover:bg-primary">
                                    Send Message <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button></Magnetic>
                            </div>
                            <div id="fsuc" className="hidden rounded-xl border border-primary/30 bg-primary/10 p-3.5 text-center text-sm text-gp-black">✓ Message sent! We'll be in touch within 24 hours.</div>
                        </form>
                    </GlassCardContent>
                </GlassCard>
            </div>
        </section>
    )
}
