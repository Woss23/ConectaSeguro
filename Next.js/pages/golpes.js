// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Link from "next/link";
import Layout from "../components/Layout";
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

        <article className={styles.golpe}>
          <h3>Golpe comum</h3>

          <h2>Phishing, link falso</h2>

          <p>
            Mensagens falsas que parecem ser de bancos, lojas ou governo. O
            objetivo é fazer você clicar num link e digitar seus dados
          </p>

          <h3>Exemplo real de mensagem falsa:</h3>

          <p>
            &quot; BANCO DIGITAL: Sua conta foi BLOQUEADA por segurança. Clique
            agora para reativar: bit.ly/banco-reativa&quot;
          </p>
        </article>

        <article className={styles.golpe}>
          <h3>Golpe comum</h3>

          <h2>Golpe do Pix</h2>

          <p>
            Criminosos criam situações de urgência para fazer você transferir
            dinheiro via PIX. Uma vez enviado, o dinheiro é muito difícil de
            recuperar.
          </p>

          <h3>Exemplo real de mensagem falsa:</h3>

          <p>
            &quot;Oi mãe, troquei de número. Estou com uma emergência urgente e
            preciso de R$800 agora. Me manda PIX! Te explico depois.&quot;
          </p>
        </article>

        <article className={styles.golpe}>
          <h2>Clonagem de WhatsApp</h2>

          <p>
            O criminoso assume sua conta do WhatsApp e usa para pedir dinheiro
            aos seus contatos fingindo ser você.
          </p>

          <h3>Exemplo real de mensagem falsa:</h3>

          <p>
            &quot;Você recebe: &apos;Olá, sou da operadora. Para confirmar seu
            cadastro, nos informe o código que você recebeu por SMS.&apos; —
            Esse código é o de verificação do WhatsApp!&quot;
          </p>
        </article>

        <article className={styles.golpe}>
          <h2>Falsos prêmios e concursos</h2>

          <p>
            Mensagens dizendo que você ganhou prêmios, mas para receber é
            preciso pagar uma &quot;taxa&quot; ou fornecer dados pessoais.
          </p>

          <h3>Exemplo real de mensagem falsa:</h3>

          <p>
            &quot; PARABÉNS! Você foi sorteado e ganhou um iPhone 15! Para
            liberar o prêmio, pague a taxa de R$49,90 de seguro no link
            abaixo.&quot;
          </p>
        </article>

        <article className={styles.golpe}>
          <h2>Falsa Oferta de Emprego</h2>

          <p>
            Vagas de emprego falsas que pedem documentos pessoais ou solicitam
            pagamento de taxas de cadastro.
          </p>

          <h3>Exemplo real de mensagem falsa:</h3>

          <p>
            VAGA URGENTE — Trabalhe em casa e ganhe R$3.000/mês sem experiência.
            Envie CPF, RG e foto do documento para confirmar seu cadastro.&quot;
          </p>
        </article>

        <article className={styles.golpe}>
          <h2>Falso Suporte Técnico</h2>

          <p>
            Criminosos ligam fingindo ser da Microsoft, antivírus ou operadora
            dizendo que seu computador está com vírus.
          </p>

          <h3>Exemplo real de mensagem falsa:</h3>

          <p>
            &quot;Ligação: &apos;Aqui é do suporte da Microsoft. Detectamos um
            vírus grave no seu computador. Precisamos de acesso remoto agora
            para resolver&quot;
          </p>
        </article>

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
