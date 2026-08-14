import { ArrowRight } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="pt-16 pb-[90px]">
      <div className="w-full max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full">
            <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
            PLATAFORMA MICROMÉROS
          </span>

          <h1 className="font-bold tracking-[-0.01em] leading-[1.12] mt-0 text-[clamp(34px,4vw,54px)] max-w-[560px] mt-4">
            Da painel elétrico ao motor industrial, cobrimos{" "}
            <span className="hl">todos os pontos</span> do seu ativo.
          </h1>

          <p className="mt-[22px] text-[16.5px] leading-[1.7] text-ink-soft max-w-[460px]">
            A AS3 projeta, instala e opera a cadeia completa de
            monitoramento do sensor até a nuvem para todos os tipos ativos em ambientes industriais.
          </p>

          <div className="flex gap-3.5 mt-[34px] flex-wrap">
            <a href="#contato" className="group inline-flex items-center justify-center gap-2.5 font-semibold text-[15px] px-[26px] py-[15px] rounded-full bg-ink text-paper shadow-soft hover:bg-lime hover:text-ink hover:-translate-y-[3px] hover:shadow-hover transition-all duration-[180ms] no-underline whitespace-nowrap sm:w-auto w-full">
              Solicitar diagnóstico
              <ArrowRight size={17} className="btn-arrow" />
            </a>
            <a href="#pontos" className="group inline-flex items-center justify-center gap-2.5 font-semibold text-[15px] px-[26px] py-[15px] rounded-full bg-gray-soft text-ink hover:bg-gray hover:-translate-y-[3px] transition-all duration-[180ms] no-underline whitespace-nowrap sm:w-auto w-full">
              Ver pontos monitorados
            </a>
          </div>

          <div className="flex gap-[30px] mt-12 flex-wrap">
            <div>
              <b className="block text-2xl font-extrabold">500+</b>
              <span className="text-[12.5px] text-ink-soft">Dispositivos IoT instalados</span>
            </div>
            <div>
              <b className="block text-2xl font-extrabold">20+</b>
              <span className="text-[12.5px] text-ink-soft">Ativos medidos</span>
            </div>
            <div>
              <b className="block text-2xl font-extrabold">24/7</b>
              <span className="text-[12.5px] text-ink-soft">Telemetria em tempo real</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-soft rounded-[28px] p-7 shadow-soft relative">
          <div className="flex justify-between items-center mb-1.5">
            <h4 className="text-[17px] font-bold m-0">Dispositivo Microméros</h4>
            <span className="text-xs text-ink-soft">Iot Sensor</span>
          </div>

          <HeroIllustration />

          <div className="mt-2.5 bg-white rounded-[14px] px-[18px] py-3.5 text-[13px] leading-[1.6] text-ink-soft shadow-soft">
            Os <b className="text-ink">dispositivos IoT Microméros</b> conectam sensores de água, gás e
            energia via <b className="text-ink">LoRaWAN, MQTT e RS485</b> — entregando dados
            direto para a plataforma na nuvem.
          </div>
        </div>
      </div>
    </section> 
  );
}
