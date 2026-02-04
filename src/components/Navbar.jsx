import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG
import Logo from "/logo.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{name: "Home", path: "/"},
		{ name: "About Us", path: "/about" },
		{ name: "Programs", path: "/programs" },
		{ name: "Academics", path: "/academics" },
		{ name: "Gallary", path: "/gallary" },
	];

	return (
		<nav className="w-full flex justify-center pt-4 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
			<div className="w-11/12 md:w-10/12 border-b-2 border-gray-100 rounded-xl bg-white/50 px-6 py-4 flex justify-between items-center shadow-sm">
				<Link
					to="/"
					className="flex items-center gap-2">
					<img
						src={Logo}
						alt="School Logo"
						className="h-10 w-auto"
					/>
					<span className="hidden sm:block font-bold text-xl tracking-tight text-slate-800">
						ACADEMY
					</span>
				</Link>

		
				<div className="hidden md:flex items-center space-x-10">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.path}
							className="font-medium text-slate-600 hover:text-indigo-600 transition-colors">
							{link.name}
						</Link>
					))}
				</div>

	
				<div className="hidden md:block">
					<Link
						to="/contact"
						className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
						Contact Us
					</Link>
				</div>

				
				<button
					className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			
			{isOpen && (
				<div className="absolute top-full left-1/2 -translate-x-1/2 w-11/12 bg-white mt-2 rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-col gap-4 md:hidden animate-in fade-in zoom-in duration-200">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.path}
							onClick={() => setIsOpen(false)}
							className="text-lg font-semibold text-slate-700 hover:text-indigo-600">
							{link.name}
						</Link>
					))}
					<hr className="border-slate-100" />
					<Link
						to="/contact"
						onClick={() => setIsOpen(false)}
						className="w-full py-3 bg-indigo-600 text-white text-center rounded-xl font-bold">
						Contact Us
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
