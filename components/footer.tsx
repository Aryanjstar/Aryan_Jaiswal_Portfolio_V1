"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
	const handleEmailClick = () => {
		const email = links.ownerEmail;
		const subject = encodeURIComponent("Let's Connect!");
		const body = encodeURIComponent("Hi Aryan,\n\nI came across your portfolio and would love to connect.\n\n");
		const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
		window.open(gmailUrl, '_blank');
	};

	return (
		<footer id="contact" className="relative w-full pb-10">
			<div className="absolute inset-0 w-full h-full">
				<Image
					src="/footer-grid.svg"
					alt="grid"
					className="h-full w-full opacity-50 object-cover"
					width={1260}
					height={863}
				/>
			</div>

			<div className="relative z-10 flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Ready to start <span className="text-purple">my</span> journey in tech
					with your team?
				</h1>

				<p className="my-5 text-center text-white-200 md:mt-10">
					I&apos;m excited to contribute, learn, and grow with passionate teams.
					Let&apos;s connect and explore opportunities together!
				</p>

				<MagicButton
					title="Let's get in touch"
					icon={<FaLocationArrow />}
					position="right"
					handleClick={handleEmailClick}
					otherClasses="md:mt-10"
				/>
			</div>

			<div className="relative z-10 mt-16 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
				<p className="text-center text-sm font-light text-white md:text-left md:text-base md:font-normal">
					Copyright &copy; {new Date().getFullYear()}{" "}
					<Link
						href={links.ownerInstagram}
						target="_blank"
						rel="noreferrer noopener"
						className="text-purple"
					>
						Aryan
					</Link>{" "}
					|{" "}
					<Link href={links.sourceCode} target="_blank" rel="noreferrer noopener" className="underline">
						Source Code
					</Link>
				</p>

				<div className="flex items-center gap-4 md:gap-3">
					{socialMedia.map((profile) => (
						<Link
							key={profile.name}
							href={profile.link}
							target="_blank"
							rel="noreferrer noopener"
							className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
							title={profile.name}
						>
							<Image
								src={profile.img}
								alt={`profile-${profile.name}`}
								width={20}
								height={20}
								className={`${
									profile.img.endsWith(".png")
										? "object-contain brightness-0 invert"
										: ""
								}`}
							/>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};
