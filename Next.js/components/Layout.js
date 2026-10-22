// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ titulo, children }) {
  return (
    <>
      <Head>
        <title>{titulo}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
