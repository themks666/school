
import { Link } from "react-router-dom";
import {
	Trophy,
	Target,
	Users,
	HeartPulse,
	ArrowLeft,
	Dribbble,
	Medal,
	Dumbbell,
} from "lucide-react";

const Sports = () => {
	const sportsCategories = [
		{
			name: "Team Sports",
			icon: <Users size={24} />,
			color: "bg-blue-500",
			items: ["Football", "Basketball", "Volleyball"],
		},
		{
			name: "Individual",
			icon: <Target size={24} />,
			color: "bg-orange-500",
			items: ["Swimming", "Track & Field", "Archery"],
		},
		{
			name: "Fitness & Gym",
			icon: <Dumbbell size={24} />,
			color: "bg-indigo-500",
			items: ["Yoga", "Weight Training", "Aerobics"],
		},
		{
			name: "Achievements",
			icon: <Trophy size={24} />,
			color: "bg-yellow-500",
			items: ["Inter-school Cup", "National Relays", "MVPs"],
		},
	];

	return (
		<div className="bg-white min-h-screen font-sans">
		
			<div className="max-w-7xl mx-auto px-6 pt-8">
				<Link
					to="/programs"
					className="inline-flex items-center text-slate-500 hover:text-orange-600 transition-colors font-medium">
					<ArrowLeft
						size={18}
						className="mr-2"
					/>
					Programs
				</Link>
			</div>

		
			<header className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
				<div className="lg:w-1/2">
					<div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-md text-sm font-bold uppercase mb-6">
						<Medal size={16} /> Elite Sports Program
					</div>
					<h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 italic tracking-tight">
						PUSHING <span className="text-orange-500">LIMITS.</span> <br />
						WINNING TOGETHER.
					</h1>
					<p className="text-lg text-slate-600 mb-8 leading-relaxed">
						Athletics at our Academy is more than just winning trophies. We
						focus on discipline, resilience, and the physical well-being of
						every student, from beginners to elite athletes.
					</p>
					<div className="flex flex-wrap gap-6 items-center">
						<div className="flex -space-x-3">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
									<img
										src={`https://i.pravatar.cc/150?u=${i}`}
										alt="Athlete"
									/>
								</div>
							))}
						</div>
						<p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
							Join Active Athletes
						</p>
					</div>
				</div>

				<div className="lg:w-1/2 grid grid-cols-2 gap-4">
					<div className="space-y-4">
						<img
							src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600"
							className="rounded-2xl h-64 w-full object-cover shadow-lg"
							alt="Basketball"
						/>
						<div className="bg-blue-600 p-6 rounded-2xl text-white">
							<HeartPulse
								size={32}
								className="mb-2"
							/>
							<p className="font-bold text-xl leading-tight">
								Physical Wellness Focus
							</p>
						</div>
					</div>
					<div className="pt-12 space-y-4">
						<div className="bg-orange-500 p-6 rounded-2xl text-white">
							<Dribbble
								size={32}
								className="mb-2"
							/>
							<p className="font-bold text-xl leading-tight">
								Pro Coaching Staff
							</p>
						</div>
						<img
							src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=600"
							className="rounded-2xl h-64 w-full object-cover shadow-lg"
							alt="Swimming"
						/>
					</div>
				</div>
			</header>

			
			<section className="py-24 max-w-7xl mx-auto px-6">
				<h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
					Find Your Sport
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{sportsCategories.map((cat, i) => (
						<div
							key={i}
							className="group border-2 border-slate-100 p-8 rounded-[2rem] hover:border-orange-500 transition-all duration-300">
							<div
								className={`${cat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
								{cat.icon}
							</div>
							<h3 className="text-xl font-bold mb-4">{cat.name}</h3>
							<ul className="space-y-3">
								{cat.items.map((item, j) => (
									<li
										key={j}
										className="text-slate-600 font-medium flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>{" "}
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* --- Call to Action --- */}
			<section className="px-6 pb-20">
				<div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
					<div className="relative z-10">
						<h2 className="text-3xl md:text-5xl font-bold mb-6">
							Ready to Join the Team?
						</h2>
						<p className="text-slate-400 text-lg max-w-xl mx-auto">
							Trials are held every semester for all major sports. Come show us
							your talent.
						</p>
					
					</div>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 blur-[100px]"></div>
				</div>
			</section>
		</div>
	);
};

export default Sports;
