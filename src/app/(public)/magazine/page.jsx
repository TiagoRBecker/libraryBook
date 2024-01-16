import Link from "next/link";
import { categories } from "../../../components/constants";

const Magazine = () => {
     
    return ( 
        <section className="w-full h-full py-10 px-4">
      {categories.map((category, index) => (
        <div key={index}>
       <h1 className="text-2xl py-8 ">{category.name}</h1>
       <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {
                category.books.map((book,index)=>(
                    <Link href={`/magazine/${book.id}`}>
                    <div
                      className="w-full h-full flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   rounded-md"
                      key={index}
                    >
                      <img
                        src={book.cover}
                        alt={book.name}
                        className="w-full h-full sm:h-[300px] "
                      />
                      <h2 className="text-gray-400 py-2 px-1 ">Edição Volume {book.vol}</h2>
                      
                      <p className="w-full text-base truncate text-gray-600 py-2 px-1">
                        {book.name}
                      </p>
               
                      <p className="w-full text-base truncate text-gray-600 py-2 px-1">
                        {book.capa}
                      </p>
                     
                    </div>
                  </Link>
                ))
            }
           
        </div>
        </div>
      ))}
    

        </section>
     );
}
 
export default Magazine;