import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Brand from "./Brand";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />
          <nav
            className={menuOpen ? "nav-links is-open" : "nav-links"}
            aria-label="Navegação principal"
          >
            <a href="#inicio" onClick={() => setMenuOpen(false)}>
              Início
            </a>
            <a href="#monitoramento" onClick={() => setMenuOpen(false)}>
              O que monitorar
            </a>
            <a href="#aplicacoes" onClick={() => setMenuOpen(false)}>
              Aplicações
            </a>
            <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
              Como funciona
            </a>
          </nav>
          <a className="header-cta" href="#contato">
            Fale com a AS3 <ArrowRight size={15} />
          </a>
          <a className="platform-cta" href="http://app.micromeros.com.br/">
            Acessar a plataforma <ArrowRight size={15} />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
  );
}
