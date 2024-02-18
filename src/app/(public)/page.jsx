
import { Suspense } from "react";
import Banner from "../../components/Banner/index";
import Categories from "../../components/Categories";
import LastMagazines from "../../components/LastMagazine"
import Loading from  "../loading"
export default function Home() {
  return (
    <section className="w-full h-full">
      <Banner />
       <Suspense fallback={<Loading/>}>
        <LastMagazines/>
       <Categories/>
      </Suspense>
    </section>
  );
}
