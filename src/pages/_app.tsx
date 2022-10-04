import "../../public/assets/css/main.css";
import "../../public/assets/css/fontawesome-all.min.css";
import "../../public/assets/sass/main.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import Head from "next/head";

export default function Teknologihuset({ Component, pageProps }: AppProps) {
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Teknologihuset</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/assets/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header id="header">
        <nav
          onClick={() => {
            setNavMenuVisible(true);
          }}
        >
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
      <nav id="menu" className={navMenuVisible ? "visible" : ""}>
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/generic.html">Ipsum veroeros</a>
            </li>
            <li>
              <a href="/generic.html">Tempus etiam</a>
            </li>
            <li>
              <a href="/generic.html">Consequat dolor</a>
            </li>
            <li>
              <a href="/elements.html">Elements</a>
            </li>
          </ul>
          <ul className="actions stacked">
            <li>
              <a href="#" className="button fit primary">
                Get Started
              </a>
            </li>
            <li>
              <a href="#" className="button fit">
                Log In
              </a>
            </li>
          </ul>
        </div>

        <a
          className="close"
          href="#menu"
          onClick={() => setNavMenuVisible(false)}
        >
          Close
        </a>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
