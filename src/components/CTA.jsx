import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-[90px] text-center">
      <div className="w-full max-w-[1240px] mx-auto px-8">
        <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full mb-[18px]">
          <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
          PRÓXIMO PASSO
        </span>

        <h2 className="font-bold tracking-[-0.01em] leading-[1.12] text-[clamp(28px,3.6vw,44px)] max-w-[720px] mx-auto mb-[18px]">
          Vamos mapear os pontos de ativo da sua operação.
        </h2>

        <p className="text-ink-soft text-[15.5px] max-w-[480px] mx-auto mb-9 leading-[1.7]">
          Fale com o time de engenharia da AS3 e descubra onde a
          instrumentação certa reduz perdas, evita falhas e dá visibilidade
          ao que hoje é invisível.
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap">
          <a
            href="mailto:comercial@as3group.com
"
            className="group inline-flex items-center justify-center gap-2.5 font-semibold text-[15px] px-[26px] py-[15px] rounded-full bg-ink text-paper shadow-soft hover:bg-lime hover:text-ink hover:-translate-y-[3px] hover:shadow-hover transition-all duration-[180ms] no-underline whitespace-nowrap"
          >
            Solicitar visita técnica
            <ArrowRight size={17} className="btn-arrow" />
          </a>
          <a href="#pontos" className="group inline-flex items-center justify-center gap-2.5 font-semibold text-[15px] px-[26px] py-[15px] rounded-full bg-gray-soft text-ink hover:bg-gray hover:-translate-y-[3px] transition-all duration-[180ms] no-underline whitespace-nowrap">
            Ver pontos de atuação
          </a>
        </div>
      </div>
    </section>
  );
}
