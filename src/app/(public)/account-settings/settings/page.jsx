const Settings = () => {
    return (
    <div className="w-full h-screen flex  flex-col px-10 py-10 gap-5">
      <h1>Nome do Usuário</h1>
      <p>Leonardo Paiva</p>
      <h1>Email do Usúario:</h1>
      <p>leonardoteste@gmail.com</p>
       <div className="">
        <form className="flex flex-col gap-4 w-[70%]">
            <h1>Mudar Senha</h1>
            <div className="">
                <input type="text" placeholder="Digite sua senha atual"  className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4"/>
            </div>
            <div className="">
                <input type="text" placeholder="Digite a nova senha " className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4" />
            </div>
            <div className="">
                <input type="text" placeholder="Repita a nova senha " className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4"/>
            </div>
            <button className="bg-black py-4 rounded-md text-white">Atualizar</button>
        </form>
       </div>

    </div>);
}
 
export default Settings;