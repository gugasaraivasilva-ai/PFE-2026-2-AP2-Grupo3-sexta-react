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

