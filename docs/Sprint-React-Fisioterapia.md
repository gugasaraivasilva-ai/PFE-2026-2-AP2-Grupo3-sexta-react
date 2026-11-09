# Sprint 5 — Migração React, nova área Fisioterapia e Vercel

> Plano de incremento da entrega acadêmica · consolidado em 09/11/2026.  
> **Registro de trabalho técnico**, não uma ata de reuniões nem uma atribuição de participação a integrantes não confirmados.

## Objetivo da sprint

Converter a implementação original HTML/CSS/JS para **React + Vite**, manter o uso das áreas existentes, incluir a nova apresentação de Fisioterapia e entregar um pacote configurado para hospedagem Vercel e documentalmente rastreável.

| Item do Sprint Backlog | Entrega | Situação de implementação |
|---|---|---|
| SP05-01 | Inventariar repositório original e sua documentação | Concluído; referências de origem registradas em `Arquitetura-React.md` |
| SP05-02 | Recuperar exigência e assets de Fisioterapia | Concluído; terceira área e página disponibilizadas no projeto |
| SP05-03 | Migrar páginas institucionais para componentes JSX | Implementado (`Hub`, `Pkz`, `OneToOne`, `Fisioterapia`) |
| SP05-04 | Migrar menu, cabeçalho e rodapé para React Router | Implementado (`SiteLayout`) |
| SP05-05 | Refazer agendamento usando estado React e armazenamento local | Implementado (`Agenda`) |
| SP05-06 | Restaurar login e painel que faltavam no repositório atual | Implementado a partir de pacote acadêmico anterior (`Login`, `Painel`) |
| SP05-07 | Padronizar CTAs, cores e ordem do hub | Implementado; aguarda checagem visual em múltiplos navegadores |
| SP05-08 | Configurar Vite, rotas de compatibilidade e Vercel | Arquivos configurados; build online não executado neste ambiente |
| SP05-09 | Atualizar visão, requisitos, AHT e processo Scrum | Concluído quanto aos adendos e documentos novos |
| SP05-10 | Executar testes de sintaxe e regras de dados | Aferição sintática, testes de regras e de estrutura; validação visual e deploy pendentes |
| SP05-11 | Validar conteúdo final com cliente/professor | Pendente de retorno externo |

### Definição de pronto

- [x] Funcionalidades representadas em componentes JSX React.
- [x] Terceiro card abaixo da primeira linha PKZ/One to One.
- [x] Rotas de demonstração e navegação interna definidas.
- [x] Organização e documentação atualizadas.
- [x] Arquivo `vercel.json` e scripts npm presentes.
- [ ] `npm install && npm run build` executados com sucesso em máquina com rede.
- [ ] Verificação visual e funcional de todas as páginas em 375, 768, 1024 e 1440 px.
- [ ] Auditoria acessibilidade no navegador (WAVE ou equivalente).
- [ ] Aprovação de textos e serviços da Fisioterapia pelo cliente.

## Entrega

A Sprint 5 produziu uma **versão candidata** ao deploy e os documentos de rastreabilidade; a validação final de implantação não é alegada. O time deve registrar o link do deploy e eventuais bugs quando houver evidência.
