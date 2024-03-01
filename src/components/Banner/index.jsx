import { Suspense } from "react";
import { baseUrl } from "../../utils/api";
import CarrouselBanner from "../CarrouselComponent/CarrouselBanner";
import Loading from "../../app/loading";
const getBanner = async ()=>{
  const request = await fetch(`${baseUrl}/banners`,{method:"GET",cache:"force-cache", next:{
    revalidate:90
  }})
  const response = await request.json()
  return response 
}

const Carrousel = async  () => {
 const data = await getBanner()
    
    
    
       
     
        
    return ( 
      <Suspense fallback={<Loading/>}>
      <section className="w-full h-full mt-16 ">
     <CarrouselBanner data={data} />
    
        </section>
        </Suspense>
     );
}
 
export default Carrousel;