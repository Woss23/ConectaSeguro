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