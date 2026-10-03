import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { mediaUrl } from "@/utils/media"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { pathname } = useLocation()

    // WHATSAPP NUMBER
    const WHATSAPP_URL = "https://wa.me/919686975553"

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Reviews", href: "/reviews" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/#work" },
        { name: "Process", href: "/#process" },
    ]

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-400">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className={`mx-auto w-full max-w-[1480px] px-4 py-3 md:px-8 md:py-4 transition-all duration-400 flex items-center justify-between ${isScrolled || isMobileMenuOpen
                        ? "bg-white/88 backdrop-blur-2xl border border-black/10 shadow-[0_10px_35px_rgba(13,13,13,.06)] md:mt-3 md:rounded-full md:py-3"
                        : "bg-transparent"
                        }`}
                >
                    {/* Logo */}
                    <Link to="/" className="z-50 flex items-center gap-2">
                        <img src={mediaUrl("/logo.jpg")} alt="Growplus Logo" className="h-9 w-auto object-contain mix-blend-multiply" />
                        <span className="text-xl font-bold font-heading text-gp-black tracking-wide">
                            GROW<span className="text-primary">+</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/55 p-1 backdrop-blur-xl md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-all ${pathname === link.href ? "bg-white text-primary shadow-sm" : "text-gp-grey hover:bg-white/70 hover:text-gp-black"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a 
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 rounded-full bg-gp-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-px hover:bg-primary"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="z-50 block p-2 text-gp-black md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-gp-bg flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <img src={mediaUrl("/logo.jpg")} alt="Grow+" className="h-10 w-auto rounded-full shadow-sm mb-4" />
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-3xl font-heading font-bold letter-spacing-wide transition-colors ${pathname === link.href ? "text-primary" : "text-gp-black hover:text-primary"}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl font-heading font-bold letter-spacing-wide text-gp-black hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
