import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="menu">
        <p>ConectaSeguro</p>

        <Link href="/">Início</Link>
        <Link href="/golpes">Golpes Comuns</Link>
        <Link href="/senha">Senhas Seguras</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/o-que-fazer">O que fazer?</Link>
      </nav>
    </header>
  );
}
