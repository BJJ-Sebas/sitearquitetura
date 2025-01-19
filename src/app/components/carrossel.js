"use client";

import { useState, useEffect } from "react";
import styles from "./Carrossel.module.css";

export default function Carrossel() {
  const slides = [
    {
      imagem: "/image1.png",
      texto: "Transformando ideias em realidade.",
    },
    {
      imagem: "/image2.png",
      texto: "Projetos que inovam e inspiram.",
    },
    {
      imagem: "/image3.png",
      texto: "Soluções eficientes para o futuro.",
    },
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  // Troca automática dos slides
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % slides.length);
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(intervalo);
  }, [slides.length]);

  const irParaSlide = (index) => {
    setIndiceAtual(index);
  };

  return (
    <div className={styles.carrossel}>
      <div className={styles.imagemContainer}>
        <div className={styles.overlay}></div>
        <img
          src={slides[indiceAtual].imagem}
          alt={`Slide ${indiceAtual + 1}`}
          className={styles.imagem}
        />
      </div>
      <div className={styles.textoContainer}>
        <h1>{slides[indiceAtual].texto}</h1>
      </div>
      <div className={styles.controles}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.botao} ${index === indiceAtual ? styles.ativo : ""}`}
            onClick={() => irParaSlide(index)}
          ></button>
        ))}
      </div>
      <div className={styles.navegacao}>
        <button
          className={styles.setaEsquerda}
          onClick={() => irParaSlide((indiceAtual - 1 + slides.length) % slides.length)}
        >
          ❮
        </button>
        <button
          className={styles.setaDireita}
          onClick={() => irParaSlide((indiceAtual + 1) % slides.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
}