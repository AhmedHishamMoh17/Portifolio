import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about" // مهم جدًا
      className="min-h-screen flex items-center justify-center bg-[#1E293B] px-4 md:px-20 py-20 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#3B82F6]">About Me</h2>
        <p className="text-lg md:text-2xl leading-relaxed text-[#A0A0A0]">
          I got into programming out of pure curiosity. Early on, I used to deal
          with modified software and games—configuring them, fixing issues, and
          getting things to run. That experience pushed me to understand how
          applications are built and how websites work behind the scenes.
        </p>
        <p className="text:lg md:text-2xl leading-relaxed text-[#A0A0A0] mt-6">
          I eventually found my place in web development, building complete
          systems using React and .NET. I value clean, maintainable code and
          scalable architecture, and I’m known for being flexible and
          collaborative—open to refining and adjusting solutions when
          requirements evolve, while keeping changes structured and within clear
          boundaries.
        </p>
      </div>
    </motion.section>
  );
}
