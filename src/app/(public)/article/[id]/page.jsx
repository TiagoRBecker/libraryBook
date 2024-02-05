"use client"
import { Viewer, Worker,PdfJs } from '@react-pdf-viewer/core';
import  {bookmarkPlugin }  from '@react-pdf-viewer/bookmark';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { StyleSheet } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../../../utils/api';
import Spinner from "../../../../components/Spinner/index"
import Link from 'next/link';
const Article = ({params}) => {
     const [article ,setArticle] = useState()
      const[  loading , setLoading] = useState(true)
  const bookmarkPluginInstance = bookmarkPlugin();
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
  useEffect(()=>{getArticle()},[])
  const getArticle = async ()=>{
     const getArticleId = await fetch(`${baseUrl}/article/${params.id}`,{
        method:"GET"
     })
     const response = await getArticleId.json()
      setArticle(response)
      setLoading(false)
      return
  }
   if(loading){
    return(
        <section className='w-full h-screen flex items-center justify-center mt-16'>
            <Spinner/>
        </section>
    )
   }
    return (  
      <section className='w-full flex gap-5 min-h-screen m-16'>

    
       <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`} style={{ width: '70%' }} >
       <div className='w-[70%] bg-red-300 '>
          <Viewer fileUrl={article?.articlepdf} style={{ width: '100%' }} />
       </div>
        </Worker>
       <div className='w-[30%]  fixed right-0'>
       <div className='w-full  flex flex-col items-center justify-center gap-2  '>
               <img src={article.magazine.cover[0]} alt={article.magazine.name} className='w-1/2 mt-10 h-[270px] object-fill' />
                <p className='pt-1 text-gray-500'>{article.magazine.name}</p>
               <Link href={`/magazine/${article.magazine.id}`}>
                <button
               
                className="w-full bg-[#14b7a1] border-[1px]  px-10 py-4 text-white rounded-md uppercase text-sm  "
              >
                Visitar Revista
              </button>
              </Link>
       </div>
       </div>
     
   
       
       
        </section>
          
          
        
      

    );
}
 
export default Article;

/*

        <div className='w-[50%] h-[270px] flex items-center justify-center '>
             
        </div>
*/