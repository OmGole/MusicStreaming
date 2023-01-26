import React from "react";

const Genres = [
  {
    id: 1,
    name: "Classical",
    href: "#",
    imageSrc: require("../assets/img/classical.jpg"),
    imageAlt: "Classical",
  },
  {
    id: 2,
    name: "Rock",
    href: "#",
    imageSrc: require("../assets/img/rock.jpg"),
    imageAlt: "Rock",
  },
  {
    id: 3,
    name: "Hip-Hop",
    href: "#",
    imageSrc: require("../assets/img/hiphop.jpg"),
    imageAlt: "Hip-Hop",
  },
  {
    id: 4,
    name: "Pop",
    href: "#",
    imageSrc: require("../assets/img/pop.jpg"),
    imageAlt: "Pop",
  },
  {
    id: 5,
    name: "Electronic",
    href: "#",
    imageSrc: require("../assets/img/electronic.jpg"),
    imageAlt: "Electronic",
  },
  {
    id: 6,
    name: "Indian",
    href: "#",
    imageSrc: require("../assets/img/indian.jpg"),
    imageAlt: "Indian",
  },
  {
    id: 7,
    name: "Country",
    href: "#",
    imageSrc: require("../assets/img/country.jpg"),
    imageAlt: "Country",
  },
  {
    id: 8,
    name: "Jazz",
    href: "#",
    imageSrc: require("../assets/img/jazz.jpg"),
    imageAlt: "Jazz",
  },
];

const HomeSection = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {Genres.map((genre) => (
            <a key={genre.id} href={genre.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
                <img
                  src={genre.imageSrc}
                  alt={genre.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="text-center font-bold mt-4 text-2xl text-gray-800">
                {genre.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
