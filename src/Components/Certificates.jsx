import { useState } from "react";
import { motion } from "framer-motion";

// ضع هنا صور الشهادات
import petrojetCert from "../assets/Petrojet.jpeg";
import gastechCert from "../assets/GasTec.jpeg";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "IT Intern Training Petrojet",
      year: "2023",
      image: petrojetCert,
    },
    {
      title: "IT Intern Training Gastec",
      year: "2023",
      image: gastechCert,
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen px-6 md:px-20 py-20 bg-[#1E293B] text-white relative"
    >
      <h2 className="text-4xl font-bold mb-10 text-[#3B82F6]">
        Certificates & Internships
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <motion.div
            key={cert.title}
            className="bg-[#0F172A] rounded-xl p-6 shadow-lg cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.5)",
            }}
            onClick={() => setSelectedCert(cert.image)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold">{cert.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{cert.year}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal for certificate image */}
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
