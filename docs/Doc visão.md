# Documento de Visão — Portal PKZ / One to One / Fisioterapia

> Projeto Front-End · IBMEC · 2026.2 · Grupo 3 — sexta-feira
> Atualização de escopo: **09/11/2026** · Mantido histórico de 29/10/2026 · **Versão atual em React + Vite**.

## 1. Introdução

### 1.1 Propósito

Este documento consolida a visão do portal da PKZ e da One to One conforme o front-end implementado. Seu objetivo é alinhar cliente, equipe acadêmica e professor sobre o problema atendido, os públicos, a estrutura, as funcionalidades e os limites da entrega.

A revisão considera as conversas com o cliente, os documentos anteriores e as mudanças realizadas no projeto. A atualização considera a versão institucional com Fisioterapia de 06/11/2026, os arquivos do repositório vanilla e a migração integral para React realizada em 09/11/2026. Os requisitos detalhados foram organizados em [Requisitos.md](Requisitos.md), mantendo este documento concentrado na visão geral.

### 1.2 Público-alvo do documento

O documento se destina à equipe acadêmica do Grupo 3, ao professor da disciplina e aos responsáveis pela PKZ / One to One. Também serve como referência para quem precisar entender ou continuar o projeto.

### 1.3 Escopo

A entrega é um portal responsivo, desenvolvido com React, Vite, JavaScript e CSS. Possui sete páginas principais: início do grupo, PKZ, One to One, **Fisioterapia**, login, agendamento e Área do Atleta. As páginas institucionais apresentam as marcas e encaminham o visitante ao contato. As demais demonstram acesso, reservas locais e acompanhamento.

O projeto não inclui backend nem banco de dados. O login é demonstrativo; os agendamentos ficam no navegador; o histórico e os indicadores do painel são fictícios. Essa delimitação permite apresentar as interações da interface sem afirmar que existe uma operação comercial integrada.

### 1.4 Definições

| Termo | Significado no projeto |
|---|---|
| PKZ | Marca voltada principalmente ao desenvolvimento esportivo de atletas infantojuvenis, com avaliação e treino orientado às exigências da modalidade. |
| One to One | Marca voltada principalmente ao público adulto, incluindo atletas amadores, com musculação e treinamento individualizado. |
| Fisioterapia | Nova página institucional de apresentação geral; conteúdos de atendimento específicos dependem de confirmação do cliente. |
| React / Vite | Bibliotecas e ferramenta de build do frontend atual, sem backend. |
| Hub | Página inicial que apresenta o grupo e direciona para PKZ, One to One e Fisioterapia. |
| Área do Atleta | Nome do acesso demonstrativo das marcas PKZ e One to One, implementado na rota React `/area-do-atleta`. |
| Sessão demonstrativa | Identificação temporária armazenada em `sessionStorage`; não equivale a autenticação em um servidor. |
| Reserva local | Registro em `localStorage`, disponível naquele navegador e endereço de acesso. Não é enviado à empresa. |

## 2. Posicionamento

### 2.1 Oportunidade

O levantamento identificou a necessidade de apresentar as duas marcas de forma integrada e de explicar suas diferenças antes do contato comercial. O portal reúne informações institucionais das três áreas, mostra o método de trabalho e oferece caminhos claros para conhecer o grupo, tirar dúvidas e acessar a demonstração da experiência do aluno.

### 2.2 Problema

Visitantes podem não compreender de imediato a relação entre PKZ e One to One ou qual proposta se aproxima de seus objetivos. A equipe também recebe perguntas recorrentes sobre metodologia, público e formatos de acompanhamento. A ausência de uma apresentação organizada aumenta a dependência de explicações individuais.

Outro desafio é representar a experiência de acompanhamento sem confundir o site institucional com o aplicativo de gestão discutido nas reuniões. As funcionalidades desse aplicativo não foram automaticamente incorporadas ao escopo da disciplina.

