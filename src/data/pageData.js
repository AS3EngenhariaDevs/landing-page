import { Building2, Droplet, Factory, Hospital, Users } from "lucide-react";
import charge from "../assets/images/points/charge.png";
import flow from "../assets/images/points/flow.png";
import flux from "../assets/images/points/flux.jpeg";
import level from "../assets/images/points/level.png";
import machine from "../assets/images/points/machine.png";
import meter from "../assets/images/points/meter.png";
import power from "../assets/images/points/power.jpeg";
import process from "../assets/images/points/process.png";
import shoppingSegment from "../assets/images/segments/shopping-utilities-v2.png";
import buildingSegment from "../assets/images/segments/commercial-building-v2.png";
import hospitalSegment from "../assets/images/segments/hospital-facilities-v2.png";
import industrialSegment from "../assets/images/segments/industrial-assets-v2.png";
import waterSegment from "../assets/images/segments/water-treatment-v2.png";
import partnersSegment from "../assets/images/segments/integration-partners-v2.png";

export const monitoring = [
  { title: "Motores", text: "Acompanhe sinais que orientam a manutenção.", meta: "Corrente, temperatura e vibração", image: machine },
  { title: "Baterias", text: "Identifique mudanças na condição da alimentação.", meta: "Tensão, corrente e temperatura", image: charge },
  { title: "Água", text: "Veja o consumo e encontre sinais de vazamento.", meta: "Consumo, vazão e pressão", image: flow },
  { title: "Energia", text: "Descubra onde e quando a energia é consumida.", meta: "Consumo, demanda e indicadores de custo", image: power },
  { title: "Máquinas", text: "Perceba mudanças e direcione a manutenção.", meta: "Temperatura, vibração, corrente e horas", image: process },
  { title: "Nível", text: "Saiba quanto ainda há no tanque ou reservatório.", meta: "Reservatórios, tanques e silos", image: level },
  { title: "Instrumentação", text: "Traga os instrumentos que você já tem para a mesma plataforma.", meta: "Sensores existentes, pulso, 4–20 mA e Modbus", image: meter },
  { title: "Gás", text: "Acompanhe o consumo e investigue desvios.", meta: "Consumo, pressão e vazão", image: flux },
];

export const segments = [
  { icon: Building2, label: "Shoppings", title: "Cada loja. Cada consumo. Mais clareza.", text: "Acompanhe utilidades, apoie o rateio e direcione a manutenção das áreas comuns.", image: shoppingSegment, imageAlt: "Técnico verificando medidores de utilidades em um shopping" },
  { icon: Building2, label: "Edifícios comerciais", title: "O prédio inteiro em uma mesma visão.", text: "Organize medições de locatários, áreas comuns e equipamentos essenciais.", image: buildingSegment, imageAlt: "Equipe de facilities inspecionando equipamentos de climatização de um edifício comercial" },
  { icon: Hospital, label: "Hospitais", title: "Informação para a equipe de facilities.", text: "Acompanhe utilidades e condições dos equipamentos de apoio à operação.", image: hospitalSegment, imageAlt: "Técnico verificando infraestrutura de energia e climatização em um hospital" },
  { icon: Factory, label: "Indústrias", title: "Entenda o consumo e a condição dos ativos.", text: "Compare linhas e turnos, distribua custos e investigue mudanças de comportamento.", image: industrialSegment, imageAlt: "Técnico inspecionando um motor na linha de produção industrial" },
  { icon: Droplet, label: "Tratamento e reuso de água", title: "O processo visível entre as verificações.", text: "Reúna vazão, nível e instrumentação para acompanhar a operação e orientar ajustes.", image: waterSegment, imageAlt: "Técnico verificando vazão junto aos tanques de uma estação de tratamento de água" },
  { icon: Users, label: "Parceiros, OEM e integradores", title: "Acompanhe os ativos dos seus clientes.", text: "Conecte equipamentos, organize unidades e leve contexto para cada atendimento.", image: partnersSegment, imageAlt: "Integrador instalando sensores em equipamentos de uma unidade cliente" },
];

export const agentQuestions = [
  ["Qual unidade consumiu mais água ontem?", "Neste exemplo, a Unidade Centro teve o maior consumo: 12 m³ ontem.\n\nUnidade Centro: 12 m³ · Unidade Norte: 8 m³."],
  ["Existe algum equipamento fora do comportamento normal?", "A Bomba 04 apresenta vibração acima da faixa configurada. Vale verificar o conjunto antes do próximo turno."],
  ["Me mostre o consumo desta semana.", "O consumo acumulado nesta semana é de 68 m³, 7% abaixo do mesmo período da semana anterior."],
  ["Existe algum alerta crítico agora?", "Não há alertas críticos ativos. Existem dois avisos de atenção aguardando verificação da equipe."],
];

export const scenarios = [
  { name: "Água", local: "Shoppings",title: "O shopping fechou. A água continua correndo.", value: "120 L/h", description: "O sensor registra o consumo daquele ponto. O histórico mostra que a água continua sendo utilizada após o fechamento.", image: flow },
  { name: "Energia", local: "Substações", title: "O turno terminou. A demanda continua alta.", value: "42 kW", description: "A medição evidencia uma carga fora do horário previsto e ajuda a equipe a localizar o consumo desnecessário.", image: power },
  { name: "Gás", local: "Indústrias químicas", title: "O consumo mudou sem explicação.", value: "18 m³/h", description: "A curva histórica destaca o desvio e direciona a inspeção para o ponto correto da instalação.", image: meter },
  { name: "Nível", local: "Condominios residenciais", title: "O reservatório está baixando rápido demais.", value: "31%", description: "O acompanhamento contínuo mostra a velocidade da queda e permite agir antes de faltar abastecimento.", image: level },
  { name: "Máquinas", local: "Estações de Metrô", title: "Uma mudança pequena pode antecipar uma parada.", value: "8,4 mm/s", description: "Vibração e temperatura ficam visíveis no histórico para orientar a manutenção do equipamento.", image: machine },
];

export const faqs = [
  ["Preciso ter Wi-Fi no local?", "Não. A conexão é definida conforme o ambiente e pode usar NB-IoT, 4G, LoRaWAN, Ethernet ou Wi-Fi"],
  ["Preciso trocar meus medidores ou sensores?", "Nem sempre. A AS3 avalia os instrumentos existentes e integra os que forem compatíveis; quando necessário, indica a medição adequada."],
  ["Quantos pontos preciso contratar?", "Você pode começar com um único ponto prioritário e ampliar quando fizer sentido para a operação."],
  ["Funciona em áreas externas?", "Sim, desde que sensores, invólucros e conectividade sejam especificados para as condições do local."],
  ["É possível monitorar várias unidades?", "Sim. A plataforma organiza diferentes unidades, ativos e responsáveis em uma única visão."],
  ["Como os dados chegam à plataforma?", "Os sensores enviam as medições por um dispositivo de comunicação. Os dados são processados e disponibilizados na nuvem em tempo real."],
  ["Posso configurar alarmes?", "Sim. Os limites e condições são definidos de acordo com o que merece atenção na sua operação."],
  ["É possível integrar com meu sistema?", "A viabilidade depende do sistema e do projeto. A AS3 avalia protocolos, dados e forma de integração."],
  ["Quem instala e configura tudo?", "A AS3 cuida da especificação, instalação, configuração, plataforma e acompanhamento."],
  ["Como posso pagar pelo Microméros?", "Você pode comprar os equipamentos e contratar a plataforma ou usar o monitoramento como serviço em uma mensalidade."],
];
