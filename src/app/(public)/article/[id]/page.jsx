"use client"
import { baseUrl } from "../../../../utils/api";
import Link from "next/link";
import ReadPDF from "../../../../components/ReadPdf";
import {  useEffect, useState } from "react";
import Loading from "../../../loading";
import Wrapper from  "../../../wrapper"
const Article =  ({ params, searchParams }) => {
  useEffect(()=>{getArticle()},[])
  const [position, setPosition] = useState(0);
  const [ loading ,setLoading] = useState(true)

 

 

  const[data ,setData] = useState([])
  const slug = searchParams.status;
  const id = params.id;
  
  const getArticle = async () => {
    const getArticleId = await fetch(`${baseUrl}/article/${id}?status=${slug}`, {
      method: "GET",
    });
    const response = await getArticleId.json();
    setData(response)
    setLoading(false)
    return response;
  };
 if(loading){
  return(
    <section className="w-full h-screen">
      <Loading/>
    </section>
  )
 }

  return (
    <section className="w-full h-full  flex    ">
    <div className="w-full flex ">
      {data && data.articlepdf ? (
      
        <ReadPDF pdf={data.articlepdf} />
      
      ) : (
        <div className="w-[70%] flex items-center  flex-col gap-2">
          <img
            src={data.cover}
            alt={data.name}
            className="w-[450px] h-[300px]"
          />
          <div className="w-full text-gray-400">
            <p>{data.description}</p>
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
     <Wrapper >
 
            <img
              src={data.magazine?.cover}
              alt={data.magazine?.name}
              className="w-full h-[300px] object-fill"
            />
            <p className="pt-1 text-gray-500">{data.magazine?.name}</p>
            <Link href={`/magazine/${data.magazine?.id}`}>
              <button className="w-full bg-[#14b7a1] border-[1px]  px-10 py-2 text-white rounded-md uppercase text-sm">
                Visitar Revista
              </button>
            </Link>
     
        </Wrapper>
        </div>
  

    
    </section>
  );
};

export default Article;


