// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Layout from "../components/Layout";
import styles from "../styles/Quiz.module.css";

export default function Quiz() {
  return (
    <Layout titulo="ConectaSeguro">
      <main>
        <p className={styles.tituloQuiz}>Quiz de Segurança Digital</p>

        <h1 className={styles.perguntaNumero}>Pergunta 1 de 4</h1>

        <div className={styles.barra}></div>

        <section className={styles.caixaQuiz}>
          <h2 className={styles.pergunta}>
            Qual dessas senhas é mais segura?
          </h2>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta1" value="A" />
            <label>
              <span className={styles.letra}>A</span>
              Maria1990
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta1" value="B" />
            <label>
              <span className={styles.letra}>B</span>
              123456789
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta1" value="C" />
            <label>
              <span className={styles.letra}>C</span>
              p@ssw0rd
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta1" value="D" />
            <label>
              <span className={styles.letra}>D</span>
              mk#9xl!2kr
            </label>
          </div>

          <button className={styles.botao}>Confirmar resposta</button>
        </section>

        <h1 className={styles.perguntaNumero}>Pergunta 2 de 4</h1>

        <div className={styles.barra}></div>

        <section className={styles.caixaQuiz}>
          <h2 className={styles.pergunta}>
            Alguém no WhatsApp diz ser seu filho e pede R$500 de PIX urgente pois está em emergência. Você deve:
          </h2>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta2" value="A" />
            <label>
              <span className={styles.letra}>A</span>
              Fazer um Pix imediatamente, é uma emergência!
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta2" value="B" />
            <label>
              <span className={styles.letra}>B</span>
              Ligar para o número antigo do filho para confirmar
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta2" value="C" />
            <label>
              <span className={styles.letra}>C</span>
              Perguntar mais detalhes para o WhatsApp antes de enviar
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta2" value="D" />
            <label>
              <span className={styles.letra}>D</span>
              Ignorar, filhos não pedem dinheiro assim
            </label>
          </div>

          <button className={styles.botao}>Confirmar resposta</button>
        </section>

        <h1 className={styles.perguntaNumero}>Pergunta 3 de 4</h1>

        <div className={styles.barra}></div>

        <section className={styles.caixaQuiz}>
          <h2 className={styles.pergunta}>
            Você recebe uma mensagem do &quot;Banco do Brasil&quot; pedindo sua senha por WhatsApp. O que você faz?
          </h2>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta3" value="A" />
            <label>
              <span className={styles.letra}>A</span>
              Respondo com minha senha, pois parece urgente
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta3" value="B" />
            <label>
              <span className={styles.letra}>B</span>
              Ignoro ou ligo para o banco no número oficial
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta3" value="C" />
            <label>
              <span className={styles.letra}>C</span>
              Encaminho para um amigo decidir
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta3" value="D" />
            <label>
              <span className={styles.letra}>D</span>
              Clico no link que veio junto à mensagem
            </label>
          </div>

          <button className={styles.botao}>Confirmar resposta</button>
        </section>

        <h1 className={styles.perguntaNumero}>Pergunta 4 de 4</h1>

        <div className={styles.barra}></div>

        <section className={styles.caixaQuiz}>
          <h2 className={styles.pergunta}>
            Você recebe um SMS: &quot;Seu CPF foi usado para fraude. Clique aqui para regularizar&quot;. O que fazer?
          </h2>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta4" value="A" />
            <label>
              <span className={styles.letra}>A</span>
              Clicar no link e verificar
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta4" value="B" />
            <label>
              <span className={styles.letra}>B</span>
              Encaminhar para amigos como alerta
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta4" value="C" />
            <label>
              <span className={styles.letra}>C</span>
              Apagar a mensagem e ignorar
            </label>
          </div>

          <div className={styles.alternativa}>
            <input type="radio" name="pergunta4" value="D" />
            <label>
              <span className={styles.letra}>D</span>
              Ligar para o 0800 que aparece na mensagem
            </label>
          </div>

          <button className={styles.botao}>Confirmar resposta</button>
        </section>
      </main>
    </Layout>
  );
}
