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
const TableOrderID = ({ data }) => {
  return (
    <section className="w-full h-full flex items-center">
      <TableContainer width={"100%"}>
        <Table>
          <TableCaption>Numero do Pedido{data.id} </TableCaption>
          <Thead background={"#14b7a1"}>
            <Tr>
              <Th color={"white"}></Th>
              <Th color={"white"}>Nome</Th>
              <Th color={"white"}>Preço</Th>
              <Th color={"white"}>Tipo</Th>
            </Tr>
          </Thead>

          {data?.items?.map((item, index) => (
            <Tbody key={index}>
              <Tr>
                <Td>
                  <img
                    src={item.picture_url}
                    alt={item.title}
                    className="w-12 h-14 object-fill"
                  />
                </Td>
                <Td>{item.title}</Td>
                <Td>
                  {Number(item.unit_price / 100).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
                <Td>Impresso</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </section>
  );
};

export default TableOrderID;
