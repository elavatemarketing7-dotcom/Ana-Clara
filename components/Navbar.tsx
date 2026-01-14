
import React from 'react';

const Navbar: React.FC = () => {
  const sections = [
    "Sobre Mim",
    "Prova Visual",
    "Harmonização de <3",
    "Onde nos Encontrar",
    "Contato",
    "Sobre Mim",
    "Prova Visual",
    "Harmonização de <3",
    "Onde nos Encontrar",
    "Contato"
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap">
        {sections.map((sec, i) => (
          <button
            key={i}
            className="mx-8 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors"
          >
            {sec}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
