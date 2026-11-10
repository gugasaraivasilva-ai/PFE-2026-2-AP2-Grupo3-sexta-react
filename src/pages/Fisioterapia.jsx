import { Link } from "react-router-dom";

// Conteúdo convertido em JSX a partir da versão HTML de 06/11/2026.
export default function Fisioterapia() {
  return (
    <main id="conteudo">
<section className="fisio-hero">
<div className="container fisio-hero-grid">
<div className="fisio-abertura">
<p className="etiqueta">FISIOTERAPIA · NOVA ÁREA</p>
<h1>Cuidar do movimento também faz parte da evolução.</h1>
<p>Uma apresentação da nova área de Fisioterapia do grupo, com foco em mobilidade, acompanhamento e atenção às necessidades individuais.</p>
<div className="acoes"><Link className="botao fisio-botao" to="#como-funciona">Conheça a proposta</Link><Link className="botao secundario" to="/#contato">Falar com o grupo</Link></div>
</div>
<figure className="fisio-hero-imagem"><img alt="Foto ilustrativa de acompanhamento de movimento por um profissional" fetchPriority="high" height="740" src="/assets/fisio_avaliacao.webp" width="1200" /><figcaption>Imagem ilustrativa</figcaption></figure>
</div>
</section>
<section className="secao" id="como-funciona">
<div className="container">
<div className="titulo-secao"><p className="etiqueta">NOSSA PROPOSTA</p><h2>Um olhar individual para cada movimento</h2><p>A Fisioterapia pode fazer parte de diferentes momentos da rotina, sempre com orientação profissional adequada.</p></div>
<div className="tres-colunas fisio-servicos">
<article className="cartao"><span className="fisio-passo">01</span><h3>Escuta e avaliação</h3><p>Entender as queixas, os objetivos e as necessidades de movimento de cada pessoa é o ponto de partida.</p></article>
<article className="cartao"><span className="fisio-passo">02</span><h3>Orientação individual</h3><p>O cuidado pode envolver recomendações e exercícios ajustados à situação de cada pessoa, após avaliação adequada.</p></article>
<article className="cartao"><span className="fisio-passo">03</span><h3>Acompanhamento</h3><p>Reavaliar a evolução ajuda a discutir próximos passos e adequar o atendimento quando necessário.</p></article>
</div>
</div>
</section>
<section className="secao suave" id="movimento">
<div className="container fisio-duas-colunas">
<div className="fisio-movimento-texto"><p className="etiqueta">MOVIMENTO E BEM-ESTAR</p><h2>Cuidado para a sua rotina</h2><p>Mobilidade, conforto e autonomia são temas importantes para pessoas com diferentes perfis. A indicação de cada tipo de atendimento depende da avaliação de um profissional habilitado.</p><p>A nova página apresenta a proposta geral; procedimentos, especialidades, profissionais e horários serão informados pela equipe quando estiverem confirmados.</p></div>
<img alt="Foto ilustrativa de exercícios de movimento acompanhados por profissional" className="fisio-imagem-lateral" height="650" src="/assets/fisio_movimento.webp" width="1000" />
</div>
</section>
<section className="secao" id="ambiente">
<div className="container"><div className="titulo-secao"><p className="etiqueta">ACOMPANHAMENTO</p><h2>Atenção em cada etapa</h2></div>
<div className="duas-colunas fisio-galeria">
<figure><img alt="Imagem ilustrativa de orientação individual durante exercício" height="650" src="/assets/fisio_acompanhamento.webp" width="1000" /><figcaption>Orientação e movimento</figcaption></figure>
<figure><img alt="Imagem ilustrativa de avaliação física individual" height="740" src="/assets/fisio_avaliacao.webp" width="1200" /><figcaption>Avaliação individual</figcaption></figure>
</div>
</div>
</section>
<section className="secao suave" id="faq"><div className="container fisio-faq-container"><p className="etiqueta">DÚVIDAS FREQUENTES</p><h2>Quer saber mais?</h2>
<div className="fisio-faq">
<details><summary>Quem pode procurar atendimento fisioterapêutico?</summary><p>Pessoas com diferentes necessidades de movimento e funcionalidade podem procurar orientação. A avaliação profissional define a indicação e o acompanhamento adequado.</p></details>
<details><summary>Preciso ter uma lesão para procurar fisioterapia?</summary><p>Não necessariamente. A Fisioterapia atua em diferentes contextos de saúde e funcionalidade. A equipe poderá explicar quais atendimentos estarão disponíveis.</p></details>
<details><summary>Já posso agendar fisioterapia pelo site?</summary><p>A agenda atual do site é demonstrativa e atende apenas às opções PKZ e One to One. Para informações sobre Fisioterapia, entre em contato com o grupo.</p></details>
</div>
</div></section>
<section className="secao fisio-contato" id="contato"><div className="container"><div className="contato-cartao"><p className="etiqueta">PRÓXIMOS PASSOS</p><h2>Quer conhecer melhor a Fisioterapia?</h2><p>O serviço está sendo apresentado no site. Consulte a equipe do grupo para confirmar atendimentos, disponibilidade e profissionais responsáveis.</p><div className="acoes"><Link className="botao claro" to="/#contato">Ver os contatos do grupo →</Link><Link className="botao fisio-contato-secundario" to="/">Voltar ao início</Link></div></div></div></section>
</main>
  );
}