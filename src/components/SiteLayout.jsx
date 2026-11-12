import {useEffect,useRef,useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import '../styles/comum.css';
import '../styles/index.css';
import '../styles/pkz.css';
import '../styles/one-to-one.css';
import '../styles/fisioterapia.css';
import '../styles/agendamento.css';
import '../styles/login.css';
import '../styles/painel.css';
import '../styles/react-ajustes.css';

const paginas={
  '/':{classe:'hub',titulo:'Início | PKZ · One to One · Fisioterapia'},
  '/pkz':{classe:'pkz',titulo:'PKZ | PKZ · One to One'},
  '/one-to-one':{classe:'oto',titulo:'One to One | PKZ · One to One'},
  '/fisioterapia':{classe:'fisio',titulo:'Fisioterapia | Grupo PKZ · One to One'},
  '/agendamento':{classe:'agenda-pagina',titulo:'Agendamento | PKZ · One to One'},
  '/login':{classe:'conta',titulo:'Área do Atleta | PKZ · One to One'},
  '/area-do-atleta':{classe:'painel',titulo:'Área do Atleta | PKZ · One to One'}
};

function LogoDupla(){return <Link className="marcas" to="/" aria-label="Início do grupo PKZ, One to One e Fisioterapia"><img src="/assets/logo-pkz.svg" alt="PKZ"/><span aria-hidden="true">×</span><img src="/assets/logo-one-to-one.svg" alt="One to One"/></Link>}

function Cabecalho({pagina}){
  const [aberto,setAberto]=useState(false);
  const botaoRef=useRef(null);
  const menuRef=useRef(null);
  useEffect(()=>setAberto(false),[pagina]);
  useEffect(()=>{
    const tecla=(e)=>{if(e.key==='Escape'&&aberto){setAberto(false);botaoRef.current?.focus()}};
    const fora=(e)=>{if(!botaoRef.current?.contains(e.target)&&!menuRef.current?.contains(e.target))setAberto(false)};
    const resize=()=>{if(window.innerWidth>=900)setAberto(false)};
    document.addEventListener('keydown',tecla);document.addEventListener('pointerdown',fora);window.addEventListener('resize',resize);
    return()=>{document.removeEventListener('keydown',tecla);document.removeEventListener('pointerdown',fora);window.removeEventListener('resize',resize)};
  },[aberto]);
  if(pagina==='/area-do-atleta')return null;
  const marca=pagina==='/pkz'?'pkz':pagina==='/one-to-one'?'oto':null;
  if(pagina==='/agendamento'||pagina==='/login')return <header className="cabecalho"><div className="container topo"><LogoDupla/><Link className="link-claro" to="/">{pagina==='/login'?'Acesso do Grupo':'Voltar ao início'}</Link></div></header>;
  return <header className="cabecalho"><div className="container topo">
    {marca?<Link className="marca" to="/" aria-label="Voltar ao início do grupo"><img src={`/assets/logo-${marca==='pkz'?'pkz':'one-to-one'}.svg`} alt={marca==='pkz'?'PKZ':'One to One'}/></Link>:<LogoDupla/>}
    <button ref={botaoRef} className="menu-botao" type="button" aria-controls="menu" aria-expanded={aberto} aria-label={aberto?'Fechar menu':'Abrir menu'} onClick={()=>setAberto(v=>!v)}>☰</button>
    <nav ref={menuRef} id="menu" className={`menu${aberto?' aberto':''}`} aria-label="Navegação principal" onClick={e=>{if(e.target.closest('a'))setAberto(false)}}>
      <Link to="/" aria-current={pagina==='/'?'page':undefined}>Início</Link>
      <Link to="/pkz" aria-current={pagina==='/pkz'?'page':undefined}>PKZ</Link>
      <Link to="/one-to-one" aria-current={pagina==='/one-to-one'?'page':undefined}>One to One</Link>
      <Link to="/fisioterapia" aria-current={pagina==='/fisioterapia'?'page':undefined}>Fisioterapia</Link>
      {marca?<><Link className="botao claro" to={`/agendamento?marca=${marca}`}>Agendar aula</Link><Link className="botao escuro menu-atleta" to={`/login?marca=${marca}`}>Área do Atleta</Link></>:<><Link className="botao claro" to="/#contato">Fale com a gente</Link><Link className="botao escuro menu-atleta" to="/login">Área do Atleta</Link></>}
    </nav>
  </div></header>
}

function Rodape(){return <footer className="rodape"><div className="container"><small>© 2026 Grupo PKZ · One to One · Fisioterapia · Projeto acadêmico IBMEC</small><nav aria-label="Navegação do rodapé" className="rodape-links"><Link to="/">Início</Link><Link to="/pkz">PKZ</Link><Link to="/one-to-one">One to One</Link><Link to="/fisioterapia">Fisioterapia</Link></nav></div></footer>}

export default function SiteLayout({children}){
  const loc=useLocation();const pagina=loc.pathname in paginas?loc.pathname:'/';
  useEffect(()=>{
    document.body.className=paginas[pagina].classe+(pagina==='/agendamento'&&new URLSearchParams(loc.search).get('marca')==='oto'?' oto':'');
    document.title=pagina==='/agendamento'?`Agendamento · ${new URLSearchParams(loc.search).get('marca')==='oto'?'One to One':'PKZ'}`:paginas[pagina].titulo;
    return()=>{document.body.className=''};
  },[pagina,loc.search]);
  useEffect(()=>{
    const id=decodeURIComponent(loc.hash.slice(1));
    if(id){requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({block:'start'}));}
    else window.scrollTo({top:0,behavior:'instant'});
  },[loc.pathname,loc.hash]);
  return <><a className="pular" href="#conteudo">Pular para o conteúdo</a><Cabecalho pagina={pagina}/>{children}{pagina!=='/area-do-atleta'&&<Rodape/>}</>;
}
