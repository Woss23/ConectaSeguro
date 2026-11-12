// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import golpes from "../../../data/golpes.json";

export default function handler(req, res) {
  const indice = golpes.findIndex((item) => item.id === req.query.id);

  if (indice === -1) {
    res.status(404).json({ erro: "Golpe não encontrado" });
    return;
  }

  const anterior = indice > 0 ? golpes[indice - 1].id : null;
  const proximo = indice < golpes.length - 1 ? golpes[indice + 1].id : null;

  res.status(200).json({ ...golpes[indice], anterior, proximo });
}