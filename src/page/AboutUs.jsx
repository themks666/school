import rabindra from '/rabindra.jpg'
const AboutUs = () => {
	const values = [
		{
			title: "Integrity",
			desc: "Teaching children the importance of honesty and strong moral principles.",
			icon: "🤝",
			color: "bg-purple-100 text-purple-600",
		},
		{
			title: "Innovation",
			desc: "Encouraging curiosity and modern problem-solving in every classroom.",
			icon: "💡",
			color: "bg-green-100 text-green-600",
		},
		{
			title: "Excellence",
			desc: "Striving for the highest standards in academics, sports, and the arts.",
			icon: "🏆",
			color: "bg-blue-100 text-blue-600",
		},
	];

	return (
		<div className="min-h-screen bg-white font-sans text-slate-800">
			{/* Hero Section */}
			<section className="relative py-10 px-6 bg-slate-50 overflow-hidden">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 text-center md:text-left">
						<h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a4b] mb-6">
							Nurturing Minds,{" "}
							<span className="text-purple-600">Shaping Futures.</span>
						</h1>
						<p className="text-lg text-gray-600 leading-relaxed mb-8">
							Founded in 2010, **Newsun Shine** began with a simple vision: to
							create a school where every child feels seen, heard, and inspired
							to reach their full potential.
						</p>
					</div>
					<div className="flex-1 relative">
						<div className="w-full h-80 bg-purple-200 rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
							{/* Placeholder for a school building or group photo */}
							<div className="w-full h-full flex items-center justify-center text-purple-400 italic">
								<img src="image.png" alt="" />
							</div>
						</div>
						{/* Decorative Element */}
						<div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
				<div className="p-10 bg-[#1a1a4b] text-white rounded-[2.5rem] shadow-xl">
					<h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
						<span>🎯</span> Our Mission
					</h2>
					<p className="opacity-90 leading-relaxed text-lg">
						To provide a holistic education that balances academic rigor with
						creative expression, social responsibility, and emotional
						intelligence.
					</p>
				</div>
				<div className="p-10 bg-green-900 text-white rounded-[2.5rem] shadow-xl">
					<h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
						<span>✨</span> Our Vision
					</h2>
					<p className="opacity-90 leading-relaxed text-lg">
						To be a global leader in early and secondary education, producing
						confident graduates who contribute positively to a changing world.
					</p>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4b] mb-12">
						What We Stand For
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{values.map((val, i) => (
							<div
								key={i}
								className="p-8 rounded-3xl border border-gray-100 hover:border-purple-200 transition-all shadow-sm hover:shadow-md text-center">
								<div
									className={`w-16 h-16 ${val.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6`}>
									{val.icon}
								</div>
								<h3 className="text-xl font-bold text-[#1a1a4b] mb-3">
									{val.title}
								</h3>
								<p className="text-gray-600">{val.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="max-w-5xl mx-auto py-20 px-6">
				<div className="bg-slate-50 p-8 md:p-16 rounded-[3rem] flex flex-col md:flex-row gap-12 items-center">
					<div className="max-w-64 aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
						<img src={rabindra} alt="principal photo" />
					</div>
					<div>
						<span className="text-purple-600 font-bold uppercase tracking-widest text-sm">
							Message from the Principal
						</span>
						<h2 className="text-3xl font-bold text-[#1a1a4b] mt-2 mb-6">
							"Education is the most powerful weapon which you can use to change
							the world."
						</h2>
						<p className="text-gray-600 italic leading-relaxed mb-6 text-lg">
							"At Newsun Shine, we don't just teach subjects; we mentor future
							leaders. Our doors are always open to parents who share our
							passion for excellence and innovation."
						</p>
						<p className="font-bold text-[#1a1a4b] text-xl">
							— Mr. Rabindra Parajuli
						</p>
						<p className="text-gray-500">School Principal</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
