# Requisitos — Portal PKZ / One to One / Fisioterapia (React)

> Projeto Front-End · IBMEC · 2026.2 · Grupo 3 — sexta-feira
> Revisão complementar: **09/11/2026** · Base histórica: 29/10/2026 (HTML) · Implementação atual: `src/` em React + Vite.

## 1. Finalidade e classificação

Este documento descreve comportamentos verificáveis da versão entregue e complementa o [Documento de Visão](<Doc visão.md>). Os identificadores RF01–RF13 retomam os temas da documentação anterior, com escopo atualizado; RF14 em diante detalham as interações implementadas.

**Implementado** significa presente no código do front-end (sem implicar build/deploy já aprovados). **Demonstrativo** indica funcionamento com dados locais ou fictícios. **Futuro** identifica algo que não foi entregue. Nenhum requisito abaixo pressupõe backend.

## 2. Requisitos funcionais

| ID | Requisito e critério de aceitação | Evidência principal |
|---|---|---|
| RF01 | Apresentar PKZ, One to One e Fisioterapia como áreas do mesmo grupo. O hub deve explicar essa relação em texto. | `src/pages/Hub.jsx` |
| RF02 | Permitir escolher PKZ, One to One ou Fisioterapia no hub por links identificáveis. | `src/pages/Hub.jsx` |
| RF03 | Abrir a página correspondente à área escolhida, com identidade e conteúdo próprios. | `src/pages/Pkz.jsx`, `OneToOne.jsx`, `Fisioterapia.jsx` |
| RF04 | Exibir apresentação, método e serviços de cada marca. Na PKZ, incluir avaliação, planejamento e reavaliação. | Páginas das marcas |
| RF05 | Carregar banner, logos e galerias locais com textos alternativos. O requisito atual contempla imagens, não vídeos. | `assets/`; elementos `img` |
| RF06 | Apresentar funções de acompanhamento e retratos identificados como ilustrativos. Não atribuir nomes ou credenciais profissionais fictícios. | Seções de equipe |
| RF07 | Permitir expandir e recolher respostas do FAQ. As duas páginas devem explicar dúvidas sobre público, método e contato. | Elementos `details` e `summary` |
| RF08 | Abrir WhatsApp correspondente à marca. PKZ e One to One devem manter seus destinos próprios. | Links `wa.me`; `src/pages/Agenda.jsx` |
| RF09 | Oferecer chamadas para Agendar e contato, sem chamada para criar conta. | Páginas institucionais |
| RF10 | Disponibilizar Área do Atleta para ambas as marcas, usando o formulário de login. Não apresentar cadastro público. | `src/pages/Login.jsx`; menus |
| RF11 | Redirecionar o acesso ao painel para o login quando não houver sessão demonstrativa válida. Este controle não é autenticação segura. | `lerSessao()`; `src/pages/Painel.jsx` |
| RF12 | Mostrar painel com agenda local, indicadores fictícios, frequência semanal de exemplo, observações e histórico. Identificar os dados de exemplo. | `src/pages/Painel.jsx` |
| RF13 | Nos menus das marcas, permitir Início, outra marca, Agendar e Área do Atleta. Os dois últimos links devem transportar a marca selecionada. | Parâmetro `marca=pkz` ou `marca=oto` |
| RF14 | Preencher a conta de demonstração pelo botão próprio e entrar com `aluno@demo.com` / `demo123`. Credenciais incorretas devem gerar mensagem, sem abrir o painel. | `src/pages/Login.jsx` |
| RF15 | Abrir orientação em “Esqueci minha senha”, informando que não há envio de e-mail. Permitir fechar o diálogo e voltar ao login. | Diálogo `recuperacao` |
| RF16 | Exibir a semana atual e as três seguintes, de segunda a sábado, nos horários 07, 08, 09, 10, 11, 17, 18, 19 e 20 horas. Marcar slots livres, reservados ou encerrados. | `src/pages/Agenda.jsx` |
| RF17 | Permitir reserva sem login com nome, e-mail e telefone. Exigir nome com ao menos dois caracteres, e-mail válido pelo formulário HTML e telefone com 10–13 dígitos e caracteres aceitos. Revalidar se o horário continua futuro e livre antes de salvar. | `reserva-form`; evento `submit` |
| RF18 | Salvar a reserva localmente por marca, atualizar a grade e listar registros em ordem de data. Ao recarregar no mesmo ambiente, os registros devem permanecer. | `localStorage`; `mostrarReservas()` |
| RF19 | Permitir cancelar reserva futura após confirmação. “Manter” não deve excluir; confirmar deve liberar o slot. Também permitir limpar todos os testes da marca após confirmação. | Diálogo `confirmar-exclusao` |
| RF20 | No painel, listar somente reservas futuras com a marca e o e-mail da sessão. O link Gerenciar deve levar à agenda da mesma marca. | `mostrarAgendaAluno()` |
| RF21 | Abrir os três relatórios fictícios do histórico e acionar a impressão do navegador. Salvar em PDF depende da opção disponibilizada pelo navegador. | `relatorios`; `window.print()` |
| RF22 | Permitir alterar nome e marca no perfil. Rejeitar nome com menos de dois caracteres e atualizar a agenda exibida após salvar. Permitir sair, removendo a sessão. | `perfil-form`; botão `sair` |
| RF23 | Exibir mensagens quando os dados locais não puderem ser lidos ou gravados, sem apresentar confirmação falsa. Oferecer visualização JSON e limpeza dos dados de teste da marca. | `src/pages/Agenda.jsx`; `src/lib/dados.js` |
| RF24 | Em telas pequenas, permitir abrir o menu, seguir um link e fechar o menu pelo botão ou pela tecla Escape. | `src/components/SiteLayout.jsx` |

