import styles from "../styles/OQueFazer.module.css";

export default function ContatoCard({ nome, subtitulo, texto }) {
  return (
    <article className={styles.cartaoContato}>
      <h4 className={styles.nomeContato}>{nome}</h4>
      <p className={styles.subtituloContato}>{subtitulo}</p>
      <p className={styles.textoContato}>{texto}</p>
    </article>
  );
}