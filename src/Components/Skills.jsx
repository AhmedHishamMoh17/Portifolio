import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaCogs,
  FaLaptopCode,
  FaServer,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiDotnet, SiTailwindcss, SiPostman } from "react-icons/si";

export default function Skills() {
  const frontendSkills = [
    { name: "React", icon: <FaReact size={20} /> },
    { name: "HTML5", icon: <FaHtml5 size={20} /> },
    { name: "CSS3", icon: <FaCss3Alt size={20} /> },
    { name: "JavaScript", icon: <FaJs size={20} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
  ];

  const backendSkills = [
    { name: ".NET", icon: <SiDotnet size={20} /> },
    { name: "C#", icon: <FaCogs size={20} /> },
    { name: "SQL", icon: <FaDatabase size={20} /> },
    { name: "REST APIs", icon: <FaCogs size={20} /> },
  ];
  const tools = [
    { name: "Git", icon: <FaGitAlt size={18} /> },
    { name: "GitHub", icon: <FaGithub size={18} /> },
    { name: "Postman", icon: <SiPostman size={18} /> },
    { name: "VS Code", icon: <FaLaptopCode size={18} /> },
    { name: "Visual Studio", icon: <FaLaptopCode size={18} /> },
    { name: "IntelliJ IDEA", icon: <FaLaptopCode size={18} /> },
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-6 md:px-32 py-24 bg-[#1E293B] text-white gap-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold m-10 md:mb-12 text-center md:text-left tracking-wide">
        Skills
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <motion.div
          className="bg-[#0F172A] rounded-2xl p-4 shadow-xl"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
            <FaLaptopCode size={25} /> Frontend
          </h3>

          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-1.5 bg-black px-2 py-1 rounded-lg text-sm"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          className="bg-[#0F172A] rounded-2xl p-4 shadow-xl"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
            <FaServer size={25} /> Backend
          </h3>

          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-1.5 bg-black px-2 py-1 rounded-lg text-sm"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="bg-[#0F172A] rounded-2xl p-4 shadow-xl"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
            <FaCogs size={25} /> Tools
          </h3>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-1.5 bg-black px-2 py-1 rounded-lg text-sm"
              >
                {tool.icon}
                {tool.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
