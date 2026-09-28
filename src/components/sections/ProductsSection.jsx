import { useState } from "react";
import { Activity, ArrowRight, BarChart3, Bell, Check, CheckCheck, ChevronLeft, FileText, MapPin, Mic, MoreVertical, Paperclip, PhoneCall, Radio, Smile, Users, Video } from "lucide-react";
import iot from "../../assets/iot.png";
import as3Logo from "../../assets/logos/as3-official.png";
import dashboardsImage from "../../assets/images/micromeros-dashboards.png";
import { monitoring, agentQuestions, visibilityProblems } from "../../data/landingPage";
import PointCard from "../ui/PointCard";
import ProcessStep from "../ui/ProcessStep";
import SectionHeader from "../ui/SectionHeader";

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
export default function ProductsSection({ onOpenImage }) {
  const [agentIndex, setAgentIndex] = useState(0);
  return (
    <>
        <section className="problem-section section-grid">
          <SectionHeader
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
          <SectionHeader
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
            <ProcessStep>
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
            </ProcessStep>
            <ProcessStep dark>
              <span className="step-label">02 · Na plataforma</span>
              <DashboardEvidence compact />
              <h3>O dado ganha contexto.</h3>
              <p>
                A plataforma reúne o histórico e avisa quando uma condição exige
                atenção.
              </p>
            </ProcessStep>
            <ProcessStep>
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
            </ProcessStep>
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
            <SectionHeader
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
                <PointCard key={item.title} item={item} onOpenImage={onOpenImage} />
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
            <SectionHeader
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
              <SectionHeader
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
            <SectionHeader
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
    </>
  );
}
