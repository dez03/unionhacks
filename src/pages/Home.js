import React from 'react'
import HomeSVG from "../images/homeSVG.svg";
import Navbar from "../components/Navbar"
import FAQ from "../components/FAQ";
import About from "../components/About" 
// import OurTeams from "../components/OurTeams";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";
import "./Home.css";
import Team from "../components/Team"
// import Merch from "../components/Merch";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div className="relative ">
        <Navbar />
        <main>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div className="  pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    <h1 className="mt-4 font-bold tracking-tight sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block text-5xl md:text-7xl text-white">
                        UnionHacks
                      </span>
                    </h1>

                    <span className="text-2xl text-[#0e9fe1] pb-4 ">
                      Think it. Code it. Win it.
                    </span>

                    <span className="block text-3xl text-white mt-5 sm:mt-0">
                      April 22, 2023
                    </span>

                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"></p>
                    <div className="mt-10 sm:mt-12">
                      <form
                        action="#"
                        className="sm:mx-auto sm:max-w-xl lg:mx-0"
                      >
                        <div className="lg:flex">
                          <div className="mt-3 sm:mt-0 ml-0">
                            <a
                              href="https://forms.gle/bbWAXTxQvQUpz8hu5"
                              target="_blank"
                              className="bouncy inline-flex items-center rounded-md border border-transparent bg-[#0e9fe1] px-4 py-2 text-base font-medium text-white hover:bg-[#0c8fca]"
                            >
                              Pre-Register
                            </a>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Registration will open in a few weeks. Please
                          pre-register so you can be notified when registration
                          opens. You must be a student within the Township of
                          Union Public Schools, in Union County Vocational
                          Technical Schools, or in 8th grade at Burnet and
                          Kawameeh Middle School.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full hidden lg:block lg:ml-24 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-full lg:max-w-none"
                      src={HomeSVG}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>

      {/* ABOUT SECTION */}
      <About />
      <FAQ />
      <Schedule />
      <Sponsors />
      <Team />
      {/* <Merch /> */}
      <Footer />
    </div>
  );
}

export default Home