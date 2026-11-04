// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function CardTema({ titulo, texto, href }) {
  return (
    <article className={styles.card}>
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <Link href={href}>Saiba mais →</Link>
    </article>
  );
}