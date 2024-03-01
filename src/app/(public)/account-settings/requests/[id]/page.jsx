import { baseUrl } from "../../../../../utils/api";
import TableOrderID from  "../../../../../components/Tables"
import { Suspense } from "react";
import Loading from "../../../../loading";
import WayPoint from  "../../../../../components/WayPoint"
const getOrderById = async (id) => {
  const request = await fetch(`${baseUrl}/orders/${id}`, {
    method: "GET",
    cache:"no-cache"
  });
  const response = await request.json();
  return response;
};
const OrderID = async ({ params }) => {
  const data = await getOrderById(params.id);
  console.log(data);
  return (
    
    <Suspense fallback={<Loading/>}>

    <section className="w-[80%]  mx-auto min-h-screen">
     <WayPoint url={`/account-settings/requests`} nameCategory={"Pedidos"} name={`Pedido numero ${data.id}`} />
     <TableOrderID data={data}/>
     
    </section>
    </Suspense>
  );
};

export default OrderID;
