'use client'
import { useContext, useEffect } from "react";
import { baseUrl } from "../../../utils/api";
import { useSearchParams } from 'next/navigation'
import { CartContext } from "../../../Context";

const Sucess =  () => {
     const { clearCart} = useContext(CartContext)
    const params = useSearchParams()
    const order_id = params.get("order_id")
    useEffect(()=>{
        if(order_id){
            getStatusPayment()
        }
    },[])
   
    const getStatusPayment = async ()=>{
        const request = await fetch(`${baseUrl}/payment-status?order_id=${order_id}`,{
            method:"GET"
        })
        const response = await request.json()
         if(response === "paid"){
            clearCart()
         }
        return
        }
  return (
    <section className="w-full h-screen mt-16 flex justify-center">
      <div className="w-1/2 flex flex-col gap-4 pt-10 ">
        <h1 className="bg-green-600 py-5 rounded-md text-white text-center text-2xl">Pagamento Aprovado com sucesso</h1>
        <p className="text-gray-500 w-full text-xl">
          Parabéns pela compra na Plash Magazine! Sua transação foi concluída
          com sucesso. Esperamos que aproveite a sua leitura. Obrigado por
          escolher a Plash Magazine e volte sempre!
        </p>
      </div>
    </section>
  );
};

export default Sucess;
