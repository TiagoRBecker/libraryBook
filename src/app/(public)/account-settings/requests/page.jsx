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

import { baseUrl } from "../../../../utils/api";

import { useEffect, useState } from "react";
import Loading from "../../../loading";
import { useSession } from "next-auth/react";
import Link from "next/link";
import WayPoint from "../../../../components/WayPoint";

const Requests = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    getOrderByUser();
  }, [session]);
  const getOrderByUser = async () => {
    const id = session?.user.id;
    const getOrder = await fetch(`${baseUrl}/user/${id}`, {
      method: "GET",
    });
    const response = await getOrder.json();

    setData(response);
    setLoading(false);
    return response;
  };
  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Loading />
      </section>
    );
  }
  const items = data.orders.map((item) => item.items);
  const flatItems = items.flat(); // Nivela o array

  const totalUnitPrice = flatItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.unit_price;
  }, 0);


  return (
    <section className="w-[80%] min-h-screen mx-auto   py-10">
       <WayPoint url={`/account-settings/requests`} nameCategory={"Pedidos"}  />
      <TableContainer width={"100%"}>
        <Table variant="simple">
          <TableCaption>Seu Pedidos</TableCaption>
          <Thead background={"#14b7a1"}>
            <Tr>
            <Th color={"white"}>Data</Th>
              <Th color={"white"}>Nº</Th>
              <Th color={"white"}>Items</Th>
              <Th color={"white"}>Preço</Th>
              <Th color={"white"}>Status</Th>
       
            </Tr>
          </Thead>
          {data?.orders?.map((orders, idnex) => (
            <Tbody>
              <Tr>
              
              <Td>{new Date(orders.createDate).toLocaleDateString()}</Td>
                <Td>{orders.id}</Td>
                <Td>{orders.items.length}</Td>
                <Td>
                  {Number(totalUnitPrice / 100).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
                <Link href={`/account-settings/requests/${orders.id}`} className="w-full">
                <Td> {orders.status}</Td>
                
              </Link>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </section>
  );
};

export default Requests;
