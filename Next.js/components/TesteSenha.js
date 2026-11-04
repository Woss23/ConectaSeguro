// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import { useState } from "react";
import styles from "../styles/Senha.module.css";

function avaliarSenha(texto) {
  const temMaiuscula = /[A-Z]/.test(texto);
  const temMinuscula = /[a-z]/.test(texto);
  const temNumero = /[0-9]/.test(texto);
  const temSimbolo = /[^A-Za-z0-9]/.test(texto);

  const temNome = texto.toLowerCase().includes("maria");
  const temAno =
    texto.includes("2024") || texto.includes("2025") || texto.includes("2026");
  const numeroSequencial = texto.includes("123") || texto.includes("1234");

  if (texto.length < 8 || (temNome && numeroSequencial)) {
    return { nivel: "Muito fraca", classe: styles.fraca };
  }

  if (temNome || temAno) {
    return { nivel: "Média", classe: styles.media };
  }

  if (
    texto.length >= 12 &&
    temMaiuscula &&
    temMinuscula &&
    temNumero &&
    temSimbolo
  ) {
    return { nivel: "Muito forte", classe: styles.forte };
  }

  return { nivel: "Média", classe: styles.media };
}

export default function TesteSenha() {
  const [senha, setSenha] = useState("");

  const resultado = senha === "" ? null : avaliarSenha(senha);

  return (
    <section className={styles.testeSenha}>
      <h2>Teste sua senha</h2>

      <p>
        Digite uma senha para ver o quão segura ela é.{" "}
        <strong>Não use sua senha real aqui.</strong>
      </p>

      <label htmlFor="senha">Digite uma senha para testar:</label>
      <br />

      <input
        type="text"
        id="senha"
        name="senha"
        placeholder="Digite uma senha para testar..."
        value={senha}
        onChange={(evento) => setSenha(evento.target.value)}
      />

      {resultado && <p className={resultado.classe}>{resultado.nivel}</p>}
    </section>
  );
}