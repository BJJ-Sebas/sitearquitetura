<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
import Carrossel from "./components/carrossel";
import './globals.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCheck, faBuilding, faUserCheck, faHandshakeSimple, faFileLines, faCommentDots, faMapMarkerAlt  } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Carrossel />
      
      <section className="texto1">
        <h1>Bem-vindo à Engenharia Daniele Frick</h1>
        <p>Estamos comprometidos em oferecer o melhor serviço e inovadoras para o cliente.</p>
      </section>

{/*---------------------------------------------- obras ---------------------------------------------------*/}
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

      {/*------------------------------------------ Sobre Mim ---------------------------------------------*/}
      <div className="sobre-mim">
        <div className="sobre-mim-content">
          <img src="/engenheiro.png" alt="Engenheira Daniele Frick" />
          <div className="sobre-mim-texto">
            <h2>Sobre Mim</h2>
            <p>
              Me chamo Daniele Frick, sou engenheira civil e engenheira de segurança, Especialista em gerenciamento de obras, acompanhamento de obras, vistoria, alvarás de construção, de bombeiros, regularização de imóveis.
            </p>
            <p>
              Com mais de 24 anos de experiência em obras e elaboração de projetos, 
              estando entre os melhores profissionais do ramo na região de Florianópolis.
            </p>
            <p>
              Meu intuito como profissional é buscar por soluções com eficiência, garantindo segurança e conforto ao longo do 
              decorrer do processo. Dando vida às necessidades da sua obra, seja na elaboração dos projetos, na execução de 
              gerenciamento ou na regularização do imovel.
            </p>
          </div>
        </div>
      </div>

        {/* ---------------------------------Quatro Boxes de Destaque -------------------------------*/}
      <section className="contato-page">
        <div className="servicos-container">
          <h2>Nossos Serviços</h2>
          <div className="boxes-servicos">
            <div className="box-servico">
            <FontAwesomeIcon icon={faBuilding} size="2x" />
              <h1>Gerência da obra</h1>
              <p>Administração e gestão de todas as etapas da obra, esde a fundação até a entrega da chave.</p>
            </div>
            <div className="box-servico">
            <FontAwesomeIcon icon={faCommentDots} size="2x" />
              <h1>Fazemos Projetos</h1>
              <p>Podemos fornecer ajuda para criar o imovel do seus sonhos</p>
            </div>
            <div className="box-servico">
            <FontAwesomeIcon icon={faCheck} size="2x" />
              <h1>Alvarás da obra</h1>
              <p>Nos certificaremos que o local esteja apropiadadamente para começar a construir, reformar, acrescentar, demolir, equipado e preparado para situações de emergencia.</p>
            </div> 
            <div className="box-servico">
            <FontAwesomeIcon icon={faUserCheck} size="2x" />
              <h1>Regularização de Imóveis</h1>
              <p>Nos comprovaremos que o imovel seja reconhecido ao propietario legalmente na lei</p>
            </div>
            <div className="box-servico">
            <FontAwesomeIcon icon={faFileLines} size="2x" />
              <h1>Vistoria da Obra</h1>
              <p>Aprovaremos que a qualidade e a conformidade da construção esteja conforme o indicado,
                  identificaremos problemas e falhas antes que causem danos, e garantiremos que a obra esteja de acordo com a legislação. </p>
            </div>
          </div>
        </div>

        {/*------------------------------------ Texto 2 -----------------------------------------------------*/}
      <section className="texto2">
            <FontAwesomeIcon icon={faHandshakeSimple} size="2x" />
        <h1>E se preferir</h1>
        <p>O cliente pode contratar diretamente a empreiteira de sua confiança , comprar materiais direto e eu posso fazer o acompanhamento semanal . Sai um custo mais baixo e pode ter certeza que a obra ser muito bem executada com uma profissional qualificada </p>
      </section>

        {/*----------------------------------- Contato ----------------------------------------------------- */}
        <div className="contato-container">
          <h1>                                                                                      </h1>
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
              <p>
                <a href="https://instagram.com/danielefrick" target="_blank" rel="noopener noreferrer">
                  @danielefrick
                </a>
              </p>
            </div>
          </div>
        </div>

        {/*------------------------------------ Mapa --------------------------------------------------*/}
        <div className="mapa-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.719228618527!2d-122.0842494844192!3d37.42206597982774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a5e7e2f7e1%3A0x6f0d79f9a3b80736!2sGoogleplex!5e0!3m2!1sen!2sbr!4v1615470182993!5m2!1sen!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* -------------------------------------Ícone do WhatsApp--------------------------------------- */}
      <div className="whatsapp-icon">
        <a href="https://wa.me/51996727271" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}