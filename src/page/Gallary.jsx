import React, { useState } from "react";
import { Camera, Image as ImageIcon, Filter, Maximize2 } from "lucide-react";
import sport1 from "/sport1.jpg";
import sport2 from "/sport2.jpg";
import sport3 from "/sport3.jpg";
import sport4 from "/sport4.jpg";
import sport5 from "/sport5.jpg";
import sport6 from "/sport6.jpg";
import sport7 from "/sport7.jpg";
import sport8 from "/sport8.jpg";
import event1 from "/event1.jpg";
import event2 from "/event2.jpg";
import event3 from "/event3.jpg";
import event4 from "/event4.jpg";
import event5 from "/event5.jpg";
import image1 from '/image1.jpg'
import image2 from '/image2.jpg'
import image3 from '/imahe1.jpg'
import image4 from '/image4.jpg'
import image5 from "/speech1.jpg"
import image6 from "/speech2.jpg"
import image7 from "/speech3.jpg"
import { Link } from "react-router-dom";

const Gallery = () => {
	const [filter, setFilter] = useState("All");
	const photos = [
		{
			id: 1,
			category: "Sports",
			title: "sports week",
			src: sport1,
		},
		{
			id: 2,
			category: "Sports",
			title: "sports week",
			src: sport2,
		},
		{
			id: 2,
			category: "Sports",
			title: "sports week",
			src: sport3,
		},
		{
			id: 2,
			category: "Sports",
			title: "sports week",
			src: sport4,
		},
		{
			id: 2,
			category: "Sports",
			title: "sports week",
			src: sport5,
		},
		{
			id: 2,
			category: "Sports",
			title: "sports week",
			src: sport6,
		},
		{
			id: 2,
			category: "Sports",
			title: "sports week",
			src: sport7,
		},
		{
			id: 2,
			category: "Sports",
			title: "sports week",
			src: sport8,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: event1,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: event2,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: event3,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: event4,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: event5,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: image1,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: image2,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: image3,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: image4,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: image5,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: image6,
		},
		{
			id: 5,
			category: "Events",
			title: "",
			src: image7,
		},

	
	];
	return (
		<div className="min-h-screen bg-slate-50 font-sans">
			{/* --- Header Section --- */}
			<section className="bg-white px-6 border-b border-slate-100">
				<div className="max-w-4xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-6">
						<Camera size={16} /> MOMENTS AT ACADEMY
					</div>
					<h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
						Our <span className="text-indigo-600">Gallery</span>
					</h1>
					<p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
						A visual journey through our campus life, showcasing the
						achievements and creativity of our students.
					</p>
				</div>
			</section>

	
			<section className="max-w-7xl mx-auto py-12 px-6">
				<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
					{photos.map((photo) => (
						<div
							key={photo.id}
							className="relative group break-inside-avoid rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
							<img
								src={photo.src}
								alt={photo.title}
								className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
								<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
									<span className="text-indigo-400 text-xs font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg">
										{photo.category}
									</span>
									<h3 className="text-white text-xl font-bold mt-3 mb-1">
										{photo.title}
									</h3>
									
								</div>
							</div>
						</div>
					))}
				</div>


		
			</section>

			<section className="max-w-7xl mx-auto pb-32 px-6">
				<div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
					<div className="relative z-10">
						<h2 className="text-3xl font-bold mb-4">Follow our daily life</h2>
						<p className="text-slate-400 mb-8 max-w-md mx-auto">
							Get real-time updates and more student photos on our official
							social media handles.
						</p>
						<Link to="https://www.facebook.com/newsunshinesecschool">
							<button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-indigo-50 transition-colors flex items-center gap-3 mx-auto">
								Follow us on Facebook
							</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
