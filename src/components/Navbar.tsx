import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  // Determine if we are on the home page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // If not on home page, navbar should always have a solid background
  const navClasses = isHome && !isScrolled 
    ? 'bg-transparent py-5' 
    : 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100';

  const textClasses = isHome && !isScrolled ? 'text-white' : 'text-slate-900';
  const linkClasses = isHome && !isScrolled ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-blue-600';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-xl tracking-tight ${textClasses}`}>
              Rojan Consultancy<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/services" className={`text-sm font-medium transition-colors ${linkClasses}`}>Services</Link>
            <Link to="/solutions" className={`text-sm font-medium transition-colors ${linkClasses}`}>Solutions</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${linkClasses}`}>About Us</Link>
            <Link to="/case-studies" className={`text-sm font-medium transition-colors ${linkClasses}`}>Case Studies</Link>
            <Link to="/resources" className={`text-sm font-medium transition-colors ${linkClasses}`}>Resources</Link>
            <button 
              onClick={() => openModal()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm shadow-blue-600/20"
            >
              Book Consultation
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${textClasses}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textClasses}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link to="/services" className="text-slate-600 font-medium py-2">Services</Link>
          <Link to="/solutions" className="text-slate-600 font-medium py-2">Solutions</Link>
          <Link to="/about" className="text-slate-600 font-medium py-2">About Us</Link>
          <Link to="/case-studies" className="text-slate-600 font-medium py-2">Case Studies</Link>
          <Link to="/resources" className="text-slate-600 font-medium py-2">Resources</Link>
          <button 
            onClick={() => openModal()}
            className="bg-blue-600 text-white px-5 py-3 rounded-md text-sm font-semibold w-full mt-2"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}