## 2.1. Novos requisitos da atualização React e Fisioterapia (09/11/2026)

| ID | Requisito com critério de aceitação | Evidência / condição |
|---|---|---|
| RF25 | A interface deve ser implementada em **componentes React JSX**, e não por páginas HTML independentes, preservando conteúdo e identidade. | `src/pages/*.jsx`; `src/main.jsx` |
| RF26 | A navegação deve usar rotas React entre as áreas, inclusive URLs de compatibilidade `.html`. | `src/App.jsx`, `SiteLayout.jsx` |
| RF27 | O hub deve apresentar PKZ à esquerda e One to One à direita no desktop, mantendo uma linha inferior dedicada à Fisioterapia. | `src/pages/Hub.jsx`; CSS responsivo |
| RF28 | O hub deve exibir foto genérica, breve texto e CTA de Fisioterapia, com link funcional para rota própria. | `src/pages/Hub.jsx` |
| RF29 | Criar a página `/fisioterapia` totalmente em React, incluindo hero, explicação geral, proposta, imagens ilustrativas, FAQ e CTA de contato. | `src/pages/Fisioterapia.jsx` |
| RF30 | Incluir Fisioterapia nas opções de navegação e rodapé, permitindo retorno ao hub e às demais áreas. | `SiteLayout.jsx` |
| RF31 | Preservar identidade visual azul/marinho e melhorar contraste de botões One to One, harmonizando posição/ordem dos CTAs. | `one-to-one.css`, `comum.css`, `react-ajustes.css` |
| RF32 | Oferecer layout responsivo mobile first com quatro breakpoints e atributos de acessibilidade apropriados também na nova página. | CSS e JSX de Fisioterapia |
| RF33 | A nova área de Fisioterapia não deve fingir ter agenda, especialistas, valores ou horários confirmados. | FAQ e contato; conteúdo provisório |
| RF34 | Preparar comandos `npm run dev`, `npm run build`, rotas diretas e fallback SPA na Vercel. O build precisa ser confirmado em ambiente com rede. | `package.json`, `vercel.json`, `README.md` |

Esses requisitos complementam RF01–RF24, sem alterar as regras demonstrativas da agenda. O detalhamento do pedido de 06/11 está em [Fisioterapia-Requisito-Novembro.md](Fisioterapia-Requisito-Novembro.md).

## 3. Regras de funcionamento da demonstração

