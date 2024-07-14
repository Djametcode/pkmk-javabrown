import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function HeroComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagelist = [
    {
      image: "/hero.jpg",
    },
    {
      image: "/hero0.jpg",
    },
    {
      image: "/hero2.jpg",
    },
    {
      image: "/hero3.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === imagelist.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div
      id="hero"
      className=" font-raleway max-sm:h-full max-sm:mb-16 h-[600px] flex max-sm:flex-col justify-between items-center pt-16"
    >
      <div className=" basis-1/2">
        <div className=" flex flex-col gap-5 max-sm:gap-7 items-start w-[300px]">
          <h1 className=" max-sm:text-2xl text-4xl font-extrabold">
            Beli Brownies ? <span className=" text-[#f29b16]">Disini saja</span>
          </h1>
          <div className=" md:hidden w-full h-[300px]">
            <img
              className=" w-full h-full rounded-3xl object-cover"
              src={imagelist[currentIndex].image}
              alt=""
            />
          </div>
          <p className=" text-left text-sm text-[#757575]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae recusandae non earum saepe minima impedit tempore
            praesentium deserunt dolor! Vitae, soluta omnis. Labore facere
            officiis totam nesciunt voluptatum ad!
          </p>
          <Button
            variant="contained"
            sx={{ bgcolor: "#ff9b04", color: "white" }}
            className=" animate-bounce flex w-[200px] h-[50px] rounded-2xl font-extrabold"
          >
            <Link
              to={"https://wa.me/6285290376771"}
              className=" flex items-center justify-center w-full h-full"
            >
              Pesan Sekarang
            </Link>
          </Button>
        </div>
      </div>
      <div className=" max-sm:hidden basis-1/2 h-[700px] flex items-center justify-center">
        <div className=" w-[500px] h-[500px]">
          <img
            className=" w-full h-full object-cover rounded-full"
            src="/hero0.jpg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}
