import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"

const cities = {
    bangalore: {
        name: "Bangalore",
        slug: "bangalore",
        intro: "GrowPlus helps businesses in Bangalore build stronger digital visibility through strategy, content, websites, social media, and AI-assisted creative production.",
        local: "Bangalore",
    },
    mangalore: {
        name: "Mangalore",
        slug: "mangalore",
        intro: "GrowPlus works with businesses in Mangalore on digital marketing, websites, social media, and premium creative content designed around their commercial goals.",
        local: "Mangalore",
    },
    puttur: {
        name: "Puttur",
        slug: "puttur",
        intro: "GrowPlus helps businesses in Puttur improve their online presence with practical digital marketing, website, social media, and AI creative services.",
        local: "Puttur",
    },
}

const services = {
    "digital-marketing-agency": {
        name: "Digital Marketing",
        keyword: "Digital Marketing Agency",
        description: "Digital marketing strategy, content, campaigns, and conversion-focused execution for businesses in {city}.",
        points: ["Digital strategy and campaign planning", "Content-led customer acquisition", "Social and search visibility", "Conversion-focused landing pages and offers"],
    },
    "website-development-company": {
        name: "Website Development",
        keyword: "Website Development Company",
        description: "Modern business websites for {city} brands, built around clear positioning, strong UX, speed, and conversion.",
        points: ["Business and service websites", "Responsive UI and mobile-first layouts", "Conversion-focused page structure", "Technical setup and ongoing improvements"],
    },
    "social-media-marketing": {
        name: "Social Media Marketing",
        keyword: "Social Media Marketing",
        description: "Social media strategy and content systems for businesses in {city} that want a consistent, professional online presence.",
        points: ["Content strategy and calendars", "Reels, short-form video, and creatives", "Profile and content optimisation", "AI-assisted production workflows"],
    },
    "ai-creative-agency": {
        name: "AI Creative",
        keyword: "AI Creative Agency",
        description: "AI-assisted visual concepts, product creatives, campaign assets, and branded content for {city} businesses.",
        points: ["AI product and campaign concepts", "Creative ad variations", "AI-assisted image and video production", "Brand-consistent creative systems"],
    },
    "ai-video-production": {
        name: "AI Video Production",
        keyword: "AI Video Production",
        description: "AI-assisted video production for {city} brands, combining creative direction, storytelling, editing, and generative workflows.",
        points: ["Short-form commercial videos", "AI-generated visual sequences", "Product and brand storytelling", "Social-first video creatives"],
    },
}

const citySlugs = Object.keys(cities)
const serviceSlugs = Object.keys(services)

export const localServiceRoutes = citySlugs.flatMap((city) =>
    serviceSlugs.map((service) => `/${service}-${city}`)
)

function buildCopy(service, city) {
    return {
        title: `${service.keyword} in ${city.name} | GrowPlus`,
        description: service.description.replaceAll("{city}", city.name),
    }
}

