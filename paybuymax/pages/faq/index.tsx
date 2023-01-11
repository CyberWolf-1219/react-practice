import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import FAQ from "../../components/FAQ/FAQ";

function index() {
  return (
    <>
      <Head>
        <meta name="description" content="Frequently Asked Questions" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header>
        <Navigation />
        <HeroSection
          heading={<h1 className={`text-white`}>Frequently Asked Questions</h1>}
          subheading={
            <p className={`text-white`}>Clear your doubts about us.</p>
          }
        />
      </Header>
      <main>
        <Container>
          <div
            className={`w-full h-fit flex flex-col items-center justify-start gap-8 `}
          >
            <FAQ />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default index;
