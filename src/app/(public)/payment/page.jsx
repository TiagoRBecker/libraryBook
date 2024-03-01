import { Suspense } from "react";
import Loading from "../../loading";

const Checkout = ({ searchParams }) => {
  const url = searchParams.url;
  return (
    <Suspense fallback={<Loading/>}>
    <div className="w-full h-full mt-14 min-h-screen">
      <iframe
        width={"100%"}
        height={650}
        src={url}
        className="w-full overflow-y-hidden"
      ></iframe>
      </div>
    </Suspense>
    
  );
};
export default Checkout;
