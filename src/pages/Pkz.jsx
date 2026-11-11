
import { Link } from "react-router-dom";

// Conteúdo convertido em JSX a partir da versão HTML de 06/11/2026.
export default function Pkz() {
  return (
    <main id="conteudo">

      {/* HERO */}
      <section className="hero-marca">
        <div className="container hero-grade">

          <div className="hero-texto">
            <img
              alt="PKZ"
              className="hero-logo"
              src="/assets/logo-pkz.svg"
            />

            <h1>
              Cada atleta tem um ponto de partida. O treino começa por ele.
            </h1>

            <p>
              A PKZ acompanha principalmente atletas infantojuvenis. O
              trabalho parte de uma avaliação das capacidades físicas e
              considera a idade, a modalidade e as necessidades de
              desenvolvimento de cada atleta.
            </p>

            <p>
              A proposta é transformar informações da avaliação em um
              planejamento de treino individualizado, com acompanhamento e
              reavaliações.
            </p>

            <div className="acoes">
              <Link
                className="botao claro"
                to="/agendamento?marca=pkz"
              >
                Agendar avaliação
              </Link>

              <a
                className="botao escuro"
                href="https://wa.me/5521972657266"
                rel="noopener noreferrer"
                target="_blank"
              >
                Falar no WhatsApp ↗
              </a>
            </div>
          </div>

          <img
            alt="Atletas treinando no campo"
            className="foto-hero"
            height="330"
            src="/assets/pkz_hero.webp"
            width="650"
          />

        </div>
      </section>

      {/* MÉTODO */}
      <section className="secao" id="metodo">
        <div className="container">

          <div className="titulo-secao">
            <p className="etiqueta">MÉTODO PKZ</p>

            <h2>
              Avaliar, planejar e acompanhar: um ciclo com propósito
            </h2>

            <p>
              Mais do que repetir exercícios, o trabalho busca entender o
              que cada atleta precisa desenvolver e como responde ao
              treinamento.
            </p>
          </div>

          <div className="tres-colunas">

            <article className="cartao">
              <span className="numero">1</span>
              <h3>Avaliação física</h3>

              <p>
                Testes de salto, velocidade, agilidade e reação ajudam a
                identificar o ponto de partida. Os resultados são
                interpretados considerando a faixa etária e a modalidade
                praticada.
              </p>
            </article>

            <article className="cartao">
              <span className="numero">2</span>
              <h3>Planejamento de treino</h3>

              <p>
                A avaliação orienta a organização de um ciclo mensal. As
                sessões trabalham as capacidades necessárias ao esporte e
                permitem registrar o que foi realizado em cada treino.
              </p>
            </article>

            <article className="cartao">
              <span className="numero">3</span>
              <h3>Reavaliação</h3>

              <p>
                Novas avaliações permitem comparar os resultados e orientar
                o próximo ciclo. A equipe considera os números e o contexto
                da execução para explicar o que mudou.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="secao suave" id="servicos">
        <div className="container">

          <div className="titulo-secao">
            <p className="etiqueta">
              COMO PODEMOS ACOMPANHAR VOCÊ
            </p>

            <h2>
              Do primeiro teste aos próximos passos no esporte
            </h2>

            <p>
              Cada etapa ajuda a transformar o treinamento em um processo
              acompanhado e compreensível para atletas e responsáveis.
            </p>
          </div>

          <div className="quatro-colunas">

            <article className="cartao">
              <h3>Avaliação das capacidades físicas</h3>

              <p>
                Uma bateria de testes reúne informações sobre o desempenho
                do atleta. A leitura desses resultados ajuda a identificar
                aspectos que merecem atenção no planejamento.
              </p>
            </article>

            <article className="cartao">
              <h3>Treinamento orientado à modalidade</h3>

              <p>
                O trabalho considera as exigências do esporte praticado.
                Exercícios e objetivos são organizados para desenvolver as
                capacidades relevantes à rotina de cada atleta.
              </p>
            </article>

            <article className="cartao">
              <h3>Registro das sessões</h3>

              <p>
                O acompanhamento inclui informações sobre o que foi
                trabalhado e observações do treino. Esses registros ajudam
                a dar continuidade ao processo entre uma sessão e outra.
              </p>
            </article>

            <article className="cartao">
              <h3>Evolução explicada</h3>

              <p>
                Os resultados das avaliações ganham sentido quando são
                acompanhados de uma interpretação. Nem toda mudança
                numérica representa melhora ou piora isoladamente.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="secao suave" id="equipe">
        <div className="container">

          <div className="titulo-secao">
            <p className="etiqueta">EQUIPE</p>

            <h2>Pessoas que acompanham cada etapa</h2>

            <p>
              Avaliação, orientação durante o treino e análise da evolução
              fazem parte do acompanhamento. Retratos ilustrativos. Nomes e
              formações serão preenchidos com os dados da equipe.
            </p>
          </div>

          <div className="tres-colunas">

            <article className="cartao profissional">
              <img
                alt="Retrato ilustrativo de uma profissional de avaliação"
                className="foto-profissional"
                height="480"
                loading="lazy"
                src="/assets/profissional-avaliacao.webp"
                width="480"
              />

              <h3>Avaliação</h3>
              <p>Entender o ponto de partida.</p>
            </article>

            <article className="cartao profissional">
              <img
                alt="Retrato ilustrativo de um treinador"
                className="foto-profissional"
                height="480"
                loading="lazy"
                src="/assets/profissional-treinador.webp"
                width="480"
              />

              <h3>Treinamento</h3>
              <p>Orientar a prática e a execução.</p>
            </article>

            <article className="cartao profissional">
              <img
                alt="Retrato ilustrativo de uma profissional de acompanhamento"
                className="foto-profissional"
                height="480"
                loading="lazy"
                src="/assets/profissional-evolucao.webp"
                width="480"
              />

              <h3>Acompanhamento</h3>
              <p>Interpretar resultados e próximos passos.</p>
            </article>

          </div>
        </div>
      </section>


