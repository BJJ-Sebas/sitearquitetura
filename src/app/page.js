"use client";

import dynamic from 'next/dynamic';
import './globals.css';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCheck, faBuilding, faUserCheck, faHandshakeSimple, faFileLines, faCommentDots, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Importação dinâmica para o Carrossel
const Carrossel = dynamic(() => import('./components/carrossel'), { ssr: false });

export default function HomePage() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // A lógica agora só é executada no cliente
      const numLines = window.innerWidth <= 768 ? 10 : 30; // Definindo número de linhas com base na largura da tela
      const backgroundElement = document.querySelector('.background');
      
      // Adicionando as linhas no background
      for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.left = `${Math.random() * 100}vw`; // Posição aleatória
        line.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duração aleatória de animação
        backgroundElement.appendChild(line);
      }
    }
  }, []);

  return (
    <>
      <div className="background"></div>

      {/* Carrossel Importado Dinamicamente */}
      <Carrossel />

      <section className="texto1">
        <h1>Bem-vindo à Engenharia Daniele Frick</h1>
        <p>Estamos comprometidos em oferecer o melhor serviço e soluções inovadoras para o cliente.</p>
      </section>

      {/* Obras Recentes */}
      <section className="obras-recentes">
        <h2>Obras Recentes</h2>
        <div className="obras-lista">
          <div className="obra-item">
            <img src="/obra1.jpeg" alt="Obra 1" />
            <div className="obra-detalhes">
              <p><strong>Serviço Prestado:</strong> Execução, Projeto Estrutural em Light Steel Frame, Hidráulico e Elétrico.</p>
              <p><strong>Localização:</strong> Floripa - SC</p>
              <p><strong>Área:</strong> 275m²</p>
              <p><strong>Cliente:</strong> Alex "Poatan" Pereira</p>
              <p><strong>Data:</strong> 2024</p>
            </div>
          </div>
          <div className="obra-item">
            <img src="/obra2.jpeg" alt="Obra 2" />
            <div className="obra-detalhes">
              <p><strong>Serviço Prestado:</strong> Execução, Projeto Estrutural em Concreto Armado, Elétrico e Hidráulico.</p>
              <p><strong>Localização:</strong> Floripa - SC</p>
              <p><strong>Área:</strong> 275m²</p>
              <p><strong>Cliente:</strong> Lionel Messi</p>
              <p><strong>Data:</strong> 2022</p>
            </div>
          </div>
          <div className="obra-item">
            <img src="/obra3.jpeg" alt="Obra 3" />
            <div className="obra-detalhes">
              <p><strong>Serviço Prestado:</strong> Execução, Projeto Arquitetônico e Estrutural em Aço Laminado.</p>
              <p><strong>Localização:</strong> Floripa - SC</p>
              <p><strong>Área:</strong> 424m²</p>
              <p><strong>Cliente:</strong> Sebastian Marcano</p>
              <p><strong>Data:</strong> Em andamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <div className="sobre-mim">
        <div className="sobre-mim-content">
          <img src="/engenheiro.png" alt="Engenheira Daniele Frick" />
          <div className="sobre-mim-texto">
            <h2>Sobre Mim</h2>
            <p>
              Me chamo Daniele Frick, sou engenheira civil e engenheira de segurança, Especialista em gerenciamento de obras, acompanhamento de obras, vistoria, alvarás de construção, de bombeiros, regularização de imóveis.
            </p>
            <p>
              Com mais de 24 anos de experiência em obras e elaboração de projetos, estou entre os melhores profissionais do ramo na região de Florianópolis.
            </p>
            <p>
              Meu intuito como profissional é buscar soluções eficientes, garantindo segurança e conforto ao longo do processo.
            </p>
          </div>
        </div>
      </div>

      {/* Nossos Serviços */}
      <section className="contato-page">
        <div className="servicos-container">
          <h2>Nossos Serviços</h2>
          <div className="boxes-servicos">
            <div className="box-servico">
              <FontAwesomeIcon icon={faBuilding} size="2x" />
              <h1>Gerência da obra</h1>
              <p>Administração e gestão de todas as etapas da obra.</p>
            </div>
            <div className="box-servico">
              <FontAwesomeIcon icon={faCommentDots} size="2x" />
              <h1>Fazemos Projetos</h1>
              <p>Ajudamos a criar o imóvel dos seus sonhos.</p>
            </div>
            <div className="box-servico">
              <FontAwesomeIcon icon={faCheck} size="2x" />
              <h1>Alvarás da obra</h1>
              <p>Certificamos que o local esteja preparado para a construção.</p>
            </div>
            <div className="box-servico">
              <FontAwesomeIcon icon={faUserCheck} size="2x" />
              <h1>Regularização de Imóveis</h1>
              <p>Garantimos que o imóvel seja legalmente reconhecido.</p>
            </div>
          </div>
        </div>

        {/* Texto 2 */}
        <section className="texto2">
          <FontAwesomeIcon icon={faHandshakeSimple} size="2x" />
          <h1>E se preferir</h1>
          <p>Você pode contratar diretamente a empreiteira de sua confiança, e eu posso fazer o acompanhamento semanal.</p>
        </section>

        {/* Contato */}
        <div className="contato-container">
          <div className="info-contato destaque-contato">
            <div className="destaque-box">
              <FontAwesomeIcon icon={faPhone} size="2x" />
              <p>(51) 996727271</p>
            </div>
            <div className="destaque-box">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <p>dfkurkowski@gmail.com</p>
            </div>
            <div className="destaque-box">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              <p>Rua Mário Lacombe 101 - Canasvieiras, Florianópolis</p>
            </div>
            <div className="destaque-box">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <p><a href="https://instagram.com/danielefrick" target="_blank" rel="noopener noreferrer">@danielefrick</a></p>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mapa-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy">
          </iframe>
        </div>
      </section>

      {/* Ícone do WhatsApp */}
      <div className="whatsapp-icon">
        <a href="https://wa.me/51996727271" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}
