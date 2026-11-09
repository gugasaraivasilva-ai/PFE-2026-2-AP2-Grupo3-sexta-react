# Scrum — Organização do projeto PKZ / One to One / Fisioterapia

> Projeto Front-End · IBMEC · 2026.2 · Grupo 3 — sexta-feira
> Revisão: 09/11/2026 · Base histórica: 29/10/2026; novo incremento React/Fisioterapia documentado abaixo.

## 1. Objetivo da revisão

Relacionar a organização incremental do trabalho às entregas presentes no portal final. O documento anterior descrevia um planejamento de quatro sprints, mas ainda não incluía as interações de JavaScript, a retirada do cadastro e a agenda local já implementada.

Esta revisão mantém a organização em quatro ciclos como referência acadêmica e atualiza o backlog. Os ciclos abaixo agrupam entregas identificadas no projeto; não são atas de reuniões nem comprovam datas, duração ou participação em eventos que não foram registradas.

## 2. Organização e responsabilidades

No Scrum, Product Owner ordena o Product Backlog e responde pelo valor do produto; Scrum Master ajuda o time a aplicar o framework; Developers constroem o incremento. Os papéis não se confundem automaticamente com cliente ou professor.

| Participante no projeto | Responsabilidade considerada |
|---|---|
| Responsáveis pela PKZ / One to One | Apresentar necessidades, esclarecer funcionamento e fornecer feedback sobre conteúdo e proposta. |
| Grupo 3 — turma de sexta-feira | Analisar requisitos, documentar, prototipar, implementar, integrar e verificar o front-end. |
| Professor da disciplina | Orientar e avaliar a aplicação dos conteúdos e os critérios da entrega acadêmica. |

Os materiais consultados não confirmam quais integrantes assumiram formalmente Product Owner e Scrum Master. Por isso, não foram atribuídos nomes ou decisões individuais nesta revisão.

## 3. Objetivo do produto

**Entregar um portal responsivo em React, com PKZ, One to One e Fisioterapia, contato e demonstração de acesso, painel e agenda local; preparar build para Vercel sem backend.**

O objetivo preserva os limites da disciplina. Um sistema comercial com dados compartilhados, autenticação real, financeiro e gestão de profissionais não faz parte do incremento atual.

## 4. Product Backlog atualizado

As prioridades abaixo refletem a entrega acadêmica consolidada, sem estimativas de horas ou pontos não registradas.

| ID | Prioridade | Necessidade / história resumida | Situação |
|---|---|---|---|
| PB01 | Alta | Como visitante, quero entender o grupo e escolher a marca adequada. | Implementado no hub. |
| PB02 | Alta | Como interessado, quero conhecer método, serviços e estrutura de cada marca. | Implementado nas duas páginas. |
| PB03 | Alta | Como visitante, quero voltar ao início, alternar a marca e localizar Agendar e Área do Atleta. | Implementado nos menus. |
| PB04 | Alta | Como interessado, quero consultar dúvidas frequentes e falar com a equipe certa. | FAQ ampliado e links de WhatsApp. |
| PB05 | Alta | Como cliente do projeto, quero retirar a criação pública de contas. | Cadastro removido; login mantido. |
| PB06 | Alta | Como avaliador, quero preencher a demonstração e entrar no painel. | Implementado sem backend. |
| PB07 | Alta | Como usuário da demonstração, quero reservar e cancelar um horário. | Implementado com armazenamento local. |
| PB08 | Alta | Como aluno de demonstração, quero consultar minhas próximas reservas no painel. | Filtro por marca e e-mail da sessão. |
| PB09 | Média | Como avaliador, quero explorar evolução, histórico e relatórios. | Exemplos fictícios e abertura de relatórios implementados. |
| PB10 | Média | Como usuário, quero alterar nome e marca e encerrar o acesso. | Implementado no perfil local. |
| PB11 | Alta | Como visitante, quero usar o site em celular e computador. | CSS mobile first com quatro pontos de quebra. |
| PB12 | Alta | Como integrante, quero manter os arquivos organizados e sem caminhos quebrados. | CSS separado; referências corrigidas após mover os HTMLs. |
| PB13 | Média | Como visitante, quero visualizar banner, galeria e equipe. | Imagens locais; retratos ilustrativos. |
| PB14 | Alta | Como professor, quero documentação coerente com o produto apresentado. | Atendido por esta revisão documental. |
| PB15 | Média | Como responsável pelo conteúdo, quero evitar promessa ambígua de atendimento exclusivo. | Pendência editorial no cartão da One to One. |
| PB16 | Futuro | Como equipe da empresa, quero uma agenda compartilhada com capacidade e notificações. | Fora do incremento atual. |

