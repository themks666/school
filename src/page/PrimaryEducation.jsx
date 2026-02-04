import React from "react";
import { Link } from "react-router-dom";
import Primary from '/primary.jpg'
import {
	BookOpen,
	Calculator,
	Microscope,
	Languages,
	CheckCircle,
	ArrowRight,
	ChevronLeft,
} from "lucide-react";

const PrimaryEducation = () => {
	const coreSubjects = [
		{
			name: "Literacy & English",
			icon: <BookOpen className="text-blue-500" />,
			desc: "Developing advanced reading comprehension and creative writing skills.",
		},
		{
			name: "Mathematics",
			icon: <Calculator className="text-emerald-500" />,
			desc: "Building logic through problem-solving, geometry, and mental math.",
		},
		{
			name: "Science",
			icon: <Microscope className="text-purple-500" />,
			desc: "Exploring the natural world through hands-on lab experiments.",
		},
		{
			name: "Global Languages",
			icon: <Languages className="text-orange-500" />,
			desc: "Introduction to second languages to foster global citizenship.",
		},
	];

	return (
		<div className="bg-white min-h-screen font-sans selection:bg-indigo-100">
			
			<div className="max-w-7xl mx-auto px-6 pt-8">
				<Link
					to="/programs"
					className="group flex items-center text-slate-500 hover:text-indigo-600 transition-colors">
					<ChevronLeft
						size={20}
						className="group-hover:-translate-x-1 transition-transform"
					/>
					<span className="font-medium">Back to All Programs</span>
				</Link>
			</div>

	
			<header className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-6">
							Grades 1 - 5
						</div>
						<h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
							Building Strong <br />
							<span className="text-indigo-600">Foundations</span>
						</h1>
						<p className="text-xl text-slate-600 leading-relaxed mb-8">
							In our Primary School, we bridge the gap between play-based
							learning and academic excellence. We focus on inquiry-based
							learning that encourages students to ask "Why?" and "How?".
						</p>
						<div className="flex gap-4">
							<Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition">
								Apply for Admission
							</Link>
						</div>
					</div>

					<div className="relative">
									<div className="aspect-[4/3] rounded-[3rem] bg-slate-200 overflow-hidden shadow-2xl relative z-10">
							<img
								src={Primary}
								alt="Primary Students"
								className="w-full h-full object-cover"
							/>
						</div>
				
						<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl -z-0"></div>
						<div className="absolute -top-6 -left-6 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl -z-0"></div>
					</div>
				</div>
			</header>

	
			<section className="bg-slate-50 py-24">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-4xl font-bold text-slate-900 mb-4">
							Core Curriculum
						</h2>
						<p className="text-slate-600">
							Our balanced approach ensures students excel in traditional
							subjects while developing 21st-century skills.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{coreSubjects.map((subject, idx) => (
							<div
								key={idx}
								className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
								<div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-2xl">
									{subject.icon}
								</div>
								<h3 className="text-xl font-bold mb-3 text-slate-800">
									{subject.name}
								</h3>
								<p className="text-slate-600 text-sm leading-relaxed">
									{subject.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 max-w-7xl mx-auto px-6">
				<div className="bg-indigo-600 rounded-[3rem] overflow-hidden relative">
					<div className="flex flex-col lg:flex-row">
						<div className="p-10 lg:p-20 lg:w-3/5 text-white">
							<h2 className="text-4xl font-bold mb-8">Learning Outcomes</h2>
							<div className="space-y-6">
								{[
									"Critical thinking and analytical reasoning",
									"Confident public speaking and presentation",
									"Digital literacy and basic coding",
									"Collaborative teamwork and leadership",
								].map((item, i) => (
									<div
										key={i}
										className="flex items-start gap-4">
										<div className="mt-1 bg-white/20 p-1 rounded-full">
											<CheckCircle
												size={20}
												className="text-emerald-300"
											/>
										</div>
										<p className="text-lg font-medium text-indigo-50">{item}</p>
									</div>
								))}
							</div>
						</div>

						<div className="lg:w-2/5 bg-indigo-700/50 p-10 lg:p-20 flex flex-col justify-center border-l border-white/10">
							<div className="text-center lg:text-left">
								<h3 className="text-2xl font-bold text-white mb-4">
									Take the next step
								</h3>
								<p className="text-indigo-100 mb-8">
									Download our primary level prospectus for more detailed
									information.
								</p>
								<button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold hover:bg-slate-100 transition flex items-center justify-center gap-2">
									Download Prospectus <ArrowRight size={20} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PrimaryEducation;
