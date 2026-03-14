import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/AhmedHishamMohamedElsayedSalem.pdf";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  // تغيير شكل الـ Navbar عند الـ Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarHeight = 80;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-24 py-4 flex justify-between items-center ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-lg shadow-2xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          A
        </div>
        <h1 className="text-white font-bold text-xl tracking-tight hidden sm:block">
          Ahmed <span className="text-blue-500 text-sm">Hisham</span>
        </h1>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <motion.li
            key={link.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to={link.id}
              spy={true} // عشان يعرف السكشن اللي هو فيه
              smooth={true}
              duration={800}
              offset={-navbarHeight}
              activeClass="text-blue-500 font-semibold" // ينور لما يوصل للسكشن
              className="text-slate-300 hover:text-white transition-colors cursor-pointer text-sm uppercase tracking-widest relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.li>
        ))}
        {/* زر الـ Resume السريع كإضافة شيك */}
        <motion.a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full border border-blue-500/50 text-blue-400 text-xs font-bold hover:bg-blue-500 hover:text-white transition-all shadow-lg flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          RESUME
        </motion.a>
      </ul>

      {/* Mobile Toggle */}
      <div
        className="md:hidden z-[110] text-white cursor-pointer w-10 h-10 flex items-center justify-center bg-slate-800/50 rounded-lg border border-white/5"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl">☰</span>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menu Card */}
            <motion.ul
              className="fixed top-20 right-6 left-6 bg-slate-900 border border-white/10 flex flex-col gap-6 py-10 px-6 rounded-3xl shadow-2xl text-white z-[110] md:hidden text-center"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    spy={true}
                    duration={800}
                    offset={-navbarHeight}
                    activeClass="text-blue-500"
                    className="text-xl font-medium block transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <hr className="border-white/5 w-full mx-auto" />
              <button className="bg-blue-600 py-3 rounded-2xl font-bold">
                Download CV
              </button>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
