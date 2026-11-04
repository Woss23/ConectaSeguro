// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import styles from "../styles/Quiz.module.css";

export default function Pergunta({
  pergunta,
  selecionada,
  confirmada,
  aviso,
  ultima,
  onEscolher,
  onConfirmar,
  onProxima,
}) {
  const acertou = selecionada === pergunta.correta;

  return (
    <section className={styles.caixaQuiz}>
      <h2 className={styles.pergunta}>{pergunta.texto}</h2>

      {pergunta.alternativas.map((alternativa) => (
        <div className={styles.alternativa} key={alternativa.letra}>
          <input
            type="radio"
            id={`alternativa-${alternativa.letra}`}
            name="alternativa"
            value={alternativa.letra}
            checked={selecionada === alternativa.letra}
            disabled={confirmada}
            onChange={() => onEscolher(alternativa.letra)}
          />
          <label htmlFor={`alternativa-${alternativa.letra}`}>
            <span className={styles.letra}>{alternativa.letra}</span>
            {alternativa.texto}
          </label>
        </div>
      ))}

      {aviso && <p className={styles.aviso}>{aviso}</p>}

      {confirmada && (
        <p className={acertou ? styles.acerto : styles.erro}>
          {acertou
            ? "Resposta correta!"
            : `Resposta incorreta! A resposta correta é ${pergunta.correta}`}
        </p>
      )}

      {confirmada ? (
        <button className={styles.botao} onClick={onProxima}>
          {ultima ? "Ver resultado" : "Próxima pergunta"}
        </button>
      ) : (
        <button className={styles.botao} onClick={onConfirmar}>
          Confirmar resposta
        </button>
      )}
    </section>
  );
}
