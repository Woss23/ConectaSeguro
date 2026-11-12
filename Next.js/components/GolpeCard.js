import styles from "../styles/Golpes.module.css";

export default function GolpeCard({ rotulo, titulo, descricao, exemplo }) {
  return (
    <article className={styles.golpe}>
      {rotulo && <h3>{rotulo}</h3>}

      <h2>{titulo}</h2>

      <p>{descricao}</p>

      <h3>Exemplo real de mensagem falsa:</h3>

      <p>{exemplo}</p>
    </article>
  );
}
