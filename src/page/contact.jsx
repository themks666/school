import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactUs = () => {
	return (
		<div className="min-h-screen bg-[#F8FAFC] font-sans">
			=
			<section className="py-5 px-6 text-center bg-white border-b border-slate-100">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-5xl md:text-7xl font-black text-[#1a1a4b] mb-6 tracking-tight">
						Get in <span className="text-indigo-600">Touch</span>
					</h1>
					<p className="text-xl text-slate-500 leading-relaxed">
						Have questions about admissions or our curriculum? We're here to
						help. Reach out to our team and we'll get back to you within 24
						hours.
					</p>
				</div>
			</section>
			<section className="max-w-7xl mx-auto py-10 px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
					<div className="bg-[#1a1a4b] text-white p-12 rounded-[3rem] shadow-2xl flex flex-col justify-between">
						<div>
							<h2 className="text-4xl font-bold mb-10">Contact Information</h2>

							<div className="space-y-10">
								<ContactDetail
									icon={<Phone size={24} />}
									title="Call Us"
									value="+977 9841239912"
									sub="Available Mon-Fri: 9am - 4pm"
									color="bg-indigo-500"
								/>

								<ContactDetail
									icon={<Mail size={24} />}
									title="Email Us"
									value="rudramatipathshala@gmail.com"
									sub="Official Admission Inquiries"
									color="bg-emerald-500"
								/>

								<ContactDetail
									icon={<MapPin size={24} />}
									title="Visit Us"
									value="Rudramati Marga, Kathmandu"
									sub="Main School Campus"
									color="bg-blue-500"
								/>
							</div>
						</div>

						<div className="mt-6 rounded-2xl cursor-pointer">
							<div className="text-center group-hover:scale-110 transition-transform">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.9812000044925!2d85.3387402027675!3d27.71797387384369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196df4429f89%3A0xc4018a99add7eeea!2sNEW%20SUNSHINE%20SECONDARY%20SCHOOL!5e0!3m2!1sen!2snp!4v1770197285741!5m2!1sen!2snp"
									width="100%"
									height="100%"
									loading="lazy"></iframe>
							</div>
						</div>
					</div>

					{/* --- Right Side: Minimalist Inquiry Form --- */}
					<div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
						<div className="mb-10">
							<h3 className="text-3xl font-bold text-[#1a1a4b] mb-2 flex items-center gap-3">
								Send a Message{" "}
								<Send
									size={24}
									className="text-indigo-600"
								/>
							</h3>
							<p className="text-slate-500">
								Fill out the form below and we will contact you shortly.
							</p>
						</div>

						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSfGtvEFLgpEoAbJfFLDK_GcO9MoGrrEGt7zBNXZHLqCA2e63Q/viewform?embedded=true"
							width="640"
							height="808"
							frameborder="0"
							marginheight="0"
							marginwidth="0">
							Loading…
						</iframe>
					</div>
				</div>
			</section>
		</div>
	);
};

// --- Reusable Sub-Components for Clean Code ---

const ContactDetail = ({ icon, title, value, sub, color }) => (
	<div className="flex items-center gap-6 group">
		<div
			className={`${color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
			{icon}
		</div>
		<div>
			<p className="text-indigo-300 text-xs font-black uppercase tracking-[0.2em] mb-1">
				{title}
			</p>
			<p className="text-2xl font-bold">{value}</p>
			<p className="text-slate-400 text-sm font-medium">{sub}</p>
		</div>
	</div>
);

const FormInput = ({ label, placeholder, type }) => (
	<div className="space-y-2 flex-1">
		<label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
			{label}
		</label>
		<input
			type={type}
			placeholder={placeholder}
			className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none font-medium text-slate-700"
		/>
	</div>
);

export default ContactUs;
