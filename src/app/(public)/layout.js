"use client";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/index";


export default function UserLayout({ children }) {

  
  
  return (
    <>
   
      <Nav />

      <main>{children}</main>
      <Footer />
    </>
  );
}
