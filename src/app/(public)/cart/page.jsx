"use client";
import { useContext, useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { CartContext } from "../../../Context/index";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { baseUrl } from "../../../utils/api";
   initMercadoPago("TEST-22d54f35-2bc9-451b-911e-b9ac824bce02");
const Cart = () => {
 

  const router = useRouter();
  const { cart ,removeToCart} = useContext(CartContext);
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false); // loading da tela
  console.log(cart)
  //calcula o total dos produtos
  const totalPrice = cart?.reduce((acc, item) => {
    return acc + item.price * 1;
  }, 0);
  const createPreference = async (e) => {
    
    

    try {
      const request = await fetch(`${baseUrl}/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const response = await request.json();
      return response.id;
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-checkout">
          Por favor, aguarde. Em breve, você será direcionado para um ambiente
          seguro.
        </p>
      </div>
    );
  }
 
  
 
  const handleBuy = async (e) => {
    e.preventDefault();
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
  return (
    <>
      <section className="w-full h-full relative py-[4rem]">
        {cart.length <= 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <h3 className="text-lg font-semibold text-[#072137]">
              Seu carrinho está vazio no momento
            </h3>
          </div>
        ) : (
          <div className="w-full h-full grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
            <div className="px-4 pt-8">
              <p className="text-xl font-medium">Lista de Produtos</p>
              {cart?.map((book, index) => (
                <div className="flex border-b-2 border-gray-200 py-5 px-4 ">
                  <div className="w-full flex flex-col gap-2" key={index}>
                    <div className="flex gap-2">
                      <div className="w-[30%]">
                        <img
                          src={book.cover[0]}
                          alt={book.name}
                          className="w-20 h-20"
                        />
                      </div>
                      <div className="w-[40%]   flex flex-col gap-2 px-2">
                        <p>{book.name}</p>
                        <span className="text-sm px-2 py-[1px] bg-[#14b7a1] uppercase text-white text-[12px] rounded-xl w-[80px] flex items-center justify-center">
                          Edição
                        </span>
                        <p>Volume: {book.volume}</p>
                      </div>
                      <div className="w-[40%] flex flex-col px-2  ">
                        <p
                          className=" w-full flex items-center justify-end cursor-pointer"
                          onClick={() => removeToCart(book)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-right"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </p>
                        <p className="flex items-center justify-end pt-10">
                          {book.price &&
                            book.price?.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
              <p className="text-xl font-medium">Detalhes do Pagamento</p>
              <p className="text-gray-400">Complete os detalhes do pagamento</p>
              <form method="POST">
                <div className="">
                  <label
                    htmlFor="name"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Nome
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Digite seu nome"
                    />

                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                  </div>

                  <label
                    htmlFor="email"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-600 px-4 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="seu@email.com"
                    />

                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>

                  <label
                    htmlFor="card-no"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Telefone
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-600 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="( xx ) 999-999-999"
                    />

                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-[80%] flex flex-col">
                      <label
                        htmlFor="card-no"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        Rua
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-600 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Digite seu endereço"
                        />

                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 w-4 text-gray-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-[20%] flex flex-col">
                      <label
                        htmlFor="card-no"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        Numero
                      </label>

                      <div className="relative">
                        <input
                          type="number"
                          className="w-full rounded-md border border-gray-600 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="999"
                        />

                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 w-4 text-gray-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label
                    htmlFor="billing-address"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Bairro
                  </label>

                  <div className="relative ">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-600 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Bairro"
                    />
                  </div>

                  <label
                    htmlFor="billing-address"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Cidade
                  </label>

                  <div className="relative ">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-600 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Cidade"
                    />
                  </div>

                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Subtotal
                      </p>
                      <p className="font-semibold text-gray-900">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(totalPrice)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>

                    <p className="text-2xl font-semibold text-gray-900">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(totalPrice)}
                    </p>
                  </div>
                </div>

                <div className="py-4 w-full h-full flex flex-col gap-1">
                  <PayPalScriptProvider options={{ clientId: "test" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                  </PayPalScriptProvider>
                 
                </div>
              </form>
              <button onClick={handleBuy}>Pagar</button>
              {preferenceId &&<Wallet initialization={{ preferenceId:preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
              

            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
