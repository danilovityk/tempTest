import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="text-black">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">

      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 sm:mb-12 items-center text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          About us
        </h1>
        <br />
        <p className="mb-4 xl:w-3/4 text-gray-300 text-lg">
        A successful Ukrainian modeling agency “The GLANCE Agency”, founded in 2019, has quickly risen to prominence in the OnlyFans industry. With a focus on diversity, inclusivity, and innovation, this agency has garnered attention for its ability to discover and nurture talent. Our roster of models represents a wide range of backgrounds, sizes, and styles, making them a leader in the industry in. Through strategic partnerships and a strong social media presence, they have solidified their reputation as a go-to agency for both local and international brands. Our dedication to professionalism, creativity, and authenticity sets them apart in the competitive world of OnlyFans modeling.
          </p>
        <a
          className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
          href="/"
        >
          Become a model!
        </a>
      </div>
      </div>
      </div>      
      <Footer />
        </div>
    </div>
  );
}
