import { forwardRef } from "react";
import { X } from "lucide-react";

const PointDetail = forwardRef(function PointDetail({ point, onClose }, ref) {
  if (!point) return null;
  const Icon = point.icon;

  return (
    <div
      ref={ref}
      className="group mt-10 scroll-mt-24 rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm"
    >
      {/* Cabeçalho: ícone + título + descrição */}
      <div className="relative p-8 md:p-10 pb-6">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
        >
          <X className="h-4 w-4 text-neutral-700" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 shrink-0 transition-colors duration-200 group-hover:bg-[#CCFF0C]">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{point.title}</h3>
            <span className="text-sm text-neutral-500">{point.unit}</span>
          </div>
        </div>

        <p className="text-base text-neutral-600 max-w-2xl">{point.desc}</p>
      </div>

      {/* Imagem — ocupa toda a largura, sem cortar conteúdo */}
      {point.image && (
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-50">
          <img
            src={point.image}
            alt={point.title}
            className="absolute inset-0 h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {/* Onde é aplicável — abaixo da imagem */}
      <div className="p-8 md:p-10 pt-6">
        <p className="text-xs font-medium uppercase text-neutral-400 mb-3">
          Onde é aplicável
        </p>
        <div className="flex flex-wrap gap-2">
          {point.applicableSectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700 transition-colors duration-200 group-hover:bg-[#CCFF0C] group-hover:text-neutral-900"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default PointDetail;