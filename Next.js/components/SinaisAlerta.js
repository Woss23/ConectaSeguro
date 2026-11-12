// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import styles from "../styles/GolpeDetalhe.module.css";

export default function SinaisAlerta({ sinais }) {
  return (
    <section className={styles.bloco}>
      <h2>Sinais de alerta</h2>

      <ul className={styles.sinais}>
        {sinais.map((sinal) => (
          <li key={sinal}>{sinal}</li>
        ))}
      </ul>
    </section>
  );
}