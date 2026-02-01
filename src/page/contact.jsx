import React from "react";

const ContactUs = () => {
	return (
		<div className="min-h-screen bg-white font-sans">
			{/* Header Section */}
			<section className="py-16 px-6 text-center bg-slate-50">
				<h1 className="text-4xl md:text-5xl font-bold text-[#1a1a4b] mb-4">
					Get in <span className="text-purple-600">Touch</span>
				</h1>
				<p className="max-w-xl mx-auto text-gray-600">
					Have questions about admissions or our curriculum? We're here to help.
					Reach out to us and we'll get back to you within 24 hours.
				</p>
			</section>

			<section className="max-w-7xl mx-auto py-12 px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Left Side: Contact Information */}
					<div className="bg-[#1a1a4b] text-white p-10 rounded-[2.5rem] shadow-xl h-full">
						<h2 className="text-3xl font-bold mb-8">Contact Information</h2>

						<div className="space-y-8">
							<div className="flex items-start gap-4">
								<div className="bg-purple-600 p-3 rounded-2xl">
									<span className="text-2xl">📞</span>
								</div>
								<div>
									<p className="text-purple-300 text-sm font-bold uppercase tracking-wider">
										Call Us
									</p>
									<p className="text-xl">+977 9800000000</p>
									<p className="text-gray-400 text-sm">Mon-Fri: 9am - 4pm</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="bg-green-500 p-3 rounded-2xl">
									<span className="text-2xl">📧</span>
								</div>
								<div>
									<p className="text-green-300 text-sm font-bold uppercase tracking-wider">
										Email Us
									</p>
									<p className="text-xl">info@newsunshine.edu</p>
									<p className="text-gray-400 text-sm">Official Inquiries</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="bg-blue-500 p-3 rounded-2xl">
									<span className="text-2xl">📍</span>
								</div>
								<div>
									<p className="text-blue-300 text-sm font-bold uppercase tracking-wider">
										Visit Us
									</p>
									<p className="text-xl">123 Education Lane, Kathmandu</p>
									<p className="text-gray-400 text-sm">School Campus</p>
								</div>
							</div>
						</div>

						{/* Map Placeholder */}
						<div className="mt-12 w-full h-48 bg-slate-700/50 rounded-3xl border border-slate-600 flex items-center justify-center italic text-slate-400">
							[ Interactive Google Map Integration ]
						</div>
					</div>

					{/* Right Side: Inquiry Form */}
					<div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl">
						<h3 className="text-2xl font-bold text-[#1a1a4b] mb-6">
							Send us a Message
						</h3>

						<form
							className="space-y-5"
							onSubmit={(e) => e.preventDefault()}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">
										Parent Name
									</label>
									<input
										type="text"
										placeholder="John Doe"
										className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
									/>
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">
										Phone Number
									</label>
									<input
										type="tel"
										placeholder="98********"
										className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									placeholder="name@example.com"
									className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
								/>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Interested Level
								</label>
								<select className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition appearance-none">
									<option>Nursery - UKG</option>
									<option>Primary (Grade 1-5)</option>
									<option>Secondary (Grade 6-10)</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									Your Message
								</label>
								<textarea
									rows="4"
									placeholder="Tell us about your child or ask a specific question..."
									className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"></textarea>
							</div>

							<button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95">
								Submit Inquiry
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;
