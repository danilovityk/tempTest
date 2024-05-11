import RegForm from "./RegistrarionForm";

export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-white">
          Big dreams start here!
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-300 text-lg">
          As the Global Leading OnlyFans Agency based in Ukraine, we work with motivated Content Creators and Influencers to unlock the unfathomable potential of reach and revenue.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/aboutUs"
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12-cooked"
            src="images/iPhoneDarkTheme.png"
          ></img>
        </div>
      </div>
      <section className="mx-auto bg-gray-100 py-2">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mt-4 mb-8 text-2xl Avenir font-semibold text-black">
              Trusted by top-tier platforms
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-6 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="/images/Onlyfans-Logo.png"
                alt="Google Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/instLogo.png"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/twitterLogo.png"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/ttLogo.png"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-white">
        We base our relationship on trust.
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-300 text-center">
        Take a look at the statistics of one of our models.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src="images/statsFull.png"
          ></img>
        </div>
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="pt-24 pb-12 md:pt-36 md:pb-12">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-white">
              Start your road to financial freedom today
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-300">
              Fill out the form and we will get in touch with you.
            </h1>
            {/* <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a> */}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <RegForm />
        </div>
      </section>
    </section>
  );
}
