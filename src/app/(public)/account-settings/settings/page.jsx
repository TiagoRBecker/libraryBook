const Settings = () => {
  return (
    <section className="w-full h-full grid grid-cols-2">
      <div className="w-[40%] h-full">
        <div className="w-full  px-4 py-2">
         <ul className="w-full h-full border-t-[1px] border-b-[1px] border-r-[1px] border-gray-400 flex flex-col ">
            <li className="py-2 px-2 border-b-[2px] border-gray-400 hover:bg-gray-500 text-[#">Editar Perfil</li>
            <li className="py-2 px-2 border-b-[2px] border-gray-400">Configuração de Email</li>
            <li className="py-2 px-2 border-b-[2px] border-gray-400">Alterar Senha</li>
            <li className="py-2 px-2 border-b-[2px] border-gray-400">Alterar Endereço</li>
            <li className="py-2 px-2 border-b-[2px] border-gray-400">Fechar Conta</li>
         </ul>
        </div>
      </div>
      <div className="w-[70%] h-full flex  flex-col px-10 py-8  gap-5 bg-red-200 ">
        <h1>Nome do Usuário</h1>
        <p>Leonardo Paiva</p>
        <h1>Email do Usúario:</h1>
        <p>leonardoteste@gmail.com</p>
        <div className="w-full">
          <form className="flex flex-col gap-4 w-full">
            <h1>Mudar Senha</h1>
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
            <button className="bg-black py-4 rounded-md text-white">
              Atualizar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Settings;
