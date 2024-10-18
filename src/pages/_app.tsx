// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "./style.css";
// import $ from "jquery";
// import "./Card.css"; // You can add styles in an external CSS file

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
import Navbar from "../pages/components/navbar";
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
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        {/* Customized Bootstrap Stylesheet */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="/
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        css/style.css" rel="stylesheet" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    * {\n        font-family: 'Times New Roman', Times, serif;\n    }\n\n    @keyframes slideInUp {\n        0% {\n            opacity: 0;\n            transform: translateY(30px);\n        }\n\n        100% {\n            opacity: 1;\n            transform: translateY(0);\n        }\n    }\n\n    .card__counts {\n        padding: 13px 0 20px;\n        margin-bottom: 37px;\n        min-height: 110px;\n    }\n\n    .card__table {\n        display: table;\n        width: 100%;\n    }\n\n    .card__tablecell:first-child {\n        width: 92px;\n    }\n\n    .card__tablecell {\n        display: table-cell;\n        vertical-align: middle;\n        padding-left: 20px;\n    }\n\n    .sprite {\n        background: url('/img/sprite.png') no-repeat;\n        display: inline-block;\n        vertical-align: middle;\n        width: 0;\n        height: 0;\n    }\n\n    .icon__ug {\n        background-position: -84px -204px;\n        width: 72px;\n        height: 72px;\n    }\n\n    .icon__pg {\n        background-position: -205px -204px;\n        width: 72px;\n        height: 72px;\n    }\n\n    .card__userdetails h4,\n    .card__userdetails h3 {\n        font: 4em / 1;\n        color: #fff;\n        margin: 0;\n    }\n\n    .card__userdetails p {\n        margin: 0 35px 0 0;\n    }\n\n    .card__userdetails p {\n        font-size: 16px;\n        line-height: 19px;\n        color: #fff;\n        margin: 0;\n    }\n\n    .icon__globalworld {\n        background-position: -1045px -445px;\n        width: 72px;\n        height: 72px;\n    }\n\n    .icon__rs {\n        background-position: -325px -204px;\n        width: 72px;\n        height: 72px;\n    }\n\n    .icon__faculty {\n        background-position: -444px -204px;\n        width: 72px;\n        height: 72px;\n    }\n\n    .icon__staff {\n        background-position: -565px -204px;\n        width: 72px;\n        height: 72px;\n    }\n\n    .icon__patents {\n        background-position: -684px -204px;\n        width: 72px;\n        height: 72px;\n    }\n\n    .icon__investment {\n        background-position: -924px -445px;\n        width: 72px;\n        height: 72px;\n    }\n",
          }}
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
