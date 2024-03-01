"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = ({children}) => {
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
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",
        variableWidth: true,
        centerMode: false,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return ( 
        <Slider {...settings} className="w-full h-full">
            {children}
        </Slider>
     );
}
 
export default Carrousel;