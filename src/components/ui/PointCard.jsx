import { Maximize2 } from "lucide-react";

export default function PointCard({ item, onOpenImage }) {
  return (
    <article className="monitor-card">
      <div className="monitor-image">
        <button
          type="button"
          className="image-zoom-trigger"
          aria-label={`Ampliar imagem de monitoramento: ${item.title}`}
          onClick={() => onOpenImage({
            src: item.image,
            alt: `Aplicação de monitoramento: ${item.title}`,
            title: item.title,
          })}
        >
          <img src={item.image} alt="" loading="lazy" />
          <span className="image-zoom-hint"><Maximize2 size={16} /> Ampliar</span>
        </button>
      </div>
      <div className="monitor-copy">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <span>{item.meta}</span>
      </div>
    </article>
  );
}
