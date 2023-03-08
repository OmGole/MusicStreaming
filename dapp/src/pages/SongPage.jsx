import React from "react";
import NavBar from "../components/NavBar";
import NFTCard from "../components/NFTCard";
import Player from "../components/Player";

const SongPage = () => {
  return (
    <div>
      <NavBar />
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white py-5">
              <h2 className="mb-none">LEGEND</h2>
              {/* LEGEND */}
              <br class="hidden lg:inline-block" />
              <h2 className="">BY TEVVEZ</h2>
              {/* BY TEVVEZ */}
            </h1>

            <div class="flex justify-center">
              <button className="justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded-xl"
              alt="hero"
              src="https://c0.wallpaperflare.com/preview/285/1009/176/concery-wallpaper-festival-party.jpg"
            />
          </div>
        </div>
      </section>

      {/* Description  */}

      <section class="text-gray-600 bg-blue-300 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div className="flex">
            <div class="flex flex-wrap -m-12">
              <div class="p-12 md:w-1/2 flex flex-col items-start">
                <div className="flex flex-row">
                  <h4 className="text-black font-bold text-3xl">Tevvez</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ff00e1"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                  <button className="pl-4">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-md font-medium tracking-widest ">
                      Follow
                    </span>
                  </button>
                </div>

                <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                  Roof party normcore before they sold out, cornhole vape
                </h2>
                <p class="leading-relaxed mb-8">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug
                  you probably haven't heard of them hexagon kickstarter craft
                  beer pork chic.
                </p>
              </div>
            </div>

            {/* NFT Card */}

            <div className="h-[400px] w-[550px] bg-gray-800 mx-auto mt-15 mr-40 rounded-xl">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273174e964b6fdf664e564b4f62"
                alt="Electronic"
                className="w-[230px] h-[200] ml-[13px] absolute mt-[20px] rounded-xl"
              />

              <div>
                <p className="text-white font-bold ml-5 text-[20px] pt-[270px]">
                  Electronic
                </p>
                {/* <p className="text-gray-400 ml-5">
              6 mahine ruk meri body banne wali hai
            </p> */}
              </div>
              <div className="flex">
                {/* Ethereum icon */}
                <svg
                  width="11"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[15px] h-[20px] ml-5 mt-5"
                >
                  <path
                    d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#00FFF8"
                  />
                </svg>
                <p className="font-bold text-white mt-[16px] ml-[10px]">
                  0.041 ETH
                </p>
              </div>
              <div className="items-center justify-center">
                <button className="pl-7 pt-3">
                  <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-sm font-medium tracking-widest ">
                    Buy
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Player className="fixed" />
    </div>
  );
};

export default SongPage;
