"use client";

import { useState, useEffect } from "react";
import styles from "./Carrossel.module.css";

export default function Carrossel() {
  const slides = [
    {
      imagem: "/image1.jpeg",
      texto: "Fazendo sonhos virar realidade.",
    },
    {
      imagem: "/image2.jpeg",
      texto: "Projetos que inovam e inspiram.",
    },
    {
      imagem: "/image3.jpeg",
      texto: "Soluções eficientes para o futuro.",
    },
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [startX, setStartX] = useState(null);

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

  // Funções de detecção de swipe
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) { // Define a sensibilidade do swipe
      if (diff > 0) {
        // Swipe para a esquerda (próximo slide)
        setIndiceAtual((prev) => (prev + 1) % slides.length);
      } else {
        // Swipe para a direita (slide anterior)
        setIndiceAtual((prev) => (prev - 1 + slides.length) % slides.length);
      }
      setStartX(null); // Reseta o estado após a ação
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <div
      className={styles.carrossel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
