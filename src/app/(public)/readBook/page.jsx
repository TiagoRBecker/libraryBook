"use client";
// pages/[slug].js
import Script from "next/script";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Spinner from "../../../components/Spinner/index";
import { useSearchParams } from "next/navigation";
import { baseUrl } from "../../../utils/api";
const SeuComponente = ({ searchParams }) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [pdf,setPdf] = useState("")
  const nameUrl = searchParams.name;

  useEffect(() => {
       getName()
       

    // Coloque o código que você deseja executar no carregamento do componente aqu

  
      if (session && status === "authenticated" && nameUrl) {
     
          $("#container").FlipBook({
            pdf: pdf,
            controlsProps: {
              loadingAnimation: {
                book: false,
              },
              cmdPrint: {
                print: false,
              },
              share: false,
            },
            propertiesCallback: function (props) {
              props.page.depth /= 2.5;
              props.cover.padding /= 0.002;
              return props;
            },
            // Restante do código FlipBook
          });

          const style = document.createElement("style");
          style.type = "text/css";
          style.innerHTML = `
            .container {
              height: 95vh;
              width: 95%;
              margin: 20px auto;
            }
            .fullscreen {
              background-color: #ffffff00;
            }
          `;
          document.head.appendChild(style);
          setLoading(false);
        } 
      
  

 
   
  }, [pdf,session,status]);
  const getName = async () => {
    try {
      const getBooks = await fetch(`${baseUrl}/user/1`, {
        method: "GET",
      });

      const response = await getBooks.json();

      const filter = response.library.filter(
        (item) => item.id === Number(nameUrl)
      );

      const magazinePdf = filter[0].magazine_pdf;

    
      setPdf(magazinePdf)
      return
    } catch (error) {
      console.error("Erro ao obter dados:", error);
      return null;
    }
  };
   
  if (loading) {
    return (
      <>
       
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
     
      </>
    );
  }

  return (
    <>
      
      {/* Inclua aqui qualquer JSX adicional que você deseja renderizar */}
      {/* Aqui você incorpora os scripts usando o componente Script */}
      <Script strategy="afterInteractive" src="/js/libs/jquery.min.js" />
      <Script strategy="afterInteractive" src="/js/libs/html2canvas.min.js" />
      <Script strategy="beforeInteractive" src="/js/libs/three.min.js" />
      <Script strategy="afterInteractive" src="/js/libs/pdf.min.js" />
      <Script strategy="afterInteractive" src="/js/dist/3dflipbook.js" />
      <>
        {status === "authenticated" && (
          <section className="w-full h-full bg-[#333] py-10">
            <div className="container" id="container"></div>
          </section>
        )}
        {status === "loading" && (
          // Se o usuário estiver autenticado, renderize o FlipBook
          <section className="w-full h-screen flex items-center justify-center py-10">
            <Spinner />
          </section>
        )}
        {status === "unauthenticated" && (
          // Se o usuário estiver autenticado, renderize o FlipBook
          <section className="w-full h-screen flex items-center justify-center  py-10">
            <p>Necessario fazer login</p>
          </section>
        )}
      </>
    </>
  );
};

export default SeuComponente;
