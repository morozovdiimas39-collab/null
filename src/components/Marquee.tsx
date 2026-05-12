export default function Marquee() {
  const items = [
    "СЦЕНАРИЙ",
    "КРЕАТИВНАЯ КОНЦЕПЦИЯ",
    "МОУШН",
    "НЕЙРОСЕТЕВАЯ РЕКЛАМА",
    "ИМИДЖЕВЫЙ ФИЛЬМ",
    "ВИДЕО-ЭКСПЛЕЙНЕРЫ",
    "КОРПОРАТИВНЫЙ ФИЛЬМ",
    "АНИМАЦИЯ 2D",
    "САУНД-ДИЗАЙН",
    "КОНТЕНТ ДЛЯ СОЦ.СЕТЕЙ",
    "БРЕНДИНГОВЫЙ КОНТЕНТ",
    "ГРАФИКА С ПОМОЩЬЮ ИИ",
    "НЕЙРОСЕТИ ДЛЯ КИНО",
    "НЕЙРОСЕТЕВОЙ ПРОДАКШН"
  ];

  // We duplicate the items to make the marquee seamless
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
