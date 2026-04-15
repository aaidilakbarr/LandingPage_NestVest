import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background
      setScrolled(window.scrollY > 50);

      // Determine the active section based on scroll position
      const sections = ['hero', 'features', 'properties', 'about', 'contact', 'testimonials'];
      let currentSection = 'hero';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element's top is less than a specific offset from the screen top, it's considered active
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to ensure it's correct on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'features', label: 'Fitur' },
    { id: 'properties', label: 'Properti' },
    { id: 'about', label: 'Tentang' },
    { id: 'testimonials', label: 'Testimoni' },
    { id: 'contact', label: 'Kontak' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-slate-900' : 'bg-transparent py-8 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          NestVest
        </div>
        
        {/* Links */}
        <ul className="hidden md:flex items-center space-x-2 lg:space-x-6 text-[11px] font-bold tracking-widest uppercase">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    px-5 py-2.5 rounded-full transition-all duration-300
                    ${isActive 
                      ? scrolled 
                        ? 'bg-slate-900 text-white' 
                        : 'bg-white text-slate-900'
                      : scrolled 
                        ? 'text-slate-500 hover:text-slate-900 bg-transparent hover:bg-slate-100' 
                        : 'text-white/80 hover:text-white bg-transparent hover:bg-white/10'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
