import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Contact from "./page/contact";
import Programs from "./page/Programs";
import Academics from "./page/Academics";
import AboutUs from "./page/AboutUs";
import EarlyPrograms from "./page/EarlyPrograms"
import PrimaryEducation from "./page/PrimaryEducation";
import Secondary from "./page/Secondary";
import Sports from "./page/Sports";
import ArtsAndCreativity from "./page/Arts";
import Gallery from "./page/Gallary";


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
						path="/school/contact"
						element={<Contact></Contact>}></Route>
					<Route
						path="/school/programs"
						element={<Programs></Programs>}></Route>
					<Route
						path="/school/academics"
						element={<Academics></Academics>}></Route>
					<Route
						path="/school/about"
						element={<AboutUs></AboutUs>}></Route>
					<Route
						path="/school/contact"
						element={<Contact></Contact>}></Route>
					<Route
						path="/early-year"
						element={<EarlyPrograms></EarlyPrograms>}></Route>
					<Route
						path="/schoolprimary-education"
						element={<PrimaryEducation></PrimaryEducation>}></Route>
					<Route
						path="/school/secondary-education"
						element={<Secondary></Secondary>}></Route>
					<Route
						path="/school/sports"
						element={<Sports></Sports>}></Route>
					<Route
						path="/school/middle-education"
						element={<Contact></Contact>}></Route>
					<Route
						path="/school/arts"
						element={<ArtsAndCreativity></ArtsAndCreativity>}></Route>
					<Route
						path="/school/gallary"
						element={<Gallery></Gallery>}></Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
