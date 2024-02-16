"use client";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../../utils/api";
import { useSession } from "next-auth/react";
const Requests = () => {
  const { data: session } = useSession();
  useEffect(() => {
    getOrderByUser();
  }, []);

  const [order, setorders] = useState([]);
  const getOrderByUser = async () => {
    const getOrder = await fetch(`${baseUrl}/user/1`, {
      method: "GET",
    });
    const response = await getOrder.json();
    setorders(response);
  };
  console.log(order);
  return (
    <section className="w-full h-full flex items-center justify-center  py-10">
      {
        order.length > 0 ? 
      <TableContainer width={"80%"}>
        <Table variant="simple">
          <TableCaption>Seu Pedidos</TableCaption>
          <Thead background={"#14b7a1"}>
            <Tr >
              <Th></Th>
              <Th color={"white"}>Nome</Th>
              <Th color={"white"}>Preço</Th>
              <Th color={"white"}>Quantidade</Th>
              <Th color={"white"}>Status</Th>
              <Th color={"white"}>Data</Th>
            </Tr>
          </Thead>
          {order.orders?.map((orders, idnex) => (
            <Tbody>
              {orders?.items.map((item, index) => (
                <>
                  <Tr>
                    <Td width={"10%"}>
                        <img src={item.picture_url} alt={item.title} className="w-32 w-20"/>
                       
                        </Td>
                    <Td>{item.title}</Td>
                    <Td> {Number(item.unit_price).toLocaleString("pt-br",{style:"currency", currency:"BRL"})}</Td>
                    <Td> {item.quantity}</Td>
                    <Td> {orders.status}</Td>
                    <Td> {new Date(orders.updateAt).toLocaleDateString()}</Td>
                  </Tr>
                  
                </>
              ))}
            </Tbody>
          ))}
          
        </Table>
      </TableContainer>
      :
      <div className="w-full h-screen flex items-center justify-center">
      <p className="text-base text-gray-400">Nenhum pedido realizado.</p>
</div>

      }
    </section>
  );
};

export default Requests;
