"use client";
import { Viewer, Worker, PdfJs } from "@react-pdf-viewer/core";
import { bookmarkPlugin } from "@react-pdf-viewer/bookmark";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { StyleSheet } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../../utils/api";
import Spinner from "../../../../components/Spinner/index";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const Article = ({ params }) => {
  const getParamsUrl = useSearchParams();
  const slug = getParamsUrl.get("status");
  useEffect(() => {
    getArticle();
  }, []);
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "AntonFamily",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "AntonFamily",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
  });

  const getArticle = async () => {
    const getArticleId = await fetch(
      `${baseUrl}/article/${params.id}?status=${slug}`,
      {
        method: "GET",
      }
    );
    const response = await getArticleId.json();
    setArticle(response);
    setLoading(false);
    return;
  };

  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center py-10">
        <Spinner />
      </section>
    );
  }
 
  return (
    <section className="w-full h-full flex gap-5 min-full mt-16   ">
      {article && article.articlepdf ? (
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          style={{ width: "70%" }}
        >
          <div className="w-[70%]  ">
            <Viewer fileUrl={article?.articlepdf} style={{ width: "100%" }} />
          </div>
        </Worker>
      ) : (
        <div className="w-[70%] flex items-center  flex-col gap-2">
          <img
            src={article.cover}
            alt={article.name}
            className="w-[450px] h-[300px]"
          />
          <div className="w-full text-gray-400">
            <p>{article.description}</p>
          </div>
          <div className="w-full flex flex-col gap-4 items-center justify-center ">
            <div className="w-8 h-8  rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6  text-black "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            </div>
          
          </div>
        </div>
      )}

      <div className="w-[30%]  fixed right-0 top-6  ">
        <div className="w-full  flex flex-col items-center justify-center gap-2  ">
          <img
            src={article.magazine?.cover}
            alt={article.magazine?.name}
            className="w-1/2 mt-10 h-[270px] object-fill"
          />
          <p className="pt-1 text-gray-500">{article.magazine?.name}</p>
          <Link href={`/magazine/${article.magazine?.id}`}>
            <button className="w-full bg-[#14b7a1] border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm  ">
              Visitar Revista
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Article;

/*

        <div className='w-[50%] h-[270px] flex items-center justify-center '>
             
        </div>
*/
