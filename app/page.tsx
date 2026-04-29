import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { CareerHighlights } from "@/components/career-highlights";
import { Approach } from "@/components/approach";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { MagicButton } from "@/components/ui/magic-button";
import { navItems } from "@/data";

export default function Home() {
	return (
		<main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
			<div className="w-full max-w-7xl">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<Experience />

				<section className="py-16">
					<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
						<Link href="/projects">
							<MagicButton
								title="View All Projects"
								icon={<FaLocationArrow />}
								position="right"
								asChild
							/>
						</Link>
						<Link href="/resume">
							<MagicButton
								title="View Full Resume"
								icon={<FaLocationArrow />}
								position="right"
								asChild
							/>
						</Link>
					</div>
				</section>

				<CareerHighlights />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}
