import { Link } from "@chakra-ui/react";

const DeletAcc = () => {
  return (
    <section className="w-full h-full flex  flex-col px-10   gap-5  ">
      <div className="w-full flex items-center justify-between border-b-[1px]   border-[#14b7a1]  py-3">
        <h1 className="uppercase text-2xl font-bold">Fechar Conta</h1>
        <hr />
        <button className="text-sm bg-[#14b7a1]  px-3 py-1 rounded-2xl text-white">
          Conta confirmada
        </button>
      </div>
      <form className="flex flex-col item gap-4 py-4 w-full">
        <p>
          <span className="text-red-500">Atenção</span> o encerremento da conta
          será irreversível.Ela exclui todas as suas fotos, coleções e
          estatísticas.
        </p>
        <div className="flex items-center h-full w-full gap-2">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="">Digite sua senha atual</label>
            <input
              type="text"
              placeholder="Digite sua senha"
              className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="w-[250px] bg-[#14b7a1] px-4 py-2 rounded-md text-white">
            Deletar conta
          </button>
        </div>
      </form>
      <div className="w-full flex flex-col gap-5 bg-[#14b7a1]  text-white rounded py-2 px-2">
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
        <p>
          Excluir sua conta removera todas as suas atividades da plataforma
          Plash Magazine, por tanto as coleções serão perdidas, todas as
          informacões,consquistas,compras, fotos, adicionadas.
        </p>
        <div className="flex gap-2">
          <p>Se voçê deseja apenas alterar o perfil. </p>

          <Link href={"/account-settings/settings/edit-perfil"}>
            <button className="w-[250px] bg-black px-4 py-2 rounded-md text-white">
              Perfil
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeletAcc;
