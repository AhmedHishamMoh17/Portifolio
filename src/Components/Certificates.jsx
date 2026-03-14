import { useState } from "react";
import { motion } from "framer-motion";

// صور الشهادات
import petrojetCert from "../assets/Petrojet.jpeg";
import gastechCert from "../assets/GasTec.jpeg";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "IT Intern Training Petrojet",
      year: "2023",
      description: "Practical training in IT infrastructure and systems management.",
      image: petrojetCert,
    },
    {
      title: "IT Intern Training Gastec",
      year: "2023",
      description: "Technical support and network maintenance operations.",
      image: gastechCert,
    },
  ];

  return (
    <section
      id="certificates"
      className="relative min-h-screen px-6 md:px-24 py-24 flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#0F172A" }} // توحيد الخلفية مع باقي الموقع
    >
      {/* لمسة إضاءة جانبية خفيفة */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* العنوان */}
        <motion.div 
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certificates & <span className="text-blue-500">Internships</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-500 rounded-full md:mx-0 mx-auto shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </motion.div>

        {/* شبكة الشهادات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 cursor-pointer overflow-hidden transition-all"
              whileHover={{ 
                y: -10, 
                borderColor: "rgba(59,130,246,0.3)",
                backgroundColor: "rgba(30, 41, 59, 0.6)"
              }}
              onClick={() => setSelectedCert(cert.image)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* أيقونة تظهر عند الهوفر تعطي إحياء بالضغط للمعاينة */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <span className="inline-block px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                Internship
              </span>
              
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {cert.description}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-emerald-500 font-mono font-semibold">{cert.year}</span>
                <span className="text-slate-500 text-xs font-medium uppercase tracking-tighter">View Document</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - كما هو في كودك الأصلي تماماً */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[1000]"
          onClick={() => setSelectedCert(null)}
        >
          <motion.img
            src={selectedCert}
            alt="Certificate"
            className="max-w-full max-h-full sm:max-w-[90%] sm:max-h-[90%] rounded-2xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
}