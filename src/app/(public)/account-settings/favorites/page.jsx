"use client";
import { useEffect, useState, useContext } from "react";
import Grid from "../../../../components/GridCard/gridCard";
import Link from "next/link";
import { CartContext } from "../../../../Context";
const Favorites = () => {
  const { clearFavorite, favorite } = useContext(CartContext);

  return (
    <section className="w-full h-full py-10 flex flex-col items-center justify-center">
      {favorite.length > 0 ? (
        <>
          <Grid>
            {favorite.map((book, index) => (
              <Link href={`/books/${book.id}`}>
                <div
                  className="w-full  flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 py-2 rounded-md"
                  key={index}
                >
                  <img
                    src={book.cover}
                    alt={book.name}
                    className="w-[360px] h-[290px] "
                  />
                  <h2 className="text-gray-400 pt-1 ">
                    Edição Volume {book.vol}
                  </h2>

                  <p className="w-full text-base truncate text-gray-600 pt-2">
                    {book.name}
                  </p>
                </div>
              </Link>
            ))}
          </Grid>
          <button
            className="px-4 py-2 bg-red-500 rounded-md"
            onClick={clearFavorite}
          >
            Limpar
          </button>
        </>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
        <p className="text-base text-gray-400">Nenhum item adicionado aos favoritos.</p>
  </div>
      )}
    </section>
  );
};

export default Favorites;
