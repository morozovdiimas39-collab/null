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
        <div className="mobile-overlay">
          <div className="mobile-menu">
            <Link to="/#services" onClick={() => setIsOpen(false)}>УСЛУГИ</Link>
            <Link to="/#cases" onClick={() => setIsOpen(false)}>КЕЙСЫ</Link>
            <Link to="/#about" onClick={() => setIsOpen(false)}>О НАС</Link>
            <Link to="/#contact" onClick={() => setIsOpen(false)}>КОНТАКТЫ</Link>
            <a href="https://t.me/AI_studio_null" target="_blank" rel="noreferrer" className="btn btn-glow" style={{ width: '100%', marginTop: '2rem' }}>
              ОБСУДИТЬ ПРОЕКТ
            </a>
          </div>
        </div>
      )}

      <style>{`
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(5, 6, 9, 0.98);
          backdrop-filter: blur(20px);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          width: 100%;
          padding: 0 2rem;
        }

        .mobile-menu a {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .nav { padding: 0 1.5rem; }
          .nav-links, .nav-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; position: relative; z-index: 100; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
