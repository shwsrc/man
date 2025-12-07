# Brainstorming de Design - Secure Doll Site

## Abordagem 1: Brutalismo de Dados (Data Brutalism)
<response>
<probability>0.08</probability>
<text>
**Design Movement**: Brutalismo Web / Utilitário
**Core Principles**:
1.  **Honestidade Crua**: Expor a estrutura, bordas grossas, sem sombras suaves ou gradientes.
2.  **Legibilidade Máxima**: Fontes grandes, alto contraste, hierarquia clara.
3.  **Segurança Visual**: O design transmite robustez, como um cofre ou um terminal de sistema seguro.
4.  **Estática**: Pouco movimento desnecessário, apenas o que é funcional (a boneca e a lista).

**Color Philosophy**:
*   Fundo **Preto** (#000000) para imersão total.
*   Texto e Bordas em **Verde Terminal** (#00ff00) usado de forma "chapada" (flat), sem brilho.
*   Elementos de container em **Cinza Escuro** (#1a1a1a) para separar conteúdo.
*   Destaques críticos em **Branco** (#ffffff).
*   *Intenção*: Evocar a sensação de um sistema operacional seguro, antigo e inquebrável.

**Layout Paradigm**:
*   **Modular/Bento Grid**: Blocos retangulares bem definidos com bordas visíveis de 1px ou 2px.
*   Centralização vertical rígida para a boneca, com o resto do conteúdo fluindo em blocos abaixo.

**Signature Elements**:
1.  **Bordas Monospace**: Linhas divisórias sólidas.
2.  **Cursor Personalizado**: Um bloco piscante ou cruz de mira.
3.  **Tipografia Técnica**: Uso de fontes monoespaçadas para tudo.

**Interaction Philosophy**:
*   Cliques secos e responsivos.
*   Hover inverte as cores (fundo verde, texto preto).

**Animation**:
*   Movimentos "step-by-step" (frame a frame) para a boneca, imitando stop-motion ou baixa taxa de atualização de câmeras de segurança.
*   Fade-in rápido e seco para os usuários resgatados.

**Typography System**:
*   Principal: `JetBrains Mono` ou `Courier Prime` (Google Fonts).
*   Hierarquia: Títulos em Uppercase, corpo em tamanho legível (16px+).
</text>
</response>

## Abordagem 2: Minimalismo de Arquivo (Archive Minimalism)
<response>
<probability>0.05</probability>
<text>
**Design Movement**: Estilo Suíço / Arquivista
**Core Principles**:
1.  **Ordem Absoluta**: Grid rigoroso, muito espaço em branco (ou preto, no caso).
2.  **Tipografia como Imagem**: O texto é o principal elemento visual além da boneca.
3.  **Neutralidade**: O design não interfere no conteúdo, apenas o apresenta.
4.  **Mistério**: O uso de espaço negativo cria tensão.

**Color Philosophy**:
*   Fundo **Cinza Muito Claro** (#f0f0f0) ou **Branco** (#ffffff) para uma abordagem "clínica" (incomum para "seguro", mas eficaz para "asséptico"). *Alternativa*: Fundo **Cinza Chumbo** (#2d2d2d) para manter o dark mode solicitado implicitamente pela vibe "segura". Vamos de **Cinza Escuro**.
*   Texto em **Branco** e **Verde Pálido** (Sage Green) para suavizar o contraste.
*   *Intenção*: Parecer um relatório confidencial ou uma ficha médica/criminal.

**Layout Paradigm**:
*   **Lista Vertical**: Tudo alinhado ao centro ou esquerda, com muita margem.
*   A boneca "flutua" no topo, desconectada de containers visíveis.

**Signature Elements**:
1.  **Linhas Finas**: Divisórias de 1px em cinza claro.
2.  **Contadores Numéricos**: Índices pequenos ao lado dos nomes (01, 02, 03...).
3.  **Timestamps**: Adicionar data/hora fictícia ou real em cantos.

**Interaction Philosophy**:
*   Suave e silenciosa.
*   Micro-interações de sublinhado ao passar o mouse.

**Animation**:
*   A boneca balança suavemente (senoidal).
*   Nomes aparecem com um leve "slide up" e opacidade.

**Typography System**:
*   Principal: `Inter` ou `Helvetica` (neogrotesca).
*   Hierarquia: Pesos variados (Light para rótulos, Bold para dados).
</text>
</response>

## Abordagem 3: Industrial Dark (Industrial Dark)
<response>
<probability>0.07</probability>
<text>
**Design Movement**: Industrial / Utilitário Pesado
**Core Principles**:
1.  **Peso Visual**: Elementos parecem pesados e físicos.
2.  **Textura Sutil**: Uso de ruído (noise) ou padrões de grade muito sutis no fundo.
3.  **Contraste Funcional**: Cores usadas apenas para indicar status (Verde = Ativo/Seguro).
4.  **Isolamento**: Cada componente parece uma máquina independente.

**Color Philosophy**:
*   Fundo **Preto Profundo** (#050505).
*   Painéis em **Cinza Médio** (#333333).
*   Acentos em **Verde Floresta** (#228b22) para elementos estáticos e **Verde Lima** (#32cd32) para ativos.
*   *Intenção*: Parecer o painel de controle de uma instalação de contenção.

**Layout Paradigm**:
*   **Painel de Controle**: Card do Discord e Lista de Usuários parecem módulos de um painel maior.
*   A boneca é o "objeto de observação" no centro superior.

**Signature Elements**:
1.  **Cantos Chanfrados** (45 graus) em vez de arredondados.
2.  **Scanlines**: Linhas horizontais sutis sobre a área da boneca (efeito câmera).
3.  **Barras de Progresso/Status**: Decorativas, indicando "segurança do sistema".

**Interaction Philosophy**:
*   Botões parecem físicos (efeito de "pressionar" com transform: translateY).
*   Som de clique mecânico (já solicitado pelo usuário).

**Animation**:
*   Boneca com movimento pendular mecânico.
*   Lista de usuários com efeito de "digitação" ou "decodificação".

**Typography System**:
*   Principal: `Space Mono` ou `Roboto Mono`.
*   Hierarquia: Tamanhos fixos, sem muita variação de peso.
</text>
</response>
