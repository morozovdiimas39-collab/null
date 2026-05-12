import { Send } from 'lucide-react';

export default function Cta() {
  return (
    <>
      <style>{`
        .cta-v5-section {
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .cta-v5-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .cta-v5-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Large glowing orb behind the text */
        .cta-v5-bg-glow {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          filter: blur(80px);
        }

        .cta-v5-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin-bottom: 2rem;
          color: #fff;
        }

        .cta-v5-title span {
          display: block;
        }

        .cta-v5-grad {
          background: linear-gradient(120deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-v5-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.4);
          max-width: 600px;
          margin-bottom: 3.5rem;
          line-height: 1.5;
          font-weight: 500;
        }

        .cta-v5-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 3rem;
          border-radius: 100px;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          color: #fff;
          background: #3b82f6;
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.25);
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .cta-v5-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .cta-v5-btn:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.5);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .cta-v5-btn:hover::before {
          opacity: 1;
        }

        .cta-v5-btn-icon {
          background: rgba(255, 255, 255, 0.15);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: transform 0.5s ease;
        }

        .cta-v5-btn:hover .cta-v5-btn-icon {
          transform: rotate(-15deg) scale(1.1);
          background: rgba(255, 255, 255, 0.25);
        }

        .cta-v5-visual-side {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-left: 2rem;
        }

        .cta-v5-orb-wrap {
          position: relative;
          width: 300px;
          height: 300px;
          margin-bottom: 3rem;
        }

        .cta-v5-main-orb {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          animation: orbPulse 8s ease-in-out infinite alternate;
        }

        .cta-v5-sub-orb {
          position: absolute;
          top: 20%;
          left: 20%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(30px);
          animation: orbPulse 6s ease-in-out infinite alternate-reverse;
        }

        .cta-v5-logo-visual {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
          width: 280px;
          height: auto;
          z-index: 3;
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.15));
          animation: logoRotate 20s linear infinite;
        }

        @keyframes logoRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes orbPulse {
          from { transform: scale(1) translate(0, 0); opacity: 0.5; }
          to { transform: scale(1.3) translate(20px, -20px); opacity: 0.8; }
        }

        .cta-v5-info-pills {
          display: flex;
          gap: 1rem;
        }

        .cta-v5-pill {
          padding: 0.6rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-v5-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.5);
        }

        @media (max-width: 1024px) {
          .cta-v5-container { grid-template-columns: 1fr; gap: 4rem; }
          .cta-v5-visual-side { padding-left: 0; align-items: flex-start; }
          .cta-v5-orb-wrap { display: none; }
        }

        @media (max-width: 768px) {
          .cta-v5-subtitle { font-size: 1.1rem; margin-bottom: 3rem; }
          .cta-v5-btn { padding: 1rem 2.5rem; font-size: 1.1rem; width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="cta-v5-section wrap" id="contact">
        <div className="cta-v5-bg-glow" />
        
        <div className="cta-v5-container">
          <div className="cta-v5-content">
            <h2 className="cta-v5-title">
              Обсудим <span className="cta-v5-grad">Ваш проект ?</span>
            </h2>
            
            <p className="cta-v5-subtitle">
              Мы не просто создаем контент — мы режиссируем внимание и ведем вашу аудиторию к результату.
            </p>
            
            <a 
              href="https://t.me/AI_studio_null" 
              target="_blank" 
              rel="noreferrer"
              className="cta-v5-btn"
            >
              Написать в Telegram
              <div className="cta-v5-btn-icon">
                <Send size={20} />
              </div>
            </a>
          </div>

          <div className="cta-v5-visual-side">
            <div className="cta-v5-orb-wrap">
              <div className="cta-v5-main-orb" />
              <div className="cta-v5-sub-orb" />
              <img 
                src="https://aistudionull.ru/wp-content/uploads/2026/03/ii-studiya-nol-ii-studiya-nol.svg" 
                alt="AI Studio NULL Logo" 
                className="cta-v5-logo-visual"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
