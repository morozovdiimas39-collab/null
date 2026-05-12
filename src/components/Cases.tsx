import { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

const CASES = [
  {
    num: '01',
    title: 'ПАДЕЛ МАНИЯ',
    client: 'Док фильм',
    category: 'Реставрация и Апскейл',
    year: '2025',
    video: 'https://aistudionull.ru/wp-content/uploads/2026/02/2_padel-dok-film-16_9.mp4',
    tags: ['#реставрация', '#апскейл', '#липсинк'],
    desc: 'Документальный фильм с применением технологий восстановления архивных кадров и синхронизации губ.',
  },
  {
    num: '02',
    title: 'KGM TORRES',
    client: 'ИИ реклама',
    category: 'Хакатон Победители',
    year: '2025',
    video: 'https://aistudionull.ru/wp-content/uploads/2026/04/3_kgm-torres22.mp4',
    tags: ['#победители', '#хакатон', '#реклама'],
    desc: 'Победный проект хакатона: рекламная кампания, полностью созданная с помощью генеративного ИИ.',
  },
  {
    num: '03',
    title: 'VOLKSWAGEN (SPEC)',
    client: 'ИИ реклама',
    category: 'Spec Ad',
    year: '2025',
    video: 'https://aistudionull.ru/wp-content/uploads/2026/02/4_reklama-mashiny-volkswagen-spec.mp4',
    tags: ['#нейросеть', '#машина', '#иивидеопродакшн'],
    desc: 'Кинематографичная презентация автомобиля, демонстрирующая возможности ИИ в авто-продакшне.',
  },
  {
    num: '04',
    title: 'KABRITA',
    client: 'Сухое молоко',
    category: 'Анимация',
    year: '2025',
    video: 'https://aistudionull.ru/wp-content/uploads/2026/04/5_reklama-kabrita.mp4',
    tags: ['#мультфильм', '#анимация', '#ииреклама'],
    desc: 'Яркий анимационный ролик для бренда детского питания, сочетающий классическую эстетику и ИИ.',
  },
  {
    num: '05',
    title: 'BORNERS | CALVIN KL | HILFIGER',
    client: 'ИИ реклама',
    category: 'E-commerce',
    year: '2025',
    video: 'https://aistudionull.ru/wp-content/uploads/2026/03/6_reklama-muzhskogo-nizhnego-belya.mp4',
    tags: ['#карточка товара', '#реклама', '#вб'],
    desc: 'Оптимизация рекламных креативов для маркетплейсов: от карточки товара до полноценного промо.',
  },
];

export default function Cases() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <style>{`
        /* Modal / Lightbox */
        .cases-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .cases-modal.is-active {
          opacity: 1;
          pointer-events: auto;
        }

        .cases-modal-content {
          width: 100%;
          max-width: 1200px;
          max-height: 80vh;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cases-modal-video {
          width: 100%;
          height: 100%;
          max-height: 80vh;
          object-fit: contain;
          display: block;
        }

        .cases-modal-close {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .cases-modal-close:hover {
          background: #fff;
          color: #000;
          transform: rotate(90deg);
        }

        .cases-v4-section {
          padding: 8rem 0;
          position: relative;
        }

        .cases-v4-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 6rem;
          align-items: start;
        }

        /* Sticky Left Column */
        .cases-v4-sticky {
          position: sticky;
          top: 120px;
        }

        .cases-v4-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #fff;
          margin: 0;
        }

        .cases-v4-title span { display: block; }
        .cases-v4-title em {
          font-style: normal;
          background: linear-gradient(120deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cases-v4-count {
          font-size: 0.9rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.2);
          margin-top: 2rem;
          display: block;
          letter-spacing: 0.2em;
        }

        /* Right Scrolling Content */
        .cases-v4-grid {
          display: flex;
          flex-direction: column;
          gap: 12rem;
        }

        .cases-v4-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          position: relative;
          cursor: pointer;
        }

        .cases-v4-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cases-v4-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.2, 1, 0.3, 1);
          filter: brightness(0.85);
        }

        .cases-v4-card:hover .cases-v4-video {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        /* Grain overlay */
        .cases-v4-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.08;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 1;
        }

        .cases-v4-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.15);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 2;
        }

        .cases-v4-card:hover .cases-v4-overlay {
          opacity: 1;
        }

        .cases-v4-play-btn {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #fff;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
          transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .cases-v4-card:hover .cases-v4-play-btn {
          transform: scale(1);
        }

        .cases-v4-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.3);
        }

        .cases-v4-client { color: #60a5fa; }

        .cases-v4-card-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          transition: color 0.3s ease;
        }

        .cases-v4-card:hover .cases-v4-card-title {
          color: #60a5fa;
        }

        .cases-v4-tags {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .cases-v4-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cases-v4-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.5;
          max-width: 600px;
        }

        .cases-v4-footer {
          margin-top: 4rem;
        }

        .cases-v4-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          padding: 1rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          transition: all 0.3s ease;
        }

        .cases-v4-all-btn:hover {
          background: #fff;
          color: #000;
          transform: translateY(-3px);
        }

        @media (max-width: 1024px) {
          .cases-v4-container { grid-template-columns: 1fr; gap: 4rem; }
          .cases-v4-sticky { position: relative; top: 0; margin-bottom: 2rem; }
          .cases-v4-grid { gap: 6rem; }
          .cases-v4-visual { margin-bottom: 1.5rem; }
          .cases-v4-card-title { font-size: 2rem; }
          .cases-v4-desc { font-size: 1rem; }
        }
      `}</style>

      <section className="cases-v4-section wrap" id="cases">
        {/* Lightbox Modal */}
        <div className={`cases-modal ${activeVideo ? 'is-active' : ''}`} onClick={() => setActiveVideo(null)}>
          <button className="cases-modal-close">✕</button>
          <div className="cases-modal-content" onClick={e => e.stopPropagation()}>
            {activeVideo && (
              <video 
                src={activeVideo} 
                className="cases-modal-video" 
                controls 
                autoPlay 
                playsInline
              />
            )}
          </div>
        </div>

        <div className="cases-v4-container">
          
          <div className="cases-v4-sticky">
            <h2 className="cases-v4-title">
              <span>ПОСЛЕДНИЕ</span>
              <em>ПРОЕКТЫ</em>
            </h2>
            <span className="cases-v4-count">0{CASES.length} WORKS — 2025</span>
          </div>

          <div className="cases-v4-grid">
            {CASES.map((item, idx) => (
              <div 
                key={idx} 
                className="cases-v4-card"
                onClick={() => setActiveVideo(item.video)}
              >
                <div className="cases-v4-visual">
                  <video 
                    className="cases-v4-video"
                    src={item.video}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="cases-v4-overlay">
                    <div className="cases-v4-play-btn">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                </div>
                
                <div className="cases-v4-meta">
                  <span className="cases-v4-client">{item.client}</span>
                  <span>{item.category}</span>
                  <span>{item.year}</span>
                </div>
                
                <h3 className="cases-v4-card-title">{item.title}</h3>

                <div className="cases-v4-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="cases-v4-tag">{tag}</span>
                  ))}
                </div>

                <p className="cases-v4-desc">{item.desc}</p>
              </div>
            ))}

            <div className="cases-v4-footer">
              <a href="#" className="cases-v4-all-btn">
                Смотреть все работы <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
