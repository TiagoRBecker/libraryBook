"use client"
import Link from "next/link";
import {baseUrl} from "../../../utils/api"
import { useEffect, useState } from "react";
import {createCookies} from "../../../utils/cookies"
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react"
const Library =  () => {
  useEffect(()=>{
    getAllBooks()
  },[])
  const {data:session,status} = useSession()
 

   const router = useRouter()
   const [getBooks, setGetBooks] = useState([])
   const getAllBooks = async ()=>{
     
    const getBooks = await fetch(`${baseUrl}/user/1`,{
      method:"GET",
      
    })
    const response = await getBooks.json()
    setGetBooks(response.library)
    return 
   } 
 
    console.log(getBooks)
    
  return (
    <section className="w-full min-h-screen py-10 mt-14">
      <h1 className="text-center py-2 text-2xl text-gray-400">Revistas</h1>
      <div className=" flex items-center justify-around pt-10">
        <div className="flex gap-2 items-center justify-center w-[30%]">
        <p className="text-lg text-gray-400">Mostrar:</p>
          <select>
            <option value=""></option>
            <option value="">Revistas</option>
            <option value="">Artigos</option>
          </select>
        </div>

        <div className="flex items-center justify-center w-[40%] relative">
          <input
            type="text"
            placeholder="Buscar por nome"
            className="outline-none pl-4 h-8 rounded-md border-[1px] border-gray-300 w-full"
          />
        <p> <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 -ml-7 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg></p>
        </div>
        <div className="flex gap-2 items-center justify-center w-[30%]">
          <p className="text-lg text-gray-400">Ordernar:</p>
          <select>
            <option value=""></option>
            <option value="">ASC</option>
            <option value="">DESC</option>
          </select>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-6 gap-2 py-4 px-4">
      {
      
        getBooks.map((book,index)=>(
          <div
          className="w-52 h-full flex flex-col  shadow-md   rounded-md "
            key={index}
            
          >
              
            <div className="w-full h-full px-4 py-4 flex items-center justify-center ">
            <img
              src={book?.cover[0]}
              alt={book.name}
              className="w-full h-full   object-fill "
            />
            </div>
           
            <h2 className="text-black pt-1 text-sm ">
              <span className="text-[#14b7a1]">{book.company} </span>|
              Volume {book.volume}
            </h2>

            <h1 className="w-full font-bold text-lg truncate text-black py-1 uppercase">
              {book.name}
            </h1>
            <p className="w-full h-20 overflow-hidden text-base text-left text-gray-600 pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              dolorem rem provident eius fugit nesciunt, odit eligendi modi
              illum itaque quisquam ducimus beatae vitae qui numquam aperiam
              quos illo blanditiis!
            </p>
        
            <div className="w-full flex items-center justify-center pt-2 bg-[#14b7a1] ">
              <Link href={`/readBook?name=${book.id}`}>
              <div className="flex items-center gap-1" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
                <p className="text-lg text-white">Ler Revista</p>
              </div>
              </Link>
              
            </div>
           
            
          </div>
        ))
      }
      </div>
     
    </section>
  );
};

export default Library;
