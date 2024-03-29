import React, { useState } from "react";
import "./style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const [showFeedback, setShowFeedback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState("Enviar");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeedbackClose = () => {
    setShowFeedback(false);
    setButtonText("Enviar");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setButtonText("Enviando...");

    try {
      const response = await fetch("https://back-portfolio-lyart.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback({
          type: "success",
          message: "E-mail enviado com sucesso!",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setFeedback({
          type: "error",
          message: "Erro ao enviar o e-mail",
        });
      }
    } catch (error) {
      console.error(error);
      setFeedback({
        type: "error",
        message: "Erro ao enviar o e-mail",
      });
    }

    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      setFeedback({
        type: "",
        message: "",
      });
      setIsSubmitting(false);
      setButtonText("Enviar");
    }, 5000);
  };

  return (
    <section className="contact" id="contact">
      <h2>Contato</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Digite seu E-mail"
              />
            </div>
          </div>

          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Digite uma mensagem"
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {buttonText}
          </button>
        </form>
        <div className="data-contact">
          <div>
            <img src="images\contact\icons8-telefone-50 (1).png" alt="Icon Telefone" />
            <div>
              <h3>Telefone</h3>
              <p>(81)9 9259-6941</p>
            </div>
          </div>
          <div>
            <img src="images\contact\icons8-marcador-64 (1).png" alt="Icon E-mail" />
            <div>
              <h3>E-mail</h3>
              <p>luizfelipealvesdesouza706@gmail.com</p>
            </div>
          </div>
          <div>
            <img src="images\contact\icons8-marcador-64 (1).png" alt="Icon localização" />
            <div>
              <h3>Localização</h3>
              <p>Recife, PE - Brasil</p>
            </div>
          </div>
        </div>
      </div>

      {showFeedback && (
        <div className={`feedback ${feedback.type}`}>
          {feedback.message}
          <button onClick={handleFeedbackClose}>&times;</button>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
