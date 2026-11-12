import Layout from "../components/Layout";
import TesteSenha from "../components/TesteSenha";
import ExemploSenha from "../components/ExemploSenha";
import styles from "../styles/Senha.module.css";

const exemplos = [
  {
    senha: "maria123",
    nivel: "Muito fraca",
    descricao: "Nome próprio e números sequenciais são previsíveis",
  },
  {
    senha: "M@ria_2024!",
    nivel: "Média",
    descricao: "Melhor, mas ainda usa nome e ano facilmente adivinhados",
  },
  {
    senha: "Xk#9mP!qL3@wR",
    nivel: "Muito forte",
  },
];

export default function Senha() {
  return (
    <Layout titulo="ConectaSeguro - Senhas Seguras">
      <main className={styles.principal}>
        <TesteSenha />

        <section className={styles.exemplos}>
          <h2>Exemplos práticos</h2>

          {exemplos.map((exemplo) => (
            <ExemploSenha
              key={exemplo.senha}
              senha={exemplo.senha}
              nivel={exemplo.nivel}
              descricao={exemplo.descricao}
            />
          ))}
        </section>
      </main>
    </Layout>
  );
}
