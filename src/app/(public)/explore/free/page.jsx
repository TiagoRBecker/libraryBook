"use client";
import Link from "next/link";
import ArticleNav from "../../../../components/NavArticle";
import { books } from "../../../../components/constants";
import { readingTime } from "reading-time-estimator";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../../utils/api";
import Spinner from "../../../../components/Spinner";
const Free = () => {
  useEffect(()=>{getArticleFree()},[])
 
  const [articles,setArticles] = useState([])
  const [loading, setLoading] = useState(true);
  const getArticleFree = async ()=>{
    const getArticle = await fetch(`${baseUrl}/articles-free`,{method:"GET"})
    const response = await getArticle.json()
    setArticles(response)
    setLoading(false);
  }

  const reading = (text)=>{
    const read = readingTime(text,20,"pt-br")
    return read.minutes
  }
  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </section>
    );
  }
  return (
    <section className="w-full h-full py-10">
      <ArticleNav />
      <div className="w-[80%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 gap-6">
      {articles.map((book, index) => (
          <div
          className="w-full h-full flex flex-col  shadow-md  py-2 rounded-md "
            key={index}
          >
            <Link href={`/article/${book.id}?status=${book.status}`}>
            <img
              src={book.cover}
              alt={book.name}
              className="w-full object-cover h-auto "
            />
            <div className="px-1 py-1">
            <h2 className="text-black pt-1 ">
              <span className="text-[#14b7a1]">Plash MagazineEdição </span>|
              Volume{book.vol}
            </h2>

            <h1 className="w-full font-bold text-lg truncate text-black pt-1 uppercase">
              {book.name}
            </h1>
            <p className="w-full h-18 line-clamp-3 text-gray-300 overflow-hidden">{book.description}</p>
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
  );
};

export default Free;
