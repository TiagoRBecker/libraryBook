"use client";
import { CartContext, cartContext } from "../../../../Context/index";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { books } from "../../../../components/constants/index";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const BookId = ({ params }) => {
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

  useEffect(() => {
    if (findBook) {
      setBook(findBook);
    }
  }, []);
  const { handleAddFav } = useContext(CartContext);
  const [cart, setCart] = useState(books);
  const [book, setBook] = useState();
  const [showInforation, setShowInformation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const findBook = books.find((book) => book.id === params.id);
  const router = useRouter();
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleGoToCart = () => {
    router.push("/cart");
    setShowModal(false);
  };

  const removeItem = (book) => {
    const pos = cart.findIndex((item) => item.id === book.id);
    const newBook = cart.filter((value, index) => index !== pos);
    setCart([...newBook]);
    return;
  };
  const showInfo = () => {
    setShowInformation(!showInforation);
  };
  const date = new Date();
  return (
    <section className="w-full h-full py-4 ">
      <div className="px-4 py-10 w-full h-full relative mt-10">
        <div
          className={
            showModal
              ? "w-full h-screen bg-black bg-opacity-45 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center py-2"
              : "hidden"
          }
        >
          <div className="w-[600px] h-full bg-white rounded-md relative">
            <p
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </p>
            <h1 className="py-4 text-xl px-4">
              Total de item no carrinho {cart.length}
            </h1>
            <div className="flex  flex-col gap-2 px-4  ">
              <div className="w-full h-[350px]   overflow-auto">
                {cart.map((book, index) => (
                  <div className="flex border-b-2 border-gray-200 py-5 ">
                    <div className="w-[60%] flex flex-col gap-2">
                      <div className="flex gap-2">
                        <img
                          src={book.cover}
                          alt={book.name}
                          className="w-20 h-20"
                        />
                        <div className="flex flex-col gap-2 px-2">
                          <p>{book.name}</p>
                          <span className="text-sm px-2 py-[1px] bg-black text-white rounded-xl w-[80px] flex items-center justify-center">
                            Edições
                          </span>
                          <p>Volume: {book.vol}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[40%] flex flex-col px-2  ">
                      <p
                        className=" w-full flex items-center justify-end cursor-pointer"
                        onClick={() => removeItem(book)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-right"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </p>
                      <p className="flex items-center justify-end pt-10">
                        {" "}
                        {book.price?.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center py-4 gap-4">
                <button
                  onClick={handleGoToCart}
                  className="w-[50%] bg-batext-black border-[1px] border-black px-10 py-4 text-black rounded-md uppercase text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white"
                >
                  Comprar Agora
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-[50%] bg-batext-black border-[1px] border-black px-10 py-4 text-black rounded-md uppercase text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white"
                >
                  Continuar Comprando
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:flex-row">
          <div className="w-full  md:w-[40%] h-full flex items-center justify-center   ">
            <img
              src={book?.cover}
              alt={book?.vol}
              className="w-full lg:w-[400px] h-[550px] object-fill  "
            />
          </div>
          <div className="w-full  lg:w-[60%] px-5 flex flex-col gap-2 ">
            <h1 className="text-2xl text-gray-500 uppercase">{book?.name}</h1>
            <h2 className="text-gray-400 ">Edição Volume {book?.vol}</h2>
            <div className="w-full  flex items-center jus gap-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </p>
              <span
                onClick={() => handleAddFav(book)}
                className="cursor-pointer"
              >
                Adiconar aos Favoritos
              </span>
            </div>
            <p className="w-full ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              vero, vel in molestiae quam porro, ex odit atque odio nemo enim
              ut? Perspiciatis hic quo tenetur odit eaque veritatis dignissimos!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              vero, vel in molestiae quam porro, ex odit atque odio nemo enim
              ut? Perspiciatis hic quo tenetur odit eaque veritatis dignissimos!
            </p>
            <div className="flex flex-col gap-1 py-4">
              <div className="flex items-center gap-2 text-black">
                <h2>Consulte mais informaçoes</h2>
                <p onClick={showInfo} className=" cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </p>
              </div>
              {showInforation && (
                <div className="">
                  <p>Logica para maiores informaçoes </p>
                </div>
              )}
            </div>
            <div className="w-[20%] flex  items-center justify-center py-4">
              <h1 className="text-[#14b7a1] font-bold px-4 border-b-2 border-[#14b7a1] text-xl">
                AVULSO
              </h1>
            </div>
            <p className="text-[9px]">
              Saiba mais sobre os produto digital 3d Plash
            </p>
            <div className="w-full h-full grid-cols-1 gap-2  sm:grid sm:grid-cols-2 ">
              <div className="w-full mt-2  border-[1px] border-gray-400 py-1 px-1 ">
                <button
                  onClick={handleShowModal}
                  className="w-full bg-[#14b7a1] px-10 py-4 text-white border-[1px]  rounded-md uppercase text-sm transition duration-700 ease-in-out  hover:bg-black hover:text-white "
                >
                  Comprar
                </button>
                <div className="w-full flex items-center py-2 justify-around border-b-[1px] border-gray-400">
                  <div className="flex items-center">
                    <p className="bg-slate-400 rounded-xl w-16 px-1 h-6 text-white ">
                      10%{" "}
                    </p>
                    <p className="bg-[#14b7a1] h-6 uppercase px-2 text-white rounded-xl -ml-6">
                      DVL
                    </p>
                  </div>
                  <div className="">
                    <span>R$ 198,00</span>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <ul className="flex flex-col py-2 gap-1 ">
                    <li className="flex items-center text-[11px] gap-2">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-[#14b7a1]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                          />
                        </svg>
                      </p>
                      <p>Acesso Imeditado ao volume digital 3D</p>
                    </li>
                    <li className="flex items-center text-[11px] gap-2">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-[#14b7a1]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                          />
                        </svg>
                      </p>
                      <p>Acesso Imeditado ao volume digital 3D</p>
                    </li>
                    <li className="flex items-center text-[11px] gap-2">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-[#14b7a1]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                          />
                        </svg>
                      </p>
                      <p>Acesso Imeditado ao volume digital 3D</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full mt-2  border-[1px] border-gray-400 py-1 px-1">
                <button
                  onClick={handleShowModal}
                  className="w-full bg-[#14b7a1]   border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white"
                >
                  Comprar
                </button>
                <div className="w-full flex items-center py-2 justify-around border-b-[1px] border-gray-400">
                  <div className="flex items-center">
                    <p className="bg-slate-400 rounded-xl w-16 px-1 h-6 text-white ">
                      10%{" "}
                    </p>
                    <p className="bg-[#14b7a1] h-6 uppercase px-2 text-white rounded-xl -ml-6">
                      DVL
                    </p>
                  </div>
                  <div className="">
                    <span>R$ 198,00</span>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <ul className="flex flex-col py-2 gap-1 ">
                    <li className="flex items-center text-[11px] gap-2">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-[#14b7a1]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                          />
                        </svg>
                      </p>
                      <p>Acesso Imeditado ao volume digital 3D</p>
                    </li>
                    <li className="flex items-center text-[11px] gap-2">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-[#14b7a1]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                          />
                        </svg>
                      </p>
                      <p>Acesso Imeditado ao volume digital 3D</p>
                    </li>
                    <li className="flex items-center text-[11px] gap-2">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-[#14b7a1]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                          />
                        </svg>
                      </p>
                      <p>Acesso Imeditado ao volume digital 3D</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <h1 className="py-4 uppercase text-black font-bold">Nesta Edição</h1>
          <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {books.map((book, index) => (
              <div
                className="w-full h-full flex flex-col  shadow-md px-4 py-2 rounded-md "
                key={index}
              >
                <div className="w-full py-4">
                  <h2 className="text-black pt-1 ">
                    <span className="text-[#14b7a1]">
                      Plash MagazineEdição{" "}
                    </span>
                    | Volume{book.vol}
                  </h2>

                  <h1 className="w-full font-bold text-lg truncate text-black pt-1 uppercase">
                    {book.name}
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row">
                  <p className="w-full md:w-[60%] h-[130px] overflow-hidden text-base text-left text-gray-600 pt-1 px-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima dolorem rem provident eius fugit nesciunt, odit
                    eligendi modi illum itaque quisquam ducimus beatae vitae qui
                    numquam aperiam quos illo blanditiis!
                  </p>
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-full h-full   md:w-[40%] md:h-[130px] object-fill "
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <p className="tex-base text-gray-400">
                      {date.toLocaleString("pt-br")}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    <p className="tex-base text-gray-400">Guardar</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" py-20 w-full h-full px-4">
          <div className="flex  w-[80%] md:w-[96%] items-center justify-between">
          <h1 className="uppercase font-bold text-black">Edições Recentes</h1>
          <Link href={`/magazine`}>
            <h3 className="text-[#14B7A1] ">Ver todas</h3>
            </Link>
          </div>
            <Slider
             
              {...settings}
              className="w-full h-full mx-auto "
            >
             {books?.map((book, index) => (
              <div className="w-full p-4 " key={index} >
                <div
                  className="w-full  h-full flex flex-col shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] "
                 
                >
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-full h-[270px] object-fill "
                  />
                  <div className="px-2 py-2">
                    <h2 className="text-gray-400 pt-1 ">
                      Edição Volume {book.vol}
                    </h2>
                    <p className="w-full text-base truncate text-gray-600 ">
                      {book.name}
                    </p>
                    <p className="w-full text-base truncate text-gray-600 ">
                      {book.capa}
                    </p>
                  </div>
                </div>
              </div>
          ))}
            </Slider>
        </div>

        <ToastContainer />
      </div>
    </section>
  );
};

export default BookId;
