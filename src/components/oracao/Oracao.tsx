import "./oracao.css";
import React, { useRef } from "react";
import { HandsPraying } from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";

const Oracao = () => {
  const form = useRef<HTMLFormElement|null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="form-oracao" id="oracao" ref={form} onSubmit={sendEmail}>
      <div className="ora flex items-center justify-center">
        <HandsPraying size={32} className="prayer" />
        <h2>Peça uma Oração</h2>
        <HandsPraying size={32} className="prayer" />
      </div>
      <div className="form-item flex flex-col">
        <label htmlFor="user_name">Nome:</label>
        <input
          type="text"
          placeholder="Nome"
          className="input-oracao"
          name="user_name"
          required
        />
      </div>
      <div className="form-item flex flex-col">
        <label htmlFor="user_email">Email:</label>
        <input
          type="text"
          placeholder="Email"
          className="input-oracao"
          name="user_email"
          required
        />
      </div>
      <div className="form-item flex flex-col">
        <label htmlFor="message">Mensagem:</label>
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          className="input-oracao"
          wrap="hard"
          required
        />
      </div>
      <div className="form-item">
        <button type="submit" className="button-form">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Oracao;
