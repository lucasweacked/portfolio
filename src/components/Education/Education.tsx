import style from "./Education.module.scss";

export default function Education() {
  const cursos = [
    {
      curso: "Imersão Python: Do Excel à Análise de Dados - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/15779",
    },
    {
      curso: "Imersão Inteligência Artificial 2ª Edição - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/28257",
    },
    {
      curso: "Imersão Dev com Google Gemini - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/40135",
    },
    {
      curso: "Imersão Dev Back-End - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/49679",
    },
    {
      curso: "C#: Aplicando a Orientação a Objetos - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/csharp-aplicando-orientacao-objetos/certificate",
    },
    {
      curso: "C#: Criando sua primeira Aplicação - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/csharp-criando-primeira-aplicacao/certificate",
    },
    {
      curso:
        "HTML e CSS: Ambientes de desenvolvimento, estrutura de arquivos e tags - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-ambiente-arquivos-tags/certificate",
    },
    {
      curso: "HTML e CSS: Classes, posicionamento e Flexbox - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-classes-posicionamento-flexbox/certificate",
    },
    {
      curso: "HTML e CSS: cabeçalho, footer e variáveis CSS - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-cabecalho-footer-variaveis-css/certificate",
    },
    {
      curso:
        "HTML e CSS: trabalhando com responsividade e publicação de projetos - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/html-css-responsividade-publicacao-projetos/certificate",
    },
    {
      curso:
        "Lógica de programação: mergulhe em programação com JavaScript - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/logica-programacao-mergulhe-programacao-javascript/certificate",
    },
    {
      curso: "Java: criando a sua primeira aplicação - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/java-criando-primeira-aplicacao/certificate",
    },
    {
      curso:
        "Git e GitHub: compartilhando e colaborando em projetos - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/git-github-compartilhando-colaborando-projetos/certificate",
    },
    {
      curso: "Java: aplicando a Orientação a Objetos - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/course/java-aplicando-orientacao-objetos/certificate",
    },
    {
      curso: "Imersão Front-End 2ª Edição - Alura Cursos",
      certificado:
        "https://cursos.alura.com.br/user/lucasweacked21/immersion/certificate/59520",
    },
  ];
  return (
    <>
      <section className={style.formacao} id="formacao">
        <section className={style.formacao__conteudo}>
          <h2 className={style.formacao__conteudo__titulo}>Formações</h2>
          <div className={style.formacao__conteudo__container}>
            <section className={style.formacao__conteudo__ensino}>
              <h2 className={style.formacao__conteudo__ensino__titulo}>
                <i className="ri-graduation-cap-line" /> Educação
              </h2>
              <p className={style.formacao__conteudo__ensino__paragrafo}>
                Sistemas de Informação - Universidade Santa Cecília (UNISANTA)
              </p>
              <p className={style.formacao__conteudo__ensino__paragrafo}>
                <i className="ri-calendar-2-line" /> 2023 - presente
              </p>
              <p className={style.formacao__conteudo__ensino__paragrafo}>
                4º Semestre
              </p>
            </section>

            <section className={style.formacao__conteudo__cursos}>
              <h2 className={style.formacao__conteudo__cursos__titulo}>
                <i className="ri-book-open-line" /> Cursos e Certificados
              </h2>
              <ul className={style.formacao__conteudo__cursos__curso}>
                {cursos.map((item, index) => (
                  <li
                    key={index}
                    className={style.formacao__conteudo__cursos__cursos}
                  >
                    <p>
                      {item.curso} com{" "}
                      <a
                        href={item.certificado}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        certificado
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className={style.formacao__conteudo__idiomas}>
              <h2 className={style.formacao__conteudo__idiomas__titulo}>
                <i className="ri-earth-line" /> Idiomas
              </h2>
              <p className={style.formacao__conteudo__idiomas__paragrafo}>
                <span className="flag-icon flag-icon-us" /> Inglês -
                Pré-intermediário
              </p>
              <p className={style.formacao__conteudo__idiomas__paragrafo}>
                <span className="flag-icon flag-icon-es" /> Espanhol - Básico
              </p>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
