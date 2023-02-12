import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Genshin Impact Profile Readme</title>
      </Head>
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}
