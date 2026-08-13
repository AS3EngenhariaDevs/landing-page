import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import PointCard from "../components/PointCard";
import ProcessStep from "../components/ProcessStep";
import SectorCard from "../components/SectorCard";
import StatsBand from "../components/StatsBand";
import { UseCasesSection } from "../components/useCases";
import { TrustedClientsSection } from "../components/trustedClients";
import { ProductsSection } from "../components/productsSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { points, processSteps, sectors } from "../data/landingPage";
import { useRef, useState } from "react";
import { Eye } from "lucide-react";
import PointDetail from "../components/PointDetail";

export default function LandingPage() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const detailRef = useRef(null);

  const handleSelectPoint = (point) => {
    const isSameSelected = selectedPoint?.title === point.title;
    setSelectedPoint(isSameSelected ? null : point);

    // Só rola até o painel quando um novo ponto é aberto (não ao fechar)
    if (!isSameSelected) {
      requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <div className="font-sans text-ink bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />

        {/* Pontos de atuação */}
        <section id="pontos" className="py-[88px]">
          <div className="w-full max-w-[1240px] mx-auto px-8">
            <SectionHeader
              eyebrow="COBERTURA"
              title="Um ponto de atuação para cada tipo de ativo."
            >
              Cada utilidade tem sua própria física, seus próprios protocolos
              e suas próprias falhas. Por isso a AS3 não entrega um sensor
              genérico — entrega instrumentação específica para cada ponto de
              medição da sua planta.
            </SectionHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {points.map((point) => (
                <button
                  key={point.title}
                  onClick={() => handleSelectPoint(point)}
                  className={`group relative text-left w-full rounded-2xl transition ${
                    selectedPoint?.title === point.title
                      ? "ring-2 ring-neutral-800"
                      : ""
                  }`}
                >
                  <PointCard {...point} />

                  {/* Overlay de hover: "Veja onde o produto se aplica" */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 rounded-2xl bg-white/90 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
                    <Eye className="h-4 w-4 text-neutral-800" />
                    <span className="text-sm font-medium text-neutral-800">
                      Veja onde o produto se aplica
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Painel inline abaixo da grade */}
            <PointDetail
              ref={detailRef}
              point={selectedPoint}
              onClose={() => setSelectedPoint(null)}
            />
          </div>
        </section>

        
        {/* <ProductsSection /> */}
        {/* Metodologia */}
        <section id="como-funciona" className="py-[88px]">
          <div className="bg-gray-soft rounded-[28px] max-w-[1240px] mx-auto">
            <div className="w-full max-w-[1240px] mx-auto px-8 py-[88px]">
              <SectionHeader
                eyebrow="METODOLOGIA"
                title="Uma cadeia, quatro etapas, um só responsável."
              >
                A AS3 assume a operação de ponta a ponta — do sensor instalado
                em campo até o alerta que chega para o time responsável — sem
                depender de integradores intermediários.
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, i) => (
                  <ProcessStep key={step.n} {...step} isLime={i % 2 !== 0} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <TrustedClientsSection />

        {/* Setores */}
        <section id="setores" className="py-[88px]">
          <div className="w-full max-w-[1240px] mx-auto px-8">
            <SectionHeader
              eyebrow="SETORES ATENDIDOS"
              title="Construído para operações que não podem parar."
            >
              Plantas industriais, concessionárias e grandes operações
              comerciais confiam à AS3 o monitoramento dos ativos que
              sustentam sua produção.
            </SectionHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sectors.map((sector) => (
                <SectorCard key={sector.title} {...sector} />
              ))}
            </div>
          </div>
        </section>

        <StatsBand />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}