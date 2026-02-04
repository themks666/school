import React from "react";
import { Link } from "react-router-dom";
import {
	FlaskConical,
	Globe,
	Cpu,
	LineChart,
	Trophy,
	ArrowLeft,
	Briefcase,
	Compass,
} from "lucide-react";
import Secondary from '/secondary.jpg'
const SecondaryLevel = () => {
	const specializedStreams = [
		{
			name: "Advanced Sciences",
			icon: <FlaskConical className="text-violet-500" />,
			topics: ["Science", "optional Maths", "Compulsory Math"],
		},

		{
			name: "Commerce & Finance",
			icon: <LineChart className="text-emerald-500" />,
			topics: ["Business Studies", "Macro-economics", "Accounting"],
		},
		{
			name: "Social Sciences",
			icon: <Globe className="text-orange-500" />,
			topics: ["World History", "Political Science", "Sociology"],
		},
	];

	return (
		<div className="bg-white min-h-screen font-sans">
			{/* --- Breadcrumb --- */}
			<div className="max-w-7xl mx-auto px-6 pt-8">
				<Link
					to="/programs"
					className="inline-flex items-center text-slate-500 hover:text-violet-600 transition-colors font-medium">
					<ArrowLeft
						size={18}
						className="mr-2"
					/>
					Programs Overview
				</Link>
			</div>

			{/* --- Hero Section --- */}
			<header className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
				<div className="flex flex-col lg:flex-row gap-16 items-center">
					<div className="lg:w-1/2">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 text-violet-700 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
							<Compass size={14} /> Path to Excellence
						</div>
						<h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
							Shape Your <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
								Future Career
							</span>
						</h1>
						<p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
							Our Secondary Program empowers students to dive deep into
							specialized subjects, fostering the critical thinking and
							independence required for university success.
						</p>
					
					</div>

					<div className="lg:w-1/2 relative">
						<div className="aspect-square rounded-[4rem] bg-violet-100 overflow-hidden relative z-10">
							<img
								src={Secondary}
								alt="Secondary Students"
								className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
							/>
						</div>
						{/* Abstract Background Element */}
						<div className="absolute -top-10 -right-10 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -z-0"></div>
					</div>
				</div>
			</header>

			{/* --- Academic Streams --- */}
			<section className="bg-slate-900 py-24 text-white">
				<div className="max-w-7xl mx-auto px-6 text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">
						Specialized Academic Streams
					</h2>
					<p className="text-slate-400 max-w-2xl mx-auto">
						Choice is the core of our secondary curriculum. Students select
						tracks that align with their long-term goals.
					</p>
				</div>

				<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{specializedStreams.map((stream, i) => (
						<div
							key={i}
							className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition group">
							<div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								{stream.icon}
							</div>
							<h3 className="text-xl font-bold mb-4">{stream.name}</h3>
							<ul className="space-y-3">
								{stream.topics.map((topic, j) => (
									<li
										key={j}
										className="text-slate-400 text-sm flex items-center gap-2">
										<div className="w-1 h-1 bg-violet-500 rounded-full"></div>{" "}
										{topic}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default SecondaryLevel;
