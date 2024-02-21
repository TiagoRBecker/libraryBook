"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartContext } from "../../../../Context/index";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../../../utils/api";
import { readingTime } from "reading-time-estimator";
import Loading from "../../../loading"
const BookId = ({ params }) => {
  const { handleAddFav, cart, addToCart, removeToCart } =useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [data,setData]= useState()
  const [ loading,setLoading]= useState(true)
  useEffect(()=>{
    getmagazineId()
  })
  const reading = (text) => {
    const result = readingTime(text, 10, "pt-br");
    return result.minutes;
  };
  const getmagazineId = async () => {
   
    try {
      const getMagazine = await fetch(`${baseUrl}/magazine/${params.id}`, {
        method: "GET",
        cache: "no-cache",
      });
      const response = await getMagazine.json();
      console.log(response)
      setData(response)
      setLoading(false)
      return response;
      
    
    } catch (error) {
      console.error("Error fetching magazine:", error);
    }
  };


  const handleShowModal = (magazine) => {
    addToCart(magazine);
    setShowModal(!showModal);
  };
 

  const removeItem = (book) => {
    removeToCart(book);
    return;
  };

  const total =
    cart?.reduce((acc, currentValue) => acc + currentValue.price, 0) || 0;
  if(loading){
    return(
      <section className="w-full h-screen">
        <Loading/>
      </section>
    )
  }
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
                           Number(book.price / 100)?.toLocaleString("pt-br", {
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
                
                className="w-full md:w-[50%] bg-[#14b7a1] border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm  "
              >
                 <Link href={"/cart"}>
                Comprar Agora
                </Link>
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
      <div className="w-full flex flex-col justify-center lg:flex-row">
        <div className="w-full  md:w-[40%] h-full flex     ">
          <img
            src={data?.cover}
            alt={data?.volume}
            className="w-full lg:w-[400px] h-[550px] object-fill  "
          />
        </div>
        <div className="w-full  lg:w-[60%] h-full px-5 flex flex-col gap-2 ">
          <h1 className="text-2xl text-gray-500 uppercase">{data?.name}</h1>
          <h2 className="text-gray-400 ">Edição Volume {data?.volume}</h2>
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
            <span onClick={() => handleAddFav(book)} className="cursor-pointer">
              Adiconar aos Favoritos
            </span>
          </div>
          <p className="w-full h-full text-ellipsis overflow-hidden  ">
            {data?.description}
          </p>

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
                onClick={() => handleShowModal(data)}
                className="w-full bg-[#14b7a1] px-10 py-4 text-white border-[1px]  rounded-md uppercase text-sm transition duration-700 ease-in-out  hover:bg-black hover:text-white "
              >
                Comprar Digital
              </button>
              <div className="w-full flex items-center py-2 justify-around border-b-[1px] border-gray-400">
                <div className="flex items-center">
                  <p className="bg-slate-400 rounded-xl w-[70px] px-1 h-6 text-white ">
                    200%{" "}
                  </p>
                  <p className="bg-[#14b7a1] h-6 uppercase px-2 text-white rounded-xl -ml-6">
                    DVL
                  </p>
                </div>
                <div className="">
                  <span>
                    {Number(data?.price / 100).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
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
                onClick={() => handleShowModalFisica(data)}
                className="w-full bg-[#14b7a1]   border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white"
              >
                Comprar
              </button>
              <div className="w-full flex items-center py-2 justify-around border-b-[1px] border-gray-400">
                <div className="flex items-center">
                  <p className="bg-slate-400 rounded-xl w-[70px] px-1 h-6 text-white ">
                    200%{" "}
                  </p>
                  <p className="bg-[#14b7a1] h-6 uppercase px-2 text-white rounded-xl -ml-6">
                    DVL
                  </p>
                </div>
                <div className="">
                  <span>
                    {Number(data?.price / 100).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
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
      <div>
        {data?.article && data?.article.length > 0 && (
          <div className="w-full px-4">
            <h1 className="py-4 uppercase text-black font-bold">
              Artigos nesta Edição
            </h1>

            <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 py-5">
              {data?.article?.map((article, index) => (
                <Link
                  href={`/article/${article.id}?status=${article.status}`}
                  key={index}
                >
                  <div
                    className="w-full h-full flex flex-col  shadow-md px-4 py-2 rounded-md "
                    key={index}
                  >
                    <div className="w-full py-4">
                      <span className="text-[#14b7a1] text-base">
                        {data.company}
                      </span>
                      <h2 className="text-gray-400  text-base pt-1 ">
                        Volume {article.volume}
                      </h2>

                      <h1 className="w-full font-bold text-sm truncate text-gray-400 pt-1 uppercase">
                        {article.name}
                      </h1>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <p className="w-full md:w-[70%] h-[130px]  overflow-hidden text-base text-left text-gray-600 pt-1 px-2">
                        {article.description}
                      </p>
                      <img
                        src={article.cover}
                        alt={article.name}
                        className="w-full h-full   md:w-[30%] md:h-[130px] object-cover "
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
                          {reading(data.description)} minutos
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
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full py-20 mx-auto h-full px-4">
        
      </div>
      <ToastContainer />
    </section>
  );
};

export default BookId;
