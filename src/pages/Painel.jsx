import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { lerSessao, salvarSessao, lerLista, salvarLista, lerReservas, nomeDaMarca, resumoReserva, prefixo } from "../lib/dados";

const relatorios = [
  { titulo:"Treino individual — Perna", data:"17/09/2026", texto:"Exemplo de registro: sessão acompanhada concluída. O aluno praticou os movimentos propostos e recebeu orientações de execução. Observação demonstrativa: acompanhar a evolução no próximo encontro." },
  { titulo:"Avaliação física", data:"15/09/2026", texto:"Exemplo de registro: avaliação inicial e conversa sobre rotina e objetivos. Os resultados reais seriam preenchidos pela equipe responsável. Este documento não contém medidas clínicas reais." },
  { titulo:"Treino individual — Superior", data:"12/09/2026", texto:"Exemplo de registro: sessão individual com acompanhamento técnico. Observação demonstrativa: manter a regularidade e revisar os objetivos com o profissional." }
];

export default function Painel() {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState(()=>lerSessao());
  const [nome,setNome] = useState(perfil?.nome||"");
  const [marca,setMarca] = useState(perfil?.marca||"pkz");
  const [statusPerfil,setStatusPerfil] = useState("");
  const [versao,setVersao] = useState(0);
  const [relatorio,setRelatorio] = useState(null);
  const relatorioRef = useRef(null);
  useEffect(()=>{if(!perfil) navigate("/login",{replace:true});},[perfil,navigate]);
  useEffect(()=>{const f=()=>setVersao(v=>v+1);window.addEventListener("storage",f);window.addEventListener("focus",f);return()=>{window.removeEventListener("storage",f);window.removeEventListener("focus",f)};},[]);
  const {futuras,erroAgenda} = useMemo(()=>{
    if(!perfil)return {futuras:[],erroAgenda:false};
    try {return {futuras:lerReservas(perfil.marca).filter(r=>r.email===perfil.email&&r.inicio>Date.now()).sort((a,b)=>a.inicio-b.inicio),erroAgenda:false};}
    catch {return {futuras:[],erroAgenda:true};}
  },[perfil,versao]);
  useEffect(()=>{const f=()=>document.body.classList.remove("imprimindo");window.addEventListener("afterprint",f);return()=>window.removeEventListener("afterprint",f)},[]);
  if(!perfil) return <main className="container" id="conteudo"><p>Redirecionando para o acesso…</p></main>;
  function salvarPerfil(e){
    e.preventDefault();const nomeNovo=nome.trim();if(nomeNovo.length<2){setStatusPerfil("Informe um nome com pelo menos dois caracteres.");return;}
    try{
      const atualizado={...perfil,nome:nomeNovo,marca};
      if(!perfil.demo){const contas=lerLista("contas");for(const c of contas)if(c.email===perfil.email){c.nome=nomeNovo;c.marca=marca;}salvarLista("contas",contas);}
      salvarSessao(atualizado);setPerfil(atualizado);setStatusPerfil("Alterações salvas.");
    }catch{setStatusPerfil("Não foi possível salvar as alterações. Verifique o armazenamento local.");}
  }
  function sair(){try{sessionStorage.removeItem(prefixo+"sessao")}catch{}setPerfil(null);navigate("/login",{replace:true})}
  function abrirRelatorio(indice){setRelatorio(relatorios[indice]);relatorioRef.current?.showModal()}
  function imprimir(){document.body.classList.add("imprimindo");window.print();}
  return (
    <>
<aside className="lateral">
<Link className="marcas" to="/" aria-label="Início do grupo PKZ e One to One"><img src="/assets/logo-pkz.svg" alt="PKZ" /><span aria-hidden="true">×</span><img src="/assets/logo-one-to-one.svg" alt="One to One" /></Link>
<nav aria-label="Área do aluno">
<Link to="#inicio" aria-current="page">Início</Link><Link to="#agenda">Agenda</Link><Link to="#evolucao">Evolução</Link><Link to="#historico">Histórico</Link><Link to="#configuracoes">Configurações</Link>
</nav>
<div className="perfil">
<span className="avatar" id="perfil-inicial" aria-hidden="true">{perfil.nome.charAt(0).toUpperCase()}</span>
<div><strong id="perfil-nome">{perfil.nome}</strong><span id="perfil-marca">{nomeDaMarca(perfil.marca)}</span></div>
</div>
<Link className="link-claro" to="/">← Voltar ao site</Link>
</aside>
<main id="conteudo" className="painel-conteudo">
<div id="inicio" className="painel-topo">
<div>
<h1 id="saudacao">{`Olá, ${perfil.nome}`}</h1>
<p id="data-painel">{`${new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long"})} · ${nomeDaMarca(perfil.marca)}`}</p>
</div>
<button className="link-botao" id="sair" type="button" onClick={sair}>Sair</button>
</div>
<p className="aviso" id="aviso-painel">
        Demonstração acadêmica. Os agendamentos vêm deste navegador; treinos, sessões e evolução
        abaixo são exemplos fictícios.
      </p>
<div className="resumo-grade">
<article className="cartao">
<p>Próximo agendamento</p>
<strong id="proximo-treino">{erroAgenda ? "Indisponível" : futuras.length ? resumoReserva(futuras[0]) : "Nenhum agendamento"}</strong>
</article>
<article className="cartao">
<p>Sessões restantes · exemplo</p>
<strong>3 sessões</strong>
</article>
<article className="cartao">
<p>Frequência no mês · exemplo</p>
<strong>92%</strong>
</article>
<article className="cartao">
<p>Última avaliação · exemplo</p>
<strong>02/09/2026</strong>
</article>
</div>
<section id="agenda" className="cartao painel-agenda">
<div className="linha-titulo">
<h2>Agenda</h2>
<Link id="novo-agendamento" className="texto-link" to={`/agendamento?marca=${perfil.marca}`}>Agendar aula →</Link>
</div>
<div id="agenda-aluno">{erroAgenda ? <p className="erro">Não foi possível carregar os agendamentos locais. Verifique a página da agenda.</p> : futuras.length === 0 ? <p className="vazio">Você ainda não tem horários futuros nesta marca. Escolha Agendar aula para começar.</p> : futuras.map(r=><div className="item-lista" key={r.id}><div><small>{resumoReserva(r)}</small><p>Aula experimental · {nomeDaMarca(perfil.marca)}</p></div><span className="selo">Salvo neste navegador</span><Link className="texto-link" to={`/agendamento?marca=${perfil.marca}#reservas-titulo`}>Gerenciar</Link></div>)}</div>
</section>
<div className="duas-colunas painel-detalhes">
<section id="evolucao" className="cartao">
<h2>Evolução</h2>
<p className="suporte">Frequência semanal · dados de exemplo</p>
<div className="grafico" role="img" aria-label="Frequência de exemplo: semana 1, 60%; semana 2, 75%; semana 3, 85%; semana 4, 92%">
<div><strong>60%</strong><span className="barra barra-60"></span><small>Sem. 1</small></div>
<div><strong>75%</strong><span className="barra barra-75"></span><small>Sem. 2</small></div>
<div><strong>85%</strong><span className="barra barra-85"></span><small>Sem. 3</small></div>
<div><strong>92%</strong><span className="barra barra-92"></span><small>Sem. 4</small></div>
</div>
<h3>Observações</h3>
<p className="observacao">
            Exemplo de anotação: ótima evolução de carga essa semana. Manter foco na execução do
            agachamento.
          </p>
</section>
<section id="historico" className="cartao">
<h2>Histórico de treinos e relatórios</h2>
<p className="suporte">Exemplos para apresentação</p>
<div className="item-lista">
<div>
<small>17/09/2026</small>
<p>Treino individual — Perna</p>
</div>
<button className="link-botao" type="button" data-relatorio="0" onClick={()=>abrirRelatorio(0)}>Ver relatório</button>
</div>
<div className="item-lista">
<div>
<small>15/09/2026</small>
<p>Avaliação física</p>
</div>
<button className="link-botao" type="button" data-relatorio="1" onClick={()=>abrirRelatorio(1)}>Ver relatório</button>
</div>
<div className="item-lista">
<div>
<small>12/09/2026</small>
<p>Treino individual — Superior</p>
</div>
<button className="link-botao" type="button" data-relatorio="2" onClick={()=>abrirRelatorio(2)}>Ver relatório</button>
</div>
</section>
</div>
<section id="configuracoes" className="cartao configuracoes">
<h2>Configurações do perfil</h2>
<form id="perfil-form" onSubmit={salvarPerfil}>
<label htmlFor="nome-perfil">Nome</label><input id="nome-perfil" name="nome" required minLength="2" maxLength="80" value={nome} onChange={e=>setNome(e.target.value)} /><label htmlFor="marca-perfil">Marca</label><select id="marca-perfil" name="marca" value={marca} onChange={e=>setMarca(e.target.value)}>
<option value="pkz">PKZ</option>
<option value="oto">One to One</option>
</select>
<p className="suporte">
            Ao trocar a marca, a agenda passa a mostrar suas reservas nessa unidade.
          </p>
<p id="status-perfil" role="status">{statusPerfil}</p>
<button className="botao" type="submit">Salvar alterações</button>
</form>
</section>
<footer className="painel-rodape">© 2026 Grupo PKZ · One to One · Projeto acadêmico</footer>
</main>
<dialog id="relatorio-modal" aria-labelledby="relatorio-titulo" ref={relatorioRef} onClose={()=>document.body.classList.remove("imprimindo")}>
<p className="etiqueta">RELATÓRIO DEMONSTRATIVO</p>
<h2 id="relatorio-titulo">{relatorio?.titulo}</h2>
<p id="relatorio-data">{relatorio ? `${relatorio.data} · ${perfil.nome}` : ""}</p>
<p id="relatorio-texto">{relatorio?.texto}</p>
<p className="aviso">
        Dados fictícios para apresentação. Não representam uma avaliação ou prescrição real.
      </p>
<div className="acoes">
<button type="button" className="botao secundario" data-fechar="" onClick={()=>relatorioRef.current?.close()}>Fechar</button><button type="button" className="botao" id="imprimir-relatorio" onClick={imprimir}>Imprimir / salvar PDF</button>
</div>
</dialog>
    </>
  );
}
