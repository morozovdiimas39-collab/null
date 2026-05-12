export default function Hero() {
  return (
    <section className="hero">
      <video 
        src="https://aistudionull.ru/wp-content/uploads/2025/11/0-oblojka-comp-8mb.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video" 
      />
      <div className="hero-overlay"></div>

      <div className="wrap hero-content">
        <h1 className="hero-title">
          AI ВИДЕОСТУДИЯ 
          <span className="text-primary">NULL</span> — КОНТЕНТ НОВОГО ПОКОЛЕНИЯ
        </h1>

        <p className="hero-sub">
          Создаем ИИ видео, которые вызывают эмоции. Делаем рекламу, клипы, фильмы и ролики от концепции до финального монтажа с помощью нейросетей.
        </p>

        <div className="hero-btns">
          <a href="https://t.me/AI_studio_null" target="_blank" rel="noreferrer" className="btn btn-glow">
            НАЧАТЬ ПРОЕКТ
          </a>
          <a href="#services" className="btn btn-ghost">
            НАШИ УСЛУГИ
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">24/7</div>
            <div className="stat-label">Производство без съемок</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">#1</div>
            <div className="stat-label">Креативные идеи</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100%</div>
            <div className="stat-label">Уникальный результат</div>
          </div>
        </div>
      </div>
    </section>
  );
}