O detalhamento dos critérios está em [Requisitos.md](Requisitos.md).

### Product Backlog — novas histórias (09/11/2026)

| ID | Prioridade | História / necessidade | Situação |
|---|---|---|---|
| PB17 | Alta | Como visitante, quero visualizar Fisioterapia abaixo dos cards PKZ e One to One no hub. | Implementado em JSX |
| PB18 | Alta | Como visitante, quero conhecer a proposta geral da Fisioterapia em página própria. | Implementado em JSX; conteúdo pendente de validação do cliente |
| PB19 | Alta | Como professor, quero que o código do site inteiro esteja em React. | Componentes `.jsx` implementados |
| PB20 | Alta | Como equipe, quero preparar e publicar o front-end no Vercel. | Configuração pronta; deploy e build externo pendentes |
| PB21 | Alta | Como atleta, quero manter o login, a agenda e o painel sem links quebrados. | Funcionalidades reconstruídas em React a partir de versão anterior |
| PB22 | Média | Como avaliador, quero acompanhar a evolução por registros de sprint e trabalho diário. | Sprint 5 e modelo de acompanhamento documentados; reuniões não inventadas |
| PB23 | Alta | Como visitante, quero bom contraste e ordem visual consistente nas três áreas. | CSS ajustado; validação visual pendente |

## 5. Organização dos ciclos de trabalho

### Ciclo 1 — Levantamento e definição do produto

**Objetivo:** entender o grupo, os públicos e as necessidades do cliente.

**Atividades relacionadas:** analisar a reunião e os áudios, organizar brainstorm e mapa mental, elaborar 5W2H, visão e AHT, separar website institucional das demandas de aplicativo.

**Entrega identificada:** documentação inicial e definição de um hub com páginas próprias para cada marca. A atualização atual mantém a transcrição original e revisa os documentos de análise.

### Ciclo 2 — Estrutura e proposta visual

**Objetivo:** transformar o conteúdo e as tarefas em uma navegação compreensível.

**Atividades relacionadas:** organizar seções, posicionar escolha de marcas, definir acesso ao aluno, usar a identidade visual, representar painel e contato.

**Entrega identificada:** referências de interface e estrutura que orientam o código. Imagens de protótipos antigos que contenham cadastro não devem ser usadas como evidência da versão final sem contextualizar a mudança.

### Ciclo 3 — Implementação do front-end

**Objetivo:** construir páginas e interações demonstráveis.

**Atividades relacionadas:** implementar os seis HTMLs, estilos por página, menu móvel, FAQ, login de demonstração, painel, formulários, reservas, cancelamento e persistência local.

**Entrega identificada:** portal navegável em HTML/CSS/JS. O painel conecta os agendamentos locais à marca e ao e-mail da sessão; os demais indicadores são exemplos.

### Ciclo 4 — Revisão, correções e documentação

**Objetivo:** consolidar as alterações solicitadas e preparar uma entrega coerente.

**Atividades relacionadas:** remover cadastro, revisar menus e conteúdo, ampliar banner, corrigir imagem ausente, incluir retratos ilustrativos, ajustar responsividade, separar CSS e corrigir caminhos após mover HTMLs. Revisar documentos e diagramas conforme o código.

**Entrega identificada:** versão com caminhos corrigidos, fluxos verificados e pacote documental atualizado. A pendência editorial da One to One fica registrada, sem ser apresentada como já resolvida.