### 2.3 Solução consolidada

A página inicial explica que as áreas fazem parte do mesmo grupo. O visitante escolhe uma delas e encontra metodologia, serviços, galeria, equipe ilustrativa e perguntas frequentes. O menu permite voltar ao início, visitar a outra marca, abrir o agendamento e entrar na Área do Atleta.

O contato usa links de WhatsApp separados por marca. A consulta de valores e formatos permanece com a equipe. O cadastro público foi removido por solicitação do cliente; o acesso de demonstração e o painel foram mantidos.

### 2.4 Declaração de posicionamento

| Elemento | Definição |
|---|---|
| Para | Visitantes, atletas, responsáveis e pessoas interessadas em treinamento individualizado. |
| Necessidade | Conhecer a proposta do grupo, escolher uma marca e encontrar informações e contato. |
| Produto | Portal web institucional com demonstrações de acesso, painel e agendamento. |
| Benefício | Organiza as informações e apresenta a jornada do visitante ao acompanhamento do atleta. |
| Diferencial | Preserva uma identidade comum sem apagar as diferenças de público e abordagem das marcas. |

## 3. Envolvidos e usuários

### 3.1 Envolvidos

| Envolvido | Participação |
|---|---|
| Gestão da PKZ / One to One | Fornece contexto, orienta a comunicação e valida informações comerciais e institucionais. |
| Equipe técnica e atendimento | Esclarecem como funciona o acompanhamento e recebem contatos pelo WhatsApp. |
| Grupo 3 — turma de sexta-feira | Organiza documentação, protótipo, código, revisão e apresentação acadêmica. |
| Professor | Orienta os critérios da disciplina e avalia a entrega. |

Não há atribuição nominal de Product Owner ou Scrum Master nesta revisão, pois os materiais não confirmam essa distribuição.

### 3.2 Usuários e necessidades

| Usuário | Necessidade atendida |
|---|---|
| Visitante | Entender o grupo, comparar as marcas e entrar em contato. |
| Atleta ou responsável | Conhecer o método da PKZ e visualizar a experiência de agenda e acompanhamento. |
| Interessado ou aluno da One to One | Entender a proposta de treinamento e acessar os mesmos fluxos demonstrativos com a marca selecionada. |
| Equipe e professor na apresentação | Testar navegação, formulários, reservas e painel com dados fictícios. |

O código não implementa permissões diferentes para aluno, responsável, treinador ou administrador. A identificação desses públicos descreve suas necessidades, não uma divisão de contas já existente.

## 4. Visão geral do produto

### 4.1 Páginas e responsabilidades — implementação React

| Componente / rota | Conteúdo e ações principais |
|---|---|
| `src/pages/Hub.jsx` — `/` | Banner do grupo; PKZ e One to One em duas colunas e Fisioterapia em destaque inferior. |
| `src/pages/Pkz.jsx` — `/pkz` | Desenvolvimento esportivo, avaliação, planejamento, reavaliação, serviços, equipe e FAQ. |
| `src/pages/OneToOne.jsx` — `/one-to-one` | Treinamento individualizado, método, serviços, equipe e FAQ, com CTAs contrastantes. |
| `src/pages/Fisioterapia.jsx` — `/fisioterapia` | Nova área institucional, cuidados com movimento, imagens ilustrativas, FAQ e contato. |
| `src/pages/Login.jsx` — `/login` | E-mail e senha, preenchimento da demonstração, erros e orientação de recuperação sem cadastro. |
| `src/pages/Agenda.jsx` — `/agendamento` | Grade semanal PKZ/One to One, reserva e cancelamento locais. |
| `src/pages/Painel.jsx` — `/area-do-atleta` | Próximos agendamentos, indicadores fictícios, evolução, histórico, relatórios e perfil. |

