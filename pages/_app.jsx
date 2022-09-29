import '../styles/globals.css'
import "../styles/nprogress.css";
import config from "../config"
import Header from '../components/static/Header';
import Footer from '../components/static/Footer';
import Head from "next/head";
import "tippy.js/animations/shift-away.css";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import Cookies from "universal-cookie";

function MyApp({ Component, pageProps }) {
  // Nprogress
  const cookies = new Cookies();

  const router = useRouter();

  nProgress.configure({
    showSpinner: true,});

  useEffect(() => {
    nProgress.start();

    nProgress.done();
  }, [router.asPath]);

 
  
  return (
    <>
<div className='dark:bg-black bg-white h-screen'  >



    
    <Head>
      <title>
          {router.asPath ? config?.titles[router?.asPath] ? config?.titles[router?.asPath] + " | " + config?.title 
          : "404 | " + config?.title
          : "Loading | " + config?.title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={config.meta.description} />
    </Head>
    <div className='mx-auto max-w-4xl'>
    <Header />
  <Component {...pageProps}  />
  <Footer />
  </div>
  
  </div>
  </>
  
  );
  
  
}

export default MyApp
