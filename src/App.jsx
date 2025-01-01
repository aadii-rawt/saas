import React from "react";
import "tailwindcss/tailwind.css";
import FAQ from "./components/FAQ";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="min-h-screen bg-[#212121] text-white font-sans ">
      {/* Header Section */}
      <header className="flex justify-between items-center py-6 px-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-800 rounded flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          <h1 className="text-xl font-bold">Ngendog</h1>
        </div>
        <nav className="flex space-x-8 text-sm font-medium">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#app" className="hover:text-purple-400">App</a>
          <a href="#pricing" className="hover:text-purple-400">Pricing</a>
          <a href="#about" className="hover:text-purple-400">About</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hover:text-purple-400">Login</button>
          <button className="bg-purple-800 py-2 px-6 rounded-full shadow-lg hover:bg-purple-600">
            Sign Up <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-10">
        <div className="relative">
          {/* <div className="absolute top-0  bg-purple-900/50 rounded-full w-80 h-80 blur-3xl opacity-30"></div> */}
          <div className="relative z-10">
            <div className="mx-auto mb-6 w-20 h-20 bg-purple-600/50 rounded-xl flex items-center justify-center">
              <span className="text-4xl text-white font-bold">N</span>
            </div>
            {/* <span className="bg-purple-700 text-white py-1 px-3 rounded-full text-xs inline-block mb-6">
              Updated: AI Integrated
            </span> */}
            <h2 className="text-5xl font-bold  bg-gradient-to-b from-white   via-gray-200  to-gray-500 bg-clip-text text-transparent leading-normal">
              Do perfect, make perfect with Ngendog
            </h2>
            <p className="text-gray-400 ">
              Find out what's working and what's not to get more search traffic.
            </p>
            <p className="text-gray-400 ">Like an SEO consultant who can analyze millions of data.</p>

            <div className="flex justify-center my-5">
              <div class="button overflow-hidden">
                <div className="z-20 bg-[#212121] overflow-hidden">
                  <input placeholder="Enter Your email" className="bg-transparent text-white outline-none pl-5" />
                  <button className=" bg-gradient-to-b border !border-gray-400 rounded-3xl px-5 py-1.5 to-gray-900">Signup</button>

                </div>
                <div class="dots_border -z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main class="relativeflex flex-col justify-center  w-full overflow-hidden antialiased">
        <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div class="text-center">

            {/* <!-- Logo Carousel animation --> */}
            <div
              x-data="{}"
              x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
              class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                  <img src="./facebook.svg" alt="Facebook" />
                </li>
                <li>
                  <img src="./disney.svg" alt="Disney" />
                </li>
                <li>
                  <img src="./airbnb.svg" alt="Airbnb" />
                </li>
                <li>
                  <img src="./apple.svg" alt="Apple" />
                </li>
                <li>
                  <img src="./spark.svg" alt="Spark" />
                </li>
                <li>
                  <img src="./samsung.svg" alt="Samsung" />
                </li>
                <li>
                  <img src="./quora.svg" alt="Quora" />
                </li>
                <li>
                  <img src="./sass.svg" alt="Sass" />
                </li>
              </ul>
            </div>
            {/* <!-- End: Logo Carousel animation --> */}

          </div>

        </div>
      </main>

      {/* <Text /> */}

      <div className="py-10 flex container mx-10 items-center justify-center flex-col w-fit">
        <h1 className="text-center text-5xl font font-ubuntu">Apps, websites, <br /> logos & more</h1>
        <div className="flex  gap-3 py-2 mt-10">
          <button class="styled-button">
            Landing Page
          </button>
          <button class="styled-button ">
            Mobile pps
          </button>
          <button class="styled-button">
            Logos
          </button>
          <button class="styled-button">
            Website
          </button>
          <button class="styled-button">
            Shopify
          </button>
          <button class="styled-button">
            E-commerce
          </button>

        </div>
        <div className="flex  gap-3 py-2">
          <button class="styled-button">
            Wordpress
          </button>
          <button class="styled-button ">
            Mobile pps
          </button>
          <button class="styled-button">
            Logos
          </button>
          <button class="styled-button">
            Website
          </button>
          <button class="styled-button">
            + more
          </button>

        </div>


        <div className="container mx-auto flex justify-center flex-wrap w-fit gap-6 py-10 ">
          {/* Design 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]">
            <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65de8520199fcae74c1db060_Frame%202344.png" alt="" />
          </div>

          {/* Design 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]">
            <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65e112edf8bfcb130b4490f7_Frame%201171274440.png" alt="" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]">
            <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65de81e026cbab04c128a3a6_Frame%202347.png" alt="" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]">
            <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65e3a4f93c4eb16d514fc6e1_Frame%201171274442.png" alt="" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]">
            <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65de80fb4e572abdba25e2a3_Frame%202345.png" alt="" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem]">
            <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65e112ed03099a681af87b5c_Frame%201171274441.png" alt="" />
          </div>

        </div>
      </div>

    <div>
      <Cards />
    </div>

      <div className="flex items-center justify-center py-10">
        <FAQ />

      </div>

      <Footer />

      {/* Footer Section */}
      {/* <footer className="text-center py-6 bg-gray-900">
        <p className="text-gray-400">&copy; 2025 Ngendog. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default App;
