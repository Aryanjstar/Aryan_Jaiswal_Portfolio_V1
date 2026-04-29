import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";
import {
	SiCplusplus,
	SiJavascript,
	SiTypescript,
	SiPython,
	SiHtml5,
	SiCss3,
	SiMysql,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiFlask,
	SiTailwindcss,
	SiAmazon as SiAmazonaws,
	SiGooglecloud,
	SiMongodb,
	SiTensorflow,
	SiPytorch,
	SiScikitlearn,
	SiPandas,
	SiNumpy,
	SiGit,
	SiGithub,
	SiVscodium as SiVisualstudiocode,
	SiDocker,
	SiLinux,
	SiPostman,
	SiFigma,
	SiOpenai,
	SiThreedotjs,
	SiNextdotjs,
	SiNetlify,
	SiRedis,
	SiKubernetes,
	SiJest,
	SiCypress,
	SiDjango,
	SiFastapi,
	SiPostgresql,
	SiPrometheus,
	SiGrafana,
	SiAnsible,
	SiNginx,
} from "react-icons/si";
import {
	FaJava,
	FaMicrosoft,
	FaCog,
	FaLaptopCode,
	FaBrain,
	FaProjectDiagram,
	FaMobile,
	FaServer,
	FaCodeBranch,
	FaRobot,
	FaLink,
} from "react-icons/fa";

import { socialMedia } from "@/data";
import { MagicButton } from "@/components/ui/magic-button";

