import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const fullName = "Gianfranco Gatto";
  const [displayName, setDisplayName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const links = ["home", "projects", "about", "contact"];

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const interval = setInterval(() => {
        setDisplayName((prev) => prev + fullName[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  // Función para desplazar la página hacia arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* Nombre animado con función scroll */}
      <a
        href="#home"
        onClick={scrollToTop}  // Al hacer clic, sube hacia arriba
        className="text-2xl transition-all duration-300 hover:tracking-wider cursor-pointer"
        style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
      >
        {displayName}
      </a>

      {/* Links desktop con línea + agrandado */}
      <div className="relative hidden md:flex gap-6 text-sm font-medium">
        {links.map((link) => (
          <div key={link} className="relative">
            <a
              href={`#${link}`}
              onClick={() => {
                setActive(link);
                if (link === "home") scrollToTop();  // Scroll al hacer clic en "Home"
              }}
              className={`inline-block transition-all duration-300 hover:text-gray-300 ${
                active === link ? "scale-110 text-gray-300" : ""
              }`}
              style={{
                transformOrigin: "center",
                display: "inline-block",
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>

            {active === link && (
              <motion.div
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white"
              />
            )}
          </div>
        ))}
      </div>

      {/* Botón menú móvil */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Menú móvil */}
      {open && (
        <div className="absolute top-16 right-6 bg-black p-4 rounded-md shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link}>
                <a 
                  href={`#${link}`} 
                  onClick={() => {
                    setOpen(false);
                    if (link === "home") scrollToTop();  // Scroll al hacer clic en "Home" desde el menú móvil
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
