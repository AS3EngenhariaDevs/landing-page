import Brand from "./Brand";

export default function Footer() {
  return (
      <footer>
        <div className="section-grid footer-grid">
          <div>
            <Brand />
            <p>
              Uma solução AS3.
              <br />
              Dados, engenharia e ação.
            </p>
          </div>
          <div>
            <b>Aplicações</b>
            <a href="#monitoramento">O que monitorar</a>
            <a href="#aplicacoes">Segmentos</a>
            <a href="#demonstracao">Demonstração</a>
          </div>
          <div>
            <b>Explore o Microméros</b>
            <a href="#como-funciona">Como funciona</a>
            <a href="#contratacao">Como contratar</a>
            <a href="#contato">Converse com a AS3</a>
          </div>
          <div className="footer-end">
            <a href="#inicio">Voltar ao início ↑</a>
            <span>© 2026 AS3</span>
          </div>
        </div>
      </footer>
  );
}
