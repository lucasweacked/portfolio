import style from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <section className={style.home} id="inicio">
        <div className={style.home__conteudo}>
          <div className={style.home__conteudo__principal}>
            <h1 className={style.home__conteudo__principal__titulo}>
              DESENVOLVEDOR
              <br />
              FRONT-END
              <span className={style.home__conteudo__principal__trademark}>
                ™
              </span>
            </h1>
            <p className={style.home__conteudo__principal__descricao}>
              CRIANDO EXPERIÊNCIAS DIGITAIS COM PRECISÃO E ESTILO. BASEADO NO
              BRASIL, TRABALHANDO GLOBALMENTE.
            </p>
          </div>
          <div className={style.home__conteudo__rodape}>
            <div className={style.home__conteudo__rodape__scroll}>
              <span className={style.home__conteudo__rodape__scroll__texto}>
                SCROLL
              </span>
              <div className={style.home__conteudo__rodape__scroll__linha} />
            </div>
            <div className={style.home__conteudo__status}>
              <span className={style.home__conteudo__status__ponto} />
              <span className={style.home__conteudo__status__texto}>
                DISPONÍVEL PARA TRABALHO
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
