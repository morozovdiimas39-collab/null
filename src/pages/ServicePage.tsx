import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { useEffect } from 'react';

export default function ServicePage() {
  const { id } = useParams();
  const data = SERVICES_DATA[id || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="section wrap" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '2rem' }}>Раздел в разработке</h1>
        <Link to="/" style={{ color: '#60a5fa', fontWeight: 'bold', textDecoration: 'none' }}>Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .service-page { padding-top: 10rem; padding-bottom: 8rem; }
        
        .service-page-header { margin-bottom: 6rem; }
        .service-page-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-weight: 700;
          margin-bottom: 3rem;
          transition: color 0.3s ease;
        }
        .service-page-back:hover { color: #fff; }

        .service-page-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 2rem;
        }

        .service-page-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          margin-bottom: 8rem;
        }

        .service-page-video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-page-video { width: 100%; height: 100%; object-fit: cover; }

        .service-page-info { display: flex; flex-direction: column; justify-content: center; }

        .service-page-desc {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.5;
          margin-bottom: 4rem;
        }

        .service-page-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .service-page-feature {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 20px;
        }

        .service-page-feature h4 {
          color: #60a5fa;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .service-page-feature p {
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
          line-height: 1.4;
        }

        .service-page-cta {
          background: #0d0f14;
          padding: 6rem;
          border-radius: 48px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-page-cta-title {
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 3rem;
          text-transform: uppercase;
        }

        .service-page-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: #60a5fa;
          color: #000;
          padding: 1.5rem 4rem;
          border-radius: 100px;
          font-weight: 800;
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.4s ease;
        }

        .service-page-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(96, 165, 250, 0.3);
        }

        @media (max-width: 1024px) {
          .service-page { padding-top: 8rem; }
          .service-page-title { font-size: 4rem; }
          .service-page-grid { grid-template-columns: 1fr; gap: 3rem; }
          .service-page-features { grid-template-columns: 1fr; gap: 1.5rem; }
          .service-page-cta { padding: 4rem 2rem; border-radius: 32px; }
          .service-page-cta-title { font-size: 2.2rem; }
          .service-page-btn { width: 100%; justify-content: center; padding: 1.25rem 2rem; font-size: 1rem; }
          .service-page-desc { font-size: 1.2rem; margin-bottom: 3rem; }
        }
      `}</style>

      <div className="service-page wrap">
        <header className="service-page-header">
          <Link to="/" className="service-page-back">
            <ArrowLeft size={20} />
            BACK TO HOME
          </Link>
          <h1 className="service-page-title">{data.heroTitle}</h1>
        </header>

        <div className="service-page-grid">
          <div className="service-page-video-wrap">
            <video 
              src={data.video} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="service-page-video" 
            />
          </div>
          
          <div className="service-page-info">
            <p className="service-page-desc">{data.description}</p>
            <div className="service-page-features">
              {data.features.map((f: string, i: number) => (
                <div key={i} className="service-page-feature">
                  <h4>ADVANTAGE 0{i+1}</h4>
                  <p>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="service-page-cta">
          <h2 className="service-page-cta-title">Готовы запустить <br /> этот проект ?</h2>
          <a href="https://t.me/AI_studio_null" target="_blank" rel="noreferrer" className="service-page-btn">
            ОБСУДИТЬ В TELEGRAM
            <Send size={20} />
          </a>
        </section>
      </div>
    </>
  );
}
