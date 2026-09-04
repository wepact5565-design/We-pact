import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'The Team', href: '#team' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Our Outcomes', href: '#outcomes' },
    { name: 'Our Vision', href: '#vision' },
    { name: 'Media', href: '#media' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? 'bg-white shadow-sm py-4 border-gray-100 text-navy' : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/logo.jpeg" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif font-bold tracking-tight flex items-center">
            <a href="/logo.jpeg" target="_blank" rel="noopener noreferrer">
              <img src="/logo.jpeg" alt="WE-PACT" className="h-16 w-auto" />
            </a>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium hover:text-saffron transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-gray-200'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#stand-with-us"
              className={`text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors ${
                isScrolled 
                  ? 'bg-navy text-white hover:bg-navy-light' 
                  : 'bg-saffron text-navy hover:bg-amber-600'
              }`}
            >
              Stand With Us
            </a>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-navy text-white flex flex-col"
          >
            <div className="px-6 py-6 flex items-center justify-between">
              <img src="/logo.jpeg" alt="WE-PACT" className="h-16 w-auto" />
              <button
                className="p-2 text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-medium hover:text-saffron transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#stand-with-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 text-lg font-semibold px-8 py-4 bg-saffron text-navy rounded-sm hover:bg-amber-600 transition-colors w-full text-center max-w-xs"
              >
                Stand With Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
