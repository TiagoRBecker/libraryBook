"use client";
import { CartContext, cartContext } from "../../../../Context/index";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { books } from "../../../../components/constants/index";
import { useRouter } from "next/navigation";
const BookId = ({ params }) => {
  useEffect(() => {
    if (findBook) {
      setBook(findBook);
    }
  }, []);
  const { handleAddFav } = useContext(CartContext);
  const [cart, setCart] = useState(books);
  const [book, setBook] = useState();
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
    return 
  };
  return (
    <div className="px-4 py-10 w-full h-full relative">
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
      <div className="flex">
        <div className="w-[40%] h-full flex items-center justify-center   ">
          <img
            src={book?.cover}
            alt={book?.vol}
            className="w-[400px] h-[420px] object-fill "
          />
        </div>
        <div className="w-[60%] px-5 flex flex-col gap-2">
          <h1 className="text-2xl text-gray-500 uppercase">{book?.name}</h1>
          <h2 className="text-gray-400 ">Edição Volume {book?.vol}</h2>
          <div className="flex items-center gap-2">
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
            <span onClick={() => handleAddFav(book)} className="cursor-pointer">
              Adiconar aos Favoritos
            </span>
          </div>
          <p className="w-full text-left ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            vero, vel in molestiae quam porro, ex odit atque odio nemo enim ut?
            Perspiciatis hic quo tenetur odit eaque veritatis dignissimos! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Tempore vero,
            vel in molestiae quam porro, ex odit atque odio nemo enim ut?
            Perspiciatis hic quo tenetur odit eaque veritatis dignissimos!
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-gray-400">País: Brasil</p>
            <p className="text-gray-400">Editora: Plash</p>
            <p className="text-gray-400">Língua: Portuguesa</p>
          </div>

          <div className="w-full flex items-center justify-center py-2 gap-2">
            <button
              onClick={handleShowModal}
              className="w-[50%] bg-white px-10 py-4 text-black border-[1px] border-black rounded-md uppercase text-sm transition duration-700 ease-in-out  hover:bg-black hover:text-white "
            >
              Comprar Ediçao Fisica
            </button>
            <button
              onClick={handleShowModal}
              className="w-[50%] bg-batext-black border-[1px] border-black px-10 py-4 text-black rounded-md uppercase text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white"
            >
              Comprar Ediçao Digital
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BookId;