A raiz `index.html` monta o aplicativo React em `#root`, enquanto o React Router seleciona a rota sem carregar páginas HTML separadas. URLs legadas `.html` são redirecionadas para as novas rotas.

### 4.2 Jornadas principais

1. **Conhecer e contatar:** abrir o hub, escolher PKZ, One to One ou Fisioterapia. Na primeira e segunda, seguir ao WhatsApp próprio; Fisioterapia usa o contato geral pelo hub e depende de confirmação comercial.
2. **Experimentar a agenda:** acessar Agendar, escolher um horário livre, preencher os dados e salvar uma reserva local. É possível fazer isso sem login.
3. **Explorar o painel:** acessar Área do Atleta, preencher a conta de demonstração e entrar. O painel mostra reservas futuras da marca e do e-mail da sessão, além dos exemplos de acompanhamento.
4. **Gerenciar a demonstração:** cancelar reservas pela agenda, abrir e imprimir relatórios fictícios, alterar nome ou marca do perfil e sair.

### 4.3 Conteúdo e identidade

A comunicação usa as duas marcas, tons de azul, branco e seções organizadas. O hub e a PKZ receberam textos mais completos; as perguntas frequentes das duas marcas também foram ampliadas. A galeria e os retratos são recursos de apresentação. Os retratos genéricos são identificados como ilustrativos, sem nomes ou formações inventados.

O código atual utiliza imagens; não há player de vídeo. A atualização documental não transforma propostas visuais anteriores em funcionalidades que não estejam no ZIP.

## 5. Funcionalidades e qualidade

### 5.1 Capacidades entregues

- Apresentação institucional e navegação entre marcas.
- FAQ expansível e contato externo pelo WhatsApp.
- Acesso de demonstração sem criação pública de contas.
- Agenda local por marca, com validação e cancelamento.
- Painel integrado às reservas do navegador.
- Histórico e relatórios de exemplo, com impressão pelo navegador.
- Edição do perfil demonstrativo e encerramento da sessão.

Os critérios de cada comportamento estão em [Requisitos.md](Requisitos.md).

### 5.2 Características de qualidade

O CSS adota a base para telas pequenas e ajustes em 480, 640, 900 e 1200 px. A organização separa estilos comuns e estilos por página. A agenda permite rolagem horizontal dentro da própria tabela.

Há rótulos de formulário, textos alternativos, link para pular ao conteúdo, indicação de foco, diálogos e mensagens de estado. Esses recursos contribuem para acessibilidade; não constituem certificação nem comprovam nota no WAVE. A compatibilidade completa com Safari e Firefox continua dependendo de testes nesses navegadores.

## 6. Restrições e premissas

### 6.1 Restrições

- Implementação acadêmica em React/JSX, Vite, CSS e JavaScript, sem backend ou banco de dados.
- Ausência de cadastro público por decisão do cliente.
- Reservas locais, sem compartilhamento entre dispositivos ou confirmação comercial.
- Recuperação de acesso apenas informativa, sem envio de e-mail.
- Indicadores, treinos e relatórios do painel são exemplos fixos; não há avaliação física automática.
- Não há pagamentos, notificações, fila de espera, gestão de profissionais ou integração com o aplicativo interno.
- Não usar dados pessoais reais na apresentação de teste.

### 6.2 Premissas

- Conteúdo comercial e materiais oficiais serão validados com o cliente antes de uso real.
- O usuário permite armazenamento no navegador e usa um navegador atualizado.
- Na apresentação, o projeto é aberto por servidor local, mantendo o mesmo endereço e porta.
- Publicação com dados reais exigirá revisão própria de autenticação, acesso, privacidade e operação.

## 7. Riscos e dependências

