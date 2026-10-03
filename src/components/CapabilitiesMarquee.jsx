import Marquee from "@/components/arc/Marquee"

const items = [
    "Strategy",
    "Brand systems",
    "Websites",
    "Social",
    "AI creative",
    "AI video",
    "Content production",
    "Conversion",
]

export default function CapabilitiesMarquee() {
    return (
        <section className="arc-capabilities">
            <div className="container mx-auto max-w-[1440px] px-6 md:px-12">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="gp-eyebrow">Built across the stack</span>
                        <h2 className="mt-4 max-w-[14ch] font-heading text-3xl font-extrabold tracking-[-.035em] md:text-5xl">
                            One creative system. Many ways to grow.
                        </h2>
                    </div>
                    <p className="max-w-lg text-sm leading-relaxed text-gp-grey md:text-base">
                        Strategy, creative, web and AI production working together instead of living in separate silos.
                    </p>
                </div>
                <Marquee items={items} label="GrowPlus capabilities" />
            </div>
        </section>
    )
}
