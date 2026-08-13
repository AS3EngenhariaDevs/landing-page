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
  ThermometerIcon,
  Waves,
  FlaskConical,
  Cog
} from "lucide-react";
import process from '../assets/images/points/process.jpg'
import level from '../assets/images/points/level.png'
import flow from '../assets/images/points/flow.png'

export const points = [
  {
    icon: Zap,
    title: "Microméros Power",
    desc: "Corrente, tensão e demanda em quadros, subestações e circuitos críticos.",
    unit: "kWh",
    image: process,
    applicableSectors: [
      "Shopping",
      "Condomínios Residenciais",
      "Prédios Comerciais",
      "Hospitais",
      "Escolas",
      "Universidades",
      "Laboratórios",
      "Indústria",
      "Saneamento — ETA / ETE",
      "Infraestrutura — Metrô",
      "Aeroportos",
      "Rodovias / Concessionárias",
      "Túneis",
      "Portos",
      "Data Centers / CPDs",
    ],
  },
  {
    icon: Droplet,
    title: "Microméros Flow",
    desc: "Vazão, pressão e consumo em redes hidráulicas, ETAs e pontos de captação.",
    unit: "m³ ou L",
    image: flow,
    applicableSectors: [
      "Shopping",
      "Condomínios Residenciais",
      "Prédios Comerciais",
      "Hospitais",
      "Escolas",
      "Universidades",
      "Laboratórios",
      "Indústria",
      "Saneamento — ETA / ETE",
      "Infraestrutura — Metrô",
      "Aeroportos",
      "Rodovias / Concessionárias",
      "Portos",
      "Data Centers / CPDs",
    ],
  },
    {
    icon: Flame,
    title: "Microméros Level",
    desc: "Medição de nível para líquidos ",
    unit: "m³ ou L",
    image: level,
    applicableSectors: ["Indústria"],
  },
  {
    icon: Flame,
    title: "Microméros Meter",
    desc: "Medição de vazão e pressão em linhas de gás natural e GLP industrial.",
    unit: "m³",
    image: "../assets/images/points/process.jpg",
    applicableSectors: ["Indústria"],
  },
  {
    icon: Cog,
    title: "Microméros Machine",
    desc: "Monitoramento de motores, máquinas e equipamentos industriais, acompanhando rotação, vibração e desempenho operacional.",
    unit: "RPM",
    image: process,
    applicableSectors: [
      "Shopping",
      "Condomínios Residenciais",
      "Prédios Comerciais",
      "Hospitais",
      "Escolas",
      "Universidades",
      "Laboratórios",
      "Indústria",
      "Saneamento — ETA / ETE",
      "Infraestrutura — Metrô",
      "Aeroportos",
      "Rodovias / Concessionárias",
      "Túneis",
      "Portos",
      "Data Centers / CPDs",
    ],
  },
  {
    icon: Droplets,
    title: "Microméros Process",
    desc: "Monitoramento de variáveis de processo como pH, vazão e condutividade.",
    unit: "μS",
    image: process,
    applicableSectors: ["Shopping", "Hospitais", "Indústria", "Saneamento — ETA / ETE"],
  },
  {
    icon: ThermometerIcon,
    title: "Microméros Climate",
    desc: "Monitoramento de temperatura de temperatura e umidade de áreas.",
    unit: "C°",
    image: process,
    applicableSectors: [
      "Shopping",
      "Condomínios Residenciais",
      "Prédios Comerciais",
      "Hospitais",
      "Escolas",
      "Universidades",
      "Laboratórios",
      "Indústria",
      "Infraestrutura — Metrô",
      "Aeroportos",
      "Rodovias / Concessionárias",
      "Túneis",
      "Portos",
      "Data Centers / CPDs",
    ],
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
    desc: "Normalização e cálculo de consumo em tempo real na plataforma Microméros.",
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
  ["8+", "Ativos monitorados em paralelo"],
  ["24/7", "Telemetria e alertas em tempo real"],
  ["99.9%", "Disponibilidade da plataforma"],
];

export const companies = {
  shopping: {
    label: "Shopping",
    description:
      "Monitore energia, água, reservatórios, climatização e equipamentos críticos do shopping, com rateio por loja e identificação de oportunidades de redução de custos.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Meça a entrada geral e faça o rateio por loja.",
        image: "/images/use-cases/shopping-energia.jpg",
        description:
          "Monitore a entrada geral de energia, meça o consumo por loja/unidade consumidora, ratear energia entre lojas, acompanhe áreas comuns e avalie a qualidade de energia da operação.",
        benefits: [
          "Rateio de energia entre lojas",
          "Medição por unidade consumidora",
          "Qualidade de energia e áreas comuns",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Acompanhe a entrada geral e o rateio por loja.",
        image: "/images/use-cases/shopping-agua.jpg",
        description:
          "Monitore a entrada geral de água, realize o rateio entre lojas e acompanhe o consumo das áreas comuns, identificando desperdícios e comportamentos fora do padrão.",
        benefits: [
          "Rateio de água entre lojas",
          "Consumo de áreas comuns",
          "Identificação de desperdícios",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Monitore caixas d'água, cisternas e reservatórios.",
        image: "/images/use-cases/shopping-nivel.jpg",
        description:
          "Acompanhe em tempo real o nível de caixas d'água, cisternas e reservatórios, garantindo abastecimento e prevenindo faltas ou transbordamentos.",
        benefits: [
          "Nível de caixas d'água e cisternas",
          "Segurança no abastecimento",
          "Prevenção de faltas e transbordos",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Temperatura e umidade de lojas e áreas comuns.",
        image: "/images/use-cases/shopping-climatizacao.jpg",
        description:
          "Monitore temperatura e umidade de lojas e áreas comuns, garantindo conforto térmico e apoiando a operação do sistema de climatização.",
        benefits: [
          "Conforto térmico em lojas",
          "Monitoramento de áreas comuns",
          "Temperatura e umidade em tempo real",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão de água, ar, gás e geradores.",
        image: "/images/use-cases/shopping-instrumentacao.jpg",
        description:
          "Acompanhe pressão de água, ar comprimido, gás, pressão diferencial e o monitoramento de geradores, dando visibilidade a sistemas de apoio da operação.",
        benefits: [
          "Pressão de água, ar e gás",
          "Pressão diferencial",
          "Monitoramento de geradores",
        ],
      },
      {
        id: "processo",
        icon: FlaskConical,
        title: "Processo",
        shortDescription: "Tratamento de água e parâmetros analíticos.",
        image: "/images/use-cases/shopping-processo.jpg",
        description:
          "Monitore sistemas de tratamento de água acompanhando pH, cloro, condutividade, oxigênio e outros parâmetros analógicos e digitais.",
        benefits: [
          "pH, cloro e condutividade",
          "Controle de tratamento de água",
          "Parâmetros analógicos e digitais",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, HVAC, exaustão e ventiladores.",
        image: "/images/use-cases/shopping-motores.jpg",
        description:
          "Monitore bombas de recalque, incêndio e drenagem, motores de HVAC e exaustão e ventiladores, acompanhando status operacional, corrente, temperatura e vibração.",
        benefits: [
          "Status, corrente e temperatura",
          "Detecção de vibração anormal",
          "Bombas, HVAC e ventiladores",
        ],
      },
    ],
  },

  condominios: {
    label: "Condomínios Residenciais",
    description:
      "Tenha controle sobre água, energia, reservatórios, climatização e motores do condomínio, com medição individual e rateio justo entre unidades.",
    cases: [
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Medição individual e rateio por apartamento.",
        image: "/images/use-cases/condominios-agua.jpg",
        description:
          "Monitore a entrada geral, a medição individual por apartamento, o rateio de água, áreas comuns, piscinas e áreas de lazer, com detecção de vazamentos.",
        benefits: [
          "Medição individual por apartamento",
          "Rateio justo de água",
          "Detecção de vazamentos",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Caixas d'água, cisternas e reservatórios.",
        image: "/images/use-cases/condominios-nivel.jpg",
        description:
          "Acompanhe o nível de caixas d'água, cisternas, reservatórios e poços/reservatórios auxiliares, garantindo o abastecimento contínuo.",
        benefits: [
          "Nível de cisternas e reservatórios",
          "Poços e reservatórios auxiliares",
          "Segurança no abastecimento",
        ],
      },
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Medição por bloco e áreas comuns.",
        image: "/images/use-cases/condominios-energia.jpg",
        description:
          "Monitore a entrada geral, a medição por bloco, áreas comuns, bombas, elevadores, sistemas de climatização e geradores.",
        benefits: [
          "Medição por bloco",
          "Áreas comuns e elevadores",
          "Bombas, climatização e geradores",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Salas técnicas, academia, salão e CPD.",
        image: "/images/use-cases/condominios-climatizacao.jpg",
        description:
          "Monitore temperatura e umidade de salas técnicas, academia, salão de festas, CPD e demais áreas climatizadas, com automação de ar-condicionado.",
        benefits: [
          "Temperatura e umidade",
          "Automação de ar-condicionado",
          "Salas técnicas e CPD",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, piscina, drenagem e exaustão.",
        image: "/images/use-cases/condominios-motores.jpg",
        description:
          "Monitore bombas de recalque, de piscina e de drenagem, exaustores e sistemas de ventilação, antecipando falhas e paradas.",
        benefits: [
          "Bombas de recalque e piscina",
          "Sistemas de ventilação",
          "Prevenção de falhas",
        ],
      },
    ],
  },

  prediosComerciais: {
    label: "Prédios Comerciais",
    description:
      "Monitore energia, água, climatização e equipamentos por andar ou conjunto, com rateio entre empresas e gestão de utilidades prediais.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Medição por andar e rateio entre empresas.",
        image: "/images/use-cases/prediosComerciais-energia.jpg",
        description:
          "Monitore a entrada geral, medição por andar e por sala/conjunto, rateio entre empresas, áreas comuns, elevadores, HVAC, geradores e qualidade de energia.",
        benefits: [
          "Medição por andar e conjunto",
          "Rateio entre empresas",
          "Qualidade de energia",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Consumo por andar, conjunto e áreas comuns.",
        image: "/images/use-cases/prediosComerciais-agua.jpg",
        description:
          "Acompanhe a entrada geral e o consumo por conjunto, andar, banheiros, áreas comuns e restaurantes/cafeterias.",
        benefits: [
          "Consumo por andar e conjunto",
          "Banheiros e áreas comuns",
          "Restaurantes e cafeterias",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Caixas d'água, cisternas e reservatórios.",
        image: "/images/use-cases/prediosComerciais-nivel.jpg",
        description:
          "Monitore o nível de caixas d'água, cisternas e reservatórios, garantindo o abastecimento do prédio.",
        benefits: [
          "Nível de caixas d'água",
          "Cisternas e reservatórios",
          "Segurança no abastecimento",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "HVAC, data centers e controle de setpoint.",
        image: "/images/use-cases/prediosComerciais-climatizacao.jpg",
        description:
          "Monitore e automatize salas, data centers, CPDs, salas técnicas e áreas comuns, com controle de fan coils, chillers, UTA/AHU, ventilação, exaustão e setpoint.",
        benefits: [
          "Automação de ar-condicionado",
          "Fan coils, chillers e UTA/AHU",
          "Controle de setpoint",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, ar comprimido, gás e geradores.",
        image: "/images/use-cases/prediosComerciais-instrumentacao.jpg",
        description:
          "Acompanhe pressão, ar comprimido, gás, HVAC, geradores e sistemas hidráulicos do edifício.",
        benefits: [
          "Pressão e ar comprimido",
          "Gás e HVAC",
          "Geradores e sistemas hidráulicos",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, elevadores, HVAC e ventiladores.",
        image: "/images/use-cases/prediosComerciais-motores.jpg",
        description:
          "Monitore bombas, elevadores, HVAC, exaustores e ventiladores, acompanhando desempenho e antecipando falhas.",
        benefits: [
          "Bombas e elevadores",
          "HVAC e exaustores",
          "Prevenção de falhas",
        ],
      },
    ],
  },

  hospitais: {
    label: "Hospitais",
    description:
      "Monitore e automatize ambientes críticos, energia, água, gases medicinais e equipamentos essenciais, garantindo segurança, conformidade e continuidade operacional.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "UTIs, centro cirúrgico e equipamentos críticos.",
        image: "/images/use-cases/hospitais-energia.jpg",
        description:
          "Monitore a entrada geral, blocos, UTIs, centro cirúrgico, laboratórios, imagem, data centers, equipamentos críticos, geradores e qualidade de energia.",
        benefits: [
          "Energia de áreas críticas",
          "Geradores e qualidade de energia",
          "Equipamentos essenciais",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Consumo por setor e detecção de vazamentos.",
        image: "/images/use-cases/hospitais-agua.jpg",
        description:
          "Acompanhe a entrada geral e o consumo por setor: UTIs, centro cirúrgico, lavanderia, cozinha, CME, hemodiálise e banheiros, com detecção de vazamentos.",
        benefits: [
          "Consumo por setor crítico",
          "Hemodiálise, CME e lavanderia",
          "Detecção de vazamentos",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Cisternas, reservatórios e reserva de emergência.",
        image: "/images/use-cases/hospitais-nivel.jpg",
        description:
          "Monitore cisternas, caixas d'água, reservatórios e reservatórios de emergência, garantindo abastecimento contínuo em situações críticas.",
        benefits: [
          "Reservatórios de emergência",
          "Cisternas e caixas d'água",
          "Abastecimento contínuo",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Ambientes críticos com pressão diferencial.",
        image: "/images/use-cases/hospitais-climatizacao.jpg",
        description:
          "Monitore e automatize centro cirúrgico, UTIs, salas de isolamento, laboratórios, farmácia, banco de sangue, salas limpas, CME e data centers, com temperatura, umidade, pressão diferencial, UTA/AHU, fan coils, chillers, controle de setpoint e alarmes de falha.",
        benefits: [
          "Pressão diferencial em áreas críticas",
          "Automação de UTA/AHU e chillers",
          "Alarmes de falha e desvio",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Gases medicinais, vácuo e ar comprimido.",
        image: "/images/use-cases/hospitais-instrumentacao.jpg",
        description:
          "Acompanhe pressão de ar comprimido, vácuo, gases medicinais, pressão diferencial, geradores, redes hidráulicas, sistemas HVAC e instrumentação crítica.",
        benefits: [
          "Gases medicinais e vácuo",
          "Pressão diferencial",
          "Instrumentação crítica",
        ],
      },
      {
        id: "processo",
        icon: FlaskConical,
        title: "Processo",
        shortDescription: "Tratamento de água, pH, cloro e ETA/ETE.",
        image: "/images/use-cases/hospitais-processo.jpg",
        description:
          "Monitore tratamento de água acompanhando pH, cloro, condutividade, oxigênio, ETA/ETE e outros parâmetros de processo.",
        benefits: [
          "pH, cloro e condutividade",
          "ETA/ETE",
          "Parâmetros de processo",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, chillers, torres e motores críticos.",
        image: "/images/use-cases/hospitais-motores.jpg",
        description:
          "Monitore bombas hidráulicas, de vácuo e de incêndio, chillers, torres de resfriamento, HVAC, exaustores, ventiladores e motores críticos.",
        benefits: [
          "Bombas de vácuo e incêndio",
          "Chillers e torres de resfriamento",
          "Motores críticos",
        ],
      },
    ],
  },

  escolas: {
    label: "Escolas",
    description:
      "Monitore energia, água, reservatórios, climatização e motores da escola, com automação por horário e ocupação para reduzir custos.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Blocos, salas, laboratórios e quadras.",
        image: "/images/use-cases/escolas-energia.jpg",
        description:
          "Monitore a entrada geral, blocos, salas, laboratórios, quadras, áreas comuns, ar-condicionado e geradores.",
        benefits: [
          "Medição por bloco e sala",
          "Laboratórios e quadras",
          "Ar-condicionado e geradores",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Consumo por bloco, cozinha e áreas esportivas.",
        image: "/images/use-cases/escolas-agua.jpg",
        description:
          "Acompanhe a entrada geral e o consumo por bloco, banheiros, cozinha/refeitório, piscinas e áreas esportivas.",
        benefits: [
          "Consumo por bloco",
          "Cozinha e refeitório",
          "Piscinas e áreas esportivas",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Caixas d'água, cisternas e reservatórios.",
        image: "/images/use-cases/escolas-nivel.jpg",
        description:
          "Monitore o nível de caixas d'água, cisternas e reservatórios, garantindo o abastecimento da escola.",
        benefits: [
          "Nível de caixas d'água",
          "Cisternas e reservatórios",
          "Segurança no abastecimento",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Automação por horário e ocupação.",
        image: "/images/use-cases/escolas-climatizacao.jpg",
        description:
          "Monitore temperatura e umidade de salas de aula, laboratórios, bibliotecas, almoxarifados e salas técnicas, com automação por horário e por ocupação.",
        benefits: [
          "Temperatura e umidade",
          "Automação por horário",
          "Automação por ocupação",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, piscinas, HVAC e exaustores.",
        image: "/images/use-cases/escolas-motores.jpg",
        description:
          "Monitore bombas, sistemas de piscinas, HVAC e exaustores, antecipando falhas e mantendo a operação.",
        benefits: [
          "Bombas e piscinas",
          "HVAC e exaustores",
          "Prevenção de falhas",
        ],
      },
    ],
  },

  universidades: {
    label: "Universidades",
    description:
      "Monitore campi completos — prédios acadêmicos, laboratórios, centros de pesquisa e data centers — com controle ambiental e de utilidades.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Prédios acadêmicos, laboratórios e data centers.",
        image: "/images/use-cases/universidades-energia.jpg",
        description:
          "Monitore prédios acadêmicos, laboratórios, centros de pesquisa, data centers, bibliotecas, hospitais universitários, restaurantes e residências universitárias.",
        benefits: [
          "Prédios e laboratórios",
          "Data centers e bibliotecas",
          "Restaurantes e residências",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Prédios, laboratórios, dormitórios e esportes.",
        image: "/images/use-cases/universidades-agua.jpg",
        description:
          "Acompanhe o consumo em prédios, laboratórios, restaurantes, dormitórios, banheiros, piscinas e áreas esportivas.",
        benefits: [
          "Consumo por prédio",
          "Laboratórios e dormitórios",
          "Piscinas e áreas esportivas",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Ar comprimido, gases e vácuo de laboratórios.",
        image: "/images/use-cases/universidades-instrumentacao.jpg",
        description:
          "Monitore laboratórios com ar comprimido, gases, vácuo e sistemas experimentais.",
        benefits: [
          "Ar comprimido e gases",
          "Vácuo",
          "Sistemas experimentais",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Salas limpas, acervos e laboratórios.",
        image: "/images/use-cases/universidades-climatizacao.jpg",
        description:
          "Monitore e automatize laboratórios, salas limpas, museus e acervos, bibliotecas, CPDs e salas de aula, com temperatura, umidade, pressão diferencial, UTA/AHU, fan coils, chillers e exaustão.",
        benefits: [
          "Salas limpas e acervos",
          "Pressão diferencial",
          "Automação HVAC completa",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, piscinas, HVAC e ventiladores.",
        image: "/images/use-cases/universidades-motores.jpg",
        description:
          "Monitore bombas, sistemas de piscinas, HVAC, exaustores e ventiladores do campus.",
        benefits: [
          "Bombas e piscinas",
          "HVAC e exaustores",
          "Ventiladores",
        ],
      },
    ],
  },

  laboratorios: {
    label: "Laboratórios",
    description:
      "Garanta controle ambiental rigoroso — temperatura, umidade e pressão diferencial — em salas limpas e ambientes críticos, com alarmes e histórico.",
    cases: [
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Controle ambiental crítico e pressão diferencial.",
        image: "/images/use-cases/laboratorios-climatizacao.jpg",
        description:
          "Monitore e controle temperatura, umidade, pressão diferencial, temperatura de equipamentos, salas, câmaras e ambientes, com alarmes, histórico e automação de UTA/AHU, fan coils, chillers, ventiladores, dampers e válvulas.",
        benefits: [
          "Pressão diferencial e umidade",
          "Alarmes e histórico",
          "Automação de UTA/AHU e chillers",
        ],
      },
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Equipamentos e infraestrutura.",
        image: "/images/use-cases/laboratorios-energia.jpg",
        description:
          "Monitore o consumo de energia de equipamentos e da infraestrutura do laboratório.",
        benefits: [
          "Consumo de equipamentos",
          "Infraestrutura",
          "Eficiência energética",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Utilidades e água de processo.",
        image: "/images/use-cases/laboratorios-agua.jpg",
        description:
          "Acompanhe o consumo de água de utilidades e água de processo do laboratório.",
        benefits: [
          "Água de utilidades",
          "Água de processo",
          "Controle de consumo",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Reservatórios.",
        image: "/images/use-cases/laboratorios-nivel.jpg",
        description:
          "Monitore o nível de reservatórios do laboratório, garantindo o abastecimento.",
        benefits: [
          "Nível de reservatórios",
          "Segurança no abastecimento",
          "Prevenção de faltas",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, vazão e temperatura.",
        image: "/images/use-cases/laboratorios-instrumentacao.jpg",
        description:
          "Monitore pressão, vazão e temperatura em pontos críticos do laboratório.",
        benefits: [
          "Pressão e vazão",
          "Temperatura",
          "Instrumentação de precisão",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, ventiladores, exaustores e chillers.",
        image: "/images/use-cases/laboratorios-motores.jpg",
        description:
          "Monitore bombas, ventiladores, exaustores e chillers que suportam o controle ambiental.",
        benefits: [
          "Bombas e chillers",
          "Ventiladores e exaustores",
          "Prevenção de falhas",
        ],
      },
    ],
  },

  industria: {
    label: "Indústria",
    description:
      "Monitore processos e utilidades industriais — energia, água, vapor, gás, tanques e motores — para aumentar eficiência e reduzir perdas.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Subestações, linhas de produção e máquinas.",
        image: "/images/use-cases/industria-energia.jpg",
        description:
          "Monitore a entrada geral, subestações, linhas de produção, máquinas, motores, CCMs, compressores, bombas, HVAC, fornos, geradores, qualidade de energia e demanda.",
        benefits: [
          "Consumo por linha e máquina",
          "Qualidade de energia e demanda",
          "Subestações e CCMs",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Água de processo, utilidades e resfriamento.",
        image: "/images/use-cases/industria-agua.jpg",
        description:
          "Acompanhe água de processo, de utilidades e de resfriamento, torres de resfriamento, consumo por linha e setor, água potável e efluentes.",
        benefits: [
          "Consumo por linha e setor",
          "Água de resfriamento",
          "Efluentes",
        ],
      },
      {
        id: "vapor",
        icon: Wind,
        title: "Vapor",
        shortDescription: "Geração e consumo de vapor.",
        image: "/images/use-cases/industria-vapor.jpg",
        description:
          "Acompanhe os principais indicadores de geração e consumo de vapor, apoiando a eficiência dos processos.",
        benefits: [
          "Monitoramento contínuo",
          "Controle de consumo de vapor",
          "Maior eficiência operacional",
        ],
      },
      {
        id: "gas",
        icon: Flame,
        title: "Gás",
        shortDescription: "Consumo de gás dos processos.",
        image: "/images/use-cases/industria-gas.jpg",
        description:
          "Tenha visibilidade sobre o consumo de gás dos processos industriais e acompanhe seu comportamento ao longo do tempo.",
        benefits: [
          "Controle de consumo",
          "Análise de processos",
          "Identificação de anomalias",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Tanques, silos, cisternas e reservatórios.",
        image: "/images/use-cases/industria-nivel.jpg",
        description:
          "Monitore tanques, silos, cisternas, caixas d'água, reservatórios e tanques de processo.",
        benefits: [
          "Tanques e silos",
          "Tanques de processo",
          "Prevenção de faltas e transbordos",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, vazão, ar comprimido, vapor e gás.",
        image: "/images/use-cases/industria-instrumentacao.jpg",
        description:
          "Monitore pressão, vazão, temperatura, nível, ar comprimido, vapor, gás, vácuo e pressão diferencial.",
        benefits: [
          "Pressão, vazão e temperatura",
          "Ar comprimido e vapor",
          "Vácuo e pressão diferencial",
        ],
      },
      {
        id: "processo",
        icon: FlaskConical,
        title: "Processo",
        shortDescription: "ETA, ETE e parâmetros analíticos.",
        image: "/images/use-cases/industria-processo.jpg",
        description:
          "Monitore ETA, ETE, pH, condutividade, cloro, oxigênio, ORP, turbidez e outros parâmetros de processo.",
        benefits: [
          "ETA e ETE",
          "pH, cloro e condutividade",
          "ORP e turbidez",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Salas técnicas, câmaras e salas limpas.",
        image: "/images/use-cases/industria-climatizacao.jpg",
        description:
          "Monitore temperatura e umidade de salas técnicas, almoxarifados, câmaras, ambientes produtivos e salas limpas, com automação de climatização.",
        benefits: [
          "Câmaras e salas limpas",
          "Ambientes produtivos",
          "Automação de climatização",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Motores, bombas, compressores e esteiras.",
        image: "/images/use-cases/industria-motores.jpg",
        description:
          "Monitore motores elétricos, bombas, compressores, ventiladores, exaustores, chillers, torres de resfriamento, esteiras e redutores, com corrente, temperatura, vibração, status e horas de funcionamento.",
        benefits: [
          "Corrente, temperatura e vibração",
          "Status e horas de funcionamento",
          "Manutenção preditiva",
        ],
      },
    ],
  },

  saneamento: {
    label: "Saneamento — ETA / ETE",
    description:
      "Monitore estações de tratamento de água e esgoto — vazão, nível, parâmetros de processo, energia e motores — de ponta a ponta.",
    cases: [
      {
        id: "vazao",
        icon: Droplet,
        title: "Vazão (Flow)",
        shortDescription: "Vazão em ETA e ETE, por etapa.",
        image: "/images/use-cases/saneamento-vazao.jpg",
        description:
          "Na ETA, monitore vazão de água bruta e tratada, entrada, saída e por etapa. Na ETE, monitore vazão de entrada, saída, entre etapas e de lodo.",
        benefits: [
          "Vazão de água bruta e tratada",
          "Vazão por etapa",
          "Vazão de lodo (ETE)",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Reservatórios, decantadores e elevatórias.",
        image: "/images/use-cases/saneamento-nivel.jpg",
        description:
          "Na ETA, monitore reservatórios, tanques, floculadores, decantadores e cisternas. Na ETE, monitore tanques, elevatórias, poços, reservatórios e tanques de lodo.",
        benefits: [
          "Floculadores e decantadores",
          "Elevatórias e poços",
          "Tanques de lodo",
        ],
      },
      {
        id: "processo",
        icon: FlaskConical,
        title: "Processo",
        shortDescription: "pH, cloro, turbidez, OD e ORP.",
        image: "/images/use-cases/saneamento-processo.jpg",
        description:
          "Monitore pH, cloro, turbidez, condutividade, oxigênio dissolvido, ORP, temperatura e demais analisadores em ETA e ETE.",
        benefits: [
          "pH, cloro e turbidez",
          "Oxigênio dissolvido e ORP",
          "Analisadores de processo",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, vazão e instrumentação de bombas.",
        image: "/images/use-cases/saneamento-instrumentacao.jpg",
        description:
          "Monitore pressão, vazão, temperatura, pressão diferencial, ar comprimido e instrumentação de bombas, filtros e processo.",
        benefits: [
          "Pressão e pressão diferencial",
          "Instrumentação de bombas e filtros",
          "Ar comprimido",
        ],
      },
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Consumo da estação, bombas e sopradores.",
        image: "/images/use-cases/saneamento-energia.jpg",
        description:
          "Monitore o consumo geral, bombas, motores, sistemas de tratamento, sopradores, aeradores, CCMs e geradores das estações.",
        benefits: [
          "Consumo da estação",
          "Bombas, sopradores e aeradores",
          "CCMs e geradores",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, sopradores, aeradores e centrífugas.",
        image: "/images/use-cases/saneamento-motores.jpg",
        description:
          "Monitore bombas de captação, recalque e dosadoras, agitadores, sopradores, aeradores, prensas, centrífugas e motores de filtros, com corrente, vibração, temperatura e status.",
        benefits: [
          "Corrente, vibração e temperatura",
          "Bombas dosadoras e aeradores",
          "Prensas e centrífugas",
        ],
      },
    ],
  },

  metro: {
    label: "Infraestrutura — Metrô",
    description:
      "Monitore subestações, estações, plataformas e sistemas críticos, garantindo disponibilidade, conforto e segurança operacional.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Subestações, estações e sistemas críticos.",
        image: "/images/use-cases/metro-energia.jpg",
        description:
          "Monitore subestações, estações, plataformas, sistemas auxiliares, iluminação, ar-condicionado, escadas rolantes, elevadores, sistemas críticos, geradores e qualidade de energia.",
        benefits: [
          "Subestações e estações",
          "Escadas rolantes e elevadores",
          "Sistemas críticos e geradores",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Consumo por estação e incêndio.",
        image: "/images/use-cases/metro-agua.jpg",
        description:
          "Monitore a entrada de água das estações, consumo por estação, banheiros, áreas técnicas e sistemas de combate a incêndio, com detecção de vazamentos.",
        benefits: [
          "Consumo por estação",
          "Combate a incêndio",
          "Detecção de vazamentos",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Poços de drenagem e reserva de incêndio.",
        image: "/images/use-cases/metro-nivel.jpg",
        description:
          "Monitore reservatórios, cisternas, poços de drenagem, reservatórios de incêndio e estações elevatórias.",
        benefits: [
          "Poços de drenagem",
          "Reservatórios de incêndio",
          "Estações elevatórias",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Plataformas, salas de controle e túneis.",
        image: "/images/use-cases/metro-climatizacao.jpg",
        description:
          "Monitore temperatura de plataformas, salas técnicas e elétricas, CPDs, salas de controle e túneis, com umidade, ventilação, exaustão e automação HVAC.",
        benefits: [
          "Plataformas e túneis",
          "Salas de controle e CPDs",
          "Automação HVAC",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, HVAC, incêndio e geradores.",
        image: "/images/use-cases/metro-instrumentacao.jpg",
        description:
          "Monitore pressão, HVAC, sistemas hidráulicos, combate a incêndio, ar comprimido e geradores.",
        benefits: [
          "Pressão e HVAC",
          "Combate a incêndio",
          "Ar comprimido e geradores",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Escadas, elevadores e ventilação de túneis.",
        image: "/images/use-cases/metro-motores.jpg",
        description:
          "Monitore escadas rolantes, elevadores, bombas, ventiladores, exaustores, ventilação de túneis e motores críticos.",
        benefits: [
          "Escadas rolantes e elevadores",
          "Ventilação de túneis",
          "Motores críticos",
        ],
      },
    ],
  },

  aeroportos: {
    label: "Aeroportos",
    description:
      "Monitore terminais, pistas, esteiras e sistemas críticos, garantindo continuidade, conforto e eficiência energética.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Terminais, pistas, esteiras e UPS.",
        image: "/images/use-cases/aeroportos-energia.jpg",
        description:
          "Monitore a entrada geral, terminais, pontes de embarque, pistas, iluminação, HVAC, esteiras, elevadores, escadas rolantes, geradores, UPS e qualidade de energia.",
        benefits: [
          "Terminais e pistas",
          "Esteiras e pontes de embarque",
          "Geradores, UPS e qualidade de energia",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Consumo por terminal e áreas operacionais.",
        image: "/images/use-cases/aeroportos-agua.jpg",
        description:
          "Monitore a entrada geral, consumo por terminal, lojas, restaurantes, banheiros e áreas operacionais, com detecção de vazamentos.",
        benefits: [
          "Consumo por terminal",
          "Lojas e restaurantes",
          "Detecção de vazamentos",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Cisternas, reserva de incêndio e drenagem.",
        image: "/images/use-cases/aeroportos-nivel.jpg",
        description:
          "Monitore cisternas, reservatórios, caixas d'água, reservatórios de incêndio e poços de drenagem.",
        benefits: [
          "Reservatórios de incêndio",
          "Cisternas e caixas d'água",
          "Poços de drenagem",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Terminais, salas de controle e armazéns.",
        image: "/images/use-cases/aeroportos-climatizacao.jpg",
        description:
          "Monitore e automatize terminais, salas técnicas, CPDs, salas de controle e armazéns, com temperatura, umidade, chillers, fan coils, UTA/AHU, ventilação e exaustão.",
        benefits: [
          "Terminais e salas de controle",
          "Chillers, fan coils e UTA/AHU",
          "Ventilação e exaustão",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, gases, ar comprimido e incêndio.",
        image: "/images/use-cases/aeroportos-instrumentacao.jpg",
        description:
          "Monitore pressão, sistemas hidráulicos, HVAC, gases, ar comprimido e sistemas de incêndio.",
        benefits: [
          "Pressão e sistemas hidráulicos",
          "Gases e ar comprimido",
          "Sistemas de incêndio",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Esteiras de bagagem, escadas e chillers.",
        image: "/images/use-cases/aeroportos-motores.jpg",
        description:
          "Monitore esteiras de bagagem, escadas rolantes, elevadores, bombas, exaustores, chillers, torres de resfriamento e sistemas de ventilação.",
        benefits: [
          "Esteiras de bagagem",
          "Escadas rolantes e elevadores",
          "Chillers e torres de resfriamento",
        ],
      },
    ],
  },

  rodovias: {
    label: "Rodovias / Concessionárias",
    description:
      "Monitore praças de pedágio, bases operacionais, túneis e sistemas eletromecânicos ao longo da via.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Pedágios, túneis, painéis e sistemas críticos.",
        image: "/images/use-cases/rodovias-energia.jpg",
        description:
          "Monitore praças de pedágio, bases operacionais, túneis, iluminação, painéis, geradores e sistemas críticos.",
        benefits: [
          "Praças de pedágio",
          "Túneis e iluminação",
          "Geradores e sistemas críticos",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Consumo das bases e postos de atendimento.",
        image: "/images/use-cases/rodovias-agua.jpg",
        description:
          "Monitore o consumo de água das bases, postos de atendimento, banheiros e áreas operacionais.",
        benefits: [
          "Consumo das bases",
          "Postos de atendimento",
          "Áreas operacionais",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Reservatórios, cisternas e drenagem.",
        image: "/images/use-cases/rodovias-nivel.jpg",
        description:
          "Monitore reservatórios, cisternas e sistemas de drenagem da via.",
        benefits: [
          "Reservatórios e cisternas",
          "Sistemas de drenagem",
          "Prevenção de alagamentos",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Salas técnicas, CPDs e equipamentos sensíveis.",
        image: "/images/use-cases/rodovias-climatizacao.jpg",
        description:
          "Monitore temperatura e umidade de salas técnicas, CPDs, bases operacionais e equipamentos sensíveis.",
        benefits: [
          "Salas técnicas e CPDs",
          "Equipamentos sensíveis",
          "Temperatura e umidade",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, bombas e sistemas de incêndio.",
        image: "/images/use-cases/rodovias-instrumentacao.jpg",
        description:
          "Monitore pressão, sistemas hidráulicos, bombas e sistemas de incêndio.",
        benefits: [
          "Pressão e sistemas hidráulicos",
          "Bombas",
          "Sistemas de incêndio",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Drenagem, ventilação de túneis e portões.",
        image: "/images/use-cases/rodovias-motores.jpg",
        description:
          "Monitore bombas de drenagem, ventilação de túneis, exaustores, portões e sistemas eletromecânicos.",
        benefits: [
          "Bombas de drenagem",
          "Ventilação de túneis",
          "Portões e sistemas eletromecânicos",
        ],
      },
    ],
  },

  tuneis: {
    label: "Túneis",
    description:
      "Monitore ventilação, energia, drenagem e condições ambientais, garantindo segurança e operação contínua dos túneis.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Iluminação, ventilação e emergência.",
        image: "/images/use-cases/tuneis-energia.jpg",
        description:
          "Monitore iluminação, ventilação, sistemas de emergência, bombas, geradores e quadros elétricos.",
        benefits: [
          "Iluminação e ventilação",
          "Sistemas de emergência",
          "Geradores e quadros elétricos",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Temperatura, umidade e ventilação.",
        image: "/images/use-cases/tuneis-climatizacao.jpg",
        description:
          "Monitore temperatura, umidade e qualidade ambiental (quando houver sensores compatíveis), com controle de ventilação e exaustão.",
        benefits: [
          "Temperatura e umidade",
          "Controle de ventilação",
          "Controle de exaustão",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, pressão diferencial e segurança.",
        image: "/images/use-cases/tuneis-instrumentacao.jpg",
        description:
          "Monitore pressão, pressão diferencial, sistemas de ventilação e instrumentação de segurança.",
        benefits: [
          "Pressão e pressão diferencial",
          "Sistemas de ventilação",
          "Instrumentação de segurança",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Poços de drenagem e níveis de inundação.",
        image: "/images/use-cases/tuneis-nivel.jpg",
        description:
          "Monitore poços de drenagem, reservatórios e níveis de inundação, prevenindo alagamentos.",
        benefits: [
          "Poços de drenagem",
          "Níveis de inundação",
          "Prevenção de alagamentos",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Ventiladores, exaustores e bombas.",
        image: "/images/use-cases/tuneis-motores.jpg",
        description:
          "Monitore ventiladores, exaustores, bombas e sistemas de ventilação do túnel.",
        benefits: [
          "Ventiladores e exaustores",
          "Bombas",
          "Sistemas de ventilação",
        ],
      },
    ],
  },

  portos: {
    label: "Portos",
    description:
      "Monitore terminais, guindastes, equipamentos de movimentação e utilidades portuárias.",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Terminais, guindastes e subestações.",
        image: "/images/use-cases/portos-energia.jpg",
        description:
          "Monitore terminais, guindastes, equipamentos de movimentação, iluminação, subestações e geradores.",
        benefits: [
          "Terminais e guindastes",
          "Equipamentos de movimentação",
          "Subestações e geradores",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Consumo dos terminais e sistemas de lavagem.",
        image: "/images/use-cases/portos-agua.jpg",
        description:
          "Monitore o consumo de água, terminais, áreas operacionais e sistemas de lavagem.",
        benefits: [
          "Consumo dos terminais",
          "Áreas operacionais",
          "Sistemas de lavagem",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Reservatórios, cisternas e tanques.",
        image: "/images/use-cases/portos-nivel.jpg",
        description:
          "Monitore o nível de reservatórios, cisternas e tanques do porto.",
        benefits: [
          "Reservatórios e cisternas",
          "Tanques",
          "Segurança no abastecimento",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Armazéns, salas técnicas e CPDs.",
        image: "/images/use-cases/portos-climatizacao.jpg",
        description:
          "Monitore temperatura e umidade de armazéns, salas técnicas, CPDs e áreas climatizadas.",
        benefits: [
          "Armazéns e salas técnicas",
          "CPDs",
          "Temperatura e umidade",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, vazão, gases e hidráulica.",
        image: "/images/use-cases/portos-instrumentacao.jpg",
        description:
          "Monitore pressão, vazão, gases e sistemas hidráulicos das operações portuárias.",
        benefits: [
          "Pressão e vazão",
          "Gases",
          "Sistemas hidráulicos",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Bombas, guindastes, esteiras e exaustores.",
        image: "/images/use-cases/portos-motores.jpg",
        description:
          "Monitore bombas, guindastes, esteiras, ventiladores, exaustores e equipamentos auxiliares.",
        benefits: [
          "Guindastes e esteiras",
          "Bombas e ventiladores",
          "Equipamentos auxiliares",
        ],
      },
    ],
  },

  dataCenters: {
    label: "Data Centers / CPDs",
    description:
      "Monitore energia, climatização de precisão e refrigeração de salas de servidores, garantindo disponibilidade e eficiência (PUE).",
    cases: [
      {
        id: "energia",
        icon: Zap,
        title: "Energia",
        shortDescription: "Racks, PDUs, UPS e geradores.",
        image: "/images/use-cases/dataCenters-energia.jpg",
        description:
          "Monitore a entrada geral, racks, PDUs, UPS, geradores, quadros e qualidade de energia.",
        benefits: [
          "Racks e PDUs",
          "UPS e geradores",
          "Qualidade de energia",
        ],
      },
      {
        id: "climatizacao",
        icon: Thermometer,
        title: "Climatização",
        shortDescription: "Hot/cold aisle e climatização de precisão.",
        image: "/images/use-cases/dataCenters-climatizacao.jpg",
        description:
          "Monitore e controle temperatura, umidade, salas de servidores, hot aisle/cold aisle, salas técnicas, temperatura de insuflamento e retorno, chillers e fan coils.",
        benefits: [
          "Hot aisle / cold aisle",
          "Insuflamento e retorno",
          "Chillers e fan coils",
        ],
      },
      {
        id: "agua",
        icon: Droplet,
        title: "Água",
        shortDescription: "Água de chillers e detecção de vazamento.",
        image: "/images/use-cases/dataCenters-agua.jpg",
        description:
          "Monitore a água de chillers, sistemas de refrigeração e a detecção de vazamento em áreas críticas.",
        benefits: [
          "Água de chillers",
          "Sistemas de refrigeração",
          "Detecção de vazamento",
        ],
      },
      {
        id: "nivel",
        icon: Waves,
        title: "Nível",
        shortDescription: "Reservatórios e sistemas de água gelada.",
        image: "/images/use-cases/dataCenters-nivel.jpg",
        description:
          "Monitore reservatórios e sistemas de água gelada que suportam a refrigeração.",
        benefits: [
          "Reservatórios",
          "Sistemas de água gelada",
          "Continuidade da refrigeração",
        ],
      },
      {
        id: "instrumentacao",
        icon: Gauge,
        title: "Instrumentação",
        shortDescription: "Pressão, temperatura, vazão e diferencial.",
        image: "/images/use-cases/dataCenters-instrumentacao.jpg",
        description:
          "Monitore pressão, temperatura, vazão e pressão diferencial dos sistemas de refrigeração.",
        benefits: [
          "Pressão e temperatura",
          "Vazão",
          "Pressão diferencial",
        ],
      },
      {
        id: "motores",
        icon: Cog,
        title: "Monitoramento de Motores",
        shortDescription: "Chillers, bombas, ventiladores e torres.",
        image: "/images/use-cases/dataCenters-motores.jpg",
        description:
          "Monitore chillers, bombas, ventiladores, compressores e torres de resfriamento.",
        benefits: [
          "Chillers e compressores",
          "Bombas e ventiladores",
          "Torres de resfriamento",
        ],
      },
    ],
  },
};