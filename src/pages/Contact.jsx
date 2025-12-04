import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      "service_ud0fc67",       // Service ID
      "template_k0gejmf",      // Template ID
      templateParams,
      "ykToaX5PFAQUDcP48"      // Public Key
    )
    .then(() => {
      setSuccess(true);
      setError(false);

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 4000);
    })
    .catch((err) => {
      console.error("Erreur EmailJS :", err);
      setError(true);
      setTimeout(() => setError(false), 4000);
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition">

      <div className="contact-page">
        <h1>Contactez-moi</h1>
        <p>N’hésitez pas à m’envoyer un message, je réponds rapidement 🙌</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="dark-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="dark-input"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="dark-input"
          ></textarea>

          <button type="submit" className="dark-btn">Envoyer</button>

          {success && (
            <p className="success-message">
              Merci ! Votre message a bien été envoyé 😊
            </p>
          )}

          {error && (
            <p className="error-message">
              Une erreur s’est produite, veuillez réessayer 😕
            </p>
          )}
        </form>
      </div>

    </div>
  );
}
