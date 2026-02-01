import { Lightbulb, Briefcase, Mic, Phone, Facebook, Mail } from "lucide-react";

const programs = [
	{
		title: " +977-1-4010133",
		icon: <Phone className="w-8 h-8 text-blue-400" />,
		active: false,
	},
	{
		title: "Facebook Page",
		icon: <Facebook className="w-8 h-8 text-yellow-300" />,
		active: true,
	},
	{
		title: "gmail",
		icon: <Mail className="w-8 h-8 text-green-400" />,
		active: false,
	},
];

const Programs = () => {
	return (
		<div className="w-full max-w-5xl mx-auto bg-violet-950 rounded-3xl p-6 flex items-center gap-6">
			{/* Left text */}
			<div className="w-1/3 text-white">
				<h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
				<p className="text-sm text-gray-300">
					Cantact our scholl on telephone number for any querries
				</p>
			</div>

			{/* Cards */}
			<div className="flex gap-4 w-2/3">
				{programs.map((item, index) => (
					<div
						key={index}
						className="flex-1 rounded-xl p-5 cursor-pointer transition bg-[#24104f] hover:bg-[#2f1666]
							">
						<div className="mb-4">{item.icon}</div>
						<h3 className="text-white font-semibold">{item.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Programs;
