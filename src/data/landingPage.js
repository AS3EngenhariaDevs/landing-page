import {
  Droplet,
  Flame,
  Zap,
  Thermometer,
  Wind,
  Gauge,
  Radio,
  CloudCog,
  CircuitBoard,
  Droplets,
} from "lucide-react";

export const points = [
  {
    icon: Zap,
    title: "Microméros Power",
    desc: "Corrente, tensão e demanda em quadros, subestações e circuitos críticos.",
    unit: "kWh",
  },
  {
    icon: Droplet,
    title: "Microméros Flow",
    desc: "Vazão, pressão e consumo em redes hidráulicas, ETAs e pontos de captação.",
    unit: "m³ ou L",
  },
  {
    icon: Flame,
    title: "Microméros Meter",
    desc: "Medição de vazão e pressão em linhas de gás natural e GLP industrial.",
    unit: "m³",
  },
  {
    icon: Gauge,
    title: "Microméros Machine",
    desc: "Monitoramento de motores, máquinas e equipamentos industriais, acompanhando rotação, vibração e desempenho operacional.",
    unit: "RPM",
  },
  {
    icon: Droplets,
    title: "Microméros Process",
    desc: "Monitoramento de variáveis de processo como pH, temperatura, vazão e condutividade.",
    unit: "μS",
  },
];

export const processSteps = [
  {
    n: "01",
    icon: Radio,
    title: "Sensoriamento em campo",
    desc: "Instalação de sensores no ponto exato do ativo, calibrados para cada utilidade.",
  },
  {
    n: "02",
    icon: CircuitBoard,
    title: "Transmissão de dados",
    desc: "Conectividade via LoRaWAN, MQTT ou 4G, com roteamento redundante.",
  },
  {
    n: "03",
    icon: CloudCog,
    title: "Processamento na nuvem",
    desc: "Normalização e cálculo de consumo em tempo real na plataforma Micromeros.",
  },
  {
    n: "04",
    icon: Gauge,
    title: "Decisão e alerta",
    desc: "Dashboards e alertas automáticos entregues ao time certo, no momento certo.",
  },
];

export const sectors = [
  {
    tag: "/ Indústria",
    title: "Plantas industriais",
    desc: "Monitoramento de utilidades em linhas de produção e processos críticos.",
  },
  {
    tag: "/ Utilities",
    title: "Concessionárias",
    desc: "Telemetria de rede para distribuição de água, gás e energia.",
  },
  {
    tag: "/ Comercial",
    title: "Condomínios & shoppings",
    desc: "Rateio de consumo e detecção de perdas em grandes edificações.",
  },
  {
    tag: "/ Infraestrutura",
    title: "Data centers & utilities",
    desc: "Monitoramento crítico de energia e climatização 24/7.",
  },
];

export const stats = [
  ["45+", "Dispositivos IoT conectados"],
  ["4", "Utilidades monitoradas em paralelo"],
  ["24/7", "Telemetria e alertas em tempo real"],
  ["99.9%", "Disponibilidade da plataforma"],
];