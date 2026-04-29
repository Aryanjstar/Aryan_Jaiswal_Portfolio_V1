"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { gridItems } from "@/data";

export const Grid = () => {
	return (
		<section id="about">
			<ScrollReveal>
				<BentoGrid>
					{gridItems.map((gridItem) => (
						<BentoGridItem key={gridItem.id} {...gridItem} />
					))}
				</BentoGrid>
			</ScrollReveal>
		</section>
	);
};
