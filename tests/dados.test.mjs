import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync,existsSync,readdirSync } from 'node:fs';
import { join,dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {prefixo,lerLista,salvarLista,lerReservas,salvarSessao,lerSessao,nomeDaMarca,diasAgenda,horasAgenda,formatarData,resumoReserva,dataDaAgenda} from '../src/lib/dados.js';

function storage(){const m=new Map();return {getItem(k){return m.has(k)?m.get(k):null},setItem(k,v){m.set(k,String(v))},removeItem(k){m.delete(k)}};}
globalThis.localStorage=storage();globalThis.sessionStorage=storage();
const root=join(dirname(fileURLToPath(import.meta.url)),'..');

test('marcas e dias da agenda do projeto',()=>{
  assert.equal(nomeDaMarca('pkz'),'PKZ');assert.equal(nomeDaMarca('oto'),'One to One');
  assert.deepEqual(diasAgenda,['Seg','Ter','Qua','Qui','Sex','Sáb']);
  assert.deepEqual(horasAgenda,[7,8,9,10,11,17,18,19,20]);
});
test('converte posições da semana inclusive na virada de mês',()=>{
  const seg=new Date(2026,10,9,12); // segunda 09/11/2026
  assert.equal(dataDaAgenda(0,0,7,seg).getTime(),new Date(2026,10,9,7).getTime());
  assert.equal(dataDaAgenda(0,5,20,seg).getTime(),new Date(2026,10,14,20).getTime());
  assert.equal(dataDaAgenda(3,0,7,seg).getTime(),new Date(2026,10,30,7).getTime());
  const dom=new Date(2026,10,15,12);
  assert.equal(dataDaAgenda(0,0,7,dom).getTime(),new Date(2026,10,9,7).getTime());
});
test('formatação de data e horário local do navegador',()=>{
  const d=new Date(2026,10,9,7);
  assert.equal(formatarData(d),'09/11/2026');
  assert.match(resumoReserva({inicio:d.getTime()}),/09\/11\/2026 às 07:00/);
});
test('reservas persistem, isoladas por marca',()=>{
  const reserva={id:'1',inicio:Date.now()+86400000,nome:'Pessoa de teste',email:'aluno@demo.com',telefone:'21999999999'};
  salvarLista('reservas-pkz',[reserva]);
  assert.deepEqual(lerReservas('pkz'),[reserva]);
  assert.deepEqual(lerReservas('oto'),[]);
  assert.equal(localStorage.getItem(prefixo+'reservas-pkz').includes('Pessoa de teste'),true);
});
test('dados inválidos são rejeitados e não apagados automaticamente',()=>{
  localStorage.setItem(prefixo+'reservas-oto',JSON.stringify([{id:'erro'}]));
  assert.throws(()=>lerReservas('oto'),/Reserva inválida/);
  localStorage.setItem(prefixo+'malformada','{}');
  assert.throws(()=>lerLista('malformada'),/Formato de dados inválido/);
  assert.throws(()=>lerReservas('fisio'),/Marca inválida/);
});
test('sessão demonstrativa é separada e validada',()=>{
  assert.equal(lerSessao(),null);
  salvarSessao({nome:'Aluno',email:'aluno@demo.com',marca:'oto',demo:true});
  assert.equal(lerSessao().marca,'oto');
  sessionStorage.setItem(prefixo+'sessao',JSON.stringify({nome:'Aluno',email:'a',marca:'fisio'}));
  assert.equal(lerSessao(),null);
});
test('assets usados no JSX existem localmente e o site tem os sete componentes',()=>{
  const dir=join(root,'src','pages');
  const paths=['Hub','Pkz','OneToOne','Fisioterapia','Agenda','Login','Painel'];
  for(const name of paths){assert.ok(existsSync(join(dir,name+'.jsx')),`Falta a página React ${name}`)}
  for(const folder of [dir,join(root,'src','components')])for(const f of readdirSync(folder).filter(f=>f.endsWith('.jsx'))){
    const contents=readFileSync(join(folder,f),'utf8');
    for(const match of contents.matchAll(/(?:src|href)="(\/assets\/[^"#?]+)"/g))assert.ok(existsSync(join(root,'public',match[1])),`Mídia ausente: ${match[1]} em ${f}`);
  }
});
