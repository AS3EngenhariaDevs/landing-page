import ibmecLogo from '../assets/images/ibmec.svg'
import preCapLabLogo from '../assets/images/PrecapLab_logo.png'
import ylaiLogo from '../assets/images/ylai.png'

const accelerators = [
  {
    name: "IBMEC Hub",
    logo: ibmecLogo,
    description:
      "Finalistas do IBMEC Hub, fortalecendo a visibilidade da AS3 no ecossistema de inovação e ampliando oportunidades de aceleração e captação de investimentos.",
  },
  {
    name: "YLai",
    logo: ylaiLogo,
    description:
      "Participação no YLAI, programa internacional dos Estados Unidos que conecta empreendedores a uma ampla rede de negócios e investidores, ampliando as possibilidades de captação de investimentos internacionais em toda a América.",
  },
  {
    name: "PreCapLab",
    logo: preCapLabLogo,
    description:
      "Participação no PreCapLab, programa voltado à preparação de startups para captação, contribuindo para o fortalecimento da estratégia de investimento e conexão com o mercado de capital.",
  },
];

export function AcceleratorsSection() {
  return (
    <section className="py-[88px]">
      <div className="w-full max-w-[1240px] mx-auto px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full">
            <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
            ACELERAÇÃO
          </span>
          <h2 className="font-bold tracking-[-0.01em] leading-[1.12] mt-3.5 text-[clamp(28px,3vw,40px)]">
            Inovação validada por quem entende do assunto
          </h2>
          <p className="text-ink-soft text-[15.5px] leading-[1.7] mt-4 max-w-[640px]">
            A AS3 passou por programas de aceleração que ajudaram a validar,
            estruturar e escalar a plataforma Microméros.
          </p>
        </div>

        {/* Linhas: logo à esquerda (centralizada), descrição à direita */}
        <div className="flex flex-col divide-y divide-gray-100">
          {accelerators.map((acc, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-14 items-center py-10"
            >
              {/* Logo */}
              <div className="flex items-center justify-center h-28">
                <img
                  src={acc.logo}
                  alt={acc.name}
                  className="max-h-14 max-w-[150px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="hidden text-[13px] font-semibold text-ink-soft">
                  {acc.name}
                </span>
              </div>

              {/* Descrição */}
              <div>
                <h3 className="font-bold text-[19px] tracking-[-0.01em] mb-2">
                  {acc.name}
                </h3>
                <p className="text-ink-soft text-[15px] leading-[1.7] m-0">
                  {acc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}