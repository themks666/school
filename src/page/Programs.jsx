import React from "react";
import { Link } from "react-router-dom";
import {
	Palette,
	BookOpen,
	Microscope,
	Trophy,
	Music,
	ArrowRight,
	Calendar,
	MessageSquare,
} from "lucide-react";

const Programs = () => {
	const programList = [
		{
			title: "Early Years Foundation",
			description:
				"A playful and nurturing environment focusing on sensory development and social skills for our youngest learners.",
			icon: <Palette size={32} />,
			color: "border-blue-500",
			bgColor: "bg-blue-50",
			textColor: "text-blue-600",
			link: "/early-year",
		},
		{
			title: "Primary Education",
			description:
				"Building strong foundations in literacy, numeracy, and science through interactive and inquiry-based learning.",
			icon: <BookOpen size={32} />,
			color: "border-emerald-500",
			bgColor: "bg-emerald-50",
			textColor: "text-emerald-600",
			link: "/primary-education",
		},
		{
			title: "Secondary Level",
			description:
				"Empowering students to think critically and develop independent study habits as they transition to advanced topics.",
			icon: <Microscope size={32} />,
			color: "border-indigo-600",
			bgColor: "bg-indigo-50",
			textColor: "text-indigo-600",
			link: "/secondary-education",
		},
		{
			title: "Sports & Athletics",
			description:
				"Promoting physical health and teamwork through various sports programs including soccer, basketball, and swimming.",
			icon: <Trophy size={32} />,
			color: "border-amber-500",
			bgColor: "bg-amber-50",
			textColor: "text-amber-600",
			link: "/sports",
		},
		{
			title: "Arts & Creativity",
			description:
				"Encouraging self-expression through music, visual arts, and drama performances throughout the academic year.",
			icon: <Music size={32} />,
			color: "border-pink-500",
			bgColor: "bg-pink-50",
			textColor: "text-pink-600",
			link: "/arts",
		},
	];

	return (
		<div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-800">
			{/* --- Page Header --- */}
			<section className="py-5 px-6 text-center bg-white">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-5xl md:text-7xl font-black text-[#1a1a4b] mb-3 tracking-tight">
						Our <span className="text-indigo-600">Programs</span>
					</h1>
					<p className="text-xl text-slate-500 leading-relaxed font-medium">
						A comprehensive curriculum designed to nurture unique talents and
						prepare every child for a bright, successful future.
					</p>
				</div>
			</section>

			{/* --- Programs Grid --- */}
			<section className="max-w-7xl mb-16 mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{programList.map((program, index) => (
						<div
							key={index}
							className={`group relative p-10 bg-white rounded-[2.5rem] border-b-8 ${program.color} shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
							{/* Icon Container */}
							<div
								className={`w-16 h-16 ${program.bgColor} ${program.textColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
								{program.icon}
							</div>

							<h3 className="text-2xl font-black text-[#1a1a4b] mb-4">
								{program.title}
							</h3>

							<p className="text-slate-500 leading-relaxed font-medium mb-8 flex-grow">
								{program.description}
							</p>

							<Link
								to={program.link}
								className="inline-flex items-center gap-2 font-bold text-indigo-600 hover:gap-4 transition-all">
								Learn More <ArrowRight size={20} />
							</Link>
						</div>
					))}
				</div>
			</section>

			{/* --- Call to Action Section --- */}
			<section className="max-w-6xl mx-auto mb-32 px-6">
				<div className="bg-[#1a1a4b] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
					{/* Subtle Decorative Circles */}
					<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

					<div className="relative z-10">
						<h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
							Want to see our <br /> classes in action?
						</h2>
						<p className="mb-12 text-lg text-indigo-100/80 max-w-xl mx-auto font-medium">
							Join us for a campus walkthrough or schedule a session with our
							expert admissions counselors.
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-6">
				
							<Link to='/contact'>
								<button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-3 active:scale-95">
									<MessageSquare size={22} /> Contact Us
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Programs;
