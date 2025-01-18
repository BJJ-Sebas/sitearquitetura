import Link from "next/link";
import Carrossel from "./components/carrossel";
import './globals.css';

export default function HomePage() {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/empresa"}>Empresa</Link>
      </nav>
      <Carrossel />
      <section className="texto">
        <p>Esta é a página principal do site.</p>
      </section>
    </>
  );
}