import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav" style={{ 
      background: scrolled ? 'rgba(15, 17, 23, 0.9)' : 'transparent',
      borderBottomColor: scrolled ? 'var(--border)' : 'transparent'
    }}>
      <Link to="/" className="nav-logo">
        AI STUDIO <span>NULL</span>
      </Link>

      <ul className="nav-links">
        <li><a href="/#services">УСЛУГИ</a></li>
        <li><a href="/#cases">КЕЙСЫ</a></li>
        <li><a href="/#about">О НАС</a></li>
        <li><a href="/#contact">КОНТАКТЫ</a></li>
      </ul>

      <a href="https://t.me/AI_studio_null" target="_blank" rel="noreferrer" className="btn btn-ghost nav-cta" style={{ padding: '0.6rem 1.5rem' }}>
        ОБСУДИТЬ ПРОЕКТ
      </a>

      <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} className="mobile-menu-btn">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div style={{ 
          position: 'absolute', top: '80px', left: 0, right: 0, 
          background: 'var(--bg)', borderBottom: '1px solid var(--border)', 
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', 
          backdropFilter: 'blur(20px)' 
        }}>
          <a href="#services" onClick={() => setIsOpen(false)}>УСЛУГИ</a>
          <a href="#cases" onClick={() => setIsOpen(false)}>КЕЙСЫ</a>
          <a href="#about" onClick={() => setIsOpen(false)}>О НАС</a>
          <a href="#contacts" onClick={() => setIsOpen(false)}>КОНТАКТЫ</a>
          <a href="https://t.me/AI_studio_null" target="_blank" rel="noreferrer" className="btn btn-glow">
            ОБСУДИТЬ ПРОЕКТ
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
