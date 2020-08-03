import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default ({ children }) => {
  return (
    <>
      <Head>
        <title>PHI: Next.js test</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-grow justify-center">{children}</main>
        <Footer />
      </div>
    </>
  );
};
