import "@/styles/globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
