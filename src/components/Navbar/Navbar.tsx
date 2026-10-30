import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
}

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveSection(href.slice(1));
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`gta-navbar w-fit max-w-full mx-auto flex items-center justify-center transition-all duration-300 rounded-sm px-4 sm:px-6 py-2.5 ${
          isScrolled ? 'bg-[#20231c] shadow-md border border-[#d3ac51]/70' : 'bg-[#20231c]/95 border border-[#d3ac51]/50'
        }`}
      >
        <div className="gta-pause-menu hidden xl:flex items-center gap-1 bg-[#121411] px-3 py-1 rounded-sm border border-[#d3ac51]/50 text-xs font-semibold">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`gta-menu-item relative px-3 py-1.5 rounded-sm transition-all duration-200 ${
                  isActive ? 'text-[#171817] bg-[#d3ac51] font-bold shadow-xs' : 'text-[#f0dfbd] hover:text-[#d3ac51]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="btn-nav-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-sm bg-[#121411] text-[#f0dfbd] hover:text-[#d3ac51]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-16 mt-2 p-5 bg-[#20231c] border-2 border-[#d3ac51] rounded-sm shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#d3ac51]/40 mb-3">
            <span className="gta-label text-xs font-bold text-center">PAUSE MENU / DIRECTORY</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-1 rounded-sm text-[#c8c0a5] hover:text-[#fff1cf]">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-2.5 rounded-sm font-mono text-xs font-bold transition-all ${
                    isActive ? 'bg-[#d3ac51] text-[#171817]' : 'bg-[#121411] text-[#f0dfbd] hover:bg-[#30382b]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

        </div>
      )}
    </header>
  );
};
