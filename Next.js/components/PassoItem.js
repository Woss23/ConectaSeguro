// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import styles from "../styles/OQueFazer.module.css";

export default function PassoItem({ numero, titulo, descricao, urgente }) {
  return (
    <li className={styles.conteudoCartao}>
      <div
        className={urgente ? styles.numeroPassoVermelho : styles.numeroPassoAzul}
      >
        {numero}
      </div>

      <div className={styles.textoPasso}>
        <h4 className={styles.tituloPasso}>
          {titulo}
          {urgente && <span className={styles.etiquetaUrgente}>URGENTE</span>}
        </h4>
        <p className={styles.descricaoPasso}>{descricao}</p>
      </div>
    </li>
  );
}
