import { Suspense } from "react";
import Loading from "../../app/loading";
import { baseUrl } from "../../utils/api";
import LastMagazines from "../LastMagazine";
import Link from "next/link";
import { readingTime } from "reading-time-estimator";
const getmagazineId = async (id) => {
  try {
    const getMagazine = await fetch(`${baseUrl}/magazine/${id}`, {
      method: "GET",
      cache: "force-cache",
    });
    const response = await getMagazine.json();
    return response;
  } catch (error) {
    console.error("Error fetching magazine:", error);
  }
};
const MagazineID = async ({
  id,
  handleAddFav,
  handleShowModal,
  handleShowModalFisica,
}) => {
  const data = await getmagazineId(id);
  console.log(data)
  const reading = (text) => {
    const result = readingTime(text, 10, "pt-br");
    return result.minutes;
  };
  return (
    <Suspense fallback={<Loading />}>
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
                Comprar
              </button>
              <div className="w-full flex items-center py-2 justify-around border-b-[1px] border-gray-400">
                <div className="flex items-center">
                  <p className="bg-slate-400 rounded-xl w-16 px-1 h-6 text-white ">
                    10%{" "}
                  </p>
                  <p className="bg-[#14b7a1] h-6 uppercase px-2 text-white rounded-xl -ml-6">
                    DVL
                  </p>
                </div>
                <div className="">
                  <span>
                    {Number(data?.price).toLocaleString("pt-br", {
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
                  <p className="bg-slate-400 rounded-xl w-16 px-1 h-6 text-white ">
                    10%{" "}
                  </p>
                  <p className="bg-[#14b7a1] h-6 uppercase px-2 text-white rounded-xl -ml-6">
                    DVL
                  </p>
                </div>
                <div className="">
                  <span>
                    {Number(data?.price).toLocaleString("pt-br", {
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
        {data?.article && data?.article.length > 0 &&(
          <div className="w-full px-4">
            <h1 className="py-4 uppercase text-black font-bold">
              Artigos nesta Edição
            </h1>

            <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 py-5">
              {data?.article?.map((article, index) => (
                <Link href={`/article/${article.id}?status=${article.status}`} key={index}>
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
      
        <LastMagazines />
      </div>
    </Suspense>
  );
};

export default MagazineID;
