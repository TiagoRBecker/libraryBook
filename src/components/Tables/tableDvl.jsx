'use client'
import { Box, Progress, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const TableDvl = ({data,pay,total,receive}) => {
    return ( 
        <>
        <div className="w-[80%] flex items-center justify-center py-4 gap-3">
         <Box  shadow={'2xl'} bg="#2E8B57" w="33%" p={8} color="white">
           <h2 className="text-center">Total</h2>
          <div className="w-full flex items-center justify-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <p>{Number(total / 100).toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</p>
          </div>
        </Box>
        <Box shadow={'2xl'} bg="#d96060" w="33%" p={8} color="white">
        <h2 className="text-center">A Receber</h2>
        <div className="w-full flex items-center justify-center gap-2">
    
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <p>{Number(receive / 100).toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</p>
          </div>
        </Box>
        <Box bg="#2E8B57" shadow={'2xl'} w="33%" p={8} color="white">
        <h2 className="text-center">Recebido</h2>
        <div className="w-full flex items-center justify-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <p>{Number(pay / 100).toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</p>
          </div>
        </Box>
        </div>
        <TableContainer width={"80%"}>
        <h1 className="w-full text-left text-xl py-4 text-gray-400">
          Divisão de Lucro
        </h1>
        <Table variant="simple">
          <TableCaption>DVLS á pagar</TableCaption>
          <Thead background={"#14b7a1"}>
            <Tr>
              <Th color={"white"}>ID</Th>
              <Th color={"white"}></Th>
              <Th color={"white"}>Nome</Th>
              <Th color={"white"}>%</Th>
              <Th color={"white"}>Receber</Th>
              <Th color={"white"}>Pago</Th>
              <Th color={"white"}>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.dvlClient?.map((dvl, index) => (
           
                  <Tr>
                    {" "}
                    <Td>{dvl.id}</Td>
                    <Td>
                      <img
                        src={dvl.picture}
                        alt={dvl.name}
                        className="w-14 h-10 object-contain"
                      />
                    </Td>
                    <Td>{dvl.name}</Td>
                    <Td>
                      <Progress
                        colorScheme="green"
                        value={
                          Number(dvl.price * 2) === Number(dvl.toReceive / 100)
                            ? 100
                            : Number(dvl.toReceive)
                        }
                      />
                    </Td>
                    <Td>
                      {Number(dvl.paidOut / 100).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Td>
                    <Td>
                      {Number(dvl.toReceive / 100).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Td>
                    <Td>
                      {dvl.toReceive === dvl.price ? (
                        <p className="text-red-500">Finalizado</p>
                      ) : (
                        <p className="text-green-500">Ativo</p>
                      )}
                    </Td>
                  </Tr>
            
            ))}
          </Tbody>
        </Table>
      </TableContainer>
        </>
       
     );
}
 
export default TableDvl;