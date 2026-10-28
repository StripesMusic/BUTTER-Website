import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'Tour', href: '/tour', section: 'tour' },
    { label: 'Music', href: '/music', section: 'music' },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string,
  ) => {
    e.preventDefault();
    onNavigate(section);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-8 right-8 z-50 gap-8">
        {links.map((link) => (
          <a
            key={link.section}
            href={link.href}
            onClick={(e) => handleClick(e, link.section)}
            className={`text-sm uppercase tracking-widest transition-all duration-300 ${
              activeSection === link.section
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex items-center justify-center"
          >
            <nav className="flex flex-col gap-8">
              {links.map((link) => (
                <a
                  key={link.section}
                  href={link.href}
                  onClick={(e) => {
                    handleClick(e, link.section);
                    setIsOpen(false);
                  }}
                  className={`text-2xl uppercase tracking-widest transition-all duration-300 ${
                    activeSection === link.section
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}