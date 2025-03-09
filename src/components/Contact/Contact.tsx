import { useState } from "react";
import style from "./Contact.module.scss";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [buttonText, setButtonText] = useState("ENVIAR MENSAGEM™");

  // @ts-ignore
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setButtonText("Enviando");
    let dots = 0;

    const interval = setInterval(() => {
      dots = (dots + 1) % 4;
      setButtonText(`Enviando${".".repeat(dots)}`);
    }, 500);

    const form = event.target as HTMLFormElement;
    const formData = {
      nome: (form.nome as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      mensagem: (form.mensagem as HTMLTextAreaElement).value,
    };

    try {
      await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      clearInterval(interval);
      setIsSuccess(true);
      setButtonText("Enviado com sucesso!");
    } catch (error) {
      clearInterval(interval);
      setIsSuccess(false);
      setButtonText("Erro, tente novamente");
    } finally {
      setIsSending(false);
      setTimeout(() => setButtonText("ENVIAR MENSAGEM™"), 3000);
    }
  };

  return (
    <section className={style.contato} id="contato">
      <div className={style.contato__conteudo}>
        <h2 className={style.contato__conteudo__titulo}>ENTRE EM CONTATO™</h2>
        <p className={style.contato__conteudo__descricao}>
          DISPONÍVEL PARA TRABALHOS, FREELANCE E COLABORAÇÕES
        </p>

        <div className={style.contato__conteudo__contato}>
          <div className={style.contato__conteudo__contato__info}>
            <a
              href="mailto:lucasweacked21@gmail.com"
              className={style.contato__conteudo__contato__info__email}
            >
              <i className="ri-mail-line" />
              lucasweacked21@gmail.com
            </a>
            <div className={style.contato__conteudo__contato__info__social}>
              <a
                href="https://www.linkedin.com/in/lucasbarrossimon/"
                target="_blank"
                rel="noopener noreferrer"
                className={style.contato__conteudo__contato__info__social_link}
              >
                <i className="ri-linkedin-box-line" />
              </a>
              <a
                href="https://github.com/lucasweacked"
                target="_blank"
                rel="noopener noreferrer"
                className={style.contato__conteudo__contato__info__social_link}
              >
                <i className="ri-github-line" />
              </a>
              <a
                href="https://instagram.com/21lucasbarros"
                target="_blank"
                rel="noopener noreferrer"
                className={style.contato__conteudo__contato__info__social_link}
              >
                <i className="ri-instagram-line" />
              </a>
            </div>
          </div>

          <form
            className={style.contato__conteudo__form}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/lucasweacked21@gmail.com"
            method="POST"
          >
            <div className={style.contato__conteudo__form_form}>
              <input
                name="nome"
                type="text"
                placeholder="NOME"
                className={style.contato__conteudo__form_form__input}
              />
            </div>
            <div className={style.contato__conteudo__form_form}>
              <input
                name="email"
                type="email"
                placeholder="EMAIL"
                className={style.contato__conteudo__form_form__input}
              />
            </div>
            <div className={style.contato__conteudo__form_form}>
              <textarea
                name="mensagem"
                placeholder="MENSAGEM"
                className={style.contato__conteudo__form_form__textarea}
              ></textarea>
            </div>
            <button
              type="submit"
              className={style.contato__conteudo__form_form__botao}
              disabled={isSending}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
