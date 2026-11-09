# Brainstorm — Portal PKZ / One to One

> Projeto Front-End · IBMEC · 2026.2 · Grupo 3 — sexta-feira
> Histórico: revisão de 29/10/2026 (duas marcas). **Atualização React/Fisioterapia em 09/11/2026 na seção final**.

## 1. Definição do problema

PKZ e One to One fazem parte do mesmo grupo, mas apresentam propostas diferentes. Quem visita o site precisa entender essa relação, encontrar informações sobre o treinamento e saber qual caminho seguir. Ao mesmo tempo, alunos e responsáveis precisam reconhecer o acesso destinado à sua experiência de acompanhamento.

O projeto acadêmico transforma essas necessidades em um front-end. Esta revisão organiza as ideias levantadas anteriormente e registra quais foram implementadas, adaptadas, descartadas ou mantidas para uma etapa futura. Não representa uma nova reunião de brainstorm nem atribui falas aos participantes.

### Problemas considerados

- Dificuldade de explicar rapidamente a diferença entre as duas marcas.
- Informações sobre metodologia e acompanhamento dispersas em conversas.
- Dúvidas recorrentes sobre público, avaliação, horários e formatos de atendimento.
- Necessidade de organizar o caminho do visitante e o acesso do aluno.
- Risco de prometer no site recursos que dependem de um sistema de gestão completo.
- Necessidade de manter navegação e leitura em celular, tablet e computador.

## 2. Pergunta norteadora

**Como apresentar PKZ e One to One de forma clara e integrada, facilitar o contato e demonstrar a experiência do atleta usando apenas HTML, CSS e JavaScript?**

## 3. Geração de ideias

As ideias abaixo retomam as necessidades do cliente e as mudanças do projeto. A seleção é apresentada depois, para separar a exploração de possibilidades da decisão de implementação.

### Apresentação e conteúdo

- Criar uma página inicial que apresente o grupo antes da escolha da marca.
- Usar um banner de treinamento com maior destaque visual.
- Mostrar dois caminhos: desenvolvimento esportivo e treinamento individualizado.
- Explicar avaliação, planejamento e acompanhamento em etapas simples.
- Ampliar as descrições e as respostas às perguntas frequentes.
- Exibir fotos de estrutura e treinamento.
- Mostrar profissionais e funções relacionadas ao acompanhamento.
- Usar vídeos e contar mais detalhes da história do grupo.

### Navegação e contato

- Permitir voltar ao início e alternar entre as marcas pelo menu.
- Manter Agendar e Área do Atleta visíveis nas duas páginas.
- Direcionar dúvidas e interesse comercial ao WhatsApp da marca escolhida.
- Apresentar o trabalho antes de discutir valores e pacotes.
- Permitir consulta da agenda sem obrigar o visitante a criar uma conta.

### Experiência do atleta

- Criar uma área de login e uma forma simples de demonstrar o acesso.
- Considerar cadastro público de interessados, como na proposta antiga.
- Retirar o cadastro público após a mudança solicitada pelo cliente.
- Mostrar próximos agendamentos, histórico e evolução em um painel.
- Abrir relatórios e permitir impressão pelo navegador.
- Permitir edição de nome e marca no perfil de demonstração.
- Apresentar mensagens claras quando um dado é inválido ou o armazenamento falha.

### Possíveis evoluções

- Integrar autenticação e dados reais em um servidor.
- Sincronizar agenda entre alunos, recepção e professores.
- Trabalhar com capacidade por horário, fila de espera e notificações.
- Criar perfis profissionais para preencher avaliações e relatórios.
- Exibir gráficos de capacidades físicas com dados históricos reais.
- Incorporar observações do treino anterior ao atendimento seguinte.

## 4. Agrupamento das ideias

| Grupo | Conteúdos relacionados |
|---|---|
| Identidade e apresentação | Hub, logos, banner, diferença entre marcas e linguagem visual comum. |
| Conteúdo institucional | Método, serviços, estrutura, equipe ilustrativa e FAQ. |
| Navegação e contato | Início, troca de marca, Agendar, Área do Atleta e WhatsApp. |
| Acesso e acompanhamento | Login demonstrativo, painel, agenda, histórico, relatórios e perfil. |
| Implementação | HTML/CSS/JS, pastas separadas, armazenamento local e responsividade. |
| Evolução do sistema | Autenticação real, dados compartilhados, capacidade, notificações e gestão. |

## 5. Análise e seleção

| Ideia | Decisão atual | Justificativa |
|---|---|---|
| Hub e duas páginas de marca | Implementada | Mantém a identidade do grupo e explica propostas distintas. |
| Banner maior e galeria sem imagem quebrada | Implementada | Melhora a apresentação e o carregamento do conteúdo visual. |
| Descrições e FAQ mais completos | Implementada no hub, na PKZ e nas perguntas das duas marcas | Ajuda a esclarecer público, método e contato sem depender só de imagens. |
| Apresentação da equipe | Adaptada | Retratos genéricos e funções, identificados como ilustrativos; sem inventar nomes ou formações. |
| Cadastro público | Retirada | O cliente solicitou impedir a criação espontânea de novas contas. |
| Login e preenchimento de demonstração | Mantida e implementada | Permite apresentar o painel sem backend. |
| Agenda e cancelamento | Implementados localmente | Atende à atividade acadêmica com dados salvos no navegador. |
| Painel com relatórios e evolução | Implementado em demonstração | Mostra a experiência proposta; os indicadores não são resultados reais. |
| Preços fixos como destaque | Não adotada | Os formatos devem ser discutidos com a equipe. |
| Vídeos e integração com o aplicativo interno | Fora da versão atual | O código entregue usa imagens e não se conecta ao sistema da empresa. |
| Fila de espera, notificações e capacidade real por horário | Futuras | Dependem de regras validadas e de dados compartilhados. |
| CSS separado e quatro pontos de quebra | Implementada | Facilita a organização do trabalho e a adaptação a telas diferentes. |

## 6. Direção consolidada

O portal começa pela apresentação do grupo e leva às páginas PKZ ou One to One. Cada página combina conteúdo, imagens, perguntas frequentes e caminhos claros para contato, agendamento e Área do Atleta. A experiência interna é demonstrada por login, painel e reservas locais.

A solução conserva o caráter acadêmico: o visitante consegue navegar e testar as interações, enquanto atendimento e confirmação comercial continuam com a equipe. As ideias de gestão completa permanecem separadas do que já está entregue.

## 7. Encaminhamento para os outros documentos

- O [mapa mental](mindmaps/Mindmap.md) apresenta os grupos de ideias visualmente.
- O [5W2H](5W2H.md) organiza objetivo, participantes, meios e limites.
- O [Documento de Visão](<Doc visão.md>) consolida o produto e seus públicos.
- Os [requisitos](Requisitos.md) descrevem comportamentos verificáveis.
- A [AHT](AHT/AHT.md) detalha as tarefas do usuário.
- O [Scrum](scrum.md) relaciona a organização do trabalho às entregas.

## Adendo de ideação implementada — 09/11/2026

O desenho do hub com **PKZ e One to One lado a lado e Fisioterapia em uma faixa inferior** foi incorporado como evolução de interface. Foram consideradas as ideias de: fotos genéricas com `alt`, página própria com conteúdo introdutório, mesma paleta azul/marinho, CTAs visualmente contrastados na One to One, navegação e rodapé consistentes e migração de telas para React para facilitar manutenção e deploy. Essas ideias derivam da solicitação do usuário; **não representam ata ou votação nova de brainstorm com o grupo**. Ver [Arquitetura-React.md](Arquitetura-React.md).
