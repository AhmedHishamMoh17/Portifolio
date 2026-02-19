import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["hero","about","education","skills","projects","certificates","contact"];

  // ارتفاع الـ Navbar للتعديل في الـ scroll
  const navbarHeight = 64; // تقريبياً 16px padding + font-size

  return (
    <nav className="fixed top-0 left-0 w-screen bg-[#0F172A]/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo / Name */}
      <h1 className="text-white font-bold text-xl flex-shrink-0">Ahmed Hisham</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white">
        {links.map(link => (
          <li key={link}>
            <Link
              to={link}
              smooth={true}
              duration={800}
              offset={-navbarHeight} // مهم عشان الـ fixed navbar
              className="hover:text-[#3B82F6] cursor-pointer"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div
        className="md:hidden z-50 text-white cursor-pointer text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="fixed top-16 right-4 bg-[#0F172A] flex flex-col gap-4 py-4 px-6 rounded-lg shadow-xl text-white w-48 md:hidden z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(link => (
              <li key={link}>
                <Link
                  to={link}
                  smooth={true}
                  duration={800}
                  offset={-navbarHeight} // نفس offset للموبايل
                  className="hover:text-[#3B82F6] cursor-pointer block"
                  onClick={() => setOpen(false)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
