import React from "react";
import Head from "next/head";
import Navbar from "~/components/Navbar";
import Drawer from "~/components/Drawer";
import { routes as navItems } from "~/routes";

// styles
import "bootstrap/dist/css/bootstrap.css";

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React Hooks Training</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        brand="React Hooks Training"
        navItems={[{ path: "/", component: "Home" }]}
      />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Drawer navItems={navItems} />
          </div>
          <div className="col-10 border-start border-light ps-4">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
