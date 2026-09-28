# Microméros — landing page da AS3

Este repositório contém a landing page do **Microméros**, solução de monitoramento operacional da **AS3**. A página apresenta o funcionamento do produto, as variáveis que podem ser acompanhadas, aplicações por segmento, formas de contratação e canais de contato.

O projeto é uma aplicação de página única feita em React e Vite. Seu conteúdo comercial e suas demonstrações estão no próprio frontend; a plataforma de monitoramento acessada pelo cliente é um serviço separado.

## Sobre a AS3

A AS3 é a empresa responsável pelo Microméros. Conforme o material institucional deste projeto, sua atuação abrange a especificação da solução, a instalação dos sensores, a escolha da conectividade, a configuração da plataforma e o acompanhamento especializado. A proposta é conectar dados de campo à análise da operação para ajudar as equipes a identificar situações que precisam de atenção e orientar suas ações.

Uma implantação pode começar por um ponto prioritário, como uma máquina, um medidor de água ou um reservatório, e ser ampliada conforme a necessidade da operação. Sensores, instrumentos, integrações e comunicação são definidos para cada projeto.

## O que é o Microméros

O Microméros reúne medições operacionais em uma plataforma acessível por computador ou celular. Os sensores ou instrumentos registram os dados no local; um dispositivo de comunicação os envia; a plataforma organiza as informações em painéis, gráficos, históricos, mapas, relatórios e alertas configurados. A equipe pode então investigar a causa de um desvio e acompanhar o efeito da ação tomada.

Entre as possibilidades apresentadas estão:

- **Água e gás:** consumo, vazão e pressão.
- **Energia:** consumo, demanda e indicadores de custo.
- **Motores e máquinas:** corrente, temperatura, vibração e horas de operação.
- **Baterias e níveis:** condição da alimentação e níveis de tanques, silos e reservatórios.
- **Instrumentação existente:** sensores e sinais compatíveis, como pulso, 4–20 mA e Modbus.

As medições disponíveis dependem dos sensores, dos instrumentos existentes e do escopo contratado. A conectividade pode usar NB-IoT, 4G, LoRaWAN, Ethernet, Wi-Fi ou Bluetooth, conforme o ambiente.

A solução é apresentada para shoppings, edifícios comerciais, hospitais, indústrias, operações de tratamento e reuso de água, além de parceiros, fabricantes de equipamentos (OEMs) e integradores. A AS3 oferece acompanhamento especializado para ajudar na leitura dos indicadores e na identificação de oportunidades de melhoria.

### Contratação e limites

A página apresenta duas formas de contratação: **compra dos equipamentos com licença de acesso à plataforma** ou **monitoramento como serviço**, com locação dos equipamentos e plataforma reunidos na mensalidade. Valores, disponibilidade e condições finais dependem da proposta da AS3.

As conversas, gráficos, alertas e valores exibidos nas demonstrações são **ilustrativos**. O Microméros Agent é apresentado na página como uma forma de consultar dados pelo WhatsApp; este repositório contém apenas sua representação visual e não implementa a integração com o assistente. O monitoramento apoia decisões operacionais, mas não substitui inspeções, procedimentos ou sistemas de segurança.

## O que a landing page apresenta

A navegação segue o percurso do visitante, da apresentação do problema ao contato com a AS3:

1. **Abertura e clientes:** proposta do Microméros e logos de empresas atendidas pela AS3.
2. **Produto:** problemas de visibilidade, caminho da medição até a ação, pontos monitoráveis, conectividade, plataforma e apresentação do Microméros Agent.
3. **Aplicações:** exemplos de uso em diferentes segmentos.
4. **Diferenciais e acompanhamento:** implantação gradual e apoio especializado da AS3.
5. **Demonstração:** cenário interativo que percorre medir, avisar, agir e acompanhar, usando dados fictícios.
6. **Próximos passos:** início do projeto, opções de contratação, dúvidas frequentes e contato comercial.

O frontend também oferece menu responsivo, ampliação de imagens em uma janela modal, seleção de cenários, perguntas de exemplo para o Agent, FAQ expansível e botão para copiar o e-mail comercial.

## Tecnologias

