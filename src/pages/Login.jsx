import { useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { lerLista, salvarSessao } from "../lib/dados";

// Conta exclusivamente demonstrativa; NÃO é autenticação de produção.
export default function Login() {
  const [params] = useSearchParams();
  const marca = params.get("marca") === "oto" ? "oto" : "pkz";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const recuperacaoRef = useRef(null);
  async function enviarLogin(evento) {
    evento.preventDefault();
    setErro("");
    const endereco = email.trim().toLowerCase();
    try {
      if (endereco === "aluno@demo.com" && senha === "demo123") {
        salvarSessao({nome:"Aluno de demonstração",email:endereco,marca,demo:true});
        navigate("/area-do-atleta");
        return;
      }
      // Compatibilidade somente com contas de teste gravadas em versões anteriores.
      const bytes = new TextEncoder().encode(senha);
      const hash = await crypto.subtle.digest("SHA-256", bytes);
      const resumo = [...new Uint8Array(hash)].map(n=>n.toString(16).padStart(2,"0")).join("");
      const antiga = lerLista("contas").find(c=>c.email===endereco && c.senha===resumo);
      if (antiga) {
        salvarSessao({nome:antiga.nome,email:antiga.email,marca:antiga.marca,demo:false});
        navigate("/area-do-atleta");
        return;
      }
      setErro("E-mail ou senha incorretos. Tente novamente.");
    } catch {
      setErro("Não foi possível ler os dados locais. Use o site via HTTPS e habilite o armazenamento do navegador.");
    }
  }
  return (
    <>
<main id="conteudo" className="acesso-container">
<section className="acesso cartao" aria-labelledby="titulo-login">
<nav className="abas" aria-label="Acesso">
<Link to={`/login?marca=${marca}`} data-marca-link="" aria-current="page">Entrar</Link>
</nav>
<h1 id="titulo-login">Bem-vindo de volta</h1>
<p>Acesse com o e-mail cadastrado no grupo PKZ · One to One.</p>
<form id="login-form" onSubmit={enviarLogin}>
<label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="username" required maxLength="120" value={email} onChange={(e)=>setEmail(e.target.value)} />
<label htmlFor="senha">Senha</label><input id="senha" name="senha" type="password" autoComplete="current-password" required maxLength="100" value={senha} onChange={(e)=>setSenha(e.target.value)} />
<button className="link-botao" id="recuperar" type="button" onClick={()=>recuperacaoRef.current?.showModal()}>Esqueci minha senha</button>
<p id="erro-conta" className="mensagem erro" role="alert">{erro}</p>
<button className="botao" type="submit">Entrar</button>
</form>
<aside className="aviso">
<strong>Modo de apresentação</strong>
<p>
            Use aluno@demo.com e a senha demo123. Este acesso não é uma autenticação real.
          </p>
<button type="button" id="preencher-demo" className="link-botao" onClick={()=>{setEmail("aluno@demo.com");setSenha("demo123");}}>
            Preencher acesso de demonstração
          </button>
</aside>
</section>
</main>
<dialog id="recuperacao" aria-labelledby="recuperacao-titulo" ref={recuperacaoRef}>
<h2 id="recuperacao-titulo">Recuperar acesso</h2>
<p>
        Este protótipo não envia e-mails de recuperação. Para testar, use a conta de demonstração:
        aluno@demo.com / demo123. Para atendimento real, entre em contato com a equipe.
      </p>
<button type="button" className="botao" data-fechar="" onClick={()=>recuperacaoRef.current?.close()}>Entendi</button>
</dialog>
    </>
  );
}
