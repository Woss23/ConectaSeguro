// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

export default function ExemploSenha({ senha, nivel, descricao }) {
  return (
    <article>
      <h3>
        {senha} - {nivel}
      </h3>
      {descricao && <p>{descricao}</p>}
    </article>
  );
}