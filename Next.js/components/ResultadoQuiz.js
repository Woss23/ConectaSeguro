// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import styles from "../styles/Quiz.module.css";

export default function ResultadoQuiz({ pontos, total, onReiniciar }) {
  return (
    <section className={styles.caixaQuiz}>
      <h1 className={styles.perguntaNumero}>Quiz finalizado!</h1>

      <p className={styles.resultado}>
        Você acertou {pontos} de {total} perguntas.
      </p>

      <button className={styles.botao} onClick={onReiniciar}>
        Refazer quiz
      </button>
    </section>
  );
}
