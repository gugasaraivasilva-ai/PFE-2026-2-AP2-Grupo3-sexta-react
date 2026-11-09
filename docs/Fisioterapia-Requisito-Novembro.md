# Mudança de escopo — Fisioterapia

> Solicitação de 06/11/2026, incorporada à migração React em 09/11/2026.  
> Origem: orientação do usuário a partir de desenho de layout em quadro branco e relato do pedido do cliente/professor. O desenho **não foi incorporado como imagem** ao ZIP atual; a estrutura foi recuperada a partir da descrição e da versão de implementação de 06/11.

## Descrição do novo requisito

O hub passa a apresentar **três áreas do mesmo grupo**. A primeira linha apresenta **PKZ à esquerda** e **One to One à direita**, cada uma com foto, logo, explicação e botão de acesso. Uma faixa/card de **Fisioterapia ocupa a parte inferior** dessa seção com foto genérica, texto e link. A página exclusiva `/fisioterapia` é inteiramente construída em React e mantém a identidade visual (marinho, azul e tons complementares) já utilizada no portal. A navegação, rodapé e ordem das marcas são padronizados; os CTAs da One to One precisam apresentar contraste legível.

## Critérios de aceitação — RQ-FIS-01

| Código | Condição verificável | Local no código |
|---|---|---|
| FIS01 | Exibir PKZ e One to One lado a lado em telas largas, nesta ordem; empilhar no celular | `src/pages/Hub.jsx`, `src/styles/index.css` |
| FIS02 | Exibir Fisioterapia em card separado **abaixo** dos dois | `src/pages/Hub.jsx` |
| FIS03 | O card da fisioterapia deve abrir `/fisioterapia` | `src/pages/Hub.jsx`, `src/App.jsx` |
| FIS04 | Criar página exclusiva em React com hero, proposta, avaliação, orientação, acompanhamento, imagens, dúvidas e contato | `src/pages/Fisioterapia.jsx` |
| FIS05 | Usar fotos ilustrativas locais e texto alternativo; não atribuir profissionais, especialidades ou atendimento real não confirmado | `public/assets/fisio_*.webp` |
| FIS06 | Utilizar paleta coerente com o restante do site e botões com contraste | `src/styles/fisioterapia.css`, `react-ajustes.css` |
| FIS07 | Acesso por menu e rodapé, e retorno ao hub e às outras áreas | `src/components/SiteLayout.jsx` |
| FIS08 | Adaptar a página a celular, tablet e desktop usando a mesma grade de breakpoints do projeto | CSS de Fisioterapia |
| FIS09 | O site não deve oferecer agendamento de Fisioterapia se disponibilidade e fluxo não foram fornecidos pelo cliente | FAQ e contato na página Fisioterapia |
| FIS10 | Manter o agendamento das marcas PKZ e One to One e a Área do Atleta como demonstração, sem criar cadastro novo | `src/pages/Agenda.jsx`, `Login.jsx`, `Painel.jsx` |

## Conteúdo provisório e validação pendente

A página apresenta conceitos gerais como avaliação, cuidado com o movimento, orientação e acompanhamento, sem presumir que todos esses atendimentos já sejam ofertados. **Para uma publicação comercial**, o cliente ainda deve validar os serviços, especialidades, profissionais habilitados, fotos autorizadas, formas de contato, horários, público e textos definitivos. Não foram adicionadas credenciais profissionais, preços ou telefone exclusivo de Fisioterapia que não constavam da solicitação.

## Impacto no projeto

- **Front-end:** terceira área, nova rota e atualização do menu e hub.
- **Documentação:** novos RF25–RF34, adendos de AHT, visão, Brainstorm, 5W2H, mapa mental, backlog e sprint.
- **Tecnologia:** React + Vite em todas as telas, inclusive a nova Fisioterapia.
- **Escopo excluído:** backend, prontuário, agendamento clínico, pagamentos, cadastro público e dados reais de pacientes.
