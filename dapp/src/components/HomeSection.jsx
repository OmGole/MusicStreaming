import React from "react";
import { Link } from "react-router-dom";
// import NFTCard from "./NFTCard";

const Genres = [
  {
    id: 1,
    name: "Nathan Evans-Wellerman",
    href: "#",
    imageSrc: require("../assets/img/classical.jpg"),
    imageAlt: "Sea Shanty",
    price: "4.75",
  },
  {
    id: 2,
    name: "One Piece-Luffy's Fierce Attack",
    href: "#",
    imageSrc: require("../assets/img/rock.jpg"),
    imageAlt: "One Piece",
    price: "2.5",
  },
  {
    id: 3,
    name: "Logic-Young Sinatra III",
    href: "#",
    imageSrc: require("../assets/img/hiphop.jpg"),
    imageAlt: "YSIII",
    price: "8",
  },
  {
    id: 4,
    name: "Logic-Young Sinatra IV",
    href: "#",
    imageSrc: require("../assets/img/pop.jpg"),
    imageAlt: "YSIV",
    price: "6.8",
  },
  {
    id: 5,
    name: "Eminem-Not Afraid",
    href: "#",
    imageSrc: require("../assets/img/electronic.jpg"),
    imageAlt: "Not Afraid",
    price: "25",
  },
  {
    id: 6,
    name: "Eminem-Till I Collapse",
    href: "#",
    imageSrc: require("../assets/img/indian.jpg"),
    imageAlt: "Till I Collapse",
    price: "3.92",
  },
  {
    id: 7,
    name: "Six Days(Remix)",
    href: "#",
    imageSrc: require("../assets/img/country.jpg"),
    imageAlt: "Fast And Furious",
    price: "12",
  },
  {
    id: 8,
    name: "Rave",
    href: "#",
    imageSrc: require("../assets/img/jazz.jpg"),
    imageAlt: "Rave",
    price: "4.33",
  },
];

const HomeSection = () => {
  return (
    <div className="container-md mx-auto">
      <div className="grid grid-cols-4 gap-4 ">
        {Genres.map((genre) => (
          <div className="h-[350px] w-[270px] bg-gray-800 mx-auto mt-20 rounded-xl">
            <Link to="/song">
              <img
                src={genre.imageSrc}
                alt={genre.imageAlt}
                className="w-[240px] h-[200] ml-[13px] absolute mt-[20px] rounded-xl"
              />

              <div>
                <p className="text-white font-bold ml-5 text-[20px] pt-[230px]">
                  {genre.name}
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
                <p className="font-bold text-white mt-[18px] ml-[10px]">
                  {genre.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
