import style from "./Header.module.scss";

export default function Header() {
  function scrollToElement(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    const index = event.currentTarget.href.indexOf("#");
    const id = event.currentTarget.href.slice(1 + index);

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={style.cabecalho}>
      <nav className={style.cabecalho__conteudo}>
        <ul className={style.cabecalho__conteudo__links}>
          <li className={style.cabecalho__conteudo__links_link}>
            <a href="#inicio" onClick={scrollToElement}>
              Início
            </a>
          </li>
          <li className={style.cabecalho__conteudo__links_link}>
            <a href="#formacao" onClick={scrollToElement}>
              Formações
            </a>
          </li>
          <li className={style.cabecalho__conteudo__links_link}>
            <a href="#projetos" onClick={scrollToElement}>
              Projetos
            </a>
          </li>
          <li className={style.cabecalho__conteudo__links_link}>
            <a href="#contato" onClick={scrollToElement}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
