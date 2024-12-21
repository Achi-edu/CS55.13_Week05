import { useEffect, useState } from "react";
import "@/styles/global.scss";
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
    }, []);

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
