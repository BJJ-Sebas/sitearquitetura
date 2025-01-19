"use client";

import Link from "next/link"

import React from "react";

export default function ContatoPage() {
  return (
    <>
        <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/empresa"}>Empresa</Link>
        <Link href={"/contato"}>Contato</Link>
      </nav>
    <div className="contato-page">
      {/* Seção do Mapa */}
      <div className="mapa-container">
      </div>

      {/* Seção de Contato */}
      <div className="contato-container">
        <h1>Entre em Contato</h1>
        <p>Preencha o formulário abaixo ou entre em contato conosco diretamente.</p>

        {/* Informações de Contato */}
        <div className="info-contato">
          <p><strong>Telefone:</strong> (99) 99999-9999</p>
          <p><strong>Email:</strong> emailqualquer@gmail.com</p>
          <p><strong>Endereço:</strong> Ingleses do Rio Vermelho</p>
        </div>

        {/* Formulário de Contato */}
        <form className="form-contato">
          <div className="input-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.719228618527!2d-122.0842494844192!3d37.42206597982774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a5e7e2f7e1%3A0x6f0d79f9a3b80736!2sGoogleplex!5e0!3m2!1sen!2sbr!4v1615470182993!5m2!1sen!2sbr"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
    </>
  );
}