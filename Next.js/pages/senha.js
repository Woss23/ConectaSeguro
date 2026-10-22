// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Layout from "../components/Layout";
import styles from "../styles/Senha.module.css";

export default function Senha() {
  return (
    <Layout titulo="ConectaSeguro - Senhas Seguras">
      <main className={styles.principal}>
        <section className={styles.testeSenha}>
          <h2>Teste sua senha</h2>

          <p>
            Digite uma senha para ver o quão segura ela é.{" "}
            <strong>Não use sua senha real aqui.</strong>
          </p>

          <form>
            <label htmlFor="senha">Digite uma senha para testar:</label>
            <br />

            <input
              type="text"
              id="senha"
              name="senha"
              placeholder="Digite uma senha para testar..."
            />
          </form>
        </section>

        <section className={styles.exemplos}>
          <h2>Exemplos práticos</h2>

          <article>
            <h3>maria123 - Muito fraca</h3>
            <p>Nome próprio e números sequenciais são previsíveis</p>
          </article>

          <article>
            <h3>M@ria_2024! - Média</h3>
            <p>Melhor, mas ainda usa nome e ano facilmente adivinhados</p>
          </article>

          <article>
            <h3>Xk#9mP!qL3@wR - Muito forte</h3>
          </article>
        </section>
      </main>
    </Layout>
  );
}