## 6. Eventos e acompanhamento

Sprints têm duração fixa de até um mês. A organização em quatro ciclos acima não atribui uma duração retrospectiva. Os eventos podem orientar a continuidade do projeto:

| Evento | Aplicação ao trabalho |
|---|---|
| Sprint Planning | Selecionar itens do backlog e definir um objetivo verificável para o próximo incremento. |
| Daily Scrum | Em até 15 minutos, inspecionar o progresso e ajustar o plano imediato dos desenvolvedores. |
| Sprint Review | Demonstrar o incremento, verificar sua utilidade e coletar feedback para atualizar o backlog. |
| Sprint Retrospective | Avaliar a forma de trabalho e escolher melhorias para o próximo ciclo. |

Não há registro suficiente para afirmar que todos esses eventos ocorreram com frequência formal. O documento apresenta como se relacionam ao projeto, sem criar reuniões ou participantes fictícios.

## 7. Definição de pronto aplicada à entrega

Um item é considerado pronto para demonstração quando:

- Seu comportamento corresponde ao requisito e está integrado às páginas relacionadas.
- Links, imagens, CSS e scripts carregam no ambiente de apresentação.
- O fluxo principal funciona e apresenta mensagens nos casos de erro previstos.
- Os controles continuam utilizáveis em telas pequenas e grandes.
- Dados fictícios e armazenamento local são identificados quando usados.
- Não reintroduz cadastro público ou recursos excluídos.
- A documentação descreve o comportamento implementado e seus limites.

A revisão em Chromium verificou os fluxos de entrada, painel, reserva e cancelamento. Auditoria WAVE, compatibilidade completa em outros navegadores e aprovação comercial não são marcadas como concluídas sem evidência.

## 8. Aprendizados e próximos ajustes

| Observação do projeto | Ação de melhoria |
|---|---|
| Mover os HTMLs quebrou referências de arquivos. | Verificar caminhos e abrir todas as páginas após reorganizações. |
| A documentação ficou anterior ao código. | Atualizar requisitos e AHT quando uma funcionalidade for removida ou implementada. |
| O cliente mudou a decisão sobre cadastro. | Registrar a retirada também no backlog e nos protótipos usados na apresentação. |
| Ideias do aplicativo podem ser confundidas com recursos do site. | Identificar claramente demonstrações locais e integrações futuras. |
| Um cartão da One to One diverge do FAQ sobre exclusividade. | Revisar a redação com a equipe antes de publicação real. |

Esses pontos decorrem dos artefatos e das alterações conhecidas; não constituem uma ata de retrospectiva realizada.

## 9. Referências

- Planejamento Scrum anterior do repositório do grupo.
- Código da versão final e alterações solicitadas durante o projeto.
- [Scrum Guide 2020 — fonte oficial](https://scrumguides.org/scrum-guide.html), consultado em 29/10/2026 para papéis e eventos.

## 10. Sprint 5 — React + Fisioterapia (adendo 09/11/2026)

**Objetivo:** migrar as páginas para React preservando o conteúdo, incorporar a terceira área pedida e preparar entrega para Vercel. O registro do backlog e os critérios de pronto estão em [Sprint-React-Fisioterapia.md](Sprint-React-Fisioterapia.md).

**Artefatos:** sete componentes de página JSX, layout compartilhado, estado React para agenda, login e painel, arquivos `package.json`/`vercel.json`, nova documentação de requisitos e plano de testes.

**Estado:** implementação gerada e verificação sintática realizada; build `npm` e testes funcionais em navegador ainda precisam ser executados. O relatório [Daily-Scrum-React.md](Daily-Scrum-React.md) é um registro técnico de andamento e um modelo para próximas reuniões, não comprovação de uma reunião Daily Scrum com a equipe.

**Impedimentos identificados:** links de login/painel ausentes no repositório principal, recuperados de pacote acadêmico anterior; ambiente sem acesso ao registro npm para executar build; conteúdo de Fisioterapia aguardando validação. Nenhum nome, presença ou duração de sprint foi atribuído sem evidência.
