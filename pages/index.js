import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Registration from "../components/RegistrarionForm"
import { NextSeo } from "next-seo";
import RegForm from "../components/RegistrarionForm";

export default function Home() {
  return (
    <div className="text-black">
      {/* <NextSeo
        title="OnlyFans King"
        description="Do not klick."
        canonical="https://nine4-2.vercel.app/"
        openGraph={{
          url: "https://nine4-2.vercel.app/",
        }}
      /> */}
      <Head>
        <title>OnlyFans King</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <RegForm />
      <Footer />
      
    </div>
  );
}
