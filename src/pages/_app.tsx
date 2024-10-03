// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/navbar";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async () => {
      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    })();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  );
}
