"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "./constants";


const Carrousel = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="absolute -top-5 right-8" onClick={onClick}>
        {/* Ícone SVG personalizado */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500  cursor-pointer"
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
          className="w-5 h-5 text-gray-500  cursor-pointer"
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
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className=" py-10 w-full h-full">
      {categories.map((category, index) => (
        <div className="relative py-4">
          <div
            key={index}
            className="flex w-[96%] items-center justify-between px-4"
          >
            <h1>{category.name}</h1>
            <h3>Ver todas</h3>
          </div>
          <Slider key={index} {...settings} className="w-full h-[400px] ">
            {category.books?.map((book, bookIndex) => (
              <div className="slick-slide-wrapper p-2" key={bookIndex}>
                <div
                  className="w-full  px-2 py-2 h-full flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
                  key={bookIndex}
                >
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-full h-[289px] object-fill "
                  />
                  <h2 className="text-gray-400 pt-1 ">
                    Edição Volume {book.vol}
                  </h2>
                  <p className="w-full text-base truncate text-gray-600 pt-5">
                    {book.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </section>
  );
};

export default Carrousel;