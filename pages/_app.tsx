import type { AppProps } from "next/app";
import { useEffect } from "react";


import '../styles/css/bundle.css';
import '../styles/css/style-default.css';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bootstrap = require("bootstrap");
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }, []);
  return <Component {...pageProps} />;
}
