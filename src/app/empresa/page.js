import Link from "next/link"
import './global.css';

export default function EmpresaPage() {
    return (
        <>
        <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/empresa"}>Empresa</Link>
      </nav>
      <section>
        <h1>Sobre Nós</h1>
        <p>Informações sobre a empresa ou projeto.</p>
      </section>
        </>
    );
  }