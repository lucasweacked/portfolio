import style from "./Projects.module.scss";

interface Projeto {
  titulo: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  github?: string;
  live?: string;
}

export default function Projects() {
  const projetos: Projeto[] = [
    {
      titulo: "Site da Vivi da Inclusão",
      descricao:
        "Site responsivo, acessível e que reflete a identidade visual da Vivi, desenvolvido com HTML, CSS e JavaScript. Criamos uma interface clara e inclusiva para transmitir sua mensagem.",
      imagem: "../imagem/projetos/vivi.png",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/lucasweacked/vividainclusao",
      live: "https://vividainclusao.com.br",
    },
    {
      titulo: "Landing Page da MUBI",
      descricao:
        "Landing page desenvolvida em React, com design minimalista e uma experiência interativa que captura a essência da MUBI. O projeto está em desenvolvimento.",
      imagem: "../imagem/projetos/mubi-react.png",
      tecnologias: ["React", "CSS", "JavaScript"],
      github: "https://github.com/lucasweacked/mubi-react",
    },
    {
      titulo: "Cinema Database",
      descricao:
        "Projeto web em HTML, CSS e JavaScript que permite busca dinâmica de filmes e diretores. Foco em usabilidade e experiência do usuário.",
      imagem: "../imagem/projetos/cinema-db.png",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/lucasweacked/desafio-alura",
      live: "https://cinemadatabase.dev",
    },
    {
      titulo: "Calculadora em Java",
      descricao:
        "Calculadora desenvolvida em Java com interface Swing, realizando operações básicas e avançadas. A aplicação segue boas práticas de programação orientada a objetos.",
      imagem: "../imagem/projetos/calculator.png",
      tecnologias: ["Java"],
      github: "https://github.com/lucasweacked/calculator",
    },
    {
      titulo: "Screen Sound",
      descricao:
        "Aplicação em C# para gerenciar informações sobre bandas e artistas, combinando lógica de programação, manipulação de dados e interface intuitiva.",
      imagem: "../imagem/projetos/screen-sound.png",
      tecnologias: ["C#"],
      github: "https://github.com/lucasweacked/screen-sound",
    },
  ];

  return (
    <>
      <section className={style.projetos} id="projetos">
        <div className={style.projetos__conteudo}>
          <div className={style.projetos__conteudo__titulo}>
            <h2 className={style.projetos__conteudo__titulo__titulo}>
              PROJETOS™
            </h2>
            <span className={style.projetos__conteudo__titulo__contagem}>
              / {projetos.length} PROJETOS
            </span>
          </div>
          <div className={style.projetos__conteudo__projetos}>
            {projetos.map((projeto, index) => (
              <article key={index} className={style.projeto}>
                <div className={style.projeto__imagemContainer}>
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className={style.projeto__imagem}
                  />
                  <div className={style.projeto__overlay}>
                    <div className={style.projeto__links}>
                      {projeto.github && (
                        <a
                          href={projeto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={style.projeto__link}
                        >
                          <i className="ri-github-line" />
                        </a>
                      )}
                      {projeto.live && (
                        <a
                          href={projeto.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={style.projeto__link}
                        >
                          <i className="ri-external-link-fill"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className={style.projeto__conteudo}>
                  <h3 className={style.projeto__titulo}>{projeto.titulo}</h3>
                  <p className={style.projeto__descricao}>
                    {projeto.descricao}
                  </p>
                  <div className={style.projeto__tecnologias}>
                    {projeto.tecnologias.map((tech, i) => (
                      <span key={i} className={style.projeto__tecnologia}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
