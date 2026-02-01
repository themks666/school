import { Rocket, Telescope } from "lucide-react";
import Footer from "./../components/Footer";

const Home = () => {
	return (
		<div className=" h-11/12">
			<h1 className="text-blue-950 text-5xl text-center font-black">
				Better future for your children
			</h1>
			<div className="flex h-full justify-between px-5">
				<div>
					<img
						src="/student2.jpg"
						className="hidden lg:block lg:w-96 object-cover"
						alt="school children photo"
					/>
				</div>
				<div className="relative">
					<p className="text-center text-xl text-gray-700 my-4">
						<span className="border-b-4 mt-5 border-gray-200">
							We provide quality education and a nurturing environment for all
							students.
						</span>
					</p>
					<div className="text-center flex justify-center my-10">
						<Rocket
							size={48}
							color="darkblue"></Rocket>
              <div className=" grow">

						<button className="px-8 py-3  text-white rounded-full shadow-lg shadow-purple-500/80 bg-purple-800">
							Join Us
						</button>
              </div>
					</div>
					<div className="text-center md:w-96 lg:w-2/4 m-10 mx-auto">
						Our school fosters a safe and inspiring environment where students
						develop knowledge, values, and confidence for the future.
					</div>
					<div className="h-46 w-full mx-auto">
						<Footer></Footer>
					</div>
				</div>
				<div className="">
					<img
						src="/student4.jpg"
						className="object-cover hidden lg:block aspect-square"
						alt="school children photo"
						height={80}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
