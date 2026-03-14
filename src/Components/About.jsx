import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24"
      style={{ backgroundColor: "#0F172A" }} // نفس لون خلفية الـ Hero لضمان الانسيابية
    >
      {/* لمسة خلفية بسيطة لربط التصميم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* العنوان مع خط سفلي متدرج */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <motion.div
            className="space-y-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* الفقرة الأولى - القصة */}
            <p className="text-lg md:text-2xl leading-[1.8] text-slate-300 font-light italic">
              "I got into programming out of pure curiosity. Early on, I used to deal
              with modified software and games—configuring them, fixing issues, and
              getting things to run. That experience pushed me to understand how
              applications are built and how websites work behind the scenes."
            </p>

            {/* الفاصل الزمني البصري */}
            <div className="flex justify-center py-4">
               <div className="w-12 h-[1px] bg-slate-700" />
            </div>

            {/* الفقرة الثانية - الخبرة الحالية */}
            <p className="text-lg md:text-2xl leading-[1.8] text-slate-400">
              I eventually found my place in web development, building complete
              systems using <span className="text-blue-400 font-medium">React and .NET</span>. 
              I value clean, maintainable code and scalable architecture, and I’m known for being 
              <span className="text-emerald-400 font-medium ml-1">flexible and collaborative</span>—open to 
              refining and adjusting solutions as requirements evolve, while keeping 
              everything structured.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}