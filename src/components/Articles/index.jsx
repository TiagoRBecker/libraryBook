const Articles = () => {
  return (
    <>
      {magazine.article && (
        <div className="w-full px-4">
          <h1 className="py-4 uppercase text-black font-bold">
            Artigos nesta Edição
          </h1>

          <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 py-5">
            {magazine?.article?.map((article, index) => (
              <Link href={`/article/${article.id}?status=${article.status}`}>
                <div
                  className="w-full h-full flex flex-col  shadow-md px-4 py-2 rounded-md "
                  key={index}
                >
                  <div className="w-full py-4">
                    <span className="text-[#14b7a1] text-base">
                      {magazine.company}
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
                      className="w-full h-full   md:w-[30%] md:h-[130px] object-fill "
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
                        {reading(magazine.description)} minutos
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
      )}{" "}
    </>
  );
};

export default Articles;
