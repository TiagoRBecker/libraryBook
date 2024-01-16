import Link from "next/link";
import ArticleNav from "../../../../components/NavArticle";

const Free = () => {
  return (
    <section className="w-full h-full">
      <ArticleNav />
      <div className="w-full grid grid-cols-3 px-4 gap-4">
        <div className="w-full h-full flex flex-col gap-3">
         <div className="w-full h-full">
          <h2>PRO SKATER :1222</h2>
          <h1>Titulo</h1>
          <div className="flex w-full gap-2">
            <p className="w-[60%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              expedita ipsum quisquam culpa tempora rem! Architecto nulla optio
              reiciendis iusto doloribus odit voluptas, aperiam sit accusamus
              repellat nesciunt quia officiis?
            </p>
            <img src="/vol1.png" alt="" className="w-[26%] h-36 object-fill rounded-md" />
          </div>
         </div>
         <div className="w-full h-full flex flex-col gap-2">
        <img src="/vol1.png" alt=""  className="w-full h-52 rounded-md object-cover"/>
         <div className="">
         <h2>PRO SKATER :1222</h2>
          <h1>Titulo</h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              expedita ipsum quisquam culpa tempora rem! Architecto nulla optio
              reiciendis iusto doloribus odit voluptas, aperiam sit accusamus
              repellat nesciunt quia officiis?
            </p>
         </div>
         <div className="flex">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </p>
          </div>
        </div> 
        </div>
        
          
     </div>
        
        
   
    </section>
  );
};

export default Free;
