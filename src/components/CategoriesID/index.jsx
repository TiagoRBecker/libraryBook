import Link from "next/link";
import { baseUrl } from "../../utils/api";

const getCategories = async (id) => {
  const categories = await fetch(`${baseUrl}/category/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const response = await categories.json();
  return response;

  return;
};
const CategoriesID = async ({ id }) => {
  const data = await getCategories(id);
  return (
    <section className="w-[80%] min-h-screen h-full mt-16 py-10 px-4 mx-auto">
      <div>
        <div className="flex items-center gap-1">
          <Link href={"/"} className="text-gray-500">
            Home
          </Link>{" "}
          / <h1 className="  ">{data.name}</h1>
        </div>

        {data.magazine <= 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <p className="text-gray-400">
              Nenhuma revista encontrada para esta categoria
            </p>
          </div>
        ) : (
          <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {data.magazine?.map((book, index) => (
              <Link href={`/magazine/${book.id}`} key={index}>
                <div className="w-full h-full flex flex-col gap-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   rounded-md">
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-full h-full sm:h-[300px] "
                  />
                  <h2 className="text-gray-400  px-1 ">
                    Edição Volume {book.vol}
                  </h2>

                  <p className="w-full text-base truncate text-gray-600  px-1">
                    {book.name}
                  </p>

                  <p className="w-full text-base truncate text-gray-600  px-1">
                    {book.capa}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesID;
