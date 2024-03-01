import { Link } from "@chakra-ui/react";
import { baseUrl } from "../../utils/api";

const getCategories = async () => {
    const categories = await fetch(`${baseUrl}/categories`, {
      method: "GET",
     
 
    });
    const response = await categories.json();
   
    return response
  };
const CatName = async() => {
    const data = await getCategories()
    return ( 
        <div className="flex gap-3 items-center flex-wrap px-4 py-2">
              {data.map((name, index) => (
                <Link
                  href={`/categorias/${name.id}`}
                  onClick={() => setOpenCategory(false)}
                  key={index}
                >
                  <p className="text-gray-500 hover:text-[#14b7a1] cursor-pointer">
                    {name.name}
                  </p>
                </Link>
              ))}
            </div>
     );
}
 
export default CatName;