"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function AboutPage() {
	const skills = [
		"Marketing analytics",
		"Communication",
		"Social Media Management",
		"Strategic planning",
		"Google AdWords",
		"SEO",
	];

	const contactInfo = [
		{
			icon: <Mail size={16} />,
			label: "EMAIL",
			value: "boipelodev@outlook.com",
		},
		{
			icon: <MapPin size={16} />,
			label: "LOCATION",
			value: "Midrand, South Africa",
		},
		{ icon: <Phone size={16} />, label: "PHONE", value: "+27 81 753 0293" },
		{ icon: <Linkedin size={16} />, label: "LINKEDIN", value: "boipelo-dev" },
	];

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />

			<div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
				{/* Header Section */}
				<div className="mb-16">
					<h1 className="text-5xl md:text-7xl font-bold text-zinc-100 mb-2">
						Boipelo Monametsi
					</h1>
					<p className="text-xl md:text-2xl text-amber-500 font-medium">
						SOFTWARE DEVELOPER
					</p>
				</div>

				{/* Contact Info Bar */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
					{contactInfo.map((info, idx) => (
						<div key={idx} className="flex flex-col">
							<div className="flex items-center gap-2 mb-1">
								<span className="text-amber-500">{info.icon}</span>
								<span className="text-xs text-amber-500 font-semibold tracking-wider">
									{info.label}
								</span>
							</div>
							<p className="text-sm text-zinc-300">{info.value}</p>
						</div>
					))}
				</div>

				{/* Main Content Grid */}
				<div className="grid md:grid-cols-2 gap-8 mb-16">
					{/* Profile Section */}
					<Card>
						<div className="p-8">
							<h2 className="text-2xl font-bold text-zinc-100 mb-4 uppercase tracking-wider">
								Profile
							</h2>
							<p className="text-zinc-300 leading-relaxed">
								Ambitious software developer with a strong foundation in
								full-stack development, specializing in modern web technologies.
								Passionate about building scalable e-commerce solutions and
								creating seamless user experiences. Holds expertise in React,
								Next.js, and Node.js with a keen eye for clean code and
								efficient architecture. Excellent problem-solver eager to tackle
								complex challenges and deliver impactful solutions.
							</p>
						</div>
					</Card>

					{/* Skills Section */}
					<Card>
						<div className="p-8">
							<h2 className="text-2xl font-bold text-zinc-100 mb-4 uppercase tracking-wider">
								Skills
							</h2>
							<div className="flex flex-wrap gap-3 items-center justify-center min-h-[200px]">
								{skills.map((skill, idx) => (
									<div
										key={idx}
										className="bg-amber-600/20 border border-amber-600/40 rounded-full px-6 py-3 
                                        text-zinc-200 text-sm font-medium hover:bg-amber-600/30 transition-colors duration-300"
										style={{
											transform: `scale(${1 + (idx % 3) * 0.15})`,
										}}
									>
										{skill}
									</div>
								))}
							</div>
						</div>
					</Card>
				</div>

				{/* Professional Experience Section */}
				<Card>
					<div className="p-8 mb-8">
						<h2 className="text-2xl font-bold text-zinc-100 mb-6 uppercase tracking-wider">
							Professional Experience
						</h2>

						<div className="space-y-8">
							{/* Job 1 */}
							<div className="border-l-2 border-amber-500 pl-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-semibold text-zinc-100">
										Full-Stack Developer at Tech Solutions
									</h3>
									<span className="text-sm text-zinc-400 whitespace-nowrap ml-4">
										Jan. 2024 – Present
									</span>
								</div>
								<p className="text-sm text-amber-500 mb-3">Midrand</p>
								<ul className="space-y-2 text-zinc-300 text-sm">
									<li>
										• Developed and maintained full-stack e-commerce
										applications using Next.js, React, and Node.js
									</li>
									<li>
										• Implemented advanced features including payment
										integration, real-time notifications, and admin dashboards
									</li>
									<li>
										• Collaborated with cross-functional teams to deliver
										high-quality solutions on schedule
									</li>
								</ul>
							</div>

							{/* Job 2 */}
							<div className="border-l-2 border-amber-500 pl-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-semibold text-zinc-100">
										Junior Developer at Digital Agency
									</h3>
									<span className="text-sm text-zinc-400 whitespace-nowrap ml-4">
										Jun. 2022 – Dec. 2023
									</span>
								</div>
								<p className="text-sm text-amber-500 mb-3">Midrand</p>
								<ul className="space-y-2 text-zinc-300 text-sm">
									<li>
										• Assisted in building responsive web applications with
										modern JavaScript frameworks
									</li>
									<li>
										• Utilized version control systems and agile methodologies
										for efficient project management
									</li>
									<li>
										• Created reusable components and implemented best practices
										for code quality
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Card>

				{/* Education & Languages Grid */}
				<div className="grid md:grid-cols-2 gap-8 mt-8">
					{/* Education Section */}
					<Card>
						<div className="p-8">
							<h2 className="text-2xl font-bold text-zinc-100 mb-6 uppercase tracking-wider">
								Education
							</h2>
							<div className="border-l-2 border-amber-500 pl-6">
								<h3 className="text-xl font-semibold text-zinc-100 mb-1">
									BSc in Computer Science
								</h3>
								<p className="text-sm text-amber-500 mb-2">Eduvos</p>
								<p className="text-sm text-zinc-400">Feb. 2022 – Dec. 2025</p>
							</div>
						</div>
					</Card>

					{/* Languages Section */}
					<Card>
						<div className="p-8">
							<h2 className="text-2xl font-bold text-zinc-100 mb-6 uppercase tracking-wider">
								Languages
							</h2>
							<div className="space-y-4">
								<div>
									<h3 className="text-lg font-semibold text-zinc-100">
										English
									</h3>
									<p className="text-sm text-zinc-400 italic">Fluent</p>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-zinc-100">
										SeSotho
									</h3>
									<p className="text-sm text-zinc-400 italic">Native</p>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-zinc-100">
										SeTswana
									</h3>
									<p className="text-sm text-zinc-400 italic">Conversational</p>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
