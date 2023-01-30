import "../styles/globals.css";
import "../styles/nprogress.css";
import config from "../../config";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import Head from "next/head";
import "tippy.js/animations/shift-away.css";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  // Nprogress

  const router = useRouter();

  nProgress.configure({
    showSpinner: true,
  });

  useEffect(() => {
    nProgress.start();

    nProgress.done();
  }, [router.asPath]);

  // Auto Title

  for (const key in config.titles) {
    if (config.titles[key].url === router.pathname) {
      var title = config.titles[key].title;
    }
  }

  return (
    <>
      <div className="dark:bg-back bg-[#f3f4f6] min-h-screen border-t-indigo border-t-4 scrollbar-thin scrollbar-thumb-indigo  h-screen overflow-y-scroll">
        <Head>
          <title>
            {title ? title + " | " + config?.title : "404 | " + config?.title}
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={config.meta.description} />
        </Head>
        <div className="mx-auto max-w-5xl ">
          <Header />
          <Component {...pageProps} />
          <Footer />
          <div className="layout-color layout-right"></div>
      <div className="layout-color layout-left"></div>
        </div>
        
      </div>
    
    </>
  );
}

export default MyApp;
