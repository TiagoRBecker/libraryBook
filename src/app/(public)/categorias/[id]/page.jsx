import CategoriesID from "../../../../components/CategoriesID/index"
import { Suspense } from "react";
import Loading from  "../../../loading"
const Categories = async  ({ params }) => {

  
  
  return (
  
   <Suspense fallback={<Loading/>}>
    <CategoriesID id={params.id} />
    </Suspense>
  );
};

export default Categories;
