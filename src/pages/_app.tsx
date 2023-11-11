import "../../styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat } from "@next/font/google";

const primary = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${primary.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
