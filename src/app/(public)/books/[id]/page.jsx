"use client";
import { books } from "@/components/constants";

const BookId = ({ params }) => {
  const findBook = books.filter((book) => book.id === params.id);

  return (
    <div className="px-4 py-10 w-full h-full">
      {findBook.map((book, index) => (
        <div className="flex" key={index}>
          <div className="w-[40%] h-full flex items-center justify-center   ">
            <img
              src={book.cover}
              alt={book.vol}
              className="w-[400px] h-[420px] object-fill "
            />
          </div>
          <div className="w-[60%] px-5 flex flex-col gap-2">
            <h1 className="text-2xl text-gray-500 uppercase">{book.name}</h1>
            <h2 className="text-gray-400 ">Edição Volume {book.vol}</h2>
            <p className="w-full text-left ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              vero, vel in molestiae quam porro, ex odit atque odio nemo enim
              ut? Perspiciatis hic quo tenetur odit eaque veritatis dignissimos!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              vero, vel in molestiae quam porro, ex odit atque odio nemo enim
              ut? Perspiciatis hic quo tenetur odit eaque veritatis dignissimos!
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
      ))}
    </div>
  );
};

export default BookId;