export default function LocalService({ citySlug, serviceSlug }) {
    const city = cities[citySlug]
    const service = services[serviceSlug]

    if (!city || !service) return null

    const copy = buildCopy(service, city)
    const canonical = `https://growplus.site/${serviceSlug}-${citySlug}`
    const otherServices = serviceSlugs.filter((slug) => slug !== serviceSlug).slice(0, 4)

    const faq = [
        {
            question: `What does a ${service.keyword.toLowerCase()} in ${city.name} do?`,
            answer: `A ${service.keyword.toLowerCase()} helps businesses plan and execute ${service.name.toLowerCase()} work around their business goals. GrowPlus combines strategy, creative execution, and practical digital systems for businesses serving ${city.name}.`,
        },
        {
            question: `Does GrowPlus serve businesses in ${city.name}?`,
            answer: `Yes. GrowPlus offers ${service.name.toLowerCase()} services to businesses in ${city.name} and can work remotely with teams across the area.`,
        },
        {
            question: `Can this service be combined with other digital services?`,
            answer: `Yes. ${service.name} can be combined with website development, social media marketing, digital marketing, AI creative, and AI video production depending on the business requirements.`,
        },
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service.keyword} in ${city.name}`,
        description: copy.description,
        provider: {
            "@type": "Organization",
            name: "GrowPlus",
            url: "https://growplus.site/",
            telephone: "+919686975553",
        },
        areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: { "@type": "State", name: "Karnataka" },
        },
        serviceType: service.name,
        url: canonical,
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    }

    return (
        <main className="pt-28">
            <Helmet>
                <title>{copy.title}</title>
                <meta name="description" content={copy.description} />
                <link rel="canonical" href={canonical} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={copy.title} />
                <meta property="og:description" content={copy.description} />
                <meta property="og:url" content={canonical} />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <section className="px-6 md:px-12 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-2 text-primary font-heading text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        <MapPin className="w-4 h-4" />
                        Serving {city.name}, Karnataka
                    </div>
                    <h1 className="max-w-5xl text-5xl md:text-7xl font-heading font-extrabold text-gp-black tracking-tight leading-[1.02]">
                        {service.keyword} in {city.name}
                    </h1>
                    <p className="max-w-2xl mt-8 text-lg md:text-xl text-gp-grey leading-relaxed">
                        {copy.description}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="https://wa.me/919686975553" target="_blank" rel="noopener noreferrer" className="bg-gp-black text-white px-7 py-4 font-heading text-xs font-bold tracking-[0.16em] uppercase hover:bg-primary transition-colors">
                            Discuss Your Project
                        </a>
                        <Link to="/#work" className="px-7 py-4 border border-border2 font-heading text-xs font-bold tracking-[0.16em] uppercase hover:border-gp-black transition-colors">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-gp-bg2 px-6 md:px-12 py-20 md:py-24">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12">
                    <div>
                        <span className="gp-eyebrow">What we do</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-gp-black">
                            {service.name} built around your business.
                        </h2>
                    </div>
                    <div className="space-y-5">
                        <p className="text-lg text-gp-grey leading-relaxed">{city.intro}</p>
                        {service.points.map((point) => (
                            <div key={point} className="flex gap-3 items-start">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span className="text-gp-black">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-12 py-20 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <span className="gp-eyebrow">More services</span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-gp-black">
                        Build the complete digital system.
                    </h2>
                    <div className="grid md:grid-cols-2 gap-5 mt-10">
                        {otherServices.map((slug) => {
                            const item = services[slug]
                            const href = `/${slug}-${citySlug}`
                            return (
                                <Link key={slug} to={href} className="p-7 border border-border2 group hover:border-primary transition-colors">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <h3 className="font-heading text-xl font-bold text-gp-black">{item.name}</h3>
                                            <p className="mt-2 text-sm text-gp-grey">{item.description.replaceAll("{city}", city.name)}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-gp-black text-white px-6 md:px-12 py-20 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-primary font-heading text-xs font-bold tracking-[0.2em] uppercase">GrowPlus</span>
                    <h2 className="mt-5 text-4xl md:text-6xl font-heading font-extrabold tracking-tight">
                        Ready to build your next growth system?
                    </h2>
                    <p className="mt-6 text-white/70 text-lg">
                        Tell us what you are trying to achieve and we can map the right combination of strategy, creative, website, and AI services.
                    </p>
                    <a href="https://wa.me/919686975553" target="_blank" rel="noopener noreferrer" className="inline-flex mt-9 bg-primary text-white px-8 py-4 font-heading text-xs font-bold tracking-[0.16em] uppercase">
                        Start a Conversation
                    </a>
                </div>
            </section>

            <section className="px-6 md:px-12 py-20">
                <div className="max-w-4xl mx-auto">
                    <span className="gp-eyebrow">FAQ</span>
                    <div className="mt-8 space-y-8">
                        {faq.map((item) => (
                            <div key={item.question} className="border-b border-border2 pb-7">
                                <h2 className="font-heading text-xl font-bold text-gp-black">{item.question}</h2>
                                <p className="mt-3 text-gp-grey leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
