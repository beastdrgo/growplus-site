import { cn } from "@/lib/utils"

export function GlassCard({ className, ...props }) {
    return (
        <div
            data-slot="glass-card"
            className={cn(
                "flex flex-col gap-6 rounded-3xl border border-white/45 bg-white/55 py-6 text-gp-black shadow-[0_24px_70px_rgba(13,13,13,.08)] backdrop-blur-xl",
                className
            )}
            {...props}
        />
    )
}

export function GlassCardHeader({ className, ...props }) {
    return <div data-slot="glass-card-header" className={cn("px-6 md:px-8", className)} {...props} />
}

export function GlassCardTitle({ className, ...props }) {
    return <div data-slot="glass-card-title" className={cn("font-heading text-2xl font-extrabold tracking-tight", className)} {...props} />
}

export function GlassCardDescription({ className, ...props }) {
    return <div data-slot="glass-card-description" className={cn("mt-2 text-sm leading-relaxed text-gp-grey", className)} {...props} />
}

export function GlassCardContent({ className, ...props }) {
    return <div data-slot="glass-card-content" className={cn("px-6 md:px-8", className)} {...props} />
}

export function GlassCardFooter({ className, ...props }) {
    return <div data-slot="glass-card-footer" className={cn("flex items-center px-6 md:px-8", className)} {...props} />
}
