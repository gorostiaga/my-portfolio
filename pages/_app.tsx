import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <title>Javier Gorostiaga</title>
        <meta name="description" content="Welcome to my Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://gorostiaga.dev/images/react_java_v1.png"
        />
        <meta property="og:url" content="https://gorostiaga.dev" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
