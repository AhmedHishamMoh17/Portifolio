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
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center px-6 md:px-32 py-24 bg-[#0F172A] text-white gap-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="bg-[#1E293B] p-6 rounded-3xl shadow-2xl flex flex-col justify-between"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Content */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#3B82F6]">
                {project.name}
              </h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#3B82F6] text-white px-3 py-1 rounded-xl text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sticky Button at the bottom */}
            <motion.button
              className="mt-6 px-5 py-2 rounded-xl font-semibold text-white bg-[#3B82F6] hover:bg-[#1E40AF] transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => alert(`Viewing ${project.name}`)}
            >
              View Project
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
