"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

const variants = {
	hidden: { opacity: 0, y: 20 },
	enter: { opacity: 1, y: 0 },
};

export const PageTransition = ({ children }: PropsWithChildren) => {
	return (
		<motion.div
			variants={variants}
			initial="hidden"
			animate="enter"
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
};
