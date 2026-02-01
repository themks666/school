import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="w-full flex justify-center">
			<div className="flex w-11/12 border-b-3 border-gray-400/40 rounded-sm  justify-around shadow py-4 items-center">
				<Link to='/' className="font-black text-2xl">
				<img src="/logo.png" alt="" className="size-10"/>
				</Link>
				<div className="flex space-x-7">
					<Link
						to="/about"
						className="hover:text-blue-500">
						About Us
					</Link>
					<Link
						to="/programs"
						className="hover:text-blue-500">
						Programs
					</Link>
					<Link
						to="/academics"
						className="hover:text-blue-500">
						Acadmics
					</Link>
				</div>
				<div className="flex space-x-4">
					<Link
						to="/contact"
						className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
						Contact Us
					</Link>

				</div>
			</div>
		</div>
	);
};

export default Navbar;
