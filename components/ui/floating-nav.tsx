"use client";

import {
	AnimatePresence,
	motion,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/data";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
	navItems: typeof navItems;
	className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
	const { scrollY } = useScroll();

	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useMotionValueEvent(scrollY, "change", (current) => {
		if (typeof current === "number") {
			let direction = current - lastScrollY;

			if (direction < 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}

			setLastScrollY(current);
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.nav
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					"fixed inset-x-0 top-4 z-[5000] mx-auto flex max-w-fit items-center justify-center rounded-3xl border border-white/[0.1] bg-black-100/80 px-3 py-2 sm:px-6 sm:py-3 backdrop-blur-lg saturate-150 shadow-[0px_20px_50px_rgba(8,_112,_184,_0.7)]",
					className
				)}
			>
				{navItems.map((navItem, idx) => (
					<Link
						key={`link=${idx}`}
						href={navItem.link}
						className={cn(
							"relative flex items-center space-x-1 rounded-full px-2 py-1.5 text-xs font-medium transition-colors duration-300 sm:px-3 sm:py-2 sm:text-sm",
							"text-neutral-50 hover:text-purple"
						)}
					>
						<span className="block">{navItem.name}</span>
					</Link>
				))}
			</motion.nav>
		</AnimatePresence>
	);
};
