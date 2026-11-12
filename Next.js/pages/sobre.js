// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Layout from "../components/Layout";
import MembroEquipe from "../components/MembroEquipe";
import { equipe } from "../data/equipe";
import styles from "../styles/Sobre.module.css";

export default function Sobre() {
  return (
    <Layout titulo="Sobre">
      <main className={styles.principal}>
        <section className={styles.introducao}>
          <h3>Quem somos</h3>

          <h1>Sobre o ConectaSeguro</h1>

          <p>Um projeto extensionista de educação digital para a comunidade.</p>
        </section>

        <section className={styles.texto}>
          <article>
            <h2>Nossa missão</h2>

            <p>
              Ensinar, de um jeito simples e gratuito, como reconhecer golpes,
              criar senhas fortes e saber o que fazer quando algo dá errado na
              internet. Muita gente cai em golpes não por falta de inteligência,
              mas porque ninguém explicou como eles funcionam.
            </p>
          </article>

          <article>
            <h2>Público-alvo</h2>

            <p>
              Familiares, estudantes e pessoas mais velhas, que muitas vezes
              são os alvos preferidos dos golpistas e ainda não tiveram contato
              com essas informações em linguagem fácil.
            </p>
          </article>
        </section>

        <section className={styles.equipe}>
          <h2>Equipe</h2>

          <div className={styles.membros}>
            {equipe.map((membro) => (
              <MembroEquipe key={membro.ra} nome={membro.nome} ra={membro.ra} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}