import Link from "next/link";
import ArticleNav from "../../../../components/NavArticle";
import { readingTime } from "reading-time-estimator";
import { baseUrl } from "../../../../utils/api";
import { Suspense } from "react";
import Loading from "../../../loading";
const getArticleFree = async ()=>{
  const getArticle = await fetch(`${baseUrl}/articles-free`,{method:"GET"})
  const response = await getArticle.json()
   return response
}
const Free = async () => {
   const data = await getArticleFree()
 
  
  

  const reading = (text)=>{
    const read = readingTime(text,20,"pt-br")
    return read.minutes
  }
 
  return (
    <Suspense fallback={<Loading/>}>
    <section className="w-full h-full py-10">
      <ArticleNav />
      <div className="max-w-[1140px] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-6">
      {data.map((book, index) => (
          <div
          className="w-full h-full flex flex-col  shadow-md  py-2 rounded-md "
            key={index}
          >
            <Link href={`/read-article/${book.id}?status=${book.status}`}>
            <img
              src={book.cover}
              alt={book.name}
              className="w-full object-cover min-h-[280px] max-h-[280px] "
            />
            <div className="px-1 py-1">
            <h2 className="text-black pt-1 ">
              <span className="text-[#14b7a1]">{book.company} </span>|
              Volume{book.volume}
            </h2>

            <h1 className="w-full font-bold text-lg truncate text-black pt-1 uppercase">
              {book.name}
            </h1>
            <p className="w-full h-20 py-1 line-clamp-3 text-gray-300 overflow-hidden">{book.description}</p>
            </div>
           
            <div className="px-1 py-1 flex items-center justify-between">
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
                <p className="tex-base text-gray-400">{reading(book.description)} min</p>
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
            </Link>
          </div>
        ))}
      </div>
    </section>
    </Suspense>
  );
};

export default Free;
