// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ExemploMensagem from "../../components/ExemploMensagem";
import SinaisAlerta from "../../components/SinaisAlerta";
import ListaPassos from "../../components/ListaPassos";
import styles from "../../styles/GolpeDetalhe.module.css";

export default function GolpeDetalhe() {
  const { query, isReady } = useRouter();
  const [golpe, setGolpe] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    setCarregando(true);
    setErro(false);

    fetch(`/api/golpes/${query.id}`)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error();
        }
        return resposta.json();
      })
      .then((dados) => {
        setGolpe(dados);
        setCarregando(false);
      })
      .catch(() => {
        setGolpe(null);
        setErro(true);
        setCarregando(false);
      });
  }, [isReady, query.id]);

  if (carregando) {
    return (
      <Layout titulo="Carregando...">
        <main className={styles.principal}>
          <p>Carregando...</p>
        </main>
      </Layout>
    );
  }

  if (erro || !golpe) {
    return (
      <Layout titulo="Golpe não encontrado">
        <main className={styles.principal}>
          <h1>Golpe não encontrado</h1>

          <Link href="/golpes" className={styles.botao}>
            Voltar para a lista
          </Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout titulo={golpe.titulo}>
      <main className={styles.principal}>
        <nav className={styles.caminho}>
          <Link href="/golpes">Golpes</Link> › <span>{golpe.titulo}</span>
        </nav>

        {golpe.rotulo && <h3 className={styles.rotulo}>{golpe.rotulo}</h3>}

        <h1>{golpe.titulo}</h1>

        <p className={styles.descricao}>{golpe.descricao}</p>

        <ExemploMensagem texto={golpe.exemplo} />

        <SinaisAlerta sinais={golpe.sinaisDeAlerta} />

        <ListaPassos passos={golpe.oQueFazer} />

        <div className={styles.navegacao}>
          {golpe.anterior ? (
            <Link href={`/golpes/${golpe.anterior}`} className={styles.botao}>
              ← Anterior
            </Link>
          ) : (
            <span />
          )}

          {golpe.proximo ? (
            <Link href={`/golpes/${golpe.proximo}`} className={styles.botao}>
              Próximo →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>
    </Layout>
  );
}