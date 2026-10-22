// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="final">
        <article className="final1">
          <h2>ConectaSeguro</h2>

          <p>
            Educação digital para todos. Aprenda a se proteger e use a internet
            com mais confiança.
          </p>
        </article>

        <article className="final2">
          <h2>Páginas</h2>

          <p>
            <Link href="/golpes">Golpes Comuns</Link>
          </p>
          <p>
            <Link href="/senha">Senhas Seguras</Link>
          </p>
          <p>
            <Link href="/quiz">Quiz de Segurança</Link>
          </p>
          <p>
            <Link href="/o-que-fazer">O que fazer?</Link>
          </p>
        </article>

        <article className="final3">
          <h2>Precisa de ajuda?</h2>

          <p>
            Em caso de golpe, entre em contato com sua operadora, banco ou a
            delegacia mais próxima. Não espere, aja rápido!
          </p>
        </article>
      </section>

      <section className="Emergencia">Emergência 190</section>

      <p className="copyright">
        © 2026 ConectaSeguro — Projeto educacional de segurança digital. Não
        somos banco nem órgão governamental.
      </p>
    </footer>
  );
}
