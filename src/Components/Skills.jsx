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
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  ];

  const backendSkills = [
    { name: ".NET", icon: <SiDotnet className="text-[#512BD4]" /> },
    { name: "C#", icon: <FaCogs className="text-[#239120]" /> },
    { name: "SQL", icon: <FaDatabase className="text-[#4479A1]" /> },
    { name: "REST APIs", icon: <FaServer className="text-blue-400" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "VS Code", icon: <FaLaptopCode className="text-[#007ACC]" /> },
    { name: "Visual Studio", icon: <FaLaptopCode className="text-[#C8C8C8]" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      {/* لمسة إضاءة في الخلفية */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tech <span className="text-blue-500">Stack</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-500 rounded-full md:mx-0 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Frontend", icon: <FaLaptopCode />, skills: frontendSkills },
            { title: "Backend", icon: <FaServer />, skills: backendSkills },
            { title: "Tools", icon: <FaCogs />, skills: tools }
          ].map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ borderColor: "rgba(59,130,246,0.2)" }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-blue-400">
                {category.icon} {category.title}
              </h3>

              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-2 bg-slate-900/50 border border-white/5 px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-slate-200">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}