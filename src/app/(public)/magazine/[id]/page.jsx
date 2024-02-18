"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CartContext, cartContext } from "../../../../Context/index";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { readingTime } from "reading-time-estimator";
import "react-toastify/dist/ReactToastify.css";
import MagazineID from "../../../../components/MagazineID"
const BookId = ({ params }) => {
  const { handleAddFav, cart, addToCart, removeToCart } =useContext(CartContext);
  const [magazine, setMagazine] = useState([]);
  const [showInforation, setShowInformation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lastMagazine, setLastMagazines] = useState([]);
  const [ loading , setLoading] = useState(true)
  
  const reading = (text) => {
    const result = readingTime(text, 10, "pt-br");
    return result.minutes;
  };
  reading("ola tudo bem queria tester");
 

  const router = useRouter();
  const handleShowModal = (magazine) => {
    addToCart(magazine);
    setShowModal(!showModal);
  };
  const handleGoToCart = () => {
    router.push("/cart");
    setShowModal(false);
  };

  const removeItem = (book) => {
    removeToCart(book);
    return;
  };

  
  
  const filterMagazine = lastMagazine.filter(
    (mag) => mag.id !== Number(params.id)
  );
  const total =
    cart?.reduce((acc, currentValue) => acc + currentValue.price, 0) || 0;
 
  return (
    <section className="w-[90%] min-h-screen h-full mt-16 py-10 px-4 mx-auto">
      <div
        className={`${
          showModal
            ? "w-full  h-screen fixed bg-black bg-opacity-45 z-50  top-0 left-0 right-0 bottom-0 flex justify-center py-10 "
            : "hidden"
        }`}
      >
        <div className="w-full md:w-[600px] max-h-[100vh] fixed top-16 bg-white rounded-md overflow-y-auto">
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
          <h1 className="py-4 text-xl px-4 text-center text-gray-400">
            Total de item no carrinho{" "}
            <span className="text-[#14b7a1]">{cart.length}</span>
          </h1>
          <div className=" flex items-center justify-center flex-col gap-2  ">
            <div className="w-full h-[300px] border-b-2 border-[#14b7a1]   overflow-auto">
              {cart.map((book, index) => (
                <div
                  className="flex border-b-2 border-gray-200 py-5 px-4 "
                  key={index}
                >
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="w-[30%]">
                        <img
                          src={book.cover}
                          alt={book.name}
                          className="w-20 h-20"
                        />
                      </div>
                      <div className="w-[40%]   flex flex-col gap-2 px-2">
                        <p>{book.name}</p>
                        <span className="text-sm px-2 py-[1px] bg-[#14b7a1] uppercase text-white text-[12px] rounded-xl w-[80px] flex items-center justify-center">
                          Edição
                        </span>
                        <p>Volume: {book.vol}</p>
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
                          {book.price &&
                            book.price?.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-between  px-4">
              <h2 className="text-gray-300">Divisão de Lucro 200%</h2>
              <p className="text-base text-[#14b7a1]">
                {total?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className="w-full flex items-center justify-between py-2 px-4">
              <h2 className="text-black font-bold">
                Total{" "}
                <span className="text-gray-300 font-light">
                  (incluindo impostos)
                </span>
              </h2>
              <p className="font-bold text-[#14b7a1]">
                {total?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center  px-4 py-1 gap-4">
              <button
                onClick={handleGoToCart}
                className="w-full md:w-[50%] bg-[#14b7a1] border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm  "
              >
                Comprar Agora
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full md:w-[50%] bg-[#14b7a1] border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm "
              >
                Continue Comprando
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Modal*/}
      <MagazineID id={params.id} handleAddFav={handleAddFav} handleShowModal={handleShowModal} handleShowModalFisica={handleShowModal} />
      <ToastContainer />
    </section>
  );
};

export default BookId;
