import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaCogs, FaLaptopCode, FaServer } from "react-icons/fa";
import { SiDotnet, SiTailwindcss } from "react-icons/si";

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
      <div className="flex flex-col md:flex-row md:gap-12 gap-8">

        {/* Frontend Card */}
        <motion.div
          className="md:w-1/2 bg-[#0F172A] rounded-3xl shadow-2xl p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.03, boxShadow: "0px 20px 40px rgba(0,0,0,0.5)" }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl flex items-center gap-2 sm:text-3xl md:text-4xl font-semibold mb-6 text-white">
            <FaLaptopCode size={35} /> Frontend
          </h3>
          <p className="text-gray-300 mb-6">
            I have strong skills in building responsive and interactive user interfaces. My frontend expertise includes modern frameworks and clean design principles.
          </p>
          <div className="flex flex-wrap gap-4">
            {frontendSkills.map(skill => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 bg-black px-4 py-2 rounded-xl text-white font-medium shadow-md cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          className="md:w-1/2 bg-[#0F172A] rounded-3xl shadow-2xl p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.03, boxShadow: "0px 20px 40px rgba(0,0,0,0.5)" }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl flex items-center gap-2 sm:text-3xl md:text-4xl font-semibold mb-6 text-white">
            <FaServer size={30} /> Backend
          </h3>
          <p className="text-gray-300 mb-6">
            I also have experience building scalable backend systems with clean architecture and robust APIs, ensuring reliability and performance.
          </p>
          <div className="flex flex-wrap gap-4">
            {backendSkills.map(skill => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 bg-black px-4 py-2 rounded-xl text-white font-medium shadow-md cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
