"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { baseUrl } from "../../utils/api";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
const Carrousel = () => {
  useEffect(() => {
    getCategories();
  }, []);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCategories = async () => {
    const getCat = await fetch(`${baseUrl}/categories`, {
      method: "GET",
      cache: "no-cache",
    });
    const response = await getCat.json();
    setCategories(response);
   setLoading(false)
    return response;
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="absolute -top-5 right-8 " onClick={onClick}>
        {/* Ícone SVG personalizado */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500  cursor-pointer hover:text-[#14B7A1]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="absolute -top-5 right-4" onClick={onClick}>
        {/* Ícone SVG personalizado */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500  cursor-pointer hover:text-[#14B7A1]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    );
  }

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <section className="py-10 w-full h-full">
      {categories.map((category, index) => (
        <div className="w-[90%] h-full  mx-auto" key={index}>
          <div className="w-full flex  md:w-full  items-center justify-between px-4">
            <h1 className="text-xl font-bold py-4">{category.name}</h1>
            <Link href={`/categorias/${category.id}`}>
              <h3 className="pr-11 text-[#14B7A1] md:text-[#14B7A1] md:pr-11">
                Ver todas
              </h3>
            </Link>
          </div>

          {category.magazine.length > 4 ? (
            <Slider key={index} {...settings} className="w-full  ">
              {category.magazine.map((magazine, magazineIndex) => (
                <Link href={`/magazine/${magazine.id}`} className="mb-5">
                  <div
                    key={magazineIndex}
                    className=" w-[90%] h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition ease-in-out delay-150 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                  >
                    <img
                      src={magazine.cover}
                      alt={magazine.name}
                      className="w-full h-[270px] object-fill"
                    />
                    <h1 className="text-black font-semibold pl-1">
                      {magazine.name}
                    </h1>
                    <span className="pl-1">Edição {magazine.volume}</span>
                  </div>
                </Link>
              ))}
            </Slider>
          ) : (
            <div className=" w-full flex items-center justify-center text-base text-gray-400">Nenhum revista cadastrada para a categoria</div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Carrousel;