- **React 18 e React DOM:** componentes e interações da página.
- **Vite 6:** servidor de desenvolvimento e build de produção.
- **CSS:** estilos da página em `src/styles/global.css`. O projeto também tem Tailwind CSS 4 configurado no Vite.
- **Lucide React:** ícones da interface.
- **ESLint 9:** análise estática do código.

## Estrutura do projeto

```text
.
├── index.html                    # Documento HTML e metadados da página
├── public/
│   ├── index.md                 # Resumo textual do produto
│   ├── llms.txt                 # Índice de informações para leitores e agentes
│   └── llms-full.txt            # Descrição institucional detalhada
├── src/
│   ├── App.jsx                  # Renderiza a landing page
│   ├── main.jsx                 # Inicializa o React e importa o CSS global
│   ├── pages/
│   │   └── LandingPage.jsx      # Compõe a página e controla a ampliação de imagens
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Brand.jsx
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ProductsSection.jsx
│   │   │   ├── AcceleratorsSection.jsx
│   │   │   ├── SuccessCasesSection.jsx
│   │   │   ├── TrustedClientsSection.jsx
│   │   │   └── UseCasesSection.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── PointCard.jsx
│   │       └── ProcessStep.jsx
│   ├── data/
│   │   └── landingPage.js       # Conteúdo estruturado e referências de imagens
│   ├── hooks/                   # Reservado para hooks reutilizáveis
│   ├── assets/                  # Imagens, fotos e logos
│   └── styles/
│       └── global.css           # Estilos e regras responsivas
├── package.json                 # Dependências e scripts
├── package-lock.json            # Versões resolvidas das dependências
├── vite.config.js               # Configuração do Vite
└── eslint.config.js             # Configuração do ESLint
```

`LandingPage.jsx` monta as seções na ordem exibida. Os componentes de `layout` formam a identidade e a navegação; os de `sections` agrupam o conteúdo; os de `ui` reutilizam elementos da interface. `src/data/landingPage.js` concentra listas de monitoramento, segmentos, cenários, perguntas, FAQ e logos. Atualmente, `src/hooks/` está reservado para uso futuro.

O nome `SuccessCasesSection.jsx` faz parte da organização atual dos arquivos; no estado presente, esse componente reúne a demonstração ilustrativa, as etapas para começar, os planos, o FAQ e o contato. A página não apresenta estudos de caso com resultados comprovados.

## Executar localmente

**Requisitos:** Node.js 18 ou superior e npm.

```bash
npm ci
npm run dev
```

Abra a URL informada pelo Vite no terminal, normalmente `http://localhost:5173`.

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera os arquivos de produção em `dist/`. |
| `npm run preview` | Serve localmente o build gerado. |
| `npm run lint` | Executa o ESLint no projeto. |

`node_modules/`, `dist/` e arquivos `.env` locais são ignorados pelo Git. Os arquivos `package.json`, `package-lock.json`, `vite.config.js` e `eslint.config.js` fazem parte do projeto e devem ser versionados.

## Atualizar o conteúdo

- Edite listas, perguntas, segmentos, cenários e referências de logos em [`src/data/landingPage.js`](src/data/landingPage.js).
- Edite textos e marcação específicos de cada área nos componentes de [`src/components/sections/`](src/components/sections/).
- Ajuste a aparência e o comportamento responsivo em [`src/styles/global.css`](src/styles/global.css).
- Mantenha [`public/index.md`](public/index.md), [`public/llms.txt`](public/llms.txt) e [`public/llms-full.txt`](public/llms-full.txt) coerentes com as informações publicadas na página. Esses arquivos são servidos como conteúdo estático e não alimentam diretamente os componentes React.

## Contato

- **E-mail comercial:** [comercial@as3group.com](mailto:comercial@as3group.com)
- **WhatsApp para solicitar uma avaliação:** [+55 21 98362-0774](https://wa.me/5521983620774?text=Ol%C3%A1%2C%20quero%20uma%20avalia%C3%A7%C3%A3o%20gratuita%20do%20Microm%C3%A9ros%20na%20minha%20empresa%21)

## Desenvolvedor responsável

Matheus Patricio - Fullstack Developer at AS3
