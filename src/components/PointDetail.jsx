import { forwardRef, useState } from "react";
import { ArrowLeft, X } from "lucide-react";

const PointDetail = forwardRef(function PointDetail(
  { point, onClose },
  ref
) {
  const [hoveredSector, setHoveredSector] = useState(null);
  const [lockedSector, setLockedSector] = useState(null);

  if (!point) return null;

  const Icon = point.icon;
  const activeSector = lockedSector || hoveredSector;

  const selectSector = (sector) => {
    setLockedSector(lockedSector?.name === sector.name ? null : sector);
  };

  // Só destrava o setor selecionado — fecha o popup, mas continua
  // no detalhe do produto. É o "X"/Fechar dentro do card do popup.
  const resetSector = () => {
    setLockedSector(null);
    setHoveredSector(null);
  };

  // Sai do detalhe inteiro e volta pro grid de pontos de atuação.
  // Reseta o setor também, pra não voltar já com um popup travado.
  const handleBackToSegments = () => {
    setLockedSector(null);
    setHoveredSector(null);
    onClose();
  };

  return (
    <div
      ref={ref}
      className="group mt-10 scroll-mt-24 rounded-2xl border border-neutral-200 bg-white overflow-visible shadow-sm"
    >
      {/* Cabeçalho */}
      <div className="relative p-8 md:p-10 pb-6">
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

      {/* Imagem */}
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

      {/* Onde é aplicável */}
      <div className="p-8 md:p-10 pt-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium uppercase text-neutral-400">
            Selecione seu segmento para ver onde se aplica
          </p>
        </div>

        <div className="relative">
          {/* Lista de segmentos */}
          <div
            className="flex flex-wrap content-start gap-2"
            onMouseLeave={() => {
              if (!lockedSector) setHoveredSector(null);
            }}
          >
            {point.applicableSectors.map((sector) => {
              const isActive = activeSector?.name === sector.name;
              return (
                <button
                  key={sector.name}
                  type="button"
                  onMouseEnter={() => setHoveredSector(sector)}
                  onFocus={() => setHoveredSector(sector)}
                  onClick={() => selectSector(sector)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-[#CCFF0C] text-neutral-900 font-medium"
                      : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                  }`}
                >
                  {sector.name}
                </button>
              );
            })}
          </div>

          {/* Pop-up de aplicabilidades */}
          <div
            className={`absolute left-0 top-full z-30 mt-3 w-full max-w-md rounded-xl border border-neutral-200 bg-white p-5 shadow-xl transition-all duration-200 ease-out md:w-[360px] ${
              activeSector
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            {activeSector && (
              <>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {activeSector.name}
                  </h4>

                  {/* Só aparece quando o setor está travado por clique —
                      hover sozinho some ao tirar o mouse, não precisa de botão. */}
                  {lockedSector && (
                    <button
                      type="button"
                      onClick={resetSector}
                      aria-label="Fechar aplicabilidades"
                      className="rounded-full bg-neutral-100 p-1 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition-colors"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                <ul className="space-y-2">
                  {activeSector.applications.map((app) => (
                    <li
                      key={app}
                      className="flex gap-2 text-sm text-neutral-600"
                    >
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-[#CCFF0C] shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Rodapé — botão que sai do detalhe inteiro */}
      <div className="border-t border-neutral-200 px-8 py-5 md:px-10">
        <button
          type="button"
          onClick={handleBackToSegments}
          aria-label="Voltar para os pontos de atuação"
          className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para os segmentos
        </button>
      </div>
    </div>
  );
});

export default PointDetail;