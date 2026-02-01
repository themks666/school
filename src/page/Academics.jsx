import React from "react";

const Academics = () => {
	const levels = [
		{
			id: "preschool",
			title: "Foundation: Nursery to UKG",
			subtitle: "Age: 3 - 5 Years",
			description:
				"Our Early Years program focuses on the 'Play-Way' method, ensuring children develop a love for learning through exploration and creative activities.",
			focus: [
				"Phonics & Literacy",
				"Number Magic",
				"Sensory Play",
				"Social Etiquette",
			],
			themeColor: "text-purple-600",
			bgColor: "bg-purple-50",
		},
		{
			id: "primary",
			title: "Primary School: Grade 1 - 5",
			subtitle: "Age: 6 - 10 Years",
			description:
				"At this stage, we transition into formal inquiry-based learning. We focus on building strong core competencies in languages and sciences.",
			focus: [
				"Creative Writing",
				"Mental Math",
				"Environmental Science",
				"ICT Basics",
			],
			themeColor: "text-green-600",
			bgColor: "bg-green-50",
		},
		{
			id: "secondary",
			title: "Secondary School: Grade 6 - 10",
			subtitle: "Age: 11 - 15 Years",
			description:
				"Our secondary curriculum is designed to challenge students and prepare them for higher education through rigorous academic and life-skill training.",
			focus: [
				"Advanced STEM",
				"Social Studies",
				"Leadership Skills",
				"Laboratory Research",
			],
			themeColor: "text-blue-600",
			bgColor: "bg-blue-50",
		},
	];

	return (
		<div className="min-h-screen bg-white font-sans">
			{/* Header */}
			<section className="bg-[#1a1a4b] text-white py-20 px-6 text-center rounded-b-[3rem]">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					Academic Excellence
				</h1>
				<p className="max-w-3xl mx-auto text-lg opacity-90">
					Providing a structured and holistic path from the first steps in
					Nursery to the graduation of Secondary School.
				</p>
			</section>

			{/* Levels Section */}
			<section className="max-w-7xl mx-auto py-5 px-6">
				<div className="space-y-16">
					{levels.map((level, index) => (
						<div
							key={index}
							className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
							<div className="flex-1">
								<span
									className={`font-bold uppercase tracking-widest ${level.themeColor}`}>
									{level.subtitle}
								</span>
								<h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4b] mt-2 mb-4">
									{level.title}
								</h2>
								<p className="text-gray-600 text-lg mb-6 leading-relaxed">
									{level.description}
								</p>
								<div className="grid grid-cols-2 gap-4">
									{level.focus.map((item, i) => (
										<div
											key={i}
											className="flex items-center gap-2">
											<div
												className={`w-2 h-2 rounded-full ${level.themeColor.replace("text", "bg")}`}></div>
											<span className="font-medium text-gray-700">{item}</span>
										</div>
									))}
								</div>
							</div>
							<div
								className={`flex-1 w-full h-64 md:h-96 ${level.bgColor} rounded-[2rem] flex items-center justify-center border-2 border-dashed border-gray-200`}>
								
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Curriculum Table */}
			<section className="bg-slate-50 px-6">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-[#1a1a4b]">
							Curriculum Overview
						</h2>
						<p className="text-gray-600">
							A snapshot of our balanced learning approach
						</p>
					</div>

					<div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm bg-white">
						<table className="w-full text-left border-collapse">
							<thead>
								<tr className="bg-[#1a1a4b] text-white">
									<th className="p-4 md:p-6 font-bold">Category</th>
									<th className="p-4 md:p-6 font-bold">Pre-Primary</th>
									<th className="p-4 md:p-6 font-bold">Primary/Secondary</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								<tr>
									<td className="p-4 md:p-6 font-bold text-gray-800">
										Core Subjects
									</td>
									<td className="p-4 md:p-6 text-gray-600">
										English, Math, Nepali
									</td>
									<td className="p-4 md:p-6 text-gray-600">
										Sci, Math, Social Studies
									</td>
								</tr>
								<tr>
									<td className="p-4 md:p-6 font-bold text-gray-800">
										Skill Lab
									</td>
									<td className="p-4 md:p-6 text-gray-600">
										Storytelling, Art
									</td>
									<td className="p-4 md:p-6 text-gray-600">
										Accounting, optional Math, Debate
									</td>
								</tr>
								<tr>
									<td className="p-4 md:p-6 font-bold text-gray-800">
										Physical Ed.
									</td>
									<td className="p-4 md:p-6 text-gray-600">Yoga, Fun Games</td>
									<td className="p-4 md:p-6 text-gray-600">
										Team Sports, Athletics
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Academics;
