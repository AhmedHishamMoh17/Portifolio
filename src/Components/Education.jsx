import { motion } from "framer-motion";
import universityPic from "../assets/helwan univeristy.jpg"; // حط صورة الجامعة هنا

export default function Education() {
  return (
    <motion.section
      id="education"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-32 py-24 bg-[#0F172A] text-white gap-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* University Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={universityPic}
          alt="Helwan University"
          className="w-64 sm:w-72 md:w-96 rounded-3xl shadow-2xl object-cover"
        />
      </motion.div>
      {/* University Info */}
      <div className="md:w-1/2">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-[#3B82F6]">
          Helwan University
        </h3>

        <p className="text-lg sm:text-xl md:text-2xl mb-2 font-medium text-[#A0A0A0]">
          Faculty of Computers and Artificial Intelligence
        </p>

        <p className="text-lg sm:text-xl md:text-2xl mb-2 font-medium text-[#A0A0A0]">
          Software Engineering Department
        </p>

        <p className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-[#28A745]">
          2022 - 2026
        </p>

        <p className="text-base sm:text-lg md:text-xl text-[#A0A0A0] leading-relaxed">
          Learned web development, building modern Frontend and Backend
          applications using React and .NET. Started problem solving from the
          first semester and gained strong foundations in programming and
          software engineering.
        </p>
      </div>
    </motion.section>
  );
}
