// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

export default function EstatisticaCard({ numero, texto }) {
  return (
    <article>
      <h2>{numero}</h2>
      <p>{texto}</p>
    </article>
  );
}