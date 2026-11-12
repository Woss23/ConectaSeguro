// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import styles from "../styles/GolpeDetalhe.module.css";

export default function ExemploMensagem({ texto }) {
  return (
    <section className={styles.exemplo}>
      <h3>Exemplo real de mensagem falsa:</h3>
      <p>{texto}</p>
    </section>
  );
}