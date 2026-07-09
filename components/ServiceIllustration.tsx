"use client";

import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
    () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
    { ssr: false }
);

interface ServiceIllustrationProps {
    slug: string;
    active?: boolean;
    className?: string;
}

// Local Lottie files
const LOTTIE_MAP: Record<string, string> = {
    "consultancy-research-strategy": "/lotties/Animation2.lottie",
    "corporate-publishing-communication": "/lotties/Animation1.lottie",
    "digital-branding-technology": "/lotties/Animation4.lottie",
    "training-capacity-development": "/lotties/Animation3.lottie",
};

export default function ServiceIllustration({
                                                slug,
                                                active = true,
                                                className = "",
                                            }: ServiceIllustrationProps) {
    const src = LOTTIE_MAP[slug];

    if (!src) {
        return (
            <div className="aspect-[5/4] rounded-3xl border border-line bg-surface flex items-center justify-center text-sm text-muted-foreground">
                No animation found
            </div>
        );
    }

    return (
        <div className={`aspect-[5/4] w-full rounded-3xl overflow-hidden ${className}`}>
            <DotLottieReact
                src={src}
                loop={true}
                autoplay={true}
                className="w-full h-full scale-110"
                speed={0.95}
            />
        </div>
    );
}