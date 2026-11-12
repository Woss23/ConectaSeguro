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
