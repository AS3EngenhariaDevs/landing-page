import { Users } from "lucide-react";
import supportImage from "../../assets/images/support.png";
import SectionHeader from "../ui/SectionHeader";

export default function AcceleratorsSection() {
  return (
    <>
        <section className="why-section">
          <div className="section-grid">
            <SectionHeader
              light
              eyebrow="Por que Microméros"
              title={
                <>
                  Mais simples para começar.
                  <br />
                  <em>Mais completo para continuar.</em>
                </>
              }
            />
            <div className="why-grid">
              {[
                [
                  "01",
                  "Comece com um ativo.",
                  "Você não precisa esperar um grande projeto para começar a medir.",
                ],
                [
                  "02",
                  "Conecte onde precisa.",
                  "Escolhemos a comunicação adequada, com opções independentes da rede local.",
                ],
                [
                  "03",
                  "Reúna as informações.",
                  "Água, energia, gás, máquinas e instrumentos na mesma plataforma.",
                ],
                [
                  "04",
                  "Conte com a AS3.",
                  "Nossa equipe acompanha e ajuda a transformar os dados em ações.",
                ],
              ].map(([n, t, x]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{x}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-section section-grid">
          <div className="support-visual">
            <img
              className="support-image"
              src={supportImage}
              alt="Especialista da AS3 acompanhando dados operacionais em uma central de monitoramento"
            />
            <div className="support-badge">
              <Users />
              <span>
                <strong>Acompanhamento especialista</strong>
                <small>dados, engenharia e ação</small>
              </span>
            </div>
          </div>
          <div className="support-copy">
            <SectionHeader
              eyebrow="Tecnologia e acompanhamento"
              title={
                <>
                  A tecnologia mostra.
                  <br />
                  Nossa equipe ajuda
                  <br />
                  você a agir.
                </>
              }
              text="Você recebe os dados e conta com quem ajuda a entendê-los."
            />
            <p>
              Especialistas acompanham seus indicadores, ajudam a identificar
              oportunidades e orientam sua equipe na utilização das informações.
            </p>
            <ul>
              <li>Análise dos dados e do comportamento da operação.</li>
              <li>Ajustes para acompanhar o que realmente importa.</li>
              <li>Orientação sobre oportunidades de melhoria e economia.</li>
            </ul>
          </div>
        </section>
    </>
  );
}
