import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["hero","about","education","skills","projects","certificates","contact"];

  return (
    <nav className="fixed top-0 left-0 w-screen bg-[#0F172A]/80 backdrop-blur-md z-50 px-4 md:px-6 py-4 flex justify-between items-center">
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="absolute top-full right-0 left-0 mx-4 mt-2 bg-[#0F172A] flex flex-col gap-4 py-4 px-6 rounded-lg shadow-xl text-white max-w-[calc(100vw-2rem)]"
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
