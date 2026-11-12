// Utilitários compartilhados da demonstração. Mesmo prefixo do projeto HTML original.
export const prefixo = 'grupo-pkz-oto-v1-';
export function lerLista(chave) {
  const texto=localStorage.getItem(prefixo+chave);
  if (!texto) return [];
  const lista=JSON.parse(texto);
  if (!Array.isArray(lista)) throw new Error('Formato de dados inválido.');
  return lista;
}
export function salvarLista(chave,lista) {localStorage.setItem(prefixo+chave,JSON.stringify(lista));}
export function nomeDaMarca(marca) {return marca==='oto'?'One to One':'PKZ';}
export function salvarSessao(perfil) {sessionStorage.setItem(prefixo+'sessao',JSON.stringify(perfil));}
export function lerSessao() {
  try {
    const s=JSON.parse(sessionStorage.getItem(prefixo+'sessao'));
    return s && typeof s.nome==='string' && typeof s.email==='string' && ['pkz','oto'].includes(s.marca) ? s : null;
  } catch {return null;}
}
export function lerReservas(marca) {
  if (!['pkz','oto'].includes(marca)) throw new Error('Marca inválida.');
  const lista=lerLista('reservas-'+marca);
  for (const r of lista) if (!r || typeof r.id!=='string'||!Number.isFinite(r.inicio)||typeof r.nome!=='string'||typeof r.email!=='string'||typeof r.telefone!=='string')throw new Error('Reserva inválida.');
  return lista;
}
export function formatarData(data) {return data.toLocaleDateString('pt-BR');}
export function resumoReserva(reserva) {
  const d=new Date(reserva.inicio);
  return `${formatarData(d)} às ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}`;
}
export const diasAgenda=['Seg','Ter','Qua','Qui','Sex','Sáb'];
export const horasAgenda=[7,8,9,10,11,17,18,19,20];
export function dataDaAgenda(semana,posicao,hora,referencia=new Date()) {
  const segunda=referencia.getDate()-((referencia.getDay()+6)%7);
  return new Date(referencia.getFullYear(),referencia.getMonth(),segunda+semana*7+posicao,hora,0,0,0);
}
