"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/data";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: typeof testimonials;
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow" | "slower";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollerRef = useRef<HTMLUListElement>(null);
	const [start, setStart] = useState(false);

	const addAnimation = () => {
		if (
			containerRef.current &&
			scrollerRef.current &&
			scrollerRef.current.children
		) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			if (scrollerContent && scrollerContent.length > 0) {
				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					if (scrollerRef.current) {
						scrollerRef.current.appendChild(duplicatedItem);
					}
				});

				getDirection();
				getSpeed();
				setStart(true);
			}
		}
	};

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else if (speed === "slow") {
				containerRef.current.style.setProperty("--animation-duration", "120s");
			} else if (speed === "slower") {
				containerRef.current.style.setProperty("--animation-duration", "180s");
			}
		}
	};

	useEffect(() => {
		if (items && items.length > 0) {
			addAnimation();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items]);

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items &&
					items.length > 0 &&
					items.map((item, idx) => (
						<li
							className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border border-b-0 p-5 md:w-[60vw] md:p-16 border-slate-800 bg-[rgb(4,7,29)]"
							key={idx}
						>
							<blockquote>
								<div
									aria-hidden="true"
									className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
								/>
								<span className="relative z-20 text-sm font-normal leading-[1.6] text-white md:text-lg">
									{item.quote}
								</span>

								<div className="relative z-20 mt-6 flex flex-row items-center">
									<div className="me-3">
										<Image
											height={50}
											width={50}
											src={item.image || "/profile.svg"}
											alt={item.name}
										/>
									</div>

									<div className="flex flex-col gap-1">
										<span className="text-xl font-bold leading-[1.6] text-white">
											{item.name}
										</span>

										<span className="text-sm font-normal leading-[1.6] text-white-200">
											{item.title}
										</span>

										<div className="flex flex-wrap gap-2 mt-2">
											{(item as any).link && (
												<a
													href={(item as any).link}
													target="_blank"
													rel="noreferrer noopener"
													className="text-xs dark:text-purple text-blue-600 hover:text-blue-800 dark:hover:text-white-100 transition-colors underline"
												>
													View Certificate
												</a>
											)}
											{(item as any).featuredLink && (
												<a
													href={(item as any).featuredLink}
													target="_blank"
													rel="noreferrer noopener"
													className="text-xs dark:text-purple text-blue-600 hover:text-blue-800 dark:hover:text-white-100 transition-colors underline"
												>
													Featured Video
												</a>
											)}
										</div>
									</div>
								</div>
							</blockquote>
						</li>
					))}
			</ul>
		</div>
	);
};
