"use client";
import { CartContext, cartContext } from "../../../../Context/index";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { books } from "../../../../components/constants/index";

const BookId = ({params}) => {
   useEffect(()=>{
    if(findBook){
      setBook(findBook)
    }
   },[])
  const { handleAddFav } = useContext(CartContext);
  const [book, setBook] = useState();
  const [Teste, setTest] = useState([]);
   const findBook = books.find((book)=> book.id === params.id)
   
  

  return (
    <div className="px-4 py-10 w-full h-full">
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
            <span
              onClick={() => handleAddFav(book)}
              className="cursor-pointer"
            >
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
            <button className="w-[50%] bg-white px-10 py-4 text-black border-[1px] border-black rounded-md uppercase text-sm transition duration-700 ease-in-out  hover:bg-black hover:text-white ">
              Comprar Ediçao Fisica
            </button>
            <button className="w-[50%] bg-batext-black border-[1px] border-black px-10 py-4 text-black rounded-md uppercase text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white">
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
