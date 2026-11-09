# Plano de testes — React e Fisioterapia

> Data de elaboração: 09/11/2026 · Não substitui execução completa em navegador.

## Validação técnica realizada no ambiente de preparação

| Verificação | Evidência / resultado |
|---|---|
| Estrutura de componentes | `src/pages/` contém sete páginas `.jsx`, mais `SiteLayout` e `App` |
| Sintaxe JavaScript/JSX | Análise sintática com transpilador TypeScript disponível no ambiente; sem diagnósticos sintáticos nos arquivos analisados |
| Teste unitário de dados e datas | Casos executáveis pelo comando `npm test` sem dependência do browser |
| Arquivos de mídia | Imagens e logos locais estão em `public/assets` e as referências são relativas à raiz |
| Configuração de deploy | `package.json`, `index.html`, `vite.config` (não necessário), `vercel.json` presentes |

## Casos funcionais a verificar na máquina do grupo / deploy

| ID | Passo | Resultado esperado | Status |
|---|---|---|---|
| T01 | `npm install && npm run build` | Build gera pasta `dist` sem erros | **Pendente: rede npm indisponível no ambiente** |
| T02 | Abrir `/`, desktop e celular | PKZ esquerda, One to One direita no desktop; Fisioterapia abaixo; empilhamento no celular | Pendente de navegador |
| T03 | Menu móvel, links, Escape e botão fechar | Navegação e menu acessíveis por teclado | Pendente de navegador |
| T04 | Clicar nas três áreas e voltar ao hub | Abrir rotas certas, sem erro 404 | Pendente de navegador |
| T05 | Recarregar URL `/fisioterapia` na Vercel | SPA entrega a página normalmente | Pendente de deploy |
| T06 | Abrir `/agendamento?marca=pkz`, reservar e recarregar | Reserva local persiste na marca correta | Pendente de navegador |
| T07 | Cancelar reserva e limpar dados da PKZ | Exclusão solicita confirmação e não afeta One to One | Pendente de navegador |
| T08 | Fazer login `aluno@demo.com` / `demo123` com marca OTO | Abrir painel de demonstração com a marca indicada | Pendente de navegador |
| T09 | Acessar painel sem sessão, encerrar sessão e recarregar | Voltar ao login | Pendente de navegador |
| T10 | Ver relatórios, alterar perfil e imprimir | Modal abre, altera nome/marca e imprime relatório fictício | Pendente de navegador |
| T11 | Inspecionar dimensões 375/768/1024/1440 px | Sem rolagem horizontal da página; textos e botões legíveis | Pendente de navegador |
| T12 | Auditar contrastes, alt, foco, rótulos e WAVE | Corrigir inconformidades encontradas | Pendente de ferramenta de navegador |

**Não apresentar esses casos pendentes como aprovados em reunião ou em relatório da professora.** Após executá-los, anotar data, pessoa, ambiente e evidência.