| ID | Regra |
|---|---|
| RN01 | A agenda é pública na demonstração e não exige criação de conta nem login. O painel usa sessão local. |
| RN02 | Cada marca tem uma lista separada de reservas. O horário reservado fica indisponível naquela lista. |
| RN03 | Uma reserva ocupa o slot inteiro na marca. Não existem seis vagas simultâneas, seleção de professor ou fila de espera no código atual. |
| RN04 | A agenda usa data e hora locais do dispositivo. Seus horários não são uma declaração de funcionamento da empresa. |
| RN05 | Reservas ficam em `localStorage`; a sessão fica em `sessionStorage`. Não há sincronização entre dispositivos. |
| RN06 | A página de agendamento exibe todos os registros locais da marca; somente o painel filtra também por e-mail. Não há isolamento seguro de contas. |
| RN07 | A conta de demonstração é fixa. O código ainda reconhece contas de teste legadas existentes no navegador, mas não oferece criação de contas novas. |
| RN08 | A alteração do perfil demonstrativo permanece na sessão. Um novo login de demonstração pode restaurar o nome padrão. |
| RN09 | Horários passados não podem ser reservados nem cancelados individualmente pela lista; a limpeza geral remove os registros de teste da marca. |
| RN10 | Recuperação de senha é apenas orientação. Dados de frequência, sessões restantes, treinos e relatórios são exemplos, não calculados a partir da agenda. |
| RN11 | Reservar na demonstração não notifica a equipe. Atendimento real depende do WhatsApp. |

## 4. Requisitos não funcionais

| ID | Critério | Situação e limite |
|---|---|---|
| RNF01 — Usabilidade | Rótulos claros, navegação consistente e separação entre conteúdo institucional e demonstração. | Presente no código; avaliação com usuários reais não foi documentada. |
| RNF02 — Responsividade | Base para celular e pontos de quebra em 480, 640, 900 e 1200 px. Sem rolagem horizontal da página; a grade pode rolar dentro do seu contêiner. | Implementado; verificações em Chromium a 375 e 1440 px registradas na correção. |
| RNF03 — Acessibilidade | Rótulos, textos alternativos, foco visível, skip link, teclado e mensagens acessíveis. | Recursos presentes. Auditoria completa e resultado WAVE não estão comprovados nesta revisão. |
| RNF04 — Identidade | Preservar logos e coerência visual entre as marcas, identificando imagens ilustrativas. | Implementado. Validação comercial de mídia ainda é necessária. |
| RNF05 — Desempenho | Utilizar imagens locais em WebP, logos SVG e carregamento adiado quando adequado. | Verificável no código; não se declara nota de Lighthouse ou tempo máximo medido. |
| RNF06 — Compatibilidade | Funcionar em navegadores modernos com suporte a `dialog`, JavaScript e armazenamento local. | Testado em Chromium; Safari e Firefox exigem verificação própria. |
| RNF07 — Privacidade | Usar dados fictícios na apresentação; não tratar armazenamento local como controle de acesso seguro. | Restrição de uso da versão acadêmica. Não constitui certificação de conformidade legal. |
| RNF08 — Organização | Manter componentes React em `src/pages`, CSS em `src/styles` e imagens em `public/assets`. | Implementado na estrutura do código JSX. |
| RNF09 — Consistência | Mesmos componentes e comportamentos para login, painel e agenda nas duas marcas. | Páginas compartilhadas, adaptadas pela marca. |

### RNFs adicionais — React e Fisioterapia

| ID | Critério | Situação e limite |
|---|---|---|
| RNF10 — Deploy SPA | Abrir rotas internas diretamente e recarregá-las sem 404 na Vercel. | Configuração escrita, pendente de teste publicado. |
| RNF11 — Manutenção | Separar layout, páginas e utilitários de estado para facilitar revisões. | Componentes separados, com React Router. |
| RNF12 — Conteúdo clínico responsável | Não declarar atendimentos e habilitações específicas sem confirmação do cliente. | Conteúdo de Fisioterapia deliberadamente genérico. |

## 5. Organização atual dos arquivos — versão React

