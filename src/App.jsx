import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Contact from "./page/contact";
import Programs from "./page/Programs";
import Academics from "./page/Academics";
import AboutUs from "./page/AboutUs";


const App = () => {
	return (
		<div className="font-medium flex flex-col h-screen text-lg">
			<Navbar></Navbar>
			<div className="grow py-8">
				<Routes>
					<Route
						path="/school"
						element={<Home></Home>}></Route>
					<Route
						path="/contact"
						element={<Contact></Contact>}></Route>
					<Route
						path="/programs"
						element={<Programs></Programs>}></Route>
					<Route
						path="/academics"
						element={<Academics></Academics>}></Route>
					<Route
						path="/about"
						element={<AboutUs></AboutUs>}></Route>
					<Route
						path="/contact"
						element={<Contact></Contact>}></Route>
				</Routes>
			
			</div>
		</div>
	);
};

export default App;
