"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../../utils/api";
import Spinner from "../../../../components/Spinner/index";
const Categories = ({ params }) => {
  useEffect(() => {
    getCategories();
  }, []);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCategories = async () => {
    const categories = await fetch(`${baseUrl}/category/${params.id}`, {
      method: "GET",
      cache: "no-cache",
    });
    if (categories.status === 200) {
      const response = await categories.json();
      setCategories(response);
      setLoading(false);
    }
    return;
  };

  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </section>
    );
  }
  return (
    <section className="w-[80%] min-h-screen h-full mt-16 py-10 px-4 mx-auto">
      <div>
        <div className="flex items-center gap-1">
          <Link href={"/"} className="text-gray-500">
            Home
          </Link>{" "}
          / <h1 className="  ">{categories.name}</h1>
        </div>

        {categories.magazine <= 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <p className="text-gray-400">
              Nenhuma revista encontrada para esta categoria
            </p>
          </div>
        ) : (
          <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {categories.magazine?.map((book, index) => (
              <Link href={`/magazine/${book.id}`}>
                <div
                  className="w-full h-full flex flex-col gap-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   rounded-md"
                  key={index}
                >
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

export default Categories;
