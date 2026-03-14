import { motion } from "framer-motion";
import profilePic from "../assets/me.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-6 py-20 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      {/* 1. الخلفية المضيئة - مثبتة بالنسبة للسكشن */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. الـ Container اللي بيحل مشكلة الـ Gap */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* الجزء الخاص بالنصوص */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ahmed <span className="text-blue-500">Hisham</span>
          </motion.h1>

          <motion.h2
            className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-blue-400/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full Stack Software Engineer
          </motion.h2>

          <motion.p
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Specializing in <span className="text-slate-200 font-medium">React & .NET</span>. 
            Focused on building scalable, high-performance web applications with clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center justify-center md:justify-start gap-3 text-[#28A745] font-semibold text-lg md:text-xl"
          >
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Let’s build together.
          </motion.div>
        </div>

        {/* الجزء الخاص بالصورة */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            {/* توهج خلف الصورة */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <motion.img
              src={profilePic}
              alt="Ahmed Hisham"
              className="relative w-64 sm:w-80 md:w-[28rem] aspect-square object-cover rounded-[2rem] shadow-2xl border border-white/10"
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}