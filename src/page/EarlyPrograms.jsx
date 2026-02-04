import React from "react";
import { useParams, Link } from "react-router-dom";
import Nursery from '/mursery.jpg'
import {
	CheckCircle2,
	ArrowLeft,
	GraduationCap,
	Users,
	BookOpen,
	Star,
} from "lucide-react";

const ProgramDetail = () => {
	// In a real app, you'd fetch this data based on the URL ID/Slug
	const programData = {
		title: "Early Years Foundation",
		highlight: "Nurturing Curiosity",
		description:
			"A playful and nurturing environment focusing on sensory development and social skills for our youngest learners. We believe that the first steps in education set the tone for a lifetime of learning.",
		image:Nursery,
					features: [
			{
				title: "Sensory Play",
				desc: "Engaging activities designed to stimulate cognitive growth through touch, sight, and sound.",
			},
			{
				title: "Social Interaction",
				desc: "Small group settings to help children develop empathy and communication skills.",
			},
			{
				title: "Creative Arts",
				desc: "Daily music and painting sessions to foster self-expression from a young age.",
			},
			{
				title: "Safe Environment",
				desc: "Specially designed facilities with 24/7 supervision and child-proof learning zones.",
			},
		],
		curriculum: [
			"Basic Literacy",
			"Motor Skills",
			"Social Etiquette",
			"Emotional Intelligence",
		],
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation Breadcrumb */}
			<div className="max-w-7xl mx-auto px-6 py-8">
				<Link
					to="/programs"
					className="inline-flex items-center text-indigo-600 font-semibold hover:gap-2 transition-all">
					<ArrowLeft
						size={20}
						className="mr-2"
					/>
					Back to Programs
				</Link>
			</div>

			{/* --- Hero Section --- */}
			<section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pb-20">
				<div className="order-2 lg:order-1">
					<span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
						{programData.highlight}
					</span>
					<h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
						{programData.title}
					</h1>
					<p className="text-lg text-slate-600 leading-relaxed mb-8">
						{programData.description}
					</p>
					<div className="flex flex-wrap gap-4">
						<div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-medium">
							<Users
								size={18}
								className="text-indigo-600"
							/>{" "}
							15 Students / Class
						</div>
						<div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-medium">
							<GraduationCap
								size={18}
								className="text-indigo-600"
							/>{" "}
							Expert Educators
						</div>
					</div>
				</div>

				<div className="order-1 lg:order-2 relative">
					<div className="absolute -inset-4 bg-indigo-100 rounded-[2rem] rotate-3 -z-10"></div>
					<img
						src={programData.image}
						alt={programData.title}
						className="w-full h-[400px] object-cover rounded-[2rem] shadow-2xl"
					/>
				</div>
			</section>

			{/* --- Features Grid --- */}
			<section className="bg-slate-50 py-20">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-slate-900">
							What makes this program special?
						</h2>
						<div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{programData.features.map((feature, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition">
								<div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
									<Star size={24} />
								</div>
								<h3 className="font-bold text-xl mb-3">{feature.title}</h3>
								<p className="text-slate-600 text-sm leading-relaxed">
									{feature.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- Curriculum Section --- */}
			<section className="py-20 max-w-7xl mx-auto px-6">
				<div className="bg-indigo-900 rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row gap-12 items-center">
					<div className="lg:w-1/2">
						<h2 className="text-3xl font-bold mb-6">Curriculum Overview</h2>
						<p className="text-indigo-100 mb-8">
							Our syllabus is designed by international experts to ensure your
							child meets global benchmarks while enjoying the process.
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{programData.curriculum.map((item, i) => (
								<div
									key={i}
									className="flex items-center gap-3">
									<CheckCircle2 className="text-emerald-400" />
									<span className="font-medium">{item}</span>
								</div>
							))}
						</div>
					</div>
					<div className="lg:w-1/2 w-full">
						<div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
							<h3 className="text-2xl font-bold mb-4 text-center">
								Interested in this program?
							</h3>
							<p className="text-center text-indigo-100 mb-8">
								Schedule a campus tour or speak with an admissions officer
								today.
							</p>
              <Link to="/contact">
                
							<button className="w-full bg-white text-indigo-900 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-colors">
								Enquire Now
							</button>
              </Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProgramDetail;
