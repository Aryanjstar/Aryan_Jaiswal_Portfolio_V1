"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/moving-borders";
import { FloatingNav } from "@/components/ui/floating-nav";
import { Footer } from "@/components/footer";
import { navItems, workExperience } from "@/data";

export default function ExperiencePage() {
	return (
		<main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
			<div className="w-full max-w-7xl">
				<FloatingNav navItems={navItems} />

				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2 }}
					className="pt-36 pb-20"
				>
					<Link
						href="/"
						className="mb-8 inline-flex items-center gap-2 text-sm text-purple hover:text-white transition-colors"
					>
						<FaArrowLeft className="text-xs" />
						Back to Home
					</Link>

					<h1 className="heading">
						My <span className="text-purple">Work Experience</span>
					</h1>

					<p className="mt-4 text-center text-white-200 max-w-2xl mx-auto">
						From AI/ML internships to full-stack development, here is my
						professional journey building production systems.
					</p>

					<div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
						{workExperience.map((experience) => (
							<Button
								key={experience.id}
								borderRadius="1.75rem"
								className="flex-1 border-neutral-200 text-white dark:border-slate-800"
								duration={Math.floor(Math.random() * 10000 + 10000)}
							>
								<div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
									<Image
										width={95}
										height={87}
										src={experience.thumbnail}
										alt={experience.title}
										className="w-16 md:w-20 lg:w-32"
									/>

									<div className="lg:ms-5">
										<h1 className="text-start text-xl font-bold md:text-2xl">
											{experience.title}
										</h1>
										<p className="mt-3 text-start font-semibold text-white-100">
											{experience.desc}
										</p>
									</div>
								</div>
							</Button>
						))}
					</div>
				</motion.section>

				<Footer />
			</div>
		</main>
	);
}
