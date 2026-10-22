// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

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