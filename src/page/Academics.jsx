import Image1 from "/priamryPhoto.jpg"
import Image2 from "/middlePhoto.jpg"
import Image3 from "/secondaryPhoto.jpg"
import { CheckCircle2, GraduationCap, BookOpen, Microscope } from "lucide-react";

const Academics = () => {
  const levels = [
		{
			id: "preschool",
			title: "Foundation: Nursery to UKG",
			subtitle: "Age: 3 - 5 Years",
			description:
				"Our Early Years program focuses on the 'Play-Way' method, ensuring children develop a love for learning through exploration and creative activities.",
			focus: [
				"Education & Mental development",
				"Basic Maths",
				"English Language",
				"Social Etiquette",
			],
			themeColor: "text-purple-600",
			accentBg: "bg-purple-100",
			dotColor: "bg-purple-500",
			icon: <GraduationCap className="text-purple-600" />,
			src: Image1
		},
		{
			id: "primary",
			title: "Primary School: Grade 1 - 5",
			subtitle: "Age: 6 - 10 Years",
			description:
				"At this stage, we transition into formal inquiry-based learning. We focus on building strong core competencies in languages and sciences.",
			focus: [
				"Creative Writing",
				"Mental Math",
				"Environmental Science",
				"ICT Basics",
			],
			themeColor: "text-emerald-600",
			accentBg: "bg-emerald-100",
			dotColor: "bg-emerald-500",
			icon: <BookOpen className="text-emerald-600" />,
			src: Image2
		},
		{
			id: "secondary",
			title: "Secondary School: Grade 6 - 10",
			subtitle: "Age: 11 - 15 Years",
			description:
				"Our secondary curriculum is designed to challenge students and prepare them for higher education through rigorous academic and life-skill training.",
			focus: [
				"Advanced STEM",
				"Social Studies",
				"Leadership Skills",
				"Laboratory Research",
			],
			themeColor: "text-blue-600",
			accentBg: "bg-blue-100",
			dotColor: "bg-blue-500",
			icon: <Microscope className="text-blue-600" />,
			src: Image3
		},
	];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* --- Page Header --- */}
      <section className="bg-slate-900 text-white py-12 px-6 text-center rounded-b-[4rem] shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Academic <span className="text-blue-700 ">Excellence</span>
          </h1>
          <p className="text-xl text-indigo-100/80 leading-relaxed max-w-2xl mx-auto">
            A structured and holistic journey from first steps to graduation, 
            nurturing the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* --- Academic Levels Section --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="space-y-32">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className={`flex flex-col md:flex-row items-center gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${level.accentBg}`}>
                    {level.icon}
                  </div>
                  <span className={`font-black uppercase tracking-[0.2em] text-sm ${level.themeColor}`}>
                    {level.subtitle}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  {level.title}
                </h2>
                
                <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-slate-200 pl-6">
                  "{level.description}"
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {level.focus.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <CheckCircle2 size={20} className={level.themeColor} />
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full relative">
                <div className={`absolute inset-0 ${level.accentBg} rounded-[3rem] rotate-3 -z-10`}></div>
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] border-8 border-white">
                  <img
                    src={level.src}
                    alt={level.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Modern Curriculum Table --- */}
      <section className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Curriculum Overview
            </h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-500 text-lg font-medium">
              A balanced learning approach for every milestone.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-slate-200 shadow-2xl bg-white">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-8 font-bold uppercase tracking-wider text-sm">Learning Stream</th>
                  <th className="p-8 font-bold uppercase tracking-wider text-sm">Pre-Primary focus</th>
                  <th className="p-8 font-bold uppercase tracking-wider text-sm">Primary & Secondary focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-8">
                    <span className="font-black text-slate-900 text-lg block">Core Subjects</span>
                  </td>
                  <td className="p-8 text-slate-600 font-medium">English, Math, Nepali</td>
                  <td className="p-8 text-slate-600 font-medium italic">Sci, Math, Social Studies</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-8">
                    <span className="font-black text-slate-900 text-lg block">Skill Lab</span>
                  </td>
                  <td className="p-8 text-slate-600 font-medium">Storytelling, Art</td>
                  <td className="p-8 text-slate-600 font-medium italic">Accounting, Math, Debate</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-8">
                    <span className="font-black text-slate-900 text-lg block">Physical Ed.</span>
                  </td>
                  <td className="p-8 text-slate-600 font-medium">Yoga, Fun Games</td>
                  <td className="p-8 text-slate-600 font-medium italic">Team Sports, Athletics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;