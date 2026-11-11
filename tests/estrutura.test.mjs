import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,join} from 'node:path';

const raiz=join(dirname(fileURLToPath(import.meta.url)),'..');
const ler=(arquivo)=>readFileSync(join(raiz,arquivo),'utf8');

// Testes estáticos de regressão: não substituem a compilação com Vite nem o navegador.
test('entrada HTML mínima inicia a aplicação React pelo Vite',()=>{
  const html=ler('index.html');
  assert.match(html,/<div id="root"><\/div>/);
  assert.match(html,/src="\/src\/main\.jsx"/);
  assert.doesNotMatch(html,/<script[^>]+src="(?:\/)?(?:comum|agendamento|dados)\.js"/);
  assert.match(ler('src/main.jsx'),/createRoot\(/);
});

test('todas as rotas e redirecionamentos antigos apontam para páginas React',()=>{
  const app=ler('src/App.jsx');
  for(const rota of ['/', '/pkz','/one-to-one','/fisioterapia','/agendamento','/login','/area-do-atleta']){
    assert.ok(app.includes(`path="${rota}"`),`Rota React ausente: ${rota}`);
  }
  for(const antiga of ['index.html','pkz.html','one-to-one.html','fisioterapia.html','agendamento.html','login.html','area-aluno.html']){
    assert.ok(app.includes(`path="/${antiga}"`),`Compatibilidade ausente: ${antiga}`);
  }
  assert.match(app,/BrowserRouter/);
});

test('hub contempla as duas marcas na primeira linha e Fisioterapia abaixo',()=>{
  const hub=ler('src/pages/Hub.jsx');
  assert.ok(hub.indexOf('className="duas-colunas marcas-cards"') < hub.indexOf('className="cartao card-fisio-hub"'));
  assert.ok(hub.indexOf('to="/pkz"') < hub.indexOf('to="/one-to-one"'));
  assert.match(hub,/to="\/fisioterapia"/);
  assert.match(ler('src/styles/index.css'),/\.hub \.card-fisio-hub/);
});

test('página de Fisioterapia e navegação possuem mídia local e conteúdo',()=>{
  const fisio=ler('src/pages/Fisioterapia.jsx');
  const layout=ler('src/components/SiteLayout.jsx');
  assert.match(fisio,/avaliação/i);
  assert.match(fisio,/acompanhamento/i);
  assert.match(fisio,/DÚVIDAS FREQUENTES/i);
  assert.match(fisio,/<details>/);
  assert.match(layout,/to="\/fisioterapia"/);
  assert.match(layout,/Fisioterapia/);
  for(const nome of ['fisio_hub.webp','fisio_movimento.webp','fisio_avaliacao.webp','fisio_acompanhamento.webp']){
    assert.ok(existsSync(join(raiz,'public','assets',nome)),`Imagem faltando: ${nome}`);
  }
});

test('configuração de produção Vite/Vercel contempla SPA e documentos de entrega',()=>{
  const p=JSON.parse(ler('package.json'));
  const v=JSON.parse(ler('vercel.json'));
  assert.ok(p.dependencies.react && p.dependencies['react-router-dom'] && p.devDependencies.vite);
  assert.equal(p.scripts.build,'vite build');
  assert.ok(v.rewrites.some(r=>r.destination==='/index.html'));
  for(const documento of ['Requisitos.md','Doc visão.md','Sprint-React-Fisioterapia.md','Daily-Scrum-React.md','Fisioterapia-Requisito-Novembro.md']){
    assert.ok(existsSync(join(raiz,'docs',documento)),`Documentação faltando: ${documento}`);
  }
});
