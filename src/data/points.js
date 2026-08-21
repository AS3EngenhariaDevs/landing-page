
import {
  Droplet,
  Flame,
  Zap,
  Gauge,
  CircuitBoard,
  Droplets,
  ThermometerIcon,
  Cog,
  BatteryFull
} from "lucide-react";
import process from '../assets/images/points/process.png'
import level from '../assets/images/points/level.png'
import flow from '../assets/images/points/flow.png'
import power from '../assets/images/points/power.jpeg'
import climate from '../assets/images/points/climate.jpeg'
import machine from '../assets/images/points/machine.png'
import meter from '../assets/images/points/meter.png'
import Flux from '../assets/images/points/flux.jpeg'
import charge from '../assets/images/points/charge.png'

export const points = [
  {
    icon: Zap,
    title: "Microméros Power",
    object: "Monitoramento de Energia",
    desc: "Monitoramento de consumo de energia em tempo real, com identificação de variações e picos.",
    unit: "kWh",
    image: power,
    applicableSectors: [
      {
        name: "Shoppings",
        applications: [
          "Rateio de energia por loja/quiosque",
          "Monitoramento da entrada geral de Energia",
          "Auditoria de consumo de energia em tempo real",
        ],
      },
      {
        name: "Condomínios Residenciais",
        applications: [
          "Medição individualizada de áreas comuns",
          "Rateio de energia entre torres/blocos",
          "Alertas de consumo fora do padrão em bombas e elevadores",
        ],
      },
      {
        name: "Prédios Comerciais",
        applications: [
          "Monitoramento inteligente entre cada local",
          "Detecção de consumo fora do horário comercial",
        ],
      },
      {
        name: "Hospitais",
        applications: [
          "Monitoramento de circuitos críticos (UTI, centro cirúrgico)",
          "Monitoramento de rateio de energia por setor/sala",
        ],
      },
      {
        name: "Indústria",
        applications: [
          "Medição por linha de produção ou máquina",
          "Identificação de picos de demanda para evitar multa da concessionária",
          "Acompanhamento de eficiência energética por turno",
        ],
      },
      {
        name: "Infraestrutura — Metrô",
        applications: [
          "Monitoramento de consumo em estações e subestações",
          "Acompanhamento de energia de sistemas de tração",
        ],
      },
      {
        name: "Data Centers / CPDs",
        applications: [
          "Monitoramento de eficiência energética",
          "Acompanhamento de consumo por rack/sala",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Monitore cada ponto da sua operação com eficiência",
          "Monitoramento em tempo real do rateio e consumo de energia",
          "Relatórios e Dashboards exclusivos de cada ponto monitorado"
        ],
      },
    ],
  },
  {
    icon: Droplet,
    title: "Microméros Flow",
    object: "Monitoramento de Água",
    desc: "Monitoramento de consumo e vazão de água em tempo real, com detecção de vazamentos.",
    unit: "m³ ou L",
    image: flow,
    applicableSectors: [
      {
        name: "Shoppings",
        applications: [
          "Rateio de consumo entre lojas e praça de alimentação",
          "Detecção de consumo em rede hidráulica noturna",
        ],
      },
      {
        name: "Condomínios Residenciais",
        applications: [
          "Individualização de monitoramento de água por unidade",
          "Alerta de consumo contínuo fora do padrão",
          "Acompanhamento de reservatórios e caixas d'água",
        ],
      },
      {
        name: "Prédios Comerciais",
        applications: [
          "medição por ponto em andar/locatário",
          "Identificação de consumo fora do horário comercial",
        ],
      },
      {
        name: "Hospitais",
        applications: [
          "Monitoramento de consumo em áreas críticas (CME, lavanderia)",
          "Detecção precoce de vazamentos em rede interna",
        ],
      },
      {
        name: "Indústria",
        applications: [
          "Medição de água de processo por linha",
          "Detecção de vazamentos em rede industrial",
          "Acompanhamento de consumo de água em Torres de resfriamento e Caldeiras",
        ],
      },
      {
        name: "Saneamento — ETA / ETE",
        applications: [
          "Medição de vazão de entrada e saída de estações",
          "Monitoramento de rateio de água em cada parte do tratamento",
        ],
      },
      {
        name: "Data Centers / CPDs",
        applications: [
          "Monitoramento de consumo em sistemas de refrigeração por água",
          "Detecção de variação de consumos de água",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Monitore cada ponto da sua operação com eficiência",
          "Monitoramento em tempo real do rateio e consumo de água",
          "Relatórios e Dashboards exclusivos de cada ponto monitorado",
        ],
      },
    ],
  },
  {
    icon: Gauge,
    title: "Microméros Level",
    object: "Monitoramento de Nível",
    desc: "Monitoramento de nível de líquidos em tanques e reservatórios, com alertas de níveis críticos.",
    unit: "m³ ou L",
    image: level,
    applicableSectors: [
      {
        name: "Indústria",
        applications: [
          "Monitoramento de tanques de matéria-prima e produto químicos",
          "Alertas de nível crítico (mínimo e máximo) para evitar transbordo ou falta",
          "Acompanhamento de reservatórios de água industrial e efluentes",
          "Controle de nível em silos e tanques de insumos químicos",
        ],
      },
      {
        name: "Hospitais",
        applications: [
          "Monitoramento de consumo em áreas críticas (CME, lavanderia)",
          "Detecção precoce de vazamentos em rede interna",
        ],
      },
      {
        name: "Condomínios Residenciais",
        applications: [
          "Acompanhamento de nível de água em castelo de água",
          "Detecção de nível máximo ou mínimo de capacidade atingidos",
        ],
      },
      {
        name: "Shoppings",
        applications: [
          "Monitoramento nível em castelos para rateio entre lojas",
          "Monitoramento de entrada e saída de água",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Monitore tanques e reservatórios com eficiência",
          "Alertas em tempo real para níveis críticos",
          "Relatórios e dashboards exclusivos de cada ponto monitorado",
        ],
      },
    ],
  },
  {
    icon: CircuitBoard,
    title: "Microméros Meter",
    object: "Monitoramento de Instrumentação",
    desc: "Integração de sensores e instrumentos diversos para leitura centralizada de medidas de equipamentos.",
    unit: "m³, μS e outras unidades",
    image: meter,
    applicableSectors: [
      {
        name: "Indústria",
        applications: [
          "Leitura centralizada de instrumentos de processo como pressão, condutividade, pH e temperatura",
        ],
      },
      {
        name: "Shoppings",
        applications: [
          "Integração a sensores de tratamento de processos como de pH e condutividade de água",
          "Leitura em tempo real do nível de pH de líquidos",
        ],
      },
      {
        name: "Data Centers",
        applications: [
          "Monitoramento em tempo real de temperatura em sala",
          "Monitoramento de atividade de refrigeradores",
        ],
      },
      {
        name: "Hospitais",
        applications: [
          "Monitoramento de instrumentos como Oximêtro",
          "Monitoramento contínuo de cloro livre e Conductivímetro",
        ],
      },
      {
        name: "Estações ferroviárias",
        applications: [
          "Medição em tempo real de RPM",
          "Integração com acelerômetro de sensor de vibração",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Integre instrumentos e sensores em um único ambiente",
          "Centralize leituras em tempo real",
          "Relatórios e dashboards exclusivos de cada ponto monitorado",
        ],
      },
    ],
  },
  {
    icon: Flame,
    title: "Microméros Flux",
    object: "Monitoramento de Gás",
    desc: "Monitoramento de consumo de gás em tempo real, com identificação de variações e desperdícios.",
    unit: "m³",
    image: Flux,
    applicableSectors: [
      {
        name: "Indústria",
        applications: [
          "Medição de gás natural/GLP por linha de produção",
          "Identificação de uso em queimadores e caldeiras",
        ],
      },
      {
        name: "Condomínios residenciais e comerciais",
        applications: [
          "Individualização de consumo de gás central por unidade",
          "Detecção de vazamento por padrão anômalo de consumo",
        ],
      },
      {
        name: "Shoppings",
        applications: [
          "Rateio de gás entre praça de alimentação e lojas",
          "Monitoramento de consumo de restaurantes e food trucks",
        ],
      },
      {
        name: "Lojas",
        applications: [
          "Acompanhamento de consumo de gás em cozinhas comerciais",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Monitore cada ponto da sua operação com eficiência",
          "Monitoramento em tempo real do rateio e consumo de gás",
          "Relatórios e dashboards exclusivos de cada ponto monitorado",
        ],
      },
    ],
  },
  {
    icon: Cog,
    title: "Microméros Machine",
    object: "Monitoramento de Motores",
    desc: "Monitoramento de máquinas e motores, com identificação de alterações que indicam falhas ou necessidade de manutenção.",
    unit: "RPM",
    image: machine,
    applicableSectors: [
      {
        name: "Shoppings",
        applications: [
          "Monitoramento de motores de elevadores e escadas rolantes",
          "Monitoramento que permite análise preditiva de bombas de água e exaustores",
        ],
      },
      {
        name: "Condomínios Residenciais",
        applications: [
          "Monitoramento de motores de bombas d'água e portões",
          "Alertas de vibração/RPM anormal em elevadores",
        ],
      },
      {
        name: "Prédios Comerciais",
        applications: [
          "Monitoramento de motores de HVAC e exaustão",
          "Monitoramento de eficiência em motores de elevadores e máquinas",
        ],
      },
      {
        name: "Hospitais",
        applications: [
          "Monitoramento de motores de sistemas críticos (climatização de UTI, exaustão)",
          "Monitoramento de vibração e funcionamento de geradores",
        ],
      },
      {
        name: "Indústria",
        applications: [
          "Monitoramento inteligente de motores de linha de produção",
          "Detecção de anomalias mecânicas via monitoramento de vibração de equipamento",
          "Redução de paradas não programadas",
        ],
      },
      {
        name: "Saneamento — ETA / ETE",
        applications: [
          "Monitoramento de motores de bombas de recalque e aeradores",
        ],
      },
      {
        name: "Data Centers / CPDs",
        applications: [
          "Monitoramento de motores de sistemas de refrigeração (chillers)",
          "Monitoramento analítico de máquinas e transformadores de energias",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Monitore cada ponto da sua operação com eficiência",
          "Monitoramento em tempo real de motores e equipamentos",
          "Relatórios e Dashboards exclusivos de cada equipamento monitorado",
        ],
      },
    ],
  },
  {
    icon: Droplets,
    title: "Microméros Process",
    object: "Monitoramento de Processos",
    desc: "Monitoramento de variáveis de processo como pH, vazão e condutividade.",
    unit: "μS",
    image: process,
    applicableSectors: [
      {
        name: "Shopping",
        applications: [
          "Monitoramento de qualidade da água de reuso e irrigação",
        ],
      },
      {
        name: "Hospitais",
        applications: [
          "Monitoramento de qualidade da água usada em esterilização",
          "Acompanhamento de condutividade em sistemas de água purificada",
        ],
      },
      {
        name: "Indústria",
        applications: [
          "Controle de pH e condutividade em processos químicos",
          "Monitoramento de vazão de insumos em linha de produção",
          "Acompanhamento de qualidade de efluentes industriais",
        ],
      },
      {
        name: "Saneamento — ETA / ETE",
        applications: [
          "Monitoramento de pH, turbidez e condutividade ao longo do tratamento",
          "Acompanhamento de vazão entre etapas de tratamento",
          "Controle de qualidade da água tratada antes do descarte",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Monitore variáveis críticas de processo com eficiência",
          "Acompanhe pH, vazão e condutividade em tempo real",
          "Relatórios e dashboards exclusivos de cada ponto monitorado",
        ],
      },
    ],
  },
  {
    icon: ThermometerIcon,
    title: "Microméros Climate",
    object: "Monitoramento de Temperatura",
    desc: "Monitoramento de temperatura e umidade em tempo real, com alertas de variações fora do padrão.",
    unit: "°C",
    image: climate,
    applicableSectors: [
      {
        name: "Shoppings",
        applications: [
          "Monitoramento de câmaras frias de lojas de alimentação",
          "Acompanhamento de conforto térmico em áreas comuns",
        ],
      },
      {
        name: "Condomínios Residenciais",
        applications: [
          "Monitoramento de temperatura em casa de máquinas",
          "Acompanhamento de umidade em áreas de garagem e subsolo",
        ],
      },
      {
        name: "Prédios Comerciais",
        applications: [
          "Monitoramento de conforto térmico por andar",
          "Alertas de falha em sistemas de HVAC",
        ],
      },
      {
        name: "Hospitais",
        applications: [
          "Monitoramento de câmaras frias de medicamentos e vacinas",
          "Controle de temperatura em centros cirúrgicos e UTIs",
          "Alertas de excursão térmica em banco de sangue",
        ],
      },
      {
        name: "Indústria",
        applications: [
          "Monitoramento de temperatura de processo e câmaras frias",
          "Alertas de superaquecimento em painéis e motores",
        ],
      },
      {
        name: "Infraestrutura — Metrô",
        applications: [
          "Monitoramento de temperatura em subestações",
          "Acompanhamento de conforto térmico em estações",
        ],
      },
      {
        name: "Data Centers / CPDs",
        applications: [
          "Monitoramento de temperatura e umidade por rack",
          "Alertas de ponto quente (hot spot) para evitar falhas de hardware",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Monitore cada ponto da sua operação com eficiência",
          "Monitoramento em tempo real de temperatura e umidade",
          "Relatórios e Dashboards exclusivos de cada ponto monitorado",
        ],
      },
    ],
  },
  {
    icon: BatteryFull,
    title: "Microméros Charge",
    object: "Monitoramento de Bateria",
    desc: "Monitoramento inteligente de carga e temperatura de bateria.",
    unit: "°C",
    image: charge,
    applicableSectors: [
      {
        name: "Shoppings",
        applications: [
          "Monitoramento de baterias de nobreaks de sistemas de segurança",
        ],
      },
      {
        name: "Condomínios Residenciais",
        applications: [
          "Monitoramento de baterias de nobreaks de portões e elevadores",
        ],
      },
      {
        name: "Prédios Comerciais",
        applications: [
          "Monitoramento de baterias de nobreaks e iluminação de emergência",
        ],
      },
      {
        name: "Hospitais",
        applications: [
          "Monitoramento de baterias de nobreaks de equipamentos críticos",
          "Alertas de degradação de carga para evitar falha em blackout",
        ],
      },
      {
        name: "Indústria",
        applications: [
          "Monitoramento de baterias de sistemas de automação e CLPs",
          "Acompanhamento de temperatura de baterias industriais",
        ],
      },
      {
        name: "Infraestrutura — Metrô",
        applications: [
          "Monitoramento de baterias de sistemas de sinalização e emergência",
        ],
      },
      {
        name: "Data Centers / CPDs",
        applications: [
          "Monitoramento de baterias de nobreaks (UPS) por rack",
          "Alertas de degradação de carga e temperatura para evitar falha em queda de energia",
        ],
      },
      {
        name: "E muito mais!",
        applications: [
          "Monitore cada ponto da sua operação com eficiência",
          "Monitoramento em tempo real de carga e temperatura de baterias",
          "Relatórios e Dashboards exclusivos de cada ponto monitorado",
        ],
      },
    ],
  },
];