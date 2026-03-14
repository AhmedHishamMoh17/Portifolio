import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Port Management System",
      description:
        "Manage port shipments efficiently, including arrival schedules, types of cargo, and overall organization.",
      tags: ["React", "HTML", "CSS"],
    },
    {
      name: "Clinic Management System",
      description:
        "Manage doctor appointments, patient medical records, diagnoses, and prescriptions efficiently.",
      tags: ["React", "HTML", "CSS"],
    },
    {
      name: "Faculty Portal System",
      description:
        "A portal for faculty members to access all their data, research, and achievements in a single system.",
      tags: ["React", "HTML5", "Tailwind", "CSS3"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center px-6 md:px-24 py-24 bg-[#0F172A] text-white overflow-hidden"
    >
      {/* لمسة إضاءة في الخلفية لكسر الملل */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* العنوان */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </motion.div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: "rgba(59,130,246,0.3)" }}
            >
              {/* أيقونة ديكور خلفية لكل كارد */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="mt-4 text-slate-400 leading-relaxed min-h-[80px]">
                  {project.description}
                </p>
                
                {/* الـ Tags بشكل احترافي */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-900/50 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* زر المشروع */}
              <motion.button
                className="mt-10 w-full py-3 rounded-xl font-bold text-white bg-blue-600/90 hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => alert(`Viewing ${project.name}`)}
              >
                View Project
                <svg 
                  className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}