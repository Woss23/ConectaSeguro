// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import PassoItem from "./PassoItem";
import styles from "../styles/GolpeDetalhe.module.css";

export default function ListaPassos({ passos }) {
  return (
    <section className={styles.bloco}>
      <h2>O que fazer se caiu</h2>

      <ol className={styles.passos}>
        {passos.map((passo, indice) => (
          <PassoItem
            key={passo.titulo}
            numero={indice + 1}
            titulo={passo.titulo}
            descricao={passo.descricao}
            urgente={false}
          />
        ))}
      </ol>
    </section>
  );
}
