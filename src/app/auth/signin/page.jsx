import Link from "next/link";

const Signin = () => {
    return (  
        <section className="w-full h-screen overflow-y-hidden">
        <div className="w-full h-full grid grid-cols-2">
            <div className="w-full h-full">
                <img src="/bg_login.jpg" alt="" className="w-full h-auto -mt-20" />
            </div>
            <div className="w-full h-full flex items-center flex-col ">
                <div className="w-full h-52 flex flex-col items-center justify-center">
                   <img src="/logo.png" alt="Logo" className="w-44 h-16 object-fill" />
                   <p className="tracking-[18px] text-2xl font-bold">MAGAZINE</p>
                </div>
                <form action="" className="w-[450px] flex items-center justify-center flex-col gap-3 ">
                    <h1>Acessar sua conta</h1>
                    {/* Adicione seus elementos do formulário aqui */}
                    <div className="flex flex-col w-full gap-2 px-2">
                    <label htmlFor="">E-mail</label>
                    <input type="text" placeholder="Email@email.com" className="w-full h-10 pl-3 outline-none border-[1px] border-gray-300 rounded-md" />
                    </div>
                    <div className="flex flex-col w-full gap-2 px-2">
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder="*******" className="w-full pl-3 h-10 outline-none border-[1px] border-gray-300 rounded-md" />
                    </div>

                    <div className="w-full flex items-center justify-end">
                        <Link href={"/recovery"} className="text-blue-600">
                            Esqueceu sua senha?
                        </Link>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button className="px-4 py-2 bg-black text-white rounded">ENTRAR</button>
                    </div>
                    
                </form>
                <div className="w-[450px] border-b-2 border-gray-400 pt-10">

                </div>
                <p className="pt-4">Ainda não tem conta? <Link href={"/signup"} className="text-blue-600">Cadastre-se!</Link></p>
            </div>
        </div>
    </section>);
}
 
export default Signin;