import { motion } from "framer-motion";
import universityPic from "../assets/helwan univeristy.jpg";

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24"
      style={{ backgroundColor: "#0F172A" }}
    >
      {/* لمسة إضاءة جانبية */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* الجزء الخاص بالصورة - مع إضافة Frame احترافي */}
        <motion.div
          className="relative flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            {/* الديكور اللي خلف الصورة */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500/30 rounded-3xl -z-10 group-hover:-bottom-2 group-hover:-right-2 transition-all duration-500" />
            
            <img
              src={universityPic}
              alt="Helwan University"
              className="w-64 sm:w-80 md:w-[30rem] aspect-[4/3] object-cover rounded-3xl shadow-2xl border border-white/5 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* الجزء الخاص بالمعلومات */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-blue-500 font-bold mb-2">Education</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Helwan University
            </h3>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-medium text-slate-200">
                Faculty of Computers and Artificial Intelligence
              </p>
              <p className="text-lg md:text-xl text-slate-400">
                Software Engineering Department
              </p>
            </div>

            <div className="inline-block mt-4 px-4 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-[#28A745] font-semibold">
              2022 — 2026
            </div>

            <p className="mt-8 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
              Learned web development, building modern <span className="text-white">Frontend and Backend</span> applications using React and .NET. 
              Gained strong foundations in programming and software engineering through consistent <span className="text-white">problem solving</span> since day one.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}