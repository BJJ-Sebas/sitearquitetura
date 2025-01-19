import Link from "next/link"

export default function EmpresaPage() {
    return (
        <>
        <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/empresa"}>Empresa</Link>
        <Link href={"/contato"}>Contato</Link>
      </nav>
      <section>
        <h1>Sobre Nós</h1>
        <p>Informações sobre a empresa ou projeto.</p>
      </section>
        </>
    );
  }