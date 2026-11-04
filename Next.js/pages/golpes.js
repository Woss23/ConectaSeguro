// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Link from "next/link";
import Layout from "../components/Layout";
import GolpeCard from "../components/GolpeCard";
import { golpes } from "../data/golpes";
import styles from "../styles/Golpes.module.css";

export default function Golpes() {
  return (
    <Layout titulo="Golpes Comuns">
      <main className={styles.principal}>
        <section className={styles.introducao}>
          <h3>Golpes e fraudes digitais</h3>

          <h1>Golpes que você precisa conhecer</h1>

          <p>
            Conheça os tipos de golpe mais comuns no Brasil. Entender como
            funcionam é o primeiro passo para não cair neles.
          </p>

          <h2>
            Atenção! Os exemplos abaixo são mensagens falsas usadas por
            golpistas. Nunca clique em links suspeitos, pague taxas ou forneça
            seus dados a desconhecidos.
          </h2>
        </section>

        {golpes.map((golpe) => (
          <GolpeCard
            key={golpe.id}
            rotulo={golpe.rotulo}
            titulo={golpe.titulo}
            descricao={golpe.descricao}
            exemplo={golpe.exemplo}
          />
        ))}

        <section className={styles.chamada}>
          <h2>Caiu num golpe? Saiba o que fazer.</h2>

          <p>
            Aja rápido! Veja o passo a passo de como reagir a uma tentativa de
            fraude.
          </p>

          <Link href="/o-que-fazer" className={styles.botao}>
            O que fazer?
          </Link>
        </section>
      </main>
    </Layout>
  );
}