| Área | Arquivos |
|---|---|
| Bootstrap SPA | `index.html` mínimo, `src/main.jsx`, `src/App.jsx`, `package.json` |
| Interface React | `src/pages/{Hub,Pkz,OneToOne,Fisioterapia,Agenda,Login,Painel}.jsx` |
| Layout compartilhado | `src/components/SiteLayout.jsx` |
| Dados e datas | `src/lib/dados.js` |
| Identidade e CSS | `src/styles/*.css` |
| Imagens | `public/assets/*.webp` e `*.svg` |
| Deploy | `vercel.json` |
| Documentação | `docs/`, incluindo novo requisito, arquitetura, Sprint 5 e Daily de acompanhamento |

## 6. Verificação da versão histórica de referência (29/10/2026)

Os registros históricos da estrutura de pastas antiga incluíam verificações no navegador Chromium. Esta tabela registra o alcance dessas verificações; não equivale a teste em todos os dispositivos físicos.

| Caso | Resultado registrado |
|---|---|
| Resolver caminhos locais dos HTMLs | Arquivos referenciados encontrados. |
| Abrir entrada da raiz | Encaminhamento para `html/index.html` funcionando. |
| Carregar imagens e estilos das páginas públicas | Sem falhas de carregamento nos testes. |
| Usar páginas a 375 e 1440 px | Sem transbordamento horizontal da página; menu móvel funcionando. |
| Login incorreto, recuperação e demonstração nas duas marcas | Mensagem, diálogo e entrada no painel funcionando. |
| Abrir relatórios do painel | Diálogos de exemplo funcionando. |
| Reservar, recarregar e consultar no painel | Persistência local e filtro da marca funcionando. |
| Cancelar e sair | Reserva removida e retorno ao login funcionando. |
| Erros de JavaScript e respostas HTTP de erro nos fluxos testados | Nenhum identificado. |

**Esses resultados pertencem à versão HTML anterior e não comprovam testes da versão React.** A verificação nova está em [Plano-de-Testes.md](Plano-de-Testes.md).

**Limites da verificação histórica:** impressão física/PDF, auditoria WAVE, navegadores diferentes, usuários reais, validação comercial e concorrência real entre clientes não foram comprovados por esses testes.

## 7. Itens excluídos e evoluções futuras

| Item | Classificação |
|---|---|
| Cadastro público | Excluído por solicitação; não tratar como próxima entrega automática. |
| Autenticação, permissões e recuperação de senha reais | Evolução com backend. |
| Agenda compartilhada, capacidade por horário, fila e notificações | Evolução futura; exige validação das regras do cliente. |
| Relatórios preenchidos por professores e séries reais de desempenho | Evolução futura; os exemplos do painel não substituem esse sistema. |
| Financeiro, pagamentos e integração com aplicativo interno | Fora do escopo acadêmico atual. |
| Vídeos e equipe com identificação profissional completa | Dependem de conteúdo e autorização do cliente; não estão implementados na versão atual. |
| Ajuste do cartão “sessões um a um” na One to One | Pendência editorial identificada, pois o FAQ não garante atendimento exclusivo. |

## 8. Relação entre requisitos e tarefas

| Tarefas da AHT | Requisitos relacionados |
|---|---|
| 1 e 2 — conhecer o grupo e escolher marca | RF01–RF03 |
| 3 e 4 — explorar as marcas | RF04–RF07, RF09, RF13, RF24 |
| 5 — entrar em contato | RF08 |
| 6 — acessar demonstração | RF10, RF11, RF14, RF15 |
| 7 — consultar painel | RF12, RF20–RF22 |
| 8 — usar agenda local | RF16–RF19, RF23 |

Base: código da versão final, alterações confirmadas do projeto e [transcrição preservada](transcricao.md). As diferenças entre a operação desejada pelo cliente e a demonstração foram mantidas explícitas.

## 9. Rastreamento do incremento React

A documentação de visão, escopo, layout, comportamento demonstrativo, arquitetura, teste e processo foi revisada em 09/11/2026. Ver [Arquitetura-React.md](Arquitetura-React.md), [Sprint-React-Fisioterapia.md](Sprint-React-Fisioterapia.md), [Daily-Scrum-React.md](Daily-Scrum-React.md) e [Plano-de-Testes.md](Plano-de-Testes.md).
