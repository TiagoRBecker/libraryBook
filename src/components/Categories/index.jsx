import Link from "next/link";
import { baseUrl } from "../../utils/api";
import Carrousel from "../CarrouselComponent";
const getCategories = async () => {
  try {
    const getCat = await fetch(`${baseUrl}/categories`, {
      method: "GET",
      cache: "no-cache",
    });
    const response = await getCat.json();
    return response;
  } catch (error) {
    console.log(error)
  }
  
  
};
const Categories = async () => {
   const data = await getCategories()



 
  return (
    <section className="py-10 w-full h-full">
      {data.map((category, index) => (
        <div className="max-w-[1140px] h-full  mx-auto" key={index}>
          <div className="w-full flex  md:w-full  items-center justify-between ">
            <h1 className="text-xl font-bold py-4">{category.name}</h1>
            <Link href={`/categorias/${category.id}`}>
              <h3 className=" text-[#14B7A1] md:text-[#14B7A1] ">
                Ver todas
              </h3>
            </Link>
          </div>

           {
            category.length >= 4 ?
            <Carrousel>
              {category.magazine.map((magazine, magazineIndex) => (
                <Link href={`/magazine/${magazine.id}`} key={index} className="mb-5">
                  <div
                    key={magazineIndex}
                    className=" w-[90%] h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition ease-in-out delay-150 "
                  >
                    <img
                      src={magazine.cover}
                      alt={magazine.name}
                      className="w-full h-[270px] object-fill"
                    />
                    <h1 className="text-black font-semibold pl-1">
                      {magazine.name}
                    </h1>
                    <span className="pl-1">Edição {magazine.volume}</span>
                  </div>
                </Link>
              ))}
            </Carrousel>
            :
            <div className="w-full grid grid-cols-5 gap-6">
              {category.magazine.map((magazine, magazineIndex) => (
                <Link href={`/magazine/${magazine.id}`} key={index} className="mb-5">
                  <div
                    key={magazineIndex}
                    className=" w-full h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] "
                  >
                    <img
                      src={magazine.cover}
                      alt={magazine.name}
                      className="w-full  min-h-[270px] max-h-[270px] object-fill"
                    />
                    <div className="w-full px-2 py-2">
                    <h1 className="text-black font-semibold pl-1">
                      {magazine.name}
                    </h1>
                    <span className="pl-1">Edição {magazine.volume}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

           }
            
          
        </div>
      ))}
    </section>
  );
};

export default Categories;
