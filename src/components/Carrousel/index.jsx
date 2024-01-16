"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carrousel = () => {

    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        dots:false,
        arrows:false,
        fade: true,
       

       
     
        
      };
       
     
        
    return ( 

     
        <Slider {...settings} className="w-full h-[300px] mt-[62px] ">
          
         
        <div className="w-full h-full ">
        <img src="/1.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full relative ">
        <img src="/2.jpg" alt=""  className="w-full h-full object-cover"/>
        </div>
        <div className="w-full h-full relative  ">
        <img src="/3.jpg" alt=""  className="w-full h-full object-cover"/>
        </div>
         
          
         
        </Slider>
     
     );
}
 
export default Carrousel;