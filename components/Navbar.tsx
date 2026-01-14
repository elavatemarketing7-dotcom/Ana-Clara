
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: "Sobre Mim", id: "sobre" },
    { name: "Prova Visual", id: "resultados" },
    { name: "Harmonização de <3", id: "bastidores" },
    { name: "Onde nos Encontrar", id: "onde" },
    { name: "Contato", id: "contato" }
  ];

  // Duplicamos para o efeito de marquee infinito
  const displayItems = [...navItems, ...navItems, ...navItems];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 py-3.5 shadow-sm overflow-hidden group">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {displayItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <button
              onClick={() => scrollTo(item.id)}
              className="mx-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-all duration-300 flex items-center gap-2 group/btn"
            >
              <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
              {item.name}
            </button>
            <span className="text-stone-200 text-xs font-light">|</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
