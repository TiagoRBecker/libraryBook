"use client"
import { signIn } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signin =  () => {
const [ email,setEmail] = useState("")
const [ password,setPassword] = useState("")
const [erroText,setErrorText] = useState("")
const [error ,setError] = useState(false)
 const router = useRouter()
const handleSubmit = async (e)=>{
    e.preventDefault()
    if(email === "" || password === ""){
        alert("Campos nao pode estar vazio")
        return
    }
      const login  = await signIn("credentials" ,{email:email,password:password, redirect:false})
      if(login.error){
        setError(true)
        setErrorText(login.error)
        return
      }
      else{
         router.push("/")
      }
}
    return (  
        <section className="w-full h-screen overflow-y-hidden ">
        <div className="w-full h-full flex">
            <div className="hidden md:w-[40%] md:flex h-full">
                <img src="/bg_login.jpg" alt="" className="w-full h-auto -mt-20" />
            </div>
            <div className="w-full md:w-[60%] h-full flex items-center flex-col ">
                <div className="w-full h-52 flex flex-col items-center justify-center">
                    <Link href={"/"} className="flex items-center justify-center flex-col">
                   <img src="/logo.png" alt="Logo" className="w-44 h-16 object-fill " />
                   <p className="tracking-[18px] text-2xl font-bold ">MAGAZINE</p>
                   </Link>
                   {error && <p className="text-red-300">{erroText}</p>}
                </div>
                <form action="" onSubmit={handleSubmit} className="w-full md:w-[450px] flex items-center justify-center flex-col gap-3 ">
                    <h1>Acessar sua conta</h1>
                    {/* Adicione seus elementos do formulário aqui */}
                    <div className="flex flex-col w-full gap-2 px-2">
                    <label htmlFor="">E-mail</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email@email.com" className="w-full h-10 pl-3 outline-none border-[1px] border-gray-300 rounded-md" />
                    </div>
                    <div className="flex flex-col w-full gap-2 px-2">
                    <label htmlFor="">Senha</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="*******" className="w-full pl-3 h-10 outline-none border-[1px] border-gray-300 rounded-md" />
                    </div>

                    <div className="w-full flex items-center justify-end">
                        <Link href={"/recovery"} className="text-[#14b7a1] px-1">
                            Esqueceu sua senha?
                        </Link>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button type="submit" className="px-4 py-2 bg-[#14b7a1] text-white rounded">ENTRAR</button>
                    </div>
                    
                </form>
                <div className="w-full md:w-[450px] border-b-2 border-[#14b7a1] pt-14">

                </div>
                <p className="pt-4">Ainda não tem conta? <Link href={"/signup"} className="text-[#14b7a1]">Cadastre-se!</Link></p>
            </div>
        </div>
    </section>);
}
 
export default Signin;