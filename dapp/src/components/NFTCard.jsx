// import React from "react";

// const Genres = [
//   {
//     id: 1,
//     name: "Classical",
//     href: "#",
//     imageSrc: require("../assets/img/classical.jpg"),
//     imageAlt: "Classical",
//   },
//   {
//     id: 2,
//     name: "Rock",
//     href: "#",
//     imageSrc: require("../assets/img/rock.jpg"),
//     imageAlt: "Rock",
//   },
//   {
//     id: 3,
//     name: "Hip-Hop",
//     href: "#",
//     imageSrc: require("../assets/img/hiphop.jpg"),
//     imageAlt: "Hip-Hop",
//   },
//   {
//     id: 4,
//     name: "Pop",
//     href: "#",
//     imageSrc: require("../assets/img/pop.jpg"),
//     imageAlt: "Pop",
//   },
//   {
//     id: 5,
//     name: "Electronic",
//     href: "#",
//     imageSrc: require("../assets/img/electronic.jpg"),
//     imageAlt: "Electronic",
//   },
//   {
//     id: 6,
//     name: "Indian",
//     href: "#",
//     imageSrc: require("../assets/img/indian.jpg"),
//     imageAlt: "Indian",
//   },
//   {
//     id: 7,
//     name: "Country",
//     href: "#",
//     imageSrc: require("../assets/img/country.jpg"),
//     imageAlt: "Country",
//   },
//   {
//     id: 8,
//     name: "Jazz",
//     href: "#",
//     imageSrc: require("../assets/img/jazz.jpg"),
//     imageAlt: "Jazz",
//   },
// ];

// const NFTCard = () => {
//   return (
//     <div className="bg-gray-200">
//       {Genres.map((genre) => (
//         <div className="h-[400px] w-[270px] bg-gray-800 mx-auto mt-20 rounded-xl">
//           <img
//             src={genre.imageSrc}
//             alt={genre.imageAlt}
//             className="w-[240px] h-[200] ml-[13px] absolute mt-[20px] rounded-xl"
//           />

//           <div>
//             <p className="text-white font-bold ml-5 text-[20px] pt-[270px]">
//               {genre.name}
//             </p>
//             {/* <p className="text-gray-400 ml-5">
//               6 mahine ruk meri body banne wali hai
//             </p> */}
//           </div>
//           <div className="flex">
//             {/* Ethereum icon */}
//             <svg
//               width="11"
//               height="18"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-[15px] h-[20px] ml-5 mt-5"
//             >
//               <path
//                 d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
//                 fill="#00FFF8"
//               />
//             </svg>
//             <p className="font-bold text-white mt-[18px] ml-[10px]">
//               0.041 ETH
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NFTCard;
