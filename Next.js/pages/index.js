// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout titulo="ConectaSeguro">
      <section className={styles.educacao}>
        <h4>Educação digital gratuita para todos</h4>
      </section>

      <section className={styles.slogan}>
        <h1>
          Educação digital gratuita para todos Navegue com mais segurança na
          internet
        </h1>

        <h2>
          O Conecta Seguro ensina de forma simples como identificar golpes,
          criar senhas fortes e proteger suas contas — sem complicação.
        </h2>
      </section>

      <section className={styles.botaoSecao}>
        <button className={styles.botao}>Aprenda a se proteger</button>
      </section>

      <section className={styles.botaoSecao}>
        <button className={styles.botao}>Faça o Quiz</button>
      </section>

      <section className={styles.quadrados}>
        <article>
          <h2>3 em 5</h2>
          <p>brasileiros já receberam mensagem de golpe</p>
        </article>

        <article>
          <h2>R$ 2,5 bi</h2>
          <p>perdidos em fraudes digitais em 2024</p>
        </article>

        <article>
          <h2>70%</h2>
          <p>dos golpes acontecem por WhatsApp ou SMS</p>
        </article>
      </section>

      <section className={styles.porOnde}>
        <h2>Por onde você quer começar?</h2>

        <p>
          Escolha um tema e aprenda no seu ritmo. É grátis, fácil e pensado para
          você.
        </p>
      </section>

      <section className={styles.cards}>
        <article className={styles.card}>
          <h2>Golpes</h2>
          <p>Aprenda a reconhecer mensagens falsas e tentativas de fraude.</p>
          <Link href="/golpes">Saiba mais →</Link>
        </article>

        <article className={styles.card}>
          <h2>Senhas</h2>
          <p>Crie senhas fortes e proteja suas contas pessoais.</p>
          <Link href="/senha">Saiba mais →</Link>
        </article>

        <article className={styles.card}>
          <h2>PIX</h2>
          <p>Saiba como usar o PIX com segurança e evitar golpes.</p>
          <Link href="/quiz">Saiba mais →</Link>
        </article>

        <article className={styles.card}>
          <h2>WhatsApp</h2>
          <p>Proteja sua conta e identifique golpes pelo aplicativo.</p>
          <Link href="/o-que-fazer">Saiba mais →</Link>
        </article>
      </section>

      <section className={styles.quizBanner}>
        <h2>Teste seus conhecimentos</h2>

        <p>
          Responda nosso quiz e descubra o quanto você já sabe sobre segurança
          digital.
        </p>

        <Link href="/quiz">Comece o quiz →</Link>
      </section>
    </Layout>
  );
}