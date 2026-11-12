import {useEffect,useMemo,useRef,useState} from 'react';
import {Link,useSearchParams} from 'react-router-dom';
import {prefixo,nomeDaMarca,diasAgenda,horasAgenda,formatarData,resumoReserva,dataDaAgenda,lerReservas,salvarLista} from '../lib/dados';

// A agenda permanece demonstrativa e local. Nenhuma informação é enviada ao grupo.
export default function Agenda(){
  const [params]=useSearchParams();
  const marca=params.get('marca')==='oto'?'oto':'pkz';
  const nomeMarca=nomeDaMarca(marca);
  const [semana,setSemana]=useState(0);
  const [diaMobile,setDiaMobile]=useState(Math.min((new Date().getDay()+6)%7,5));
  const [versao,setVersao]=useState(0);
  const [mensagem,setMensagem]=useState('');
  const [inicio,setInicio]=useState(null);
  const [exclusao,setExclusao]=useState(null);
  const [nome,setNome]=useState('');const [email,setEmail]=useState('');const [telefone,setTelefone]=useState('');
  const [erroReserva,setErroReserva]=useState('');
  const [mostrarJson,setMostrarJson]=useState(false);
  const modalReserva=useRef(null),modalExclusao=useRef(null),statusRef=useRef(null),focoAnterior=useRef(null);
  const {reservas,erro} = useMemo(()=>{
    try{return {reservas:lerReservas(marca),erro:false}}catch{return {reservas:[],erro:true}}
  },[marca,versao]);
  useEffect(()=>{setSemana(0);setDiaMobile(Math.min((new Date().getDay()+6)%7,5));setMensagem('');setInicio(null);setExclusao(null);setVersao(v=>v+1)},[marca]);
  useEffect(()=>{const atualizar=evento=>{if(!evento || !('key' in evento) || evento.key===null||evento.key===prefixo+'reservas-'+marca)setVersao(v=>v+1)};
    window.addEventListener('storage',atualizar);window.addEventListener('focus',atualizar);
    return()=>{window.removeEventListener('storage',atualizar);window.removeEventListener('focus',atualizar)};
  },[marca]);
  const ordenadas=useMemo(()=>reservas.slice().sort((a,b)=>a.inicio-b.inicio),[reservas]);
  const ocupado=(timestamp)=>reservas.some(r=>r.inicio===timestamp);
  const data=(dia,hora)=>dataDaAgenda(semana,dia,hora);
  function abrirReserva(timestamp,evento){focoAnterior.current=evento.currentTarget;setInicio(timestamp);setErroReserva('');setNome('');setEmail('');setTelefone('');modalReserva.current?.showModal()}
  function finalizarMensagem(txt){setMensagem(txt);requestAnimationFrame(()=>statusRef.current?.focus())}
  function confirmarReserva(evento){
    evento.preventDefault();setErroReserva('');
    const n=nome.trim(),e=email.trim().toLowerCase(),t=telefone.trim(),digits=t.replace(/\D/g,'');
    if(n.length<2){setErroReserva('Informe um nome com pelo menos dois caracteres.');return}
    if(!/^[0-9 ()+\-]+$/.test(t)||digits.length<10||digits.length>13){setErroReserva('Informe um telefone válido com DDD (10 a 13 números).');return}
    try{
      const atuais=lerReservas(marca);
      if(inicio===null||inicio<=Date.now()||atuais.some(r=>r.inicio===inicio)){setErroReserva('Este horário não está mais disponível. Volte e escolha outro.');return}
      const nova={id:String(inicio),inicio,nome:n,email:e,telefone:t};
      salvarLista('reservas-'+marca,[...atuais,nova]);
      modalReserva.current?.close();setVersao(v=>v+1);
      finalizarMensagem(`Reserva salva neste navegador: ${nomeMarca}, ${resumoReserva(nova)}.`);
    }catch{setErroReserva('Não foi possível salvar a reserva. Verifique o armazenamento do navegador. Nenhuma confirmação foi feita.')}
  }
  function pedirExclusao(id){setExclusao(id);modalExclusao.current?.showModal()}
  function confirmarExclusao(){
    try{
      if(exclusao==='todas'){localStorage.removeItem(prefixo+'reservas-'+marca)}
      else{const lista=lerReservas(marca);salvarLista('reservas-'+marca,lista.filter(r=>r.id!==exclusao))}
      modalExclusao.current?.close();setVersao(v=>v+1);
      finalizarMensagem(exclusao==='todas'?'Reservas desta marca apagadas.':'Reserva cancelada. O horário está disponível novamente.');
    }catch{setMensagem('Não foi possível excluir. Verifique o armazenamento do navegador.')}
  }
  return <>
    <main id="conteudo" className="container agenda-container">
      <Link className="texto-link" to={marca==='oto'?'/one-to-one':'/pkz'}>← Voltar para a marca</Link>
      <p className="etiqueta">{nomeMarca}</p>
      <h1>Agende sua aula experimental</h1>
      <p>Escolha um horário disponível. A primeira conversa começa aqui.</p>
      <p className="aviso">Agenda demonstrativa: reservas salvas apenas neste navegador, sem envio à equipe. Horários exibidos no horário local do dispositivo. Para agendar de verdade, confirme pelo <a className="texto-link" href={`https://wa.me/${marca==='oto'?'5521971067347':'5521972657266'}`} target="_blank" rel="noopener noreferrer">WhatsApp da marca ↗</a>.</p>
      <section className="cartao agenda-cartao" aria-labelledby="semana-texto">
        <div className="agenda-topo"><button type="button" className="botao secundario" disabled={semana===0||erro} onClick={()=>{setSemana(s=>s-1);setDiaMobile(0);setMensagem('')}}>← Anterior</button><h2 id="semana-texto">{formatarData(data(0,0))} a {formatarData(data(5,0))}</h2><button type="button" className="botao secundario" disabled={semana===3||erro} onClick={()=>{setSemana(s=>s+1);setDiaMobile(0);setMensagem('')}}>Próxima →</button></div>
        <p className="legenda"><span>● Livre</span><span>Reservado</span><span>Encerrado</span></p>
        {!erro&&<div className="dias-mobile" role="group" aria-label="Escolha o dia">{diasAgenda.map((dia,i)=><button key={dia} type="button" aria-pressed={diaMobile===i} onClick={()=>setDiaMobile(i)}>{dia}<small>{formatarData(data(i,0)).slice(0,5)}</small></button>)}</div>}
        <div className="tabela-rolagem" role="region" tabIndex={0} aria-label="Horários disponíveis: tabela com rolagem horizontal">
          <table id="grade" data-dia={diaMobile}><caption className="visualmente-oculto">Horários da semana · {nomeMarca}</caption>
            <thead><tr><th scope="col">Horário</th>{diasAgenda.map((dia,i)=><th scope="col" key={dia}>{dia}<small>{formatarData(data(i,0)).slice(0,5)}</small></th>)}</tr></thead>
            {!erro&&<tbody>{horasAgenda.map(h=><tr key={h}><th scope="row">{String(h).padStart(2,'0')}:00</th>{diasAgenda.map((dia,i)=>{
              const timestamp=data(i,h).getTime();const passou=timestamp<=Date.now();const reservado=ocupado(timestamp);const situacao=reservado?'Reservado':passou?'Encerrado':'Livre';
              return <td key={dia}><button type="button" className="slot" disabled={passou||reservado} aria-label={`${resumoReserva({inicio:timestamp})}, ${situacao}`} onClick={e=>abrirReserva(timestamp,e)}>{situacao}</button></td>
            })}</tr>)}</tbody>}
          </table>
        </div>
        {erro&&<p className="mensagem erro" role="alert">Não foi possível ler as reservas. O armazenamento pode estar bloqueado ou os dados inválidos. Nada foi apagado. Para reiniciar os dados de teste, use a opção abaixo.</p>}
        <p ref={statusRef} tabIndex={-1} className="mensagem" role="status" aria-live="polite">{mensagem}</p>
      </section>
      <section className="cartao minhas-reservas" aria-labelledby="reservas-titulo"><h2 id="reservas-titulo">Reservas neste navegador</h2><p>Consulte ou cancele os agendamentos de teste desta marca.</p>
        {erro?null:ordenadas.length===0?<p className="vazio">Você ainda não fez uma reserva nesta marca.</p>:ordenadas.map(r=><article key={r.id} className="item-lista"><div><strong>{resumoReserva(r)}</strong><p>{r.nome}</p><small>{r.inicio<=Date.now()?'Horário passado · registro local':'Reserva local · '+nomeMarca}</small></div>{r.inicio>Date.now()&&<button type="button" className="link-botao" aria-label={`Cancelar reserva de ${resumoReserva(r)}`} onClick={()=>pedirExclusao(r.id)}>Cancelar</button>}</article>)}
      </section>
      <details className="dados-teste"><summary>Dados da demonstração</summary><p>Use esta área para conferir o armazenamento local durante a apresentação.</p><button type="button" className="botao secundario" aria-expanded={mostrarJson} aria-controls="dados-json" onClick={()=>setMostrarJson(s=>!s)}>{mostrarJson?'Esconder dados salvos':'Ver dados salvos'}</button><pre id="dados-json" hidden={!mostrarJson}>{erro?'Dados indisponíveis':JSON.stringify(reservas,null,2)}</pre><button type="button" className="link-botao" onClick={()=>pedirExclusao('todas')}>Limpar reservas desta marca</button></details>
    </main>
    <dialog ref={modalReserva} id="reserva-modal" aria-labelledby="reserva-titulo" onClose={()=>focoAnterior.current?.focus()}>
      <form onSubmit={confirmarReserva}><h2 id="reserva-titulo">Confirmar horário</h2><p>{nomeMarca} · {inicio!==null?resumoReserva({inicio}):''}</p>
        <label htmlFor="reserva-nome">Nome do aluno ou responsável</label><input id="reserva-nome" name="nome" autoComplete="name" minLength={2} maxLength={80} required value={nome} onChange={e=>setNome(e.target.value)}/>
        <label htmlFor="reserva-email">E-mail</label><input id="reserva-email" name="email" type="email" autoComplete="email" maxLength={120} required value={email} onChange={e=>setEmail(e.target.value)}/>
        <label htmlFor="reserva-telefone">Telefone com DDD</label><input id="reserva-telefone" name="telefone" type="tel" autoComplete="tel" maxLength={22} placeholder="(21) 99999-9999" required value={telefone} onChange={e=>setTelefone(e.target.value)}/>
        <p className="erro mensagem" role="alert">{erroReserva}</p><div className="acoes"><button type="button" className="botao secundario" onClick={()=>modalReserva.current?.close()}>Voltar</button><button type="submit" className="botao">Confirmar reserva</button></div>
      </form>
    </dialog>
    <dialog ref={modalExclusao} id="confirmar-exclusao" aria-labelledby="exclusao-titulo"><h2 id="exclusao-titulo">{exclusao==='todas'?'Limpar reservas de teste?':'Cancelar reserva?'}</h2><p>{exclusao==='todas'?`Isso apaga todas as reservas locais da ${nomeMarca}. Os dados da outra marca serão mantidos.`:`${nomeMarca} · ${resumoReserva(ordenadas.find(r=>r.id===exclusao)||{inicio:Date.now()})}. O horário voltará a ficar livre.`}</p><div className="acoes"><button type="button" className="botao secundario" onClick={()=>modalExclusao.current?.close()}>Manter</button><button type="button" className="botao perigo" onClick={confirmarExclusao}>Confirmar</button></div></dialog>
  </>;
}
