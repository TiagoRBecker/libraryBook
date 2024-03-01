import { baseUrl } from "../../../../utils/api";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../utils/authOptions";
import TableDvl from "../../../../components/Tables/tableDvl";
import { Suspense } from "react";
import Loading from "../../../loading";
const getDvls = async (id) => {
  const getDvlForPay = await fetch(`${baseUrl}/user/${id}`, {
    method: "GET",
  });
  const response = await getDvlForPay.json();
  return response;
};
const Dvl = async () => {
  const session = await getServerSession(authOptions);
  const id = session.user.id;
  const data = await getDvls(id);
 //Calcula o total
  const total = data?.dvlClient.reduce(
    (acc, currentValue) => acc + currentValue.price,
    0
  );
  //Calcula valor a receber
  const receive = data?.dvlClient.reduce(
    (acc, currentValue) => acc + currentValue.paidOut,
    0
  );
  //Calcula o pago 
  const pay = data?.dvlClient.reduce(
    (acc, currentValue) => acc + currentValue.toReceive,
    0
  );

  return (
    <Suspense fallback={<Loading />}>
      <section className="w-full h-full py-10 flex flex-col items-center justify-center">
        <TableDvl data={data} pay={pay} total={total} receive={receive} />
        { (data.dvlClient[0].toReceive  - data.dvlClient[0].paidOut ) >= 50 ?
           <button>Sacar</button>
           :
           <button>Nao tem saque</button>
        }
       
      </section>
    </Suspense>
  );
};

export default Dvl;