| Risco | Efeito | Tratamento |
|---|---|---|
| Confundir agenda de teste com reserva real | Visitante pode acreditar que a equipe recebeu o pedido. | Manter aviso na agenda e confirmação pelo WhatsApp. |
| Tratar sessão local como proteção real | Dados no navegador podem ser acessados ou alterados localmente. | Usar somente dados fictícios; autenticação de produção fica fora desta entrega. |
| Apagar dados ou trocar navegador/porta | Reservas podem deixar de aparecer. | Explicar o armazenamento local e usar ambiente consistente na apresentação. |
| Interpretar uma vaga local como capacidade real | O código bloqueia um horário após uma reserva, embora o cliente tenha discutido atendimento simultâneo. | Documentar a simplificação acadêmica; capacidade e fila dependem de implementação futura. |
| Texto comercial inconsistente | O cartão da One to One diz “sessões um a um”, enquanto o FAQ esclarece que individualização não garante exclusividade. | Registrar revisão editorial necessária com o cliente; não assumir atendimento exclusivo como requisito. |
| Imagens genéricas confundidas com equipe real | Pode gerar expectativa incorreta. | Manter identificação de retratos ilustrativos e substituir por material validado na implantação. |
| Referências relativas quebradas | CSS, scripts ou imagens deixam de carregar ao mover HTMLs. | Usar `../css/`, `../js/` e `../assets/` a partir de `html/`; verificar os caminhos após reorganizações. |
| Escopo crescer para um sistema de gestão | Aumenta o trabalho além da disciplina. | Separar requisitos entregues de futuras integrações. |
| Dependência de WhatsApp | O contato externo depende do serviço e do acesso do usuário. | Testar o destino dos links e deixar o canal identificado. |

## 8. Critérios gerais de aceitação

A versão acadêmica deve permitir compreender o grupo, navegar pelas três áreas, consultar os conteúdos, abrir os contatos, entrar com a demonstração, visualizar o painel e criar ou cancelar reservas locais PKZ/One to One. Deve carregar seus arquivos corretamente e manter os controles utilizáveis em diferentes larguras.

A existência de uma interface pronta não representa aprovação comercial, reserva real ou validação de dados clínicos. As verificações realizadas e os limites remanescentes estão registrados em [Requisitos.md](Requisitos.md).

## 8.1 Adendo de Visão — Terceira área e modernização de tecnologia (09/11/2026)

1. **Três caminhos de apresentação:** PKZ e One to One ocupam os dois cartões superiores do hub; Fisioterapia aparece em cartão largo inferior, com foto ilustrativa e CTA próprio.
2. **Fisioterapia institucional:** a rota `/fisioterapia` explica proposta e fluxo gerais, com imagens genéricas, FAQ e contato pelo grupo. Não apresenta especialidades, profissionais, atendimento confirmado, preços ou agenda clínica não informados pelo cliente.
3. **Navegação integrada:** menu e rodapé mostram as três áreas em ordem consistente e link para a Área do Atleta; agendamento permanece exclusivo de PKZ e One to One.
4. **Nova implementação:** o código atual é React JSX com React Router e Vite, preparado para Vercel; as funções de agenda e demonstração continuam client-side sem backend.
5. **Riscos:** conteúdo comercial de Fisioterapia depende de aprovação, e o build da Vercel depende de teste com npm e navegador.

Os arquivos de mapa mental e AHT gráficos originais representam **o escopo histórico de duas marcas**. Os adendos de 09/11 documentam o novo fluxo sem alterar retrospectivamente os artefatos de levantamento.

## 9. Base desta revisão

- Código do arquivo `pkzfinal4 2.zip` e correção posterior dos caminhos de arquivos.
- [Transcrição original da reunião e dos seis áudios](transcricao.md), preservada sem alteração.
- Documentos anteriores da pasta `docs/` do [repositório do grupo](https://github.com/gugasaraivasilva-ai/PFE-2026-2-AP1-Grupo3-sexta).
- Solicitações posteriores: retirar cadastro, manter demonstração e painel, ajustar menus, separar CSS, corrigir imagens, ampliar conteúdo e adaptar o layout a diferentes dispositivos.
