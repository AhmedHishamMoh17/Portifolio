import { motion } from "framer-motion";
import profilePic from "../assets/me.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 py-20 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="relative z-10 max-w-4xl text-center md:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ahmed Hisham
        </motion.h1>

        <motion.h2
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-[#3B82F6]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full Stack Software Engineer | React & .NET
        </motion.h2>

        <motion.p
          className="mt-6 text-sm sm:text-base md:text-lg text-[#A0A0A0] leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Full Stack Software Engineer specializing in React and .NET. Focused on building scalable, high-performance web applications with clean architecture and long-term reliability.
        </motion.p>

        <motion.p
          className="mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-[#28A745]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Let’s build together.
        </motion.p>
      </div>

      <motion.div
        className="mt-10 md:mt-0 flex justify-center md:justify-end items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.img
          src={profilePic}
          alt="Ahmed Hisham"
          className="w-56 sm:w-72 md:w-96 rounded-3xl shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
