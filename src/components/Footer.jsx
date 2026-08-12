import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="pt-[50px] pb-[34px]">
      <div className="w-full max-w-[1240px] mx-auto px-8">
        <div className="flex justify-between flex-wrap gap-[30px] pb-9 border-b border-gray-soft">
          <div>
            <Logo />
            <p className="max-w-[280px] text-ink-soft text-[13.5px] mt-3.5 leading-[1.6]">
              Engenharia e plataforma de monitoramento IoT para ativos
              industriais. Rio de Janeiro, RJ.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-soft m-0 mb-3.5">Plataforma</h4>
              <a href="#pontos"        className="block text-[13.8px] mb-[9px] text-ink-soft no-underline hover:text-ink transition-colors">Pontos de atuação</a>
              <a href="#como-funciona" className="block text-[13.8px] mb-[9px] text-ink-soft no-underline hover:text-ink transition-colors">Como funciona</a>
              <a href="#setores"       className="block text-[13.8px] mb-[9px] text-ink-soft no-underline hover:text-ink transition-colors">Setores</a>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-soft m-0 mb-3.5">Empresa</h4>
              <a href="#"        className="block text-[13.8px] mb-[9px] text-ink-soft no-underline hover:text-ink transition-colors">Sobre a AS3</a>
              <a href="#contato" className="block text-[13.8px] mb-[9px] text-ink-soft no-underline hover:text-ink transition-colors">Contato</a>
              <a href="#"        className="block text-[13.8px] mb-[9px] text-ink-soft no-underline hover:text-ink transition-colors">Carreiras</a>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-soft m-0 mb-3.5">Contato</h4>
              <a href="mailto:contato@as3engenharia.com.br" className="block text-[13.8px] mb-[9px] text-ink-soft no-underline hover:text-ink transition-colors">contato@as3engenharia.com.br</a>
              <a href="#" className="block text-[13.8px] mb-[9px] text-ink-soft no-underline hover:text-ink transition-colors">Rio de Janeiro, RJ</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-5 text-[12px] text-ink-soft flex-wrap gap-2.5">
          <span>© 2026 AS3 Engenharia — todos os direitos reservados</span>
          <span>Plataforma Micromeros</span>
        </div>
      </div>
    </footer>
  );
}
