import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Contact from "@/components/Contact"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Home() {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''))
            if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100)
        }
    }, [hash])

    return (
        <main>
            <Helmet>
                <title>GrowPlus | AI Creative & Digital Marketing Agency</title>
                <meta name="description" content="GrowPlus is an AI creative and digital marketing agency serving businesses in Bangalore, Mangalore and Puttur with websites, social media, AI video and creative services." />
                <link rel="canonical" href="https://growplus.site/" />
                <meta property="og:title" content="GrowPlus | AI Creative & Digital Marketing Agency" />
                <meta property="og:description" content="AI creative, digital marketing, websites, social media and AI video production for businesses in Bangalore, Mangalore and Puttur." />
                <meta property="og:url" content="https://growplus.site/" />
            </Helmet>
            <Hero />
            <Projects />
            <Services />
            <Process />
            <Contact />
        </main>
    )
}
