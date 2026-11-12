import { useState } from "react";
import Layout from "../components/Layout";
import Pergunta from "../components/Pergunta";
import ResultadoQuiz from "../components/ResultadoQuiz";
import { perguntas } from "../data/perguntas";
import styles from "../styles/Quiz.module.css";

export default function Quiz() {
  const [indice, setIndice] = useState(0);
  const [selecionada, setSelecionada] = useState(null);
  const [confirmada, setConfirmada] = useState(false);
  const [aviso, setAviso] = useState("");
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const perguntaAtual = perguntas[indice];
  const ultima = indice === perguntas.length - 1;
  const progresso = ((indice + 1) / perguntas.length) * 100;

  function confirmar() {
    if (selecionada === null) {
      setAviso("Escolha uma alternativa!");
      return;
    }

    setAviso("");
    setConfirmada(true);

    if (selecionada === perguntaAtual.correta) {
      setPontos(pontos + 1);
    }
  }

  function proxima() {
    if (ultima) {
      setFinalizado(true);
      return;
    }

    setIndice(indice + 1);
    setSelecionada(null);
    setConfirmada(false);
  }

  function reiniciar() {
    setIndice(0);
    setSelecionada(null);
    setConfirmada(false);
    setAviso("");
    setPontos(0);
    setFinalizado(false);
  }

  return (
    <Layout titulo="ConectaSeguro">
      <main>
        <p className={styles.tituloQuiz}>Quiz de Segurança Digital</p>

        {finalizado ? (
          <ResultadoQuiz
            pontos={pontos}
            total={perguntas.length}
            onReiniciar={reiniciar}
          />
        ) : (
          <>
            <h1 className={styles.perguntaNumero}>
              Pergunta {indice + 1} de {perguntas.length}
            </h1>

            <div className={styles.barra}>
              <div
                className={styles.preenchimento}
                style={{ width: `${progresso}%` }}
              ></div>
            </div>

            <Pergunta
              pergunta={perguntaAtual}
              selecionada={selecionada}
              confirmada={confirmada}
              aviso={aviso}
              ultima={ultima}
              onEscolher={setSelecionada}
              onConfirmar={confirmar}
              onProxima={proxima}
            />
          </>
        )}
      </main>
    </Layout>
  );
}
