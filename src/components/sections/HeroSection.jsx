import { ArrowDown, BarChart3, Radio } from "lucide-react";
import iot from "../../assets/iot.png";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <>
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
              <Button>Quero monitorar minha operação</Button>
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
    </>
  );
}
