import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function CTAContact() {
  const socialLinks = [
    { icon: <FaEnvelope />, href: "mailto:ahmedhishamsalem01@gmail.com", color: "#28A745", label: "Email" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ahmed-salem-97a178284", color: "#0077B5", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/AhmedHishamMoh17", color: "#ffffff", label: "GitHub" },
    { icon: <FaInstagram />, href: "https://instagram.com/_subwayy_", color: "#E1306C", label: "Instagram" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/share/186yUURFH3/", color: "#1877F2", label: "Facebook" },
    { icon: <FaWhatsapp />, href: "https://wa.me/201283856454", color: "#25D366", label: "WhatsApp" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Title with Gradient */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let’s build something <br className="hidden md:block" /> amazing together!
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Whether you have a question or just want to say hi, my inbox is always open. 
          I’m currently looking for new <span className="text-blue-400 font-medium">opportunities</span> and innovative projects.
        </motion.p>

        {/* Social Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-4 bg-slate-800/30 border border-white/5 rounded-2xl transition-all duration-300"
              style={{ color: "white" }}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: `${link.color}44` // 44 is hex alpha for transparency
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: link.color }}
              />
              
              <div className="relative text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: link.color }}>
                {link.icon}
              </div>
              
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 uppercase tracking-widest">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright or Footer Note */}
        {/* <motion.div 
          className="mt-32 text-slate-500 text-sm font-mono tracking-tighter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2026 Designed & Built by Ahmed Hisham
        </motion.div> */}
      </div>
    </section>
  );
}