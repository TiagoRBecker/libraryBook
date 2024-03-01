"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
const ArticleNav = () => {
  const sliderRef = useRef(null);
 
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "linear",
    variableWidth: true,
    infinite: false,
    
 
  };
  const path = usePathname();
  const handleItemClick = () => {
    // Navegar para o slide correspondente ao item clicado
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(1);
    }
  };
  return (
    <section className="w-full h-full mt-16">
      <nav className="hidden sm:w-full sm:flex items-center justify-center py-10 gap-2 ">
        <ul className="flex gap-4 text-xl">
          <li
            className={
              path === "/explore/free"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"
                : "text-black border-b-2 border-transparent"
            }
          >
            <Link href={"/explore/free"}>Gratuito</Link>
          </li>
          <li
            className={
              path === "/explore/recommendation"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"
                : "text-black border-b-2 border-transparent"
            }
          >
            <Link href={"/explore/recommendation"}>Recomendações</Link>
          </li>
          <li
            className={
              path === "/explore/trending"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"
                : "text-black border-b-2 border-transparent"
            }
          >
            <Link href={"/explore/trending"}>Tendencia</Link>
          </li>
          <li
            className={
              path === "/explore/most-read"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"
                : "text-black border-b-2 border-transparent"
            }
          >
            <Link href={"/explore/most-read"}> Mais Lidos</Link>
          </li>
        </ul>
      </nav>
     <div className="w-full h-full overflow-x-hidden sm:hidden">
      <Slider {...settings} className="w-full h-full "  ref={sliderRef}>
        <div className="px-2" >
          <Link
            href={"/explore/free"}
            className={
              path === "/explore/free"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1] text-left"
                : "text-black border-b-2 border-transparent"
            }
            onClick={() => handleItemClick}
          >
            Gratuito
          </Link>
        </div>
        <div className="px-2">
          <Link
            href={"/explore/recommendation"}
            className={
              path === "/explore/recommendation"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1] "
                : "text-black border-b-2 border-transparent"
            }
            onClick={() => handleItemClick}
          >
            Recomendações
          </Link>
        </div>
        <div className="px-2">
          <Link
            href={"/explore/most-read"}
            className={
              path === "/explore/most-read"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"
                : "text-black border-b-2 border-transparent"
            }
            onClick={() => handleItemClick}
          >
            Mais lidos
          </Link>
        </div>
        <div className="px-2">
          <Link
            href={"/explore/trending"}
            className={
              path === "/explore/trending"
                ? "text-[#14b7a1] border-b-2 border-[#14b7a1] text-[14px] "
                : "text-black border-b-2 border-transparent"
            }
            onClick={() => handleItemClick}
          >
            Tendencias
          </Link>
        </div>
       
      
       
      </Slider>
      </div>
    </section>
  );
};

export default ArticleNav;
