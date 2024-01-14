"use client";
import { useState } from "react";
import Spinner from "../../../../components/Spinner/index";
import Link from "next/link";
const Settings = () => {
  const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState(false);
  const [ currentIndex, setCurrentIndex] = useState(0)
   const arrayLink = ['Editar Perfil','Alterar Senha','Alterar Endereço',' Fechar Conta']
  const upload = async (e) => {
    setLoading(true);

    if (e.target.files.length > 0) {
      // Atualize o estado do avatar
      setAvatar(e.target.files[0]);
    }

    setLoading(false);
    return;
  };

  const changeLayout = () => {
     
    switch (currentIndex) {
      case 0:
        return (
          <div className="w-full h-full flex  flex-col px-10   gap-5  ">
            <div className="w-full flex items-center justify-between border-b-[1px]   border-gray-400 py-3">
              <h1 className="uppercase text-2xl font-bold">Editar Perfil</h1>
              <hr />
              <button className="text-sm bg-black px-3 py-1 rounded-2xl text-white">
                Conta confirmada
              </button>
            </div>

            <div className="w-full">
              <form className="w-full h-full  py-4">
                <div className="flex">
                  <div className="w-[30%] h-full flex flex-col gap-6 items-center justify-center">
                    <div className="w-28 h-28 bg-gray-400 rounded-md flex items-center justify-center">
                      <input type="file" hidden id="file" onChange={upload} />
                      {loading ? (
                        <Spinner />
                      ) : (
                        <>
                          {avatar ? (
                            <img
                              src={URL.createObjectURL(avatar)}
                              alt=""
                              className="w-24 h-24 px-2 py-2"
                            />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-12 h-12 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                              />
                            </svg>
                          )}
                        </>
                      )}
                    </div>
                    <label
                      htmlFor="file"
                      className="  border-[1px] border-black px-3 py-1  text-black rounded-md  text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white cursor-pointer"
                    >
                      Carregar Arquivo
                    </label>
                  </div>
                  <div className="w-[70%] h-full flex flex-col gap-8 ">
                    <div className="flex gap-2   w-full">
                      <div className="w-[50%] flex flex-col gap-2">
                        <label htmlFor="">Nome</label>
                        <input
                          type="text"
                          placeholder="Digite seu  nome"
                          className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                        />
                      </div>
                      <div className="w-[50%] flex flex-col gap-2">
                        <label htmlFor="">Sobre Nome</label>
                        <input
                          type="text"
                          placeholder="Digite seu sobre nome"
                          className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="">Endereço de E-mail</label>
                      <input
                        type="text"
                        placeholder="Digite seu sobre nome"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="">CPF</label>
                      <input
                        type="text"
                        placeholder="000.000.000.00"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full py-4 flex items-center justify-center">
                  <button className="w-full bg-black px-4 py-1 rounded-sm text-white">
                    Atualizar conta
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
        break
      case 1:
        return (
          <div className="w-full h-full flex  flex-col px-10   gap-5  ">
            <div className="w-full flex items-center justify-between border-b-[1px]   border-gray-400 py-3">
              <h1 className="uppercase text-2xl font-bold">Mudar Senha</h1>
              <hr />
              <button className="text-sm bg-black px-3 py-1 rounded-2xl text-white">
                Conta confirmada
              </button>
            </div>
            <form className="flex flex-col gap-4 w-full">
              <div className="">
                <input
                  type="text"
                  placeholder="Digite sua senha atual"
                  className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Digite a nova senha "
                  className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Repita a nova senha "
                  className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4"
                />
              </div>
              <button className="w-full bg-black px-4 py-1 rounded-sm text-white">
                Atualizar
              </button>
            </form>
          </div>
        );
        break
      case 3:
        return(
        <div className="w-full h-full flex  flex-col px-10   gap-5  ">
        <div className="w-full flex items-center justify-between border-b-[1px]   border-gray-400 py-3">
          <h1 className="uppercase text-2xl font-bold">Fechar Conta</h1>
          <hr />
          <button className="text-sm bg-black px-3 py-1 rounded-2xl text-white">
            Conta confirmada
          </button>
        </div>
        <form className="flex flex-col item gap-4 py-4 w-full">
          <p>
            <span className="text-red-500">Atenção</span> o encerremento da
            conta será irreversível.Ela exclui todas as suas fotos, coleções e
            estatísticas.
          </p>
          <div className="flex items-center h-full w-full gap-2">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="">Digite sua senha atual</label>
              <input
                type="text"
                placeholder="Digite seu endereço"
                className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4"
              />
            </div>
          </div>
          <div className="w-[20%]">
            <button className="w-full bg-black px-4 py-1 rounded-sm text-white">
              Deletar conta
            </button>
          </div>
        </form>
        <div className="w-full flex flex-col gap-5 bg-gray-300 rounded py-2 px-2">
          <div className="flex gap-2">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </p>
          <p>Excluir sua conta</p>
          </div>
          <p>Excluir sua conta removera todas as suas atividades da plataforma Plash Magazine, por tanto as coleções serão perdidas, todas as informacões,consquistas,compras, fotos, adicionadas.</p>
          <div className="flex gap-2">
          <p>Se voçê deseja apenas alterar o perfil. </p>

           
          <button className="w-36 bg-black px-4 py-1 rounded-sm text-white">
             Perfil
            </button>
          </div>
        </div>
      </div>
        )
        break
       default:  
       return (
        <div className="w-full h-full flex  flex-col px-10   gap-5  ">
          <div className="w-full flex items-center justify-between border-b-[1px]   border-gray-400 py-3">
            <h1 className="uppercase text-2xl font-bold">Editar Perfil</h1>
            <hr />
            <button className="text-sm bg-black px-3 py-1 rounded-2xl text-white">
              Conta confirmada
            </button>
          </div>

          <div className="w-full">
            <form className="w-full h-full  py-4">
              <div className="flex">
                <div className="w-[30%] h-full flex flex-col gap-6 items-center justify-center">
                  <div className="w-28 h-28 bg-gray-400 rounded-md flex items-center justify-center">
                    <input type="file" hidden id="file" onChange={upload} />
                    {loading ? (
                      <Spinner />
                    ) : (
                      <>
                        {avatar ? (
                          <img
                            src={URL.createObjectURL(avatar)}
                            alt=""
                            className="w-24 h-24 px-2 py-2"
                          />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                            />
                          </svg>
                        )}
                      </>
                    )}
                  </div>
                  <label
                    htmlFor="file"
                    className="  border-[1px] border-black px-3 py-1  text-black rounded-md  text-sm transition duration-700 ease-in-out hover:bg-black hover:text-white cursor-pointer"
                  >
                    Carregar Arquivo
                  </label>
                </div>
                <div className="w-[70%] h-full flex flex-col gap-8 ">
                  <div className="flex gap-2   w-full">
                    <div className="w-[50%] flex flex-col gap-2">
                      <label htmlFor="">Nome</label>
                      <input
                        type="text"
                        placeholder="Digite seu  nome"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                    </div>
                    <div className="w-[50%] flex flex-col gap-2">
                      <label htmlFor="">Sobre Nome</label>
                      <input
                        type="text"
                        placeholder="Digite seu sobre nome"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Endereço de E-mail</label>
                    <input
                      type="text"
                      placeholder="Digite seu sobre nome"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">CPF</label>
                    <input
                      type="text"
                      placeholder="000.000.000.00"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-4 flex items-center justify-center">
                <button className="w-full bg-black px-4 py-1 rounded-sm text-white">
                  Atualizar conta
                </button>
              </div>
            </form>
          </div>
        </div>
      );
      break
      }
      
  };
   const getIndex =(id)=>{
    setCurrentIndex(id)
   }
  return (
    <section className="w-full h-full flex pt-10 ">
      <div className="w-[40%] h-full">
        
          {
            arrayLink.map((link,index)=>(
            <ul className={ index === currentIndex ?"w-full h-full border-t-[1px] border-b-[1px] border-r-[1px] border-gray-400 bg-gray-400  flex flex-col text-white ":"w-full h-full border-t-[1px] border-b-[1px] border-r-[1px] border-gray-400   flex flex-col "}>
            <li onClick={()=>getIndex(index)}className="py-2 px-2 border-b-[2px] border-gray-400 hover:bg-gray-300 text-[#">
              { link}
            </li>
            </ul>
            ))
          }
         
      </div>
      {changeLayout()}
    </section>
  );
};

export default Settings;
