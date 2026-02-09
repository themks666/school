import { Link } from "react-router-dom";
import Dance from "/dance2.jpg";
import Art from "/arts.jpg";
import {
	Palette,
	Mic,
	Camera,
	Feather,
	Star,
	ArrowLeft,
	Sparkles,
} from "lucide-react";

const ArtsAndCreativity = () => {
	const artDisciplines = [
		{
			name: "Visual Arts",
			icon: <Palette size={24} />,
			description: "Painting, sculpture, digital art, and graphic design.",
		},
		{
			name: "Performing Arts",
			icon: <Mic size={24} />,
			description: "Drama, musical theatre, public speaking, and dance.",
		},
		{
			name: "Media Arts",
			icon: <Camera size={24} />,
			description: "Photography, filmmaking, animation, and creative editing.",
		},
		{
			name: "Literary Arts",
			icon: <Feather size={24} />,
			description: "Creative writing, poetry, scriptwriting, and journalism.",
		},
	];

	return (
		<div className="bg-gradient-to-br from-white to-purple-50 min-h-screen font-sans">
			<div className="max-w-7xl mx-auto px-6 pt-8">
				<Link
					to="/programs"
					className="inline-flex items-center text-slate-500 hover:text-pink-600 transition-colors font-medium">
					<ArrowLeft
						size={18}
						className="mr-2"
					/>
					Programs
				</Link>
			</div>

			<header className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
				<div className="lg:w-1/2">
					<div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-700 rounded-md text-sm font-bold uppercase mb-6">
						<Sparkles size={16} /> Ignite Imagination
					</div>
					<h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
						Unlock Your <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
							Creative Potential
						</span>
					</h1>
					<p className="text-lg text-slate-600 mb-8 leading-relaxed">
						Our Arts & Creativity program is a vibrant hub where students
						explore diverse artistic disciplines, develop their unique voice,
						and build confidence through self-expression.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-100">
							Explore Our Studios
						</button>
						<Link to="/gallery">
							<button className="border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition">
								View Student Gallery
							</button>
						</Link>
					</div>
				</div>

				<div className="lg:w-1/2 relative">
					<img
						src={Art}
						alt="Art class"
						className="w-full h-80 sm:h-[450px] object-cover rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
					/>

					<div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-400/20 rounded-full mix-blend-multiply blur-3xl animate-blob -z-0"></div>

					<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-400/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000 -z-0"></div>
				</div>
			</header>

			<section className="bg-white py-20">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
						Our Creative Disciplines
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{artDisciplines.map((discipline, i) => (
							<div
								key={i}
								className="group bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
								<div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
									{discipline.icon}
								</div>
								<h3 className="text-xl font-bold mb-3">{discipline.name}</h3>
								<p className="text-slate-600 text-sm leading-relaxed">
									{discipline.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-4xl font-bold text-slate-900 mb-6">
							World-Class Facilities & Events
						</h2>
						<p className="text-lg text-slate-600 mb-8 leading-relaxed">
							From state-of-the-art music rooms and fully equipped art studios
							to a professional theatre, our facilities are designed to inspire.
							We host numerous exhibitions, concerts, and plays throughout the
							year.
						</p>
						<ul className="space-y-4">
							{[
								"Modern Art Studios with natural light",
								"Fully equipped Music Production Labs",
								"Black Box Theatre for drama and dance",
								"Annual Arts Festival showcasing student talent",
							].map((item, i) => (
								<li
									key={i}
									className="flex items-center gap-3 text-slate-700 font-medium">
									<Star
										size={20}
										className="text-yellow-500"
									/>{" "}
									{item}
								</li>
							))}
						</ul>
					</div>

					<div>
						<img
							src={Dance}
							alt="Music studio"
							className="rounded-2xl h-64 w-full object-cover shadow-lg"
						/>
					</div>
				</div>
			</section>
			<section className="px-6">
				<div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
					<div className="relative z-10">
						<h2 className="text-3xl md:text-5xl font-bold mb-6">
							Ready to Express Yourself?
						</h2>
						<p className="text-purple-100 text-lg max-w-xl mx-auto">
							Discover a world where your imagination has no bounds. Join our
							creative community today.
						</p>
					</div>
					<div className="absolute top-0 left-0 w-full h-full pattern-dots z-0 opacity-10"></div>{" "}
				</div>
			</section>
		</div>
	);
};

export default ArtsAndCreativity;
