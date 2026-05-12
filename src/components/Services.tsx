import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    title: "AI ВИДЕО",
    subtitle: "генерация видео высокого качества в необходимом формате",
    items: [
      { title: "Фильм / Мультфильм", description: "Создание реалистичного фильма или мультика в любом стиле", image: "/film_new.png", link: "/service/film" },
      { title: "Музыкальный клип", description: "Создание музыкального клипа с помощью нейросетей", image: "/music_clip_new.png", link: "/service/music-video" },
      { title: "Реклама", description: "Создание рекламы с вашим продуктом в нейросетях", image: "/ads_new.png", link: "/service/advertising" },
      { title: "Видео для мероприятий", description: "Создание ИИ визуалов для мероприятий и концертов", image: "/event_video_new.png", link: "/service/events" },
      { title: "Бизнес видео", description: "Создание корпоративного видео для компании", image: "/business_video_new.png", link: "/service/business" },
      { title: "Кино трейлер", description: "Создание кинематографичного трейлера или тизера", image: "/trailer_new.png", link: "/service/trailer" }
    ]
  },
  {
    title: "AI КАРТИНКИ",
    subtitle: "Генерация и редактирование изображений любой сложности",
    items: [
      { title: "Нейро фотосессия", description: "Генерация изображений с необходимой личностью", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop", link: "/service/photo" },
      { title: "Иллюстрации", description: "Для оформления книг, журналов и комиксов", image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=1000&auto=format&fit=crop", link: "/service/illustration" },
      { title: "Мокапы продукта", description: "Генерация мокапов для вашего продукта", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", link: "/service/mockup" },
      { title: "Персонажи", description: "Разработка реалистичных и анимационных персонажей", image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1000&auto=format&fit=crop", link: "/service/characters" },
      { title: "Рекламные креативы", description: "Креативы для соцсетей, визуалы для рекламных кампаний", image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop", link: "/service/creatives" },
      { title: "Обложки", description: "Разработка обложек для музыкальных клипов, ютуб видео, книг итд", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop", link: "/service/covers" }
    ]
  },
  {
    title: "AI АУДИО",
    subtitle: "Работа со звуком с помощью искусственного интеллекта",
    items: [
      { title: "Генерация речи", description: "Генерация любой речи необходимым голосом", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop", link: "/service/speech" },
      { title: "Музыка и песни", description: "Генерация музыки и песен необходимым голосом", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop", link: "/service/music" },
      { title: "Дубляж", description: "Дубляж голосов на другие языки", image: "https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=1000&auto=format&fit=crop", link: "/service/dubbing" },
      { title: "Звуки", description: "Саунд дизайн, генерация шумов и звуков", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop", link: "/service/sfx" },
      { title: "Обработка голоса", description: "Изменение голоса на любой необходимый голос", image: "https://images.unsplash.com/photo-1516280440502-62b168670851?q=80&w=1000&auto=format&fit=crop", link: "/service/voice-processing" },
      { title: "Чистка от шумов", description: "Улучшение качества звука, чистка и сведение", image: "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1000&auto=format&fit=crop", link: "/service/cleaning" }
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="section wrap">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <h2 className="section-title">
          ЧТО МЫ <span className="text-primary">МОЖЕМ?</span>
        </h2>
      </div>

      <div className="services-tabs">
        {serviceCategories.map((category, idx) => (
          <button 
            key={idx} 
            className={`service-tab ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="services-content-wrapper">
        <p className="services-subtitle">
          {serviceCategories[activeTab].subtitle}
        </p>
        
        <div className="services-list fade-in-up" key={activeTab}>
          {serviceCategories[activeTab].items.map((service, sIdx) => (
            <Link to={service.link} key={sIdx} className="service-row">
              <div className="service-row-left">
                <img src={service.image} alt={service.title} className="service-row-img" />
                <h4 className="service-row-title">{service.title}</h4>
              </div>
              <div className="service-row-right">
                <p className="service-row-desc">{service.description}</p>
                <div className="service-row-arrow">
                  <ArrowUpRight size={32} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
