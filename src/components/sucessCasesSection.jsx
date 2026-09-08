import quakerLogo from "../assets/logos/quaker.png";
import metrorioLogo from "../assets/logos/metrorio.png";
import autonLogo from "../assets/logos/auton.png";

export const cases = [
  {
    name: "Quaker Houghton",
    logo: quakerLogo,
    sector: "Indústria",
    title: "Consumos fora do horário transformados em economia",
    description:
      "Mapeamos o consumo de ativos críticos e identificamos equipamentos operando fora dos horários previstos. Com os dados da Microméros, a equipe corrigiu desperdícios e economizou mais de 500 mil kWh.",
    metrics: [
      { value: "20%", label: "Redução de vazamentos" },
      { value: "500 mil kWh", label: "Energia economizada" },
    ],
  },
  {
    name: "Metrô Rio",
    logo: metrorioLogo,
    sector: "Infraestrutura",
    title: "45% menos falhas em escadas monitoradas continuamente",
    description:
      "O monitoramento contínuo identifica alterações no funcionamento das escadas e permite que a equipe atue antes da falha, aumentando a disponibilidade dos equipamentos.",
    metrics: [
      { value: "10+", label: "Pontos monitorados continuamente" },
      { value: "45%", label: "Menos falhas operacionais" },
    ],
  },
  {
    name: "Auton",
    logo: autonLogo,
    sector: "Processos",
    title: "Mais de 400 horas de trabalho manual economizadas",
    description:
      "O monitoramento contínuo de vazão, pH e condutividade centralizou os dados do processo e reduziu o tempo dedicado a leituras, registros e verificações manuais.",
    metrics: [
      { value: "3+", label: "Ativos monitorados" },
      { value: "400+", label: "Horas de trabalho economizadas" },
    ],
  },
];


export function SuccessCasesSection() {
  return (
    <section className="py-[88px]">
      <div className="w-full max-w-[1240px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-end mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
              CASES DE SUCESSO
            </span>
            <h2 className="font-bold tracking-[-0.01em] leading-[1.12] mt-3.5 text-[clamp(28px,3vw,40px)]">
              Resultados reais em operações reais
            </h2>
          </div>
          <p className="text-ink-soft text-[15.5px] leading-[1.7] m-0">
            Conheça como a plataforma Microméros gerou impacto mensurável em
            diferentes setores e tipos de ativos.
          </p>
        </div>

        {/* Grid de cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="flex flex-col bg-white border border-gray-100 rounded-[20px] p-8 shadow-soft"
            >
              {/* Logo + setor */}
              <div className="flex items-center justify-between mb-6">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-8 max-w-[110px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="hidden text-[13px] font-semibold text-ink-soft">
                  {c.name}
                </span>
                <span className="text-[12px] font-semibold text-ink-soft/70 uppercase tracking-[0.04em] bg-gray-soft px-3 py-1 rounded-full">
                  {c.sector}
                </span>
              </div>

              {/* Título e descrição */}
              <h3 className="font-bold text-[19px] tracking-[-0.01em] leading-[1.25] mb-3">
                {c.title}
              </h3>
              <p className="text-ink-soft text-[15px] leading-[1.7] mb-6 flex-1">
                {c.description}
              </p>

              {/* Métricas */}
              <div className="flex gap-8 pt-6 border-t border-gray-100">
                {c.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="font-bold text-[24px] tracking-[-0.01em] leading-none">
                      {m.value}
                    </div>
                    <div className="text-ink-soft text-[13px] mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}