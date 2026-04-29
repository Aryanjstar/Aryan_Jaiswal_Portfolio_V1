"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

const stagger = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
	},
};

export const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<div>
				<Spotlight
					className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
					fill="white"
				/>
				<Spotlight
					className="left-full top-10 h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			<div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black-100 bg-grid-white/[0.03]">
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			<motion.div
				className="relative z-10 my-20 flex justify-center"
				variants={stagger}
				initial="hidden"
				animate="visible"
			>
				<div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
					<motion.h2
						variants={fadeUp}
						className="max-w-96 text-center text-xs uppercase tracking-widest text-blue-100"
					>
						AI Engineer &bull; Published Researcher &bull; Full Stack Developer
					</motion.h2>

					<motion.div variants={fadeUp}>
						<TextGenerateEffect
							className="text-center text-[40px] md:text-5xl lg:text-6xl"
							words="Transforming Ideas into Innovative, Impactful Solutions"
						/>
					</motion.div>

					<motion.p
						variants={fadeUp}
						className="mb-4 text-center text-sm text-white md:text-lg md:tracking-wider lg:text-2xl"
					>
						Hi, I&apos;m {links.ownerName}, an AI Engineer building
						production systems that serve 150K+ users.
					</motion.p>

					<motion.div variants={fadeUp}>
						<Link href="/projects" className="md:mt-10">
							<MagicButton
								title="Explore My Projects"
								icon={<FaLocationArrow />}
								position="right"
								asChild
							/>
						</Link>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};
