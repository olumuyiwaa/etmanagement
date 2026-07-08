"use client";

import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

/**
 * PLACEHOLDER NOTICE:
 * `src` below points to a real, working sample animation published in
 * LottieFiles' own integration guide — used here only so the layout has
 * something to render. Before launch, pick a real animation from
 * https://lottiefiles.com (free tier is fine), copy its "Lottie URL" from
 * the embed panel, and swap it in wherever <LottieAnimation> is used.
 */
export const PLACEHOLDER_LOTTIE_SRC =
  "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189571e2dccc/5u2xmKkpCI.lottie";

export default function LottieAnimation({
  src,
  className,
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
