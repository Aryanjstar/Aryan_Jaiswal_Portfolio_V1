"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";

interface ScrollRevealProps extends PropsWithChildren {
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({
	children,
	className = "",
	delay = 0,
	direction = "up",
}: ScrollRevealProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	const directionOffset = {
		up: { y: 40 },
		down: { y: -40 },
		left: { x: 40 },
		right: { x: -40 },
	};

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0, ...directionOffset[direction] }}
			animate={
				isInView
					? { opacity: 1, x: 0, y: 0 }
					: { opacity: 0, ...directionOffset[direction] }
			}
			transition={{
				duration: 0.6,
				delay,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
		>
			{children}
		</motion.div>
	);
};
