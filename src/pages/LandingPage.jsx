import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Copy,
  FileText,
  MapPin,
  Maximize2,
  Menu,
  Mic,
  MoreVertical,
  Paperclip,
  PhoneCall,
  Radio,
  Smile,
  Users,
  Video,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import iot from "../assets/iot.png";
import ambev from "../assets/logos/ambev.png";
import copador from "../assets/logos/copador.png";
import metrorio from "../assets/logos/metrorio.png";
import fiocruz from "../assets/logos/fiocruz.png";
import quaker from "../assets/logos/quaker.png"
import zonaoestemais from "../assets/logos/zonaoestemais.png"
import metropolitano from "../assets/logos/metropolitano.png"
import labts from "../assets/logos/labts.png"
import auton from "../assets/logos/auton.png"
import as3Logo from "../assets/logos/as3-official.png";
import supportImage from "../assets/images/support.png";
import dashboardsImage from "../assets/images/micromeros-dashboards.png";
import unseenLeakImage from "../assets/images/problem-unseen-leak-v2.png";
import lateMaintenanceImage from "../assets/images/problem-late-maintenance-v2.png";
import scatteredRecordsImage from "../assets/images/problem-scattered-records-v2.png";

import { monitoring } from "../data/pageData";
import { scenarios } from "../data/pageData";
import { segments } from "../data/pageData";
import { agentQuestions } from "../data/pageData";
import { faqs } from "../data/pageData";

const clientLogos = [
  { src: ambev, alt: "Ambev" },
  { src: copador, alt: "Copador" },
  { src: metrorio, alt: "MetrôRio" },
  { src: fiocruz, alt: "Fiocruz" },
  { src: labts, alt: "LABTS" },
  { src: quaker, alt: "Quaker" },
  { src: auton, alt: "Auton" },
  { src: zonaoestemais, alt: "Zona Oeste Mais" },
  { src: metropolitano, alt: "Shopping Metropolitano" },
];

const visibilityProblems = [
  {
    label: "Perda invisível",
    title: "Desperdício que ninguém vê.",
    text: "Vazamentos, consumo fora do horário e equipamentos funcionando sem necessidade.",
    image: unseenLeakImage,
    imageAlt:
      "Tubulação vazando em uma sala técnica vazia fora do horário de operação",
  },
  {
    label: "Resposta tardia",
    title: "Manutenções urgentes e inesperadas.",
    text: "A informação chega quando a conta aumentou, a máquina parou ou a operação foi afetada.",
    image: lateMaintenanceImage,
    imageAlt: "Técnico inspecionando uma bomba após a falha do equipamento",
  },
  {
    label: "Dados dispersos",
    title: "Dados presos em planilhas.",
    text: "Leituras manuais, papel e mensagens espalhadas. Para entender, alguém precisa juntar tudo.",
    image: scatteredRecordsImage,
    imageAlt:
      "Leituras operacionais em prancheta, planilhas e telefone sobre uma mesa",
  },
];

function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand--light" : ""}`}
      href="#inicio"
      aria-label="AS3 — início"
    >
      <span className="brand__logo-crop">
        <img src={as3Logo} alt="AS3" />
      </span>
      <span className="brand__product">Microméros</span>
    </a>
  );
}

