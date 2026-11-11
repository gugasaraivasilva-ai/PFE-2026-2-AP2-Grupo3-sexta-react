
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