export const Resume = () => {
	const education = [
		{
			institution: "Indian Institute of Information Technology, Dharwad",
			degree: "Bachelor of Technology in Computer Science and Engineering",
			duration: "2022 - 2026",
			location: "Dharwad, Karnataka",
			cgpa: "CGPA: 7.76/10",
		},
	];

	const experience = [
		{
			company: "Exotel",
			position: "Tech Intern | Gen AI",
			duration: "Oct 2025 – Present",
			location: "Remote",
			responsibilities: [
				"Built Argus, a Gemini-powered Google Chat bot for voicebot debugging with tool-calling NL interface, audio latency analysis, and Splunk alert automation that reduced alert noise by 40%; cut debugging from hours to minutes.",
				"Hardened LLM execution pipeline using asyncio.wait_for (7s timeout), parallel tool-call guards, and LangGraph greeting-state injection; eliminated silent-call incidents and shipped BlueDart voicebot live with 150,000 monthly calls.",
				"Architected nginx WebSocket load balancing achieving 8× capacity (1,024 max connections); built Prometheus/Grafana monitoring with 30s real-time alerts, Ansible roles cutting provisioning from hours to minutes, and LLM timeout metrics.",
			],
		},
		{
			company: "Joveo",
			position: "AI/ML Intern | Supply Automation",
			duration: "Oct 2025",
			location: "Remote",
			responsibilities: [
				"Engineered a scalable RAG-based automation pipeline using n8n, Gemini embeddings, and PostgreSQL (pgvector); parsed email threads, extracted entities, and indexed 384-d vectors, reducing manual processing time by 60%.",
				"Integrated LLM summarization with WhatsApp and Telegram alert dispatchers, delivering real-time supply notifications and reports that improved response turnaround time by 50%.",
				"Orchestrated end-to-end productionization with automated testing, vector index optimization, and cron-triggered batch ingestion for continuous data freshness across partner supply feeds.",
			],
		},
		{
			company: "InfoKalash",
			position: "UI/UX Developer Intern",
			duration: "Jan 2025",
			location: "Remote",
			responsibilities: [
				"Led usability redesign reducing navigation confusion by 40% through revamped Figma workflows, improved information architecture, and design-system components with cross-functional developer handoffs.",
				"Conducted user research with 15+ participants, synthesized qualitative feedback into A/B-testable prototypes that increased engagement by 30% and guided product roadmap prioritization.",
				"Delivered interactive prototypes and coordinated design documentation enabling the engineering team to ship 3 feature iterations in half the original timeline.",
			],
		},
		{
			company: "Infosys Springboard",
			position: "AI/ML Intern | Plant Disease Classification",
			duration: "Mar 2024 – June 2024",
			location: "Remote",
			responsibilities: [
				"Designed and trained a CNN-based plant-disease classifier on 60,000+ augmented images with class-weighting, achieving 90% accuracy and 92% precision; served predictions via Flask REST APIs with sub-200ms inference latency.",
				"Optimized backend performance cutting API response time by 50% and server load by 30% through JWT auth, async queues, Redis caching, batched queries, and Docker CI/CD pipelines.",
				"Presented the project at the inaugural Infosys Springboard Summit in Bangalore to industry leaders including Nandan Nilekani; received special invite and felicitation for outstanding performance.",
			],
		},
	];

	const projects = [
		{
			title: "Cognitive-OS",
			technologies: [
				{ name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
				{ name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
				{ name: "Python", icon: <SiPython className="w-4 h-4" /> },
				{ name: "Azure", icon: <FaMicrosoft className="w-4 h-4" /> },
				{ name: "LangChain", icon: <FaLink className="w-4 h-4" /> },
			],
			links: {
				live: "https://cognitive-os-app.wonderfulfield-ff10e83d.centralindia.azurecontainerapps.io/",
				github: "https://github.com/Aryanjstar/Cognitive-OS",
			},
			description: [
				"Constructed a developer cognitive operating system modeling mental workload using 7 research-grade formulas (0.84 correlation to stress), tracking context switches, focus time, and cognitive load across GitHub activity for 51 developers.",
				"Deployed on Azure Container Apps with multi-agent intelligence (Focus Agent, Planning Agent, Interrupt Guard); features AI-powered task sequencing, anomaly detection with Z-score severity levels, and cognitive analytics heatmaps.",
				"Piloted with 51 developers showing 3–5 hours/week cognitive recovery savings; integrated GPT-4.1 context briefings, adaptive scoring with exponential decay, and personalized outreach emails with time-savings projections.",
			],
		},
		{
			title: "AURA – Agentic Finance AI",
			technologies: [
				{ name: "Azure OpenAI", icon: <SiOpenai className="w-4 h-4" /> },
				{ name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
				{ name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
				{ name: "LangChain", icon: <FaLink className="w-4 h-4" /> },
				{ name: "React.js", icon: <SiReact className="w-4 h-4" /> },
			],
			links: {
				live: "https://aura-finance-ai.azurewebsites.net",
				github: "https://github.com/Aryanjstar/AURA---THE-FINANCE-AI",
				demo: "https://www.youtube.com/watch?v=3q4uTliRNr8",
			},
			description: [
				"Developed a multi-agent AI platform with 5 specialized agents (Budget Planner, Market Analyst, Tax Advisor, Savings Optimizer, Debt Strategist) using GPT-4.1 and RAG, orchestrated via A2A shared-context protocol with parallel execution.",
				"Integrated Fi.Money's live financial API via Model Context Protocol (MCP) with 6 tools for real-time account data, transactions, and investments; achieved 3–8s latency with Socket.IO streaming and LangSmith observability tracing.",
				"Shipped on Azure App Service with MongoDB Atlas persistence, dynamic agent scaling (2 agents for simple queries, 5 parallel for complex planning), and session memory ensuring 99.9% uptime across concurrent users.",
			],
		},
		{
			title: "DevTinder",
			technologies: [
				{ name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
				{ name: "React.js", icon: <SiReact className="w-4 h-4" /> },
				{ name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
				{ name: "Express.js", icon: <SiExpress className="w-4 h-4" /> },
				{ name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
			],
			links: {
				live: "https://black-cliff-0fbc18c0f.3.azurestaticapps.net/",
				github: "https://github.com/Aryanjstar/DevTinder",
				demo: "https://www.youtube.com/watch?v=t0ggxZnVgTQ",
			},
			description: [
				"Crafted a MERN-based developer matching platform with swipe-based discovery, vectorized skill embeddings with ANN search, and real-time chat using Socket.IO enabling seamless hackathon team formation and collaboration.",
				"Secured the platform with JWT + Google OAuth authentication, integrated Razorpay payment webhooks for premium features, and containerized deployment on Azure via Docker CI/CD pipelines with zero-downtime releases.",
				"Delivered a fully responsive mobile-first UI with Tailwind CSS, connection management dashboard, and profile recommendation engine — attracting 200+ beta signups within the first week of launch.",
			],
		},
		{
			title: "AI Career Navigator",
			technologies: [
				{ name: "Azure OpenAI", icon: <SiOpenai className="w-4 h-4" /> },
				{ name: "React.js", icon: <SiReact className="w-4 h-4" /> },
				{ name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
				{ name: "Flask", icon: <SiFlask className="w-4 h-4" /> },
				{ name: "Three.js", icon: <SiThreedotjs className="w-4 h-4" /> },
			],
			links: {
				live: "https://ai-career-navigator-backend.azurewebsites.net",
				github: "https://github.com/Aryanjstar/AI-Career-Navigator",
				demo: "https://www.youtube.com/watch?v=t_e-CtLxn_Q",
			},
			description: [
				"Spearheaded development of an AI career assistant using Azure OpenAI GPT-4.1 with RAG (chunking, embeddings, vector store) and dynamic interview question generators tailored to specific job descriptions and skill gaps.",
				"Scaled microservices on Azure App Service with queue workers and Azure AI Search, handling 500+ concurrent requests via batching and sharding while maintaining 99% uptime and sub-second response for match scoring.",
				"Validated by 100+ users with precision match scoring (0–100%), personalized learning paths, salary insights, and exportable PDF reports — reducing average interview preparation time by 60%.",
			],
		},
	];

	const technicalSkills = {
		"CS Fundamentals & Languages": [
			{
				name: "Data Structures",
				icon: <FaProjectDiagram className="w-5 h-5" />,
			},
			{ name: "Algorithms", icon: <FaBrain className="w-5 h-5" /> },
			{ name: "OOP", icon: <FaLaptopCode className="w-5 h-5" /> },
			{ name: "Operating Systems", icon: <FaCog className="w-5 h-5" /> },
			{ name: "System Design", icon: <FaServer className="w-5 h-5" /> },
			{ name: "Java", icon: <FaJava className="w-5 h-5" /> },
			{ name: "Python", icon: <SiPython className="w-5 h-5" /> },
			{ name: "C++", icon: <SiCplusplus className="w-5 h-5" /> },
			{ name: "SQL", icon: <SiMysql className="w-5 h-5" /> },
		],
		Frontend: [
			{ name: "React", icon: <SiReact className="w-5 h-5" /> },
			{ name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
			{ name: "HTML", icon: <SiHtml5 className="w-5 h-5" /> },
			{ name: "CSS", icon: <SiCss3 className="w-5 h-5" /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
			{ name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
			{ name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
			{ name: "Responsive Design", icon: <FaMobile className="w-5 h-5" /> },
		],
		"Backend & APIs": [
			{ name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
			{ name: "Express", icon: <SiExpress className="w-5 h-5" /> },
			{ name: "Django", icon: <SiDjango className="w-5 h-5" /> },
			{ name: "FastAPI", icon: <SiFastapi className="w-5 h-5" /> },
			{ name: "Flask", icon: <SiFlask className="w-5 h-5" /> },
			{ name: "RESTful APIs", icon: <FaServer className="w-5 h-5" /> },
			{ name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
			{ name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
			{ name: "Redis", icon: <SiRedis className="w-5 h-5" /> },
		],
		"Cloud & DevOps": [
			{ name: "Azure", icon: <FaMicrosoft className="w-5 h-5" /> },
			{ name: "AWS", icon: <SiAmazonaws className="w-5 h-5" /> },
			{ name: "GCP", icon: <SiGooglecloud className="w-5 h-5" /> },
			{ name: "Docker", icon: <SiDocker className="w-5 h-5" /> },
			{ name: "Kubernetes", icon: <SiKubernetes className="w-5 h-5" /> },
			{ name: "Nginx", icon: <SiNginx className="w-5 h-5" /> },
			{ name: "CI/CD", icon: <FaCodeBranch className="w-5 h-5" /> },
			{ name: "Linux", icon: <SiLinux className="w-5 h-5" /> },
		],
		"Monitoring & Tools": [
			{ name: "Prometheus", icon: <SiPrometheus className="w-5 h-5" /> },
			{ name: "Grafana", icon: <SiGrafana className="w-5 h-5" /> },
			{ name: "Ansible", icon: <SiAnsible className="w-5 h-5" /> },
			{ name: "Git", icon: <SiGit className="w-5 h-5" /> },
			{ name: "GitHub", icon: <SiGithub className="w-5 h-5" /> },
			{ name: "Postman", icon: <SiPostman className="w-5 h-5" /> },
			{ name: "Jest", icon: <SiJest className="w-5 h-5" /> },
			{ name: "Cypress", icon: <SiCypress className="w-5 h-5" /> },
		],
		"AI/ML & Libraries": [
			{ name: "LLMs / RAG", icon: <SiOpenai className="w-5 h-5" /> },
			{ name: "MCP / A2A", icon: <FaLink className="w-5 h-5" /> },
			{ name: "LangChain", icon: <FaLink className="w-5 h-5" /> },
			{ name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5" /> },
			{ name: "PyTorch", icon: <SiPytorch className="w-5 h-5" /> },
			{ name: "scikit-learn", icon: <SiScikitlearn className="w-5 h-5" /> },
			{ name: "Hugging Face", icon: <FaRobot className="w-5 h-5" /> },
			{ name: "Pandas", icon: <SiPandas className="w-5 h-5" /> },
			{ name: "NumPy", icon: <SiNumpy className="w-5 h-5" /> },
		],
	};

	const achievements = [
		"Research Paper Author – COMSNETS 2026 (Main Conference): Published & Presented \"A Bid-Driven Optimization Framework for Real-Time Electric Vehicle Charging Scheduling\" at the main conference in Bengaluru.",
		"People's Choice & Overall Winner – Microsoft JS AI Build-a-thon: As a Troop Lead, mentored 80+ developers and led the creation of AI Career Navigator to assist students in job and internship preparation.",
		"Finalist – Google Cloud Agentic AI Day Hackathon: Led team to top 3.5% (2,000/57,000+) building AURA, a multi-agent financial platform using Gemini, Node.js, Go, and Fi's Model Context Protocol (MCP) server.",
		"LOR from Microsoft + AI-900 Certified: Received Letter of Recommendation from Pablo Veramendi, Global Director at Microsoft; AI-900 certification validating AI, ML, CV, NLP and GenAI expertise.",
		"Founder & Former President – MSA IIIT Dharwad: Led the official community as the only Gold Startup Scout at Microsoft in India, managed 60+ core team, grew MSA Nexus to 500+ members.",
		"Competitive Programming: GFG college rank 4; solved 500+ DSA problems with a 1-year streak on LeetCode and GFG.",
		"Finalist – Level Supermind Hackathon: Top 2% (500/25,000+) for BuzzHive, an AI-driven social media analytics platform.",
		"IIITians Network: Key contributor to India's largest IIIT students network (50k+ members); drove growth and engagement across the community.",
	];

	return (
		<section id="resume" className="py-20">
			<div className="max-w-4xl mx-auto">
				<div className="flex justify-between items-center mb-12">
					<h1 className="heading">
						My <span className="text-purple">Resume</span>
					</h1>

					<Link href="/Aryan_Resume.pdf" target="_blank" rel="noreferrer noopener">
						<MagicButton
							title="Download Resume"
							icon={<FaDownload />}
							position="right"
							asChild
						/>
					</Link>
				</div>

				<div className="space-y-12">
					{/* Personal Info */}
					<div className="text-center border-b border-white/[0.1] pb-8">
						<h2 className="text-4xl font-bold text-white mb-2">
							Aryan Jaiswal
						</h2>
						<p className="text-lg text-white-200 mb-2">
							Software Engineer | AI/ML | Full Stack Developer
						</p>
						<p className="text-sm text-purple mb-4">
							Published Researcher (COMSNETS 2026) &bull; Microsoft Build-a-thon Winner
						</p>
						<div className="flex justify-center space-x-6 text-white-200 flex-wrap">
							<span>📧 aryanjstar3@gmail.com</span>
							<span>📍 Bengaluru, Karnataka</span>
						</div>
						<div className="flex justify-center space-x-4 mt-4 flex-wrap">
							<Link
								href="https://linkedin.com/in/aryanjstar"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								LinkedIn
							</Link>
							<Link
								href="https://github.com/aryanjstar"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								GitHub
							</Link>
							<Link
								href="https://leetcode.com/aryanjstar"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								LeetCode
							</Link>
							<Link
								href="https://www.geeksforgeeks.org/user/aryanjstar/"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								GeeksforGeeks
							</Link>
						</div>
					</div>

					{/* Professional Summary */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">
							Professional Summary
						</h3>
						<p className="text-white-100 leading-relaxed border-l-2 border-purple pl-6">
							Final-year CS student with production GenAI, ML and full-stack
							experience; shipped voicebot infrastructure serving 1.5L+ monthly
							calls, built AI-native internal tooling adopted across teams, and
							engineered a self-healing auto-loop enabling autonomous bot updates
							with zero human intervention. Published at COMSNETS 2026; Microsoft
							Build-a-thon winner.
						</p>
					</div>

					{/* Education */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Education</h3>
						<div className="space-y-4">
							{education.map((edu, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<h4 className="text-xl font-semibold text-white">
										{edu.degree}
									</h4>
									<p className="text-white-200 mb-1">{edu.institution}</p>
									<div className="flex justify-between text-white-100 flex-wrap">
										<span>{edu.duration}</span>
										<span className="text-right">
											<span className="block">{edu.cgpa}</span>
											<span className="block">{edu.location}</span>
										</span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Work Experience */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Experience</h3>
						<div className="space-y-8">
							{experience.map((exp, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<div className="flex justify-between items-start mb-2 flex-wrap">
										<div>
											<h4 className="text-xl font-semibold text-white">
												{exp.position}
											</h4>
											<p className="text-white-200">{exp.company}</p>
										</div>
										<div className="text-right text-white-100">
											<p>{exp.duration}</p>
											<p>{exp.location}</p>
										</div>
									</div>
									<ul className="space-y-2 text-white-100">
										{exp.responsibilities.map((responsibility, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-purple mr-2 mt-1">•</span>
												<span className="leading-relaxed">
													{responsibility}
												</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Projects */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Projects</h3>
						<div className="space-y-8">
							{projects.map((project, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<div className="flex justify-between items-start mb-3 flex-wrap">
										<h4 className="text-xl font-semibold text-white">
											{project.title}
										</h4>
										<div className="flex space-x-4">
											{project.links.github && (
												<Link
													href={project.links.github}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													GitHub
												</Link>
											)}
											{project.links.demo && (
												<Link
													href={project.links.demo}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													Demo
												</Link>
											)}
											{project.links.live && (
												<Link
													href={project.links.live}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													Live
												</Link>
											)}
										</div>
									</div>
									<div className="flex flex-wrap gap-3 mb-4">
										{project.technologies.map((tech, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10132e] to-[#1a1a3e] text-white-100 rounded-lg border border-white/[0.1] hover:border-purple/50 transition-all duration-300 hover:scale-105"
											>
												<span className="text-purple">{tech.icon}</span>
												<span className="text-sm font-medium">{tech.name}</span>
											</div>
										))}
									</div>
									<ul className="space-y-2 text-white-100">
										{project.description.map((desc, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-purple mr-2 mt-1">•</span>
												<span className="leading-relaxed">{desc}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Technical Skills */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-8">
							Technical Skills
						</h3>
						<div className="space-y-8">
							{Object.entries(technicalSkills).map(([category, skills]) => (
								<div key={category}>
									<h4 className="text-xl font-semibold text-white mb-4">
										{category}
									</h4>
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
										{skills.map((skill) => (
											<div
												key={skill.name}
												className="flex flex-col items-center p-4 bg-gradient-to-br from-[#0f0f23] via-[#16213e] to-[#0f0f23] rounded-xl border border-white/[0.1] hover:border-purple/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple/20 group"
											>
												<div className="text-purple group-hover:text-white transition-colors duration-300 mb-2">
													{skill.icon}
												</div>
												<span className="text-sm text-white-100 text-center font-medium">
													{skill.name}
												</span>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Accomplishments & Leadership */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">
							Accomplishments & Leadership
						</h3>
						<div className="grid grid-cols-1 gap-4">
							{achievements.map((achievement, index) => (
								<div
									key={index}
									className="flex items-start p-4 bg-black-200 rounded-lg border border-white/[0.1]"
								>
									<span className="text-purple text-lg mr-3 flex-shrink-0 -mt-1">
										•
									</span>
									<span className="text-white-100 leading-relaxed">
										{achievement}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
