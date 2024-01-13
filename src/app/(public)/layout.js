"use client";
import { Inter } from "next/font/google";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/index";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function UserLayout({ children }) {
  const [scrollY, setScrollY] = useState(0)
  const [showMenu,setShowMenu] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const currentScrollY = window.scrollY;
        // Verifica a direção do scroll
        if (currentScrollY > scrollY) {
          // Scroll para baixo
          setShowMenu(false);
        } else {
          // Scroll para cima ou posição 0
          setShowMenu(true);
        }
  
        // Atualiza a posição de rolagem anterior
        setScrollY(currentScrollY)
      };
  
    

    // Adiciona um ouvinte de evento de rolagem quando o componente é montado
    window.addEventListener('scroll', handleScroll);
 
  }, []); 
  
  return (
    <>
   
      <Nav />

      <main>{children}</main>
      <Footer />
    </>
  );
}
