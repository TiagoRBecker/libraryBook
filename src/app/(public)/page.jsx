"use client"
import Banner from "../../components/Banner/index";
import Carrousell from "../../components/Carrousel/carrousel";

export default function Home() {
  return (
    <section className="w-full h-full">
      <Banner />
      <Carrousell />
    </section>
  );
}
