"use client";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../../../../utils/api";

const EditPass = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubimt  = handleSubmit(async(data)=>{
     const id= 1
    const changePass = await fetch(`${baseUrl}/user-pass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({data,id }),
      });
      
  })

   
 
  return (
    <section className="w-full h-full flex  flex-col px-10    gap-5  ">
      <div className="w-full flex items-center justify-between border-b-[1px]   border-[#14b7a1] py-3">
        <h1 className="uppercase tex-base md:text-2xl font-bold">Mudar Senha</h1>
        <hr />
        <button className="text-sm bg-[#14b7a1]     px-3 py-1 rounded-2xl text-white">
          Conta confirmada
        </button>
      </div>
      <form className="flex flex-col gap-4 w-full" onSubmit={onSubimt}>
        <div className="">
          <input
            {...register("password", {
              required: "Este campo é obrigatório",
              message: "Campo brigatorio",
            })}
            type="password"
            placeholder="Digite sua senha atual"
            className="w-full h-9 rounded-md outline-none border-[1px]  border-gray-200 pl-4"
          />
          {errors.password && (
            <p className="text-sm text-red-700">{errors.password.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Senha</label>
          <input
            {...register("newPassword", {
              required: "Este campo é obrigatório",
              minLength: {
                value: 8,
                message: "A senha deve ter pelo menos 8 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message:
                  "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
              },
            })}
            type="password"
            placeholder="Digite sua senha"
            className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
          />
          {errors.newPassword && (
            <p className="text-sm text-red-700">{errors.newPassword.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Confirmar Senha</label>
          <input
            {...register("newConfPassword", {
              required: "Este campo é obrigatório",
              validate: (value) =>
                value === getValues("newPassword") || "As senhas não coincidem",
            })}
            type="password"
            placeholder="Confirme sua senha"
            className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
          />
        </div>
        {errors.newConfPassword && (
          <p className="text-sm text-red-700">
            {errors.newConfPassword.message}
          </p>
        )}
        <div className="w-full py-4 flex items-center justify-center">
          <button className="w-[250px] bg-[#14b7a1] px-4 py-2 rounded-md text-white">
            Atualizar Senha
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditPass;
