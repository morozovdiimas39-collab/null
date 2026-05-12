import { Send, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacts" className="footer wrap">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            AI STUDIO <span>NULL</span>
          </div>
          <p className="footer-muted">
            Видеопродакшн полного цикла с использованием новейших нейросетей. Создаем видео, которые вызывают эмоции.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="https://t.me/AI_studio_null" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet)', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(124,58,237,0.2)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}>
              <Send size={18} />
            </a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Контакты</div>
          <ul className="footer-links">
            <li>
              <a href="tel:+79689521882" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} /> +7 968 952 18 82
              </a>
            </li>
            <li>
              <a href="mailto:aistudionull@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} /> aistudionull@gmail.com
              </a>
            </li>
            <li>
              <a href="https://t.me/AI_studio_null" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Send size={14} /> @AI_studio_null
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Навигация</div>
          <ul className="footer-links">
            <li><a href="#services">Услуги</a></li>
            <li><a href="#cases">Кейсы</a></li>
            <li><a href="#about">О нас</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>&copy; {new Date().getFullYear()} AI STUDIO NULL. Все права защищены.</div>
        <a href="https://aistudionull.ru/privacy-policy/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Политика конфиденциальности</a>
      </div>
    </footer>
  );
}
