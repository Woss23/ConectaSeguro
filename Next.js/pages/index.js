import Link from "next/link";
import Layout from "../components/Layout";
import EstatisticaCard from "../components/EstatisticaCard";
import CardTema from "../components/CardTema";
import styles from "../styles/Home.module.css";

const estatisticas = [
  { numero: "3 em 5", texto: "brasileiros já receberam mensagem de golpe" },
  { numero: "R$ 2,5 bi", texto: "perdidos em fraudes digitais em 2024" },
  { numero: "70%", texto: "dos golpes acontecem por WhatsApp ou SMS" },
];

const temas = [
  {
    titulo: "Golpes",
    texto: "Aprenda a reconhecer mensagens falsas e tentativas de fraude.",
    href: "/golpes",
  },
  {
    titulo: "Senhas",
    texto: "Crie senhas fortes e proteja suas contas pessoais.",
    href: "/senha",
  },
  {
    titulo: "PIX",
    texto: "Saiba como usar o PIX com segurança e evitar golpes.",
    href: "/quiz",
  },
  {
    titulo: "WhatsApp",
    texto: "Proteja sua conta e identifique golpes pelo aplicativo.",
    href: "/o-que-fazer",
  },
];

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
        <Link href="/golpes" className={styles.botao}>
          Aprenda a se proteger
        </Link>
      </section>

      <section className={styles.botaoSecao}>
        <Link href="/quiz" className={styles.botao}>
          Faça o Quiz
        </Link>
      </section>

      <section className={styles.quadrados}>
        {estatisticas.map((estatistica) => (
          <EstatisticaCard
            key={estatistica.numero}
            numero={estatistica.numero}
            texto={estatistica.texto}
          />
        ))}
      </section>

      <section className={styles.porOnde}>
        <h2>Por onde você quer começar?</h2>

        <p>
          Escolha um tema e aprenda no seu ritmo. É grátis, fácil e pensado para
          você.
        </p>
      </section>

      <section className={styles.cards}>
        {temas.map((tema) => (
          <CardTema
            key={tema.titulo}
            titulo={tema.titulo}
            texto={tema.texto}
            href={tema.href}
          />
        ))}
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