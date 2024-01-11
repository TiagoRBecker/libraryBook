import Link from "next/link";
import { books } from "../constants";
import Grid from "./gridCard";

const GridCardBox = () => {
  return (
    <Grid>
      {books.map((book, index) => (
        <Link href={`/books/${book.id}`}>
          <div
            className="w-full h-full flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 py-2 rounded-md"
            key={index}
          >
            <img
              src={book.cover}
              alt={book.name}
              className="w-full h-[400px] "
            />
            <h2 className="text-gray-400 pt-1 ">Edição Volume {book.vol}</h2>
            
            <p className="w-full text-base truncate text-gray-600 pt-5">
              {book.name}
            </p>

           
          </div>
        </Link>
      ))}
    </Grid>
  );
};

export default GridCardBox;
