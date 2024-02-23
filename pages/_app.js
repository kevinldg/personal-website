import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header className={`${inter.variable} font-sans`} />
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
