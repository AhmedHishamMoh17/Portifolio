import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function CTAContact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex scroll-mt-[64px] flex-col items-center justify-center px-6 md:px-32 bg-[#0F172A] text-white relative overflow-hidden"
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

      {/* CTA Text */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let’s work together!
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center text-[#A0A0A0] max-w-2xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m open to collaborating on innovative projects, building scalable web applications, and bringing ideas to life with clean code and modern architecture.
      </motion.p>

      {/* Contact Icons */}
      <motion.div
        className="flex gap-8 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
          className="text-[#3B82F6] hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ahmedhishamsalem01-del"
          target="_blank"
          className="text-white hover:text-gray-400 text-3xl transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/_subwayy-"
          target="_blank"
          className="text-pink-500 hover:text-pink-400 text-3xl transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/186yUURFH3/"
          target="_blank"
          className="text-blue-700 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
        >
          <FaFacebook />
        </a>
      </motion.div>
    </section>
  );
}
