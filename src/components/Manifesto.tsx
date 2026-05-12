import { useEffect, useState } from 'react';

// Plain text versions used only for spacer height calculation
const CYCLING_PLAIN = [
  'МЫ СОЗДАЁМ СМЫСЛЫ.',
  'МЫ РЕЖИССИРУЕМ.',
  'МЫ ДЕРЖИМ ВНИМАНИЕ.',
];

const CYCLING_PHRASES = [
  'МЫ СОЗДАЁМ СМЫСЛЫ.',
  'МЫ РЕЖИССИРУЕМ.',
  'МЫ ДЕРЖИМ ВНИМАНИЕ.',
];

export default function Manifesto() {
  const principles = [
    {
      title: "Сценарий, а не случайность",
      desc: "Мы детально продумываем структуру: что захватит внимание, удержит и заставит действовать."
    },
    {
      title: "Режиссура вместо генерации",
      desc: "Каждый кадр — это точное решение, а не результат случайного запроса к нейросети."
    },
    {
      title: "Тотальный контроль качества",
      desc: "Мы не просто принимаем готовый результат, мы бескомпромиссно добиваемся идеала."
    },
    {
      title: "Технологии — лишь средство",
      desc: "Мы применяем лучшие ИИ-инструменты, но они всегда подчиняются идее, а не наоборот."
    }
  ];

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % CYCLING_PHRASES.length);
        setAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, [CYCLING_PHRASES.length]);

  return (
    <>
      <style>{`
        @keyframes slideUp {
          0%   { transform: translateY(0);   opacity: 1; }
          100% { transform: translateY(-110%); opacity: 0; }
        }
        @keyframes slideInFromBottom {
          0%   { transform: translateY(110%); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        .manifesto-cycling-out {
          animation: slideUp 0.4s ease forwards;
          pointer-events: none;
        }
        .manifesto-cycling-in {
          animation: slideInFromBottom 0.4s ease forwards;
        }
        /*
         * The clip-wrapper masks the slide animation vertically.
         * It has no fixed height — the hidden spacer sets it naturally,
         * so wrapping text always fits.
         */
        .manifesto-cycling-clip {
          overflow: hidden;        /* clips the up/down slide */
          display: block;
        }
        .manifesto-cycling-wrapper {
          position: relative;      /* anchor for absolute phrases */
          display: block;
        }
        /* Invisible spacer: longest phrase in normal flow → sets height */
        .manifesto-cycling-spacer {
          visibility: hidden;
          pointer-events: none;
          display: block;
          color: transparent;
          user-select: none;
          aria-hidden: true;
        }
        /* Animated phrases stacked on top of the spacer */
        .manifesto-cycling-phrase {
          position: absolute;
          top: 0; left: 0; width: 100%;
        }
      `}</style>
    <section className="section wrap" id="manifesto" style={{ padding: '8rem 0' }}>
      <div className="manifesto-container">
        <div className="manifesto-top">
          <h2 className="manifesto-title">
            <div className="title-line text-muted">МЫ НЕ ГЕНЕРИРУЕМ РОЛИКИ.</div>
            <div className="manifesto-cycling-clip">
              <div className="manifesto-cycling-wrapper">
                {/* Spacer — longest plain-text phrase — gives wrapper its real height */}
                <div
                  className="title-line manifesto-cycling-spacer"
                  aria-hidden="true"
                >
                  {CYCLING_PLAIN.reduce((a, b) => a.length >= b.length ? a : b)}
                </div>

                {/* Animated phrases, absolutely on top */}
                {CYCLING_PHRASES.map((phrase, i) => {
                  const isActive   = i === index;
                  const isLeaving  = animating && isActive;
                  const isEntering = !animating && isActive;
                  return (
                    <div
                      key={i}
                      className={`title-line manifesto-cycling-phrase ${
                        isLeaving  ? 'manifesto-cycling-out'  :
                        isEntering ? 'manifesto-cycling-in'   : ''
                      }`}
                      style={{
                        background: 'linear-gradient(120deg, #60a5fa 0%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        opacity: isActive ? 1 : 0,
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <span style={{
                        background: 'linear-gradient(120deg, #60a5fa 0%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'block',
                      }}>
                        {phrase}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </h2>
          <div className="manifesto-subtitle-wrap">
            <p className="manifesto-subtitle">
              Каждый проект начинается не с инструмента, а с идеи, сценария и задачи бизнеса.
            </p>
          </div>
        </div>

        <div className="manifesto-video-wrapper">
          <video 
            src="https://aistudionull.ru/wp-content/uploads/2026/02/1-manifest-comp-8mb.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            webkit-playsinline="true"
            preload="auto"
            className="manifesto-video"
          />
        </div>

        <div className="manifesto-columns">
          {principles.map((item, idx) => (
            <div key={idx} className="manifesto-col">
              <div className="manifesto-num">0{idx + 1}</div>
              <h4 className="manifesto-col-title">{item.title}</h4>
              <p className="manifesto-col-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
