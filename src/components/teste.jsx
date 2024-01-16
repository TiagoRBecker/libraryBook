"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "./constants";
import Link from "next/link";


const Carrousel = () => {
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
          slidesToScroll: 3,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className=" py-10 w-full h-full">
      {categories.map((category, index) => (
        <div className="relative py-9">
          <div
            key={index}
            className="flex w-[80%] mx-auto items-center justify-between px-4"
          >
            <h1>{category.name}</h1>
            <Link href={`/categories/${category.id}`}>
            <h3 className="text-[#14B7A1] ">Ver todas</h3>
            </Link>
          </div>
          <Slider key={index} {...settings} className="w-full h-full mx-auto ">
            {category.books?.map((book, bookIndex) => (
              <div className="w-full p-4 " key={bookIndex}>
                <div
                  className="w-full  px-2 py-2 h-full flex flex-col shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] "
                  key={bookIndex}
                >
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-[200px] h-[270px] object-fill "
                  />
                  <h2 className="text-gray-400 pt-1 ">
                    Edição Volume {book.vol}
                  </h2>
                  <p className="w-full text-base truncate text-gray-600 pt-5">
                    {book.name}
                  </p>
                  <p className="w-full text-base truncate text-gray-600 pt-5">
                    {book.capa}
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
