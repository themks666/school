
const Programs = () => {
	const programList = [
		{
			title: "Early Years Foundation",
			description:
				"A playful and nurturing environment focusing on sensory development and social skills for our youngest learners.",
			icon: "🎨",
			color: "border-blue-500",
		},
		{
			title: "Primary Education",
			description:
				"Building strong foundations in literacy, numeracy, and science through interactive and inquiry-based learning.",
			icon: "📚",
			color: "border-green-500",
		},
		{
			title: "Middle School",
			description:
				"Empowering students to think critically and develop independent study habits as they transition to advanced topics.",
			icon: "🔬",
			color: "border-purple-600",
		},
		{
			title: "Sports & Athletics",
			description:
				"Promoting physical health and teamwork through various sports programs including soccer, basketball, and swimming.",
			icon: "⚽",
			color: "border-yellow-500",
		},
		{
			title: "Arts & Creativity",
			description:
				"Encouraging self-expression through music, visual arts, and drama performances throughout the academic year.",
			icon: "🎭",
			color: "border-pink-500",
		},
		{
			title: "STEM Club",
			description:
				"Hands-on projects in robotics, coding, and engineering to prepare students for a technology-driven future.",
			icon: "💻",
			color: "border-cyan-500",
		},
	];

	return (
		<div className="min-h-screen bg-white font-sans text-slate-800">
			{/* Page Header */}
			<section className="pt-5 px-6 text-center bg-slate-50">
				<h1 className="text-4xl md:text-5xl font-bold text-[#1a1a4b] mb-4">
					Our <span className="text-purple-600">Programs</span>
				</h1>
				<p className="max-w-2xl mx-auto text-gray-600 text-lg">
					We offer a comprehensive curriculum designed to nurture every child's
					unique talents and prepare them for a bright future.
				</p>
			</section>

			{/* Programs Grid */}
			<section className="max-w-7xl mx-auto py-16 px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{programList.map((program, index) => (
						<div
							key={index}
							className={`p-8 bg-white rounded-3xl border-b-4 ${program.color} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
							<div className="text-4xl mb-4">{program.icon}</div>
							<h3 className="text-2xl font-bold text-[#1a1a4b] mb-3">
								{program.title}
							</h3>
							<p className="text-gray-600 leading-relaxed">
								{program.description}
							</p>
							<button className="mt-6 font-semibold text-purple-600 hover:text-purple-800 flex items-center gap-2">
								Learn More <span>→</span>
							</button>
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="max-w-5xl mx-auto mb-20 px-6">
				<div className="bg-[#1a1a4b] rounded-[2rem] p-10 text-center text-white">
					<h2 className="text-3xl font-bold mb-4">
						Want to see our classes in action?
					</h2>
					<p className="mb-8 opacity-90">
						Book a school tour or speak with our admissions team today.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold transition">
							Book a Tour
						</button>
						<button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition">
							Contact Us
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Programs;
