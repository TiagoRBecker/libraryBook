"use client";
import { Inter } from "next/font/google";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/index";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function UserLayout({ children }) {

  
  
  return (
    <>
   
      <Nav />

      <main>{children}</main>
      <Footer />
    </>
  );
}
