import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-[12px]">
      <nav className="flex items-center justify-between py-[18px] px-8 max-w-[1240px] mx-auto">
        <Logo />

        <div className="hidden md:flex gap-[34px] items-center">
          <a href="#pontos"       className="text-[14.5px] font-medium text-ink-soft hover:text-ink transition-colors no-underline">Pontos de atuação</a>
          <a href="#como-funciona" className="text-[14.5px] font-medium text-ink-soft hover:text-ink transition-colors no-underline">Como funciona</a>
          <a href="#setores"      className="text-[14.5px] font-medium text-ink-soft hover:text-ink transition-colors no-underline">Setores</a>
          <a href="#contato"      className="text-[14.5px] font-medium text-ink-soft hover:text-ink transition-colors no-underline">Contato</a>
        </div>

        <a
          href="#contato"
          className="hidden sm:inline-flex group items-center justify-center gap-2.5 font-semibold text-[15px] px-[26px] py-[15px] rounded-full bg-ink text-paper shadow-soft hover:bg-lime hover:text-ink hover:-translate-y-[3px] hover:shadow-hover transition-all duration-[180ms] no-underline whitespace-nowrap"
        >
          Fale com um especialista
        </a>
      </nav>
    </header>
  );
}
