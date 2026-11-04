// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Link from "next/link";
import Layout from "../components/Layout";
import CenarioCard from "../components/CenarioCard";
import ContatoCard from "../components/ContatoCard";
import { cenarios } from "../data/cenarios";
import { contatos } from "../data/contatos";
import styles from "../styles/OQueFazer.module.css";

export default function OQueFazer() {
  return (
    <Layout titulo="ConectaSeguro - O que fazer">
      <main className={styles.conteudoDaPagina}>
        <div className={styles.faixaComentario} role="alert">
          <p>Orientações de Emergência</p>
        </div>

        <section>
          <h1 className={styles.tituloPrimario}>
            O que fazer se você foi enganado?
          </h1>
          <p className={styles.textoPrimario}>
            Não entre em pânico. Siga estes passos com calma — agir rápido faz
            toda a diferença.
          </p>
          <div className={styles.chamadaUrgente}>
            <h3 className={styles.tituloChamada}>Velocidade é essencial!</h3>
            <p className={styles.textoChamada}>
              Quanto mais rápido você agir, maiores são as chances de minimizar
              os danos e recuperar seu dinheiro. Comece pelo passo 1
              imediatamente.
            </p>
          </div>
        </section>

        <section className={styles.todoConteudo}>
          <section className={styles.colunaPrincipal}>
            <h2 className={styles.tituloSecundario}>
              Qual situação aconteceu com você?
            </h2>

            {cenarios.map((cenario) => (
              <CenarioCard
                key={cenario.titulo}
                titulo={cenario.titulo}
                passos={cenario.passos}
              />
            ))}
          </section>

          <aside className={styles.colunaSecundaria}>
            <h2 className={styles.tituloSecundario}>Contatos importantes</h2>

            {contatos.map((contato) => (
              <ContatoCard
                key={contato.nome}
                nome={contato.nome}
                subtitulo={contato.subtitulo}
                texto={contato.texto}
              />
            ))}

            <article className={styles.campoPreto}>
              <h2 className={styles.tituloCampoPreto}>Não se culpe</h2>
              <p className={styles.textoCampoPreto}>
                Golpistas são profissionais. Qualquer pessoa pode ser vítima. O
                importante é agir rápido e aprender para se proteger no futuro.
              </p>
            </article>
          </aside>

          <article className={styles.bigBox}>
            <h2 className={styles.tituloLink}>Aprenda a evitar no futuro</h2>
            <p className={styles.textoLink}>
              Conheça os golpes mais comuns e saiba como identificá-los antes de
              cair.
            </p>
            <Link href="/golpes" className={styles.botaoLink}>
              Ver golpes comuns →
            </Link>
          </article>
        </section>
      </main>
    </Layout>
  );
}