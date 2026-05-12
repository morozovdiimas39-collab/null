import { Zap, TrendingDown, Wand2, MonitorPlay, Binary } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      num: '01',
      icon: <Zap size={28} />,
      title: "ЭФФЕКТИВНОСТЬ 2.0",
      label: "В 3 РАЗА БЫСТРЕЕ",
      desc: "ИИ-пайплайн сокращает сроки производства на 70%. То, на что раньше уходили недели, теперь создается за считанные дни.",
      color: "#60a5fa",
      size: "large"
    },
    {
      num: '02',
      icon: <TrendingDown size={28} />,
      title: "БЮДЖЕТ",
      label: "ВЫГОДА ДО 60%",
      desc: "Оптимизация затрат без потери качества. Инвестируйте в смыслы, а не в логистику.",
      color: "#a78bfa",
      size: "small"
    },
    {
      num: '03',
      icon: <Wand2 size={28} />,
      title: "КРЕАТИВ",
      label: "БЕЗ ГРАНИЦ",
      desc: "Любые локации и миры. Мы ограничены только воображением.",
      color: "#c084fc",
      size: "small"
    },
    {
      num: '04',
      icon: <MonitorPlay size={28} />,
      title: "КАЧЕСТВО",
      label: "4K CINEMATIC",
      desc: "Безупречная картинка в высочайшем разрешении.",
      color: "#34d399",
      size: "small"
    },
    {
      num: '05',
      icon: <Binary size={24} />,
      title: "МАСШТАБ",
      label: "ВЫГОДА",
      desc: "Создавайте десятки вариаций контента под разные аудитории за один цикл. Это кратно увеличивает ROI вашего маркетинга.",
      color: "#60a5fa",
      size: "small"
    }
  ];

  return (
    <>
      <style>{`
        .adv-v4-section { padding: 8rem 0; position: relative; }
        
        .adv-v4-header {
          text-align: left;
          margin-bottom: 6rem;
          max-width: 800px;
        }

        .adv-v4-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        .adv-v4-title em {
          font-style: normal;
          background: linear-gradient(120deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .adv-v4-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.6;
        }

        /* Bento Grid */
        .adv-v4-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(320px, auto);
          gap: 1.5rem;
        }

        .adv-v4-card {
          position: relative;
          background: #0d0f14;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          overflow: hidden;
        }

        .adv-v4-card.large {
          grid-column: span 2;
        }

        .adv-v4-card:hover {
          transform: translateY(-8px);
          border-color: rgba(96, 165, 250, 0.2);
          background: #11141b;
        }

        .adv-v4-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .adv-v4-icon-box {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #fff;
          transition: all 0.3s ease;
        }

        .adv-v4-card:hover .adv-v4-icon-box {
          background: #fff;
          color: #000;
        }

        .adv-v4-num {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.15);
          letter-spacing: 0.1em;
        }

        .adv-v4-label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #60a5fa;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .adv-v4-card-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .adv-v4-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.5;
        }

        /* Abstract Glow */
        .adv-v4-glow {
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
          opacity: 0;
          filter: blur(40px);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .adv-v4-card:hover .adv-v4-glow {
          opacity: 0.15;
        }

        @media (max-width: 1024px) {
          .adv-v4-grid { grid-template-columns: repeat(2, 1fr); }
          .adv-v4-card.large { grid-column: span 2; }
        }

        @media (max-width: 768px) {
          .adv-v4-grid { grid-template-columns: 1fr; }
          .adv-v4-card.large { grid-column: span 1; }
          .adv-v4-card { min-height: 300px; }
        }
      `}</style>

      <section className="adv-v4-section wrap" id="advantages">
        <div className="adv-v4-header">
          <h2 className="adv-v4-title">
            ПОЧЕМУ <em>ИИ ?</em>
          </h2>
          <p className="adv-v4-subtitle">
            Нейросети полностью меняют правила игры в видеопроизводстве, делая процесс быстрее, дешевле и безграничнее.
          </p>
        </div>

        <div className="adv-v4-grid">
          {advantages.map((adv, idx) => (
            <div key={idx} className={`adv-v4-card ${adv.size}`}>
              <div className="adv-v4-glow" style={{ '--glow-color': adv.color } as any} />
              
              <div className="adv-v4-card-header">
                <div className="adv-v4-icon-box">{adv.icon}</div>
                <div className="adv-v4-num">{adv.num}</div>
              </div>
              
              <div className="adv-v4-content">
                <div className="adv-v4-label">{adv.label}</div>
                <h3 className="adv-v4-card-title">{adv.title}</h3>
                <p className="adv-v4-desc">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
