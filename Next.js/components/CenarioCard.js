// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import { useState } from "react";
import PassoItem from "./PassoItem";
import styles from "../styles/OQueFazer.module.css";

export default function CenarioCard({ titulo, passos }) {
  const [aberto, setAberto] = useState(false);

  return (
    <article className={styles.cartaoCenario}>
      <button
        type="button"
        className={styles.headerCartao}
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
      >
        <span className={styles.tituloCartao}>{titulo}</span>
        <span className={styles.acaoCartao}>
          {aberto ? "Ocultar passos" : "Mostrar passos"}
        </span>
      </button>

      {aberto && (
        <ol>
          {passos.map((passo, posicao) => (
            <PassoItem
              key={passo.titulo}
              numero={posicao + 1}
              titulo={passo.titulo}
              descricao={passo.descricao}
              urgente={passo.urgente}
            />
          ))}
        </ol>
      )}
    </article>
  );
}
