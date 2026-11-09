# Grupo PKZ · One to One · Fisioterapia — React

**Projeto Front-End — IBMEC, 2026.2, Grupo 3 (sexta-feira)**  
**Atualização:** 09/11/2026 · 
Este ZIP contém a **migração real do código para React** com Vite, roteamento e componentes JSX, não apenas arquivos HTML renomeados. A identidade visual, textos, imagens e comportamento da versão de 06/11 com Fisioterapia foram aproveitados.

## Tecnologias

- React 19 e React DOM; React Router (rotas client-side).
- Vite 7 para desenvolvimento, build de produção e publicação na Vercel.
- CSS original preservado por seção, com ajustes pontuais de integração e contraste.
- JavaScript de aplicação em componentes React (`useState`, `useEffect`, `useRef`), sem scripts DOM legados carregados na página.
- Imagens locais WebP e SVG em `public/assets/`.

## Executar

**Requisito:** Node.js 20.19+ e acesso à internet para instalar as dependências na primeira vez.

```bash
npm install
npm run dev
```

Abra a URL indicada pelo Vite (normalmente `http://localhost:5173`). Para compilar e conferir a versão de produção:

```bash
npm run build
npm run preview
npm test
```

Se `node_modules` não estiver presente, é obrigatório rodar `npm install`. O ZIP **não** inclui `node_modules` e não deve ser aberto clicando em `index.html` via `file://`.

## Publicação na Vercel

**Sem alterar o GitHub original (opção direta com a Vercel CLI):**

```bash
npm install
npm test
npm run build
npx vercel login
npx vercel --prod
```

No primeiro deploy, siga as perguntas da CLI, selecionando um projeto Vite, com a raiz deste diretório. Esse comando publica na conta Vercel do operador; **não** faz commit, push ou alteração no repositório GitHub. A Vercel solicitará acesso à internet e autenticação.

**Pelo painel da Vercel, se optar por usar um repositório Git depois:** selecione **Framework Preset: Vite**, **Root Directory: diretório que contém `package.json`**, **Build Command: `npm run build`** e **Output Directory: `dist`**. Importar o repositório *vanilla* original sem a migração React não publicará esta versão.

O `vercel.json` configura o fallback da SPA para rotas como `/pkz`, `/fisioterapia` e `/area-do-atleta`, inclusive ao recarregar a página. Não são necessárias variáveis de ambiente para a versão demonstrativa. Não coloque credenciais reais no frontend.

A implantação e o build **não foram executados nesta entrega**: o ambiente local usado para montar o ZIP não dispõe de rede npm. O código JSX passou por uma verificação de sintaxe e o modelo de dados e a estrutura de rotas têm testes automatizados; **execute `npm install && npm run build` antes de considerar a publicação validada**. Consulte [Relatorio-de-Verificacao.md](docs/Relatorio-de-Verificacao.md) para os resultados efetivos.

## Páginas

| Rota | Finalidade |
|---|---|
| `/` | Hub: PKZ e One to One lado a lado, Fisioterapia em faixa inferior |
| `/pkz` | Desenvolvimento esportivo PKZ |
| `/one-to-one` | Treinamento individualizado One to One |
| `/fisioterapia` | Nova área institucional de Fisioterapia, com fotos ilustrativas |
| `/agendamento?marca=pkz` | Agenda local da PKZ |
| `/agendamento?marca=oto` | Agenda local da One to One |
| `/login?marca=pkz` ou `oto` | Acesso de demonstração (sem cadastro) |
| `/area-do-atleta` | Painel demonstrativo, depende de sessão local |

Links antigos terminados em `.html` redirecionam para as rotas React correspondentes.


## Estrutura do código

```
index.html             # HTML mínimo: monta apenas o root React
src/
  main.jsx             # Bootstrap React
  App.jsx              # Definição das rotas e aliases antigos
  components/
    SiteLayout.jsx     # Cabeçalho, menu responsivo, rodapé, títulos e rolagem
  pages/
    Hub.jsx            # Hub com três áreas
    Pkz.jsx            # Conteúdo institucional PKZ
    OneToOne.jsx       # Conteúdo institucional One to One
    Fisioterapia.jsx   # Nova área
    Agenda.jsx         # Agendamento com estado React e dialogs
    Login.jsx          # Formulário e demonstração React
    Painel.jsx         # Área do Atleta React
  lib/dados.js         # Funções de dados, datas e armazenamento
  styles/              # CSS preservado da versão anterior e ajustes React
public/assets/        # Todas as imagens originais, incluindo Fisioterapia
docs/                 # Documentos atualizados e histórico preservado
tests/                # Testes de regras e dados com Node.js
vercel.json            # Fallback de navegação SPA
```

## Documentação para a entrega acadêmica

- [Requisitos.md](docs/Requisitos.md): RF01–RF34, incluindo migração React e nova página.
- [Doc visão.md](docs/Doc%20vis%C3%A3o.md): escopo consolidado com três áreas.
- [Arquitetura-React.md](docs/Arquitetura-React.md): arquitetura, estado e rotas.
- [Fisioterapia-Requisito-Novembro.md](docs/Fisioterapia-Requisito-Novembro.md): detalhamento do pedido do cliente/professor.
- [scrum.md](docs/scrum.md) e [Sprint-React-Fisioterapia.md](docs/Sprint-React-Fisioterapia.md): backlog e incremento.
- [Daily-Scrum-React.md](docs/Daily-Scrum-React.md): registro de andamento, explicitamente 
- [Plano-de-Testes.md](docs/Plano-de-Testes.md): o que foi validado e o que ainda depende de teste no navegador.