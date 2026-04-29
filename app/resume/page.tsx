"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

import { FloatingNav } from "@/components/ui/floating-nav";
import { Footer } from "@/components/footer";
import { Resume } from "@/components/resume";
import { navItems } from "@/data";

export default function ResumePage() {
	return (
		<main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
			<div className="w-full max-w-7xl">
				<FloatingNav navItems={navItems} />

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2 }}
					className="pt-36"
				>
					<Link
						href="/"
						className="mb-8 inline-flex items-center gap-2 text-sm text-purple hover:text-white transition-colors"
					>
						<FaArrowLeft className="text-xs" />
						Back to Home
					</Link>
				</motion.div>

				<Resume />
				<Footer />
			</div>
		</main>
	);
}
