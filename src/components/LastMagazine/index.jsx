import Link from "next/link";
import Carrousel from "../CarrouselComponent";
import { baseUrl } from "../../utils/api";
import { Suspense } from "react";
import Loading from "../../app/loading";
const getLastMagazines = async () => {
  try {
    const get = await fetch(`${baseUrl}/last-magazines`, {
      method: "GET",
      cache: "force-cache",
    });
    const response = await get.json();
    return response;
  } catch (error) {
    console.error("Error fetching last magazines:", error);
  }
};
const LastMagazines = async () => {
  const data = await getLastMagazines();
  return (
    
    <Carrousel>
      {data?.map((magazine, index) => (
        <Link href={`/magazine/${magazine.id}`} key={index}>
          <div className="w-full p-4 ">
            <div className="w-full  h-full flex flex-col shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
              <img
                src={magazine.cover}
                alt={magazine.name}
                className="w-full h-[270px] object-fill "
                loading="lazy"
              />
              <div className="px-2 py-2">
                <h2 className="text-gray-400 pt-1 ">
                  Edição Volume {magazine.vol}
                </h2>
                <p className="w-full text-base truncate text-gray-600 ">
                  {magazine.name}
                </p>
                <p className="w-full text-base truncate text-gray-600 ">
                  {magazine.capa}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Carrousel>
    
  );
};

export default LastMagazines;
