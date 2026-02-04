import { useState } from "react";
import { Phone, Facebook, Mail, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SchoolLandingPage = () => {
	return (
		<div className="min-h-screen bg-slate-50 font-sans text-slate-900">
			<header className="relative overflow-hidden  pb-5 lg:pb-10 px-6">
				<div className="max-w-6xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6">
						<Rocket size={16} />
						<span>Admissions Now Open for 2026</span>
					</div>

					<h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
						A Better Future For <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
							Your Children
						</span>
					</h1>

					<p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 mb-10 leading-relaxed px-4">
						We provide quality education and a nurturing environment where
						students develop knowledge, values, and the confidence to lead the
						future.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link to="/contact">
							<button className="w-full sm:w-auto group bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-100">
								Join Us Today
								<ArrowRight className="group-hover:translate-x-1 transition-transform" />
							</button>
						</Link>
						<Link to="/academics">
							<button className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg text-slate-700 hover:bg-slate-100 transition-all">
								View Curriculum
							</button>
						</Link>
					</div>
				</div>

				{/* Background Blobs (Hidden on very small screens to improve performance) */}
				<div className="hidden sm:block absolute top-0 -z-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-100/40 blur-[100px] rounded-full" />
			</header>

			{/* --- Contact Footer Section --- */}
			<section className="px-4 pb-12 sm:pb-20">
				<div className="max-w-6xl mx-auto bg-indigo-950 rounded-[2.5rem] sm:rounded-[3.5rem] p-8 lg:p-16 text-white overflow-hidden">
					<div className="grid lg:grid-cols-5 gap-12 items-center">
						<div className="lg:col-span-2 space-y-4">
							<h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
							<p className="text-indigo-200 text-lg max-w-sm">
								Have questions? Reach out to our admissions office for help.
							</p>
						</div>

						<div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
							{/* Card 1 */}
							<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition group">
								<div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/40 transition">
									<Phone
										size={20}
										className="text-indigo-300"
									/>
								</div>
								<p className="text-xs uppercase tracking-wider text-indigo-300 font-bold mb-1">
									Call Us
								</p>
								<p className="font-semibold text-sm sm:text-base">9841239912</p>
							</div>

							<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition group">
								<div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/40 transition">
									<Facebook
										size={20}
										className="text-indigo-300"
									/>
								</div>
								<p className="text-xs uppercase tracking-wider text-indigo-300 font-bold mb-1">
									Social
								</p>
								<p className="font-semibold text-sm sm:text-base">
									Rudramati Pathshala
								</p>
							</div>

							<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition group">
								<div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/40 transition">
									<Mail
										size={20}
										className="text-indigo-300"
									/>
								</div>
								<p className="text-xs uppercase tracking-wider text-indigo-300 font-bold mb-1">
									Email
								</p>
								<p className="font-semibold text-sm sm:text-base truncate">
									rudramatipathshala@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SchoolLandingPage;
