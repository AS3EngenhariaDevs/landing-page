import { useState } from "react";
import { Activity, ArrowRight, CheckCircle2, ChevronDown, Copy, Maximize2 } from "lucide-react";
import { faqs, scenarios } from "../../data/landingPage";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function SuccessCasesSection({ onOpenImage }) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const scenario = scenarios[scenarioIndex];
  const copyEmail = async () => {
    await navigator.clipboard?.writeText("comercial@as3group.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <>
        <section className="demo-section section-grid" id="demonstracao">
          <SectionHeader
            eyebrow="Da medição à ação"
            title="Da informação à próxima ação."
            text="Escolha um parâmetro e explore da medição ao acompanhamento da ação."
          />
          <div className="scenario-tabs">
            {scenarios.map((s, i) => (
              <button
                className={i === scenarioIndex ? "active" : ""}
                key={s.name}
                onClick={() => {
                  setScenarioIndex(i);
                  setStep(0);
                }}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div className="demo-grid">
            <article className="before-card">
              <button
                type="button"
                className="image-zoom-trigger"
                aria-label={`Ampliar imagem de medição: ${scenario.name}`}
                onClick={() => onOpenImage({
                  src: scenario.image,
                  alt: `Exemplo de medição de ${scenario.name}`,
                  title: scenario.name,
                })}
              >
                <img src={scenario.image} alt="" loading="lazy" />
                <span className="image-zoom-hint"><Maximize2 size={16} /> Ampliar</span>
              </button>
              <span>Sem visibilidade</span>
              <h3>{scenario.title}</h3>
              <p>
                A equipe depende de leituras pontuais. A mudança pode aparecer
                somente na próxima verificação.
              </p>
            </article>
            <article className="after-card">
              <div className="after-head">
                <span>Com Microméros</span>
                <small>Exemplo ilustrativo</small>
              </div>
              <div className="live-value">
                <div>
                  <small>{scenario.local} · ponto monitorado</small>
                  <strong>{scenario.value}</strong>
                </div>
                <span>
                  <Activity /> Medição recebida
                </span>
              </div>
              <div className="mini-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="step-tabs">
                {["Medir", "Avisar", "Agir", "Acompanhar"].map((x, i) => (
                  <button
                    className={i === step ? "active" : ""}
                    key={x}
                    onClick={() => setStep(i)}
                  >
                    <span>{i + 1}</span>
                    {x}
                  </button>
                ))}
              </div>
              <h3>
                {
                  [
                    "A medição fica visível.",
                    "O desvio gera um aviso.",
                    "A equipe verifica a causa.",
                    "O efeito da correção aparece.",
                  ][step]
                }
              </h3>
              <p>{scenario.description}</p>
              <button
                className="next-step"
                onClick={() => setStep((step + 1) % 4)}
              >
                Próximo passo <ArrowRight />
              </button>
            </article>
          </div>
          <p className="fine-print">
            Dados fictícios para demonstrar o fluxo de uso. O monitoramento não
            substitui inspeções ou sistemas de segurança.
          </p>
        </section>

        <section className="start-section">
          <div className="section-grid">
            <SectionHeader
              eyebrow="Como começar"
              title={
                <>
                  Comece pequeno.
                  <br />
                  Escale quando fizer sentido.
                </>
              }
            />
            <div className="start-grid">
              {[
                [
                  "01",
                  "Escolha o que quer enxergar.",
                  "Uma máquina, o consumo de água ou um reservatório. Comece pela sua prioridade.",
                ],
                [
                  "02",
                  "Nós instalamos.",
                  "Configuramos sensores, comunicação, plataforma e alertas.",
                ],
                [
                  "03",
                  "Receba os dados.",
                  "Acompanhe os indicadores com apoio da nossa equipe.",
                ],
                [
                  "04",
                  "Amplie quando precisar.",
                  "Adicione novos pontos, equipamentos, unidades e aplicações.",
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

        <section className="plans-section section-grid" id="contratacao">
          <SectionHeader
            eyebrow="Como contratar"
            title={
              <>
                Escolha como investir.
                <br />A AS3 estrutura o projeto.
              </>
            }
            text="Duas formas de contratar o monitoramento, conforme a necessidade da sua operação."
          />
          <div className="plan-grid">
            <article className="plan-card">
              <span>Compra dos equipamentos</span>
              <h3>
                Equipamentos próprios.
                <br />
                Plataforma contratada.
              </h3>
              <p>
                Você adquire os equipamentos e contrata o acesso à plataforma
                com licença mensal ou antecipada.
              </p>
              <ul>
                <li>Os equipamentos passam a ser da sua empresa.</li>
                <li>A licença dá acesso aos recursos contratados.</li>
                <li>O período da licença é definido na proposta.</li>
              </ul>
              <Button>Quero avaliar esta opção</Button>
            </article>
            <article className="plan-card plan-card--dark">
              <span>Monitoramento como serviço</span>
              <h3>
                Equipamentos e plataforma
                <br />
                na mensalidade.
              </h3>
              <p>
                Você utiliza os equipamentos em locação e paga mensalmente pelo
                conjunto contratado.
              </p>
              <ul>
                <li>A mensalidade reúne locação e plataforma.</li>
                <li>Opção Flex e contratos de 12, 24 ou 36 meses.</li>
                <li>Os equipamentos são devolvidos ao encerrar.</li>
              </ul>
              <Button dark>Quero avaliar esta opção</Button>
            </article>
          </div>
        </section>

        <section className="faq-section section-grid">
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title={
              <>
                O que você precisa saber
                <br />
                antes de começar.
              </>
            }
          />
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <article className={openFaq === i ? "open" : ""} key={q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{q}</span>
                  <ChevronDown />
                </button>
                <div>
                  <p>{a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="section-grid contact-inner">
            <span className="eyebrow">Próximo passo</span>
            <h2>
              O que está acontecendo
              <br />
              <em>na sua operação agora?</em>
            </h2>
            <p>
              Se você não consegue responder com dados, o Microméros pode
              ajudar. Conte o que você quer enxergar. A AS3 cuida de conectar o
              caminho.
            </p>
            <a
              className="contact-button"
              href="https://wa.me/5521983620774?text=Ol%C3%A1%2C%20quero%20uma%20avalia%C3%A7%C3%A3o%20gratuita%20do%20Microm%C3%A9ros%20na%20minha%20empresa%21"
              target="_blank"
              rel="noreferrer"
            >
              Quero uma avaliação gratuita <ArrowRight />
            </a>
            <div className="email-row">
              <a href="mailto:comercial@as3group.com">comercial@as3group.com</a>
              <button onClick={copyEmail}>
                {copied ? <CheckCircle2 /> : <Copy />}
                {copied ? "E-mail copiado" : "Copiar e-mail"}
              </button>
            </div>
          </div>
        </section>
    </>
  );
}
