import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function CTAContact() {
  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-[64px] flex flex-col items-center justify-center px-6 md:px-32 bg-[#0F172A] text-white relative overflow-hidden"
    >
      {/* Background Glows */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 top-[-50px] left-[-50px]"
        style={{ backgroundColor: "#3B82F6" }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-30 bottom-[-100px] right-[-100px]"
        style={{ backgroundColor: "#1E3A8A" }}
      />

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Let’s work together!
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center text-[#A0A0A0] max-w-2xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m open to collaborating on innovative projects, building scalable web applications, and bringing ideas to life with clean code and modern architecture.
      </motion.p>

      {/* Icons */}
      <motion.div
        className="flex gap-8 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="mailto:ahmedhishamsalem01@gmail.com"
          className="text-[#28A745] hover:text-green-600 text-3xl transition-transform transform hover:scale-110"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/ahmed-salem-97a178284"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3B82F6] hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/ahmedhishamsalem01-del"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-3xl transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://instagram.com/_subwayy-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 text-3xl transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/share/186yUURFH3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
        >
          <FaFacebook />
        </a>
      </motion.div>
    </section>
  );
}