function ArrowLink({ children, dark = false, href = "#contato" }) {
  return (
    <a
      className={`pill-button ${dark ? "pill-button--light" : ""}`}
      href={href}
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  centered = false,
  light = false,
}) {
  return (
    <div
      className={`section-intro ${centered ? "section-intro--center" : ""} ${light ? "section-intro--light" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function DashboardEvidence({ compact = false }) {
  return (
    <figure
      className={`dashboard-evidence ${compact ? "dashboard-evidence--compact" : ""}`}
    >
      <img
        src={dashboardsImage}
        alt="Dashboards reais do Microméros exibidos em computador e tablet"
      />
    </figure>
  );
}

function AgentChat({ conversation }) {
  const [question, answer] = conversation;

  return (
    <div
      className="phone"
      aria-label="Simulação de conversa com o Microméros Agent"
    >
      <div className="phone-status" aria-hidden="true">
        <span>9:41</span>
        <span className="phone-status__indicators">
          <i />
          <i />
          <i />
          <span className="phone-status__battery" />
        </span>
      </div>
      <div className="phone-head">
        <ChevronLeft className="phone-head__back" aria-hidden="true" />
        <span className="phone-avatar">
          <span className="phone-logo-crop">
            <img src={as3Logo} alt="AS3" />
          </span>
        </span>
        <div className="phone-contact">
          <b>Microméros Agent</b>
          <small>Solução AS3</small>
        </div>
        <span className="phone-head__actions" aria-hidden="true">
          <Video />
          <PhoneCall />
          <MoreVertical />
        </span>
      </div>
      <div className="phone-chat" aria-live="polite">
        <span className="simulation-label">
          Demonstração com dados fictícios
        </span>
        <div className="bubble bubble--user">
          <span className="bubble__text">{question}</span>
          <span className="bubble__meta">
            09:41 <CheckCheck aria-label="Mensagem lida" />
          </span>
        </div>
        <div className="bubble bubble--agent">
          <span className="bubble__text">{answer}</span>
          <span className="bubble__meta">09:42</span>
        </div>
      </div>
      <div className="phone-compose" aria-hidden="true">
        <span className="phone-compose__field">
          <Smile />
          <span>Mensagem</span>
          <Paperclip />
        </span>
        <span className="phone-compose__mic">
          <Mic />
        </span>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [agentIndex, setAgentIndex] = useState(0);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);
  const [imageZoomed, setImageZoomed] = useState(false);
  const lightboxRef = useRef(null);
  const scenario = scenarios[scenarioIndex];
  const openImage = (image) => {
    setImageZoomed(false);
    setExpandedImage(image);
  };
  useEffect(() => {
    const dialog = lightboxRef.current;
    if (!dialog) return;
    if (expandedImage && !dialog.open) dialog.showModal();
    if (!expandedImage && dialog.open) dialog.close();
  }, [expandedImage]);
  const copyEmail = async () => {
    await navigator.clipboard?.writeText("comercial@as3group.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
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
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero section-grid" id="inicio">
          <div className="hero-copy">
            <h1>Você não consegue melhorar o que não consegue enxergar.</h1>
            <h2>Monitore água, energia, gás e equipamentos em tempo real.</h2>
            <p>
              O Microméros mostra o que está acontecendo na sua operação e avisa
              quando algo precisa de atenção.
            </p>
            <p>
              A AS3 instala os sensores, conecta as medições e entrega a solução
              em operação. Sua equipe acompanha os dados pelo computador ou
              celular, com orientação especializada.
            </p>
            <div className="hero-actions">
              <ArrowLink>Quero monitorar minha operação</ArrowLink>
              <a className="text-link" href="#como-funciona">
                Entender o funcionamento <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual__label">
              <span>Microméros</span>
              <small>Monitoramento conectado pela AS3</small>
            </div>
            <div className="hero-orbit">
              <span className="orbit orbit-a" />
              <span className="orbit orbit-b" />
              <img src={iot} alt="Dispositivo Microméros da AS3" />
            </div>
            <div className="signal-card signal-card--top">
              <Radio size={18} />
              <span>
                <b>+500 Sensores</b> instalados
              </span>
            </div>
            <div className="signal-card signal-card--bottom">
              <BarChart3 size={18} />
              <span>
                <b>Dados</b> em tempo real
              </span>
            </div>
          </div>
        </section>

        <section className="logo-band" aria-label="Empresas atendidas pela AS3">
          <div className="logo-track">
            {[0, 1].map((group) => (
              <div
                className="logo-set"
                key={group}
                aria-hidden={group === 1 ? "true" : undefined}
              >
                {clientLogos.map(({ src, alt }) => (
                  <img
                    key={`${group}-${alt}`}
                    src={src}
                    alt={group === 0 ? alt : ""}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="problem-section section-grid">
          <SectionIntro
            eyebrow="Onde a operação perde visibilidade"
            title={
              <>
                Sua operação ainda
                <br />
                está no escuro?
              </>
            }
          />
          <div className="problem-grid">
            {visibilityProblems.map(
              ({ label, title, text, image, imageAlt }) => (
                <article className="problem-card" key={label}>
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <span>{label}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ),
            )}
          </div>
          <p className="problem-close">
            Quando a informação chega tarde,{" "}
            <strong>a ação também chega tarde.</strong>
          </p>
        </section>

        <section className="statement-section">
          <div className="section-grid statement-inner">
            <span className="eyebrow">O papel do Microméros</span>
            <h2>
              Do escuro ao dado.
              <br />
              <em>Em tempo real.</em>
            </h2>
            <p>
              Água, energia, gás, máquinas e outras medições da sua operação,
              disponíveis em um único lugar, 24 horas por dia.
            </p>
            <div className="statement-list">
              <span>
                <Check />
                Veja o que acontece.
              </span>
              <span>
                <Check />
                Receba os alertas.
              </span>
              <span>
                <Check />
                Decida com dados.
              </span>
            </div>
          </div>
        </section>

        <section className="process-section section-grid" id="como-funciona">
          <SectionIntro
            eyebrow="Como o dado chega"
            title={
              <>
                Da sua operação
                <br />à informação que você precisa.
              </>
            }
            text="Veja o caminho de uma medição: o consumo é registrado, a informação chega à plataforma e sua equipe sabe onde verificar."
          />
          <div className="process-grid">
            <article className="process-card">
              <span className="step-label">01 · No local</span>
              <div className="process-device">
                <img src={iot} alt="Dispositivo Microméros" />
                <span>
                  <Radio />
                  medição recebida
                </span>
              </div>
              <h3>O sensor mede.</h3>
              <p>
                Água, energia, gás e equipamentos. Cada ponto recebe a medição
                adequada.
              </p>
            </article>
            <article className="process-card process-card--dark">
              <span className="step-label">02 · Na plataforma</span>
              <DashboardEvidence compact />
              <h3>O dado ganha contexto.</h3>
              <p>
                A plataforma reúne o histórico e avisa quando uma condição exige
                atenção.
              </p>
            </article>
            <article className="process-card">
              <span className="step-label">03 · Com sua equipe</span>
              <div className="alert-visual">
                <Bell />
                <small>Consumo fora do horário</small>
                <strong>Verifique o ponto monitorado.</strong>
                <span>Há 3 min</span>
              </div>
              <h3>A equipe pode agir.</h3>
              <p>
                O responsável verifica a causa e acompanha o efeito da correção.
              </p>
            </article>
          </div>
          <div className="process-footer">
            <strong>A AS3 conecta todas as etapas.</strong>
            <span>
              Instalação + configuração + plataforma + acompanhamento.
            </span>
          </div>
        </section>

        <section className="monitor-section" id="monitoramento">
          <div className="section-grid">
            <SectionIntro
              eyebrow="O que você pode monitorar"
              title={
                <>
                  Uma plataforma.
                  <br />
                  Toda a sua operação.
                </>
              }
              text="Comece pelo que precisa enxergar. Conecte outras medições quando fizer sentido."
            />
            <div className="monitor-grid">
              {monitoring.map((item) => (
                <article className="monitor-card" key={item.title}>
                  <div className="monitor-image">
                    <button
                      type="button"
                      className="image-zoom-trigger"
                      aria-label={`Ampliar imagem de monitoramento: ${item.title}`}
                      onClick={() => openImage({
                        src: item.image,
                        alt: `Aplicação de monitoramento: ${item.title}`,
                        title: item.title,
                      })}
                    >
                      <img src={item.image} alt="" loading="lazy" />
                      <span className="image-zoom-hint"><Maximize2 size={16} /> Ampliar</span>
                    </button>
                  </div>
                  <div className="monitor-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span>{item.meta}</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="fine-print">
              Também acompanhamos variáveis de processo, temperatura, umidade e
              baterias. As grandezas disponíveis dependem dos sensores
              escolhidos.
            </p>
          </div>
        </section>

        <section className="connect-section section-grid">
          <div>
            <SectionIntro
              eyebrow="Conectividade sob medida"
              title={
                <>
                  Sem depender da rede
                  <br />
                  da sua empresa.
                </>
              }
              text="Instale onde precisa medir, não apenas onde existe Wi-Fi."
            />
            <p>
              Escolhemos a forma de conexão adequada ao seu ambiente. Você não
              precisa começar criando uma rede complexa para acompanhar os
              primeiros pontos.
            </p>
            <div className="chips">
              {[
                "NB-IoT",
                "4G",
                "LoRaWAN",
                "Ethernet",
                "Wi-Fi",
                "Bluetooth",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
          <div className="device-stage">
            <span className="device-ring" />
            <img
              src={iot}
              alt="Dispositivo Microméros utilizado para conectar sensores"
            />
            <div className="wave-marks">
              <i />
              <i />
              <i />
            </div>
            <p>
              <strong>O sensor mede. A conexão leva o dado.</strong>
              <br />A AS3 cuida dessa parte para você.
            </p>
          </div>
        </section>

        <section className="platform-section">
          <div className="section-grid platform-grid">
            <div>
              <SectionIntro
                light
                eyebrow="A plataforma Microméros"
                title={
                  <>
                    Tudo o que acontece.
                    <br />
                    <em>Em um único lugar.</em>
                  </>
                }
                text="Abra a plataforma e veja seus pontos monitorados. Compare o consumo, consulte o histórico e descubra o que precisa da sua atenção."
              />
              <DashboardEvidence />
            </div>
            <div className="feature-list">
              {[
                [
                  BarChart3,
                  "Veja o panorama",
                  "Painéis e indicadores para acompanhar a operação.",
                ],
                [
                  Activity,
                  "Entenda o histórico",
                  "Gráficos e comparação entre pontos e períodos.",
                ],
                [
                  Bell,
                  "Saiba o que merece atenção",
                  "Alarmes para as condições que você definiu.",
                ],
                [
                  MapPin,
                  "Encontre cada ponto",
                  "Mapa e organização das unidades monitoradas.",
                ],
                [
                  FileText,
                  "Leve os dados à decisão",
                  "Relatórios para análise e acompanhamento.",
                ],
                [
                  Users,
                  "Compartilhe com sua equipe",
                  "Usuários e permissões conforme cada responsabilidade.",
                ],
              ].map(([Icon, title, text]) => (
                <div key={title}>
                  <Icon />
                  <span>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="agent-section section-grid">
          <div className="agent-copy">
            <SectionIntro
              eyebrow="Microméros Agent"
              title={
                <>
                  Você não precisa nem abrir a plataforma.
                  <br />
                  <em>Pergunte ao Microméros.</em>
                </>
              }
              text="Consulte os dados da sua operação pelo WhatsApp, com o assistente de inteligência artificial do Microméros."
            />
            <p>
              Faça uma pergunta sobre consumo, equipamentos ou alertas. Receba a
              informação de um jeito fácil de entender.
            </p>
            <div className="question-list">
              {agentQuestions.map(([q], i) => (
                <button
                  key={q}
                  className={i === agentIndex ? "active" : ""}
                  aria-pressed={i === agentIndex}
                  onClick={() => setAgentIndex(i)}
                >
                  {q}
                  <ArrowRight />
                </button>
              ))}
            </div>
          </div>
          <AgentChat conversation={agentQuestions[agentIndex]} />
        </section>

        <section className="segments-section" id="aplicacoes">
          <div className="section-grid">
            <SectionIntro
              eyebrow="Aplicações por segmento"
              title={
                <>
                  Como o Microméros se aplica
                  <br />à sua operação.
                </>
              }
            />
            <div className="segment-grid">
              {segments.map(({ icon: Icon, ...s }) => (
                <article className="segment-card" key={s.label}>
                  <div className="segment-image">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>
                      <Icon /> {s.label}
                    </span>
                  </div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <a href="#contato">
                      Conhecer a aplicação <ArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="section-grid">
            <SectionIntro
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
            <SectionIntro
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

        <section className="demo-section section-grid" id="demonstracao">
          <SectionIntro
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
                onClick={() => openImage({
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
            <SectionIntro
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
          <SectionIntro
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
              <ArrowLink>Quero avaliar esta opção</ArrowLink>
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
              <ArrowLink dark>Quero avaliar esta opção</ArrowLink>
            </article>
          </div>
        </section>

        <section className="faq-section section-grid">
          <SectionIntro
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
      </main>

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
      <dialog
        ref={lightboxRef}
        className="image-lightbox"
        aria-labelledby="image-lightbox-title"
        onClose={() => { setExpandedImage(null); setImageZoomed(false); }}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="image-lightbox__panel">
          <div className="image-lightbox__header">
            <h2 id="image-lightbox-title">{expandedImage?.title}</h2>
            <div className="image-lightbox__actions">
              <button type="button" onClick={() => setImageZoomed(!imageZoomed)} aria-label={imageZoomed ? "Reduzir imagem" : "Aproximar imagem"}>
                {imageZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>
              <button type="button" onClick={() => lightboxRef.current?.close()} aria-label="Fechar imagem ampliada">
                <X size={22} />
              </button>
            </div>
          </div>
          <div className={`image-lightbox__viewport${imageZoomed ? " image-lightbox__viewport--zoomed" : ""}`}>
            {expandedImage && <img src={expandedImage.src} alt={expandedImage.alt} />}
          </div>
        </div>
      </dialog>
    </div>
  );
}
