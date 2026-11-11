import { Link } from "react-router-dom";

// Conteúdo convertido em JSX a partir da versão HTML de 06/11/2026.
export default function Hub() {
  return (
    <main id="conteudo">

<section className="hub-hero container">
<p className="etiqueta">UM GRUPO. DIFERENTES CAMINHOS.</p>
<h1>Três caminhos para cuidar do movimento.</h1>
<p>Desenvolvimento esportivo, treinamento individualizado e fisioterapia: conheça as diferentes propostas do grupo, com atenção às necessidades de cada pessoa.</p>
<Link className="botao claro" to="#empresas">Conheça as marcas</Link>
<figure className="banner">
<img alt="Pessoas praticando atividades físicas ao ar livre" fetchPriority="high" height="1024" src="/assets/hub_banner.webp" width="1536" />
<figcaption>PKZ · One to One · Fisioterapia — conheça o grupo</figcaption>
</figure>
</section>
<section className="secao container" id="empresas">
<p className="etiqueta">ESCOLHA SEU CAMINHO</p>
<h2>Encontre a proposta ideal para você</h2>
<p className="introducao-caminhos">Escolha entre desenvolvimento esportivo, treinamento individualizado ou cuidados voltados à mobilidade.</p>
<div className="duas-colunas marcas-cards">
<article className="cartao card-marca">
<Link aria-label="Conheça a PKZ" className="foto-link" to="/pkz"><img alt="Grupo de jovens atletas em treinamento esportivo" height="370" src="/assets/pkz_group_training.webp" width="650" /></Link>
<div className="card-marca-conteudo">
<img alt="PKZ" className="card-logo" src="/assets/logo-pkz.svg" />
<h3>Desenvolvimento esportivo</h3>
<p>Avaliações e treinamento físico para o desenvolvimento de atletas, respeitando cada modalidade e fase de evolução.</p>
<Link className="botao" to="/pkz">Conheça a PKZ <span aria-hidden="true">→</span></Link>
</div>
</article>
<article className="cartao card-marca">
<Link aria-label="Conheça a One to One" className="foto-link" to="/one-to-one"><img alt="Pessoa treinando com acompanhamento individual" height="370" src="/assets/oto_one_on_one.webp" width="650" /></Link>
<div className="card-marca-conteudo">
<img alt="One to One" className="card-logo" src="/assets/logo-one-to-one.svg" />
<h3>Treinamento individualizado</h3>
<p>Um espaço dedicado ao treinamento personalizado, à orientação dos exercícios e ao acompanhamento de resultados.</p>
<Link className="botao oto-principal" to="/one-to-one">Conheça a One to One <span aria-hidden="true">→</span></Link>
</div>
</article>
</div>
<article className="cartao card-fisio-hub">
<Link aria-label="Conheça a página de Fisioterapia" className="foto-fisio" to="/fisioterapia"><img alt="Composição ilustrativa de acompanhamento físico e exercícios orientados" height="730" src="/assets/fisio_hub.webp" width="1440" /></Link>
<div className="fisio-hub-conteudo">
<p className="etiqueta">NOVA ÁREA</p>
<h3>Fisioterapia</h3>
<p>Um espaço para apresentar cuidados com a mobilidade, avaliação funcional e orientações de movimento, conforme a necessidade de cada pessoa.</p>
<Link className="botao fisio-acesso" to="/fisioterapia">Conheça Fisioterapia <span aria-hidden="true">→</span></Link>
</div>
</article>
</section>
<section className="secao container" id="contato">
<p className="etiqueta">FALE COM O GRUPO</p>
<h2>Ainda não sabe por onde começar?</h2>
<p>Converse com a equipe para conhecer as opções, os horários e os serviços confirmados de cada área.</p>
<div className="acoes contatos-hub">
<a className="botao" href="https://wa.me/5521972657266" rel="noopener noreferrer" target="_blank">WhatsApp PKZ ↗</a>
<a className="botao oto-principal" href="https://wa.me/5521971067347" rel="noopener noreferrer" target="_blank">WhatsApp One to One ↗</a>
<Link className="botao claro" to="/fisioterapia">Informações de Fisioterapia →</Link>
</div>
</section>
</main>
  );
}