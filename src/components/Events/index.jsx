"use client";

import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/api";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Eventes = () => {
  useEffect(() => {
    getCovers();
  }, []);
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const [vote, setVote] = useState(false);
  const getCovers = async () => {
    const request = await fetch(`${baseUrl}/events`, {
      method: "GET",
      cache: "no-cache",
    });
    const response = await request.json();
    setData(response);
    return;
  };
  const handleVote = async (slug) => {
    console.log("aqui");
    const id = session.user.id;
    const addVoto = await fetch(`${baseUrl}/vote-cover-event/${slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (addVoto.status === 403) {
      const response = await addVoto.json();
      console.log(response);
      alert(response.message);
      return;
    }
    if (addVoto.status === 200) {
      const response = await addVoto.json();
      await getCovers();
      alert(response.message);
      setVote(true); // Atualiza o estado do voto para true quando o voto for confirmado
      return;
    }
    return;
  };
  return (
    <section className="w-full md:w-[80%] h-full  mt-16 py-10 px-4 mx-auto">
      {data.map((event, index) => (
        <div key={index}>
          <div className="w-full flex flex-col gap-2  md:flex-row item justify-between py-10">
            <h1 className="text-xl text-gray-400">{event.name}</h1>
            <span className="bg-[#14b7a1] text-white py-2 px-2 rounded-md font-semibold">
              Encerramento:{" "}
              {new Date(Number(event.date_event)).toLocaleDateString()}
            </span>
          </div>
          <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {event.cover.map((cover, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]   rounded-md"
              >
                <img
                  src={cover.cover}
                  alt={cover.name}
                  className="w-full h-full sm:h-[300px] object-fill "
                />

                <p className="w-full text-base truncate text-gray-600  px-1 py-2 ">
                  {cover.name}
                </p>
                <p className="w-full text-base truncate text-gray-600 bg-gray-200 px-1 text-center py-2 ">
                  Votos: {cover.countLike}
                </p>

                <button
                  onClick={() => handleVote(cover.id)}
                  className="w-full bg-[#14b7a1] text-white py-2 font-bold text-lg"
                >
                  Votar
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Eventes;
