import Link from "next/link";
import Carrossel from "./components/carrossel";
import './globals.css';

export default function HomePage() {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/empresa"}>Empresa</Link>
        <Link href={"/contato"}>Contato</Link>
      </nav>
      <Carrossel />
      <section className="texto">
        <h1></h1>
      </section>
      <section class="whatsapp-icon">
  <a href="https://wa.me/48988472360" target="_blank" rel="noopener noreferrer">
    <img src="/whatsapp-icon.png" alt="WhatsApp" />
  </a>
</section>
    </>
  );
}