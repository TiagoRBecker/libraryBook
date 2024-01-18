"use client"
import ArticleNav from "../../../../components/NavArticle";
import { readingTime } from "reading-time-estimator";
import { books2 } from "../../../../components/constants";
const Recommendation = () => {
    const result = readingTime(
        "rem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorem rem provident eius fugit nesciunt, odit eligendi modi illum itaque quisquam ducimus beatae vitae qui numquam aperiam quos illo blanditiis!",
        200,
        "pt-br"
      );
    return ( 
        <section className="w-full h-full py-10">
        <ArticleNav/>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-6">
        {books2.map((book, index) => (
          <div
          className="w-full h-full flex flex-col  shadow-md px-4 py-2 rounded-md "
            key={index}
          >
            <img
              src={book.cover}
              alt={book.name}
              className="w-full h-full   md:w-[313px] md:h-[270px] object-fill "
            />
            <h2 className="text-black pt-1 ">
              <span className="text-[#14b7a1]">Plash MagazineEdição </span>|
              Volume{book.vol}
            </h2>

            <h1 className="w-full font-bold text-lg truncate text-black pt-1 uppercase">
              {book.name}
            </h1>
            <p className="w-full text-base text-left text-gray-600 pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              dolorem rem provident eius fugit nesciunt, odit eligendi modi
              illum itaque quisquam ducimus beatae vitae qui numquam aperiam
              quos illo blanditiis!
            </p>
            <div className="flex items-center justify-between">
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
                <p className="tex-base text-gray-400">{result.minutes} min</p>
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
      </section>
       );
}
 
export default Recommendation;