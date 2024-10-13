// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "./style.css";
// import $ from "jquery";

// import "./_nav.scss"
// import "../scss/bootstrap.scss";
import "../../css/bootstrap.css"; // Custom compiled Bootstrap CSS (from your css folder)
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS from node_modules
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../scss/bootstrap.scss";
// import "../../scss/bootstrap/scss";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { Html, Main, NextScript } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async () => {
      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    })();
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src="/main.js" // This can be an external URL or a local file
          // strategy="afterInteractive" // You can choose when to load the script
        />
        <Main />
        <NextScript />

        <link rel="stylesheet" href="../../css/bootstrap.css" />
        <link rel="stylesheet" href="../../css/bootstrap-grid.css" />
        <link rel="stylesheet" href="../../css/bootstrap-reboot.css" />
        <link rel="stylesheet" href="../../css/bootstrap-utilities.css" />
        <link rel="stylesheet" href="../../css/bootstrap.min.css" />
        <link rel="stylesheet" href="../../css/departments.css" />
        <link rel="stylesheet" href="../../css/style.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
