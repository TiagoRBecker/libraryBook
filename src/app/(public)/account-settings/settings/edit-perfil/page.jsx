"use client";
import { useEffect, useRef, useState } from "react";
import Spinner from "../../../../../components/Spinner";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../../../../utils/api";
import { useSession } from "next-auth/react";
import Loading from "../../../../loading";
const EditPerfil = () => {
  const fileInputRef = useRef(null);
  const { data: session, status } = useSession();
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (status === "authenticated") {
      getUser();
    }
  }, [status]);

  const upload = async (e) => {
    setLoading(true);
      
    if (e.target.files.length > 0) {
      // Atualize o estado do avatar
      const fileType = e.target.files[0].type;
      if (
        fileType === "image/jpeg" ||
        fileType === "image/png" ||
        fileType === "image/jpg"
      ) {
        setAvatar(e.target.files[0]);
        setLoading(false);
      } else {
        console.log(e.target.files[0])
      }

      return;
    }
  };
  const getUser = async () => {
    const user = await fetch(`${baseUrl}/user/${session?.user?.id}`);
    const response = await user.json();
    console.log(response)
    setValue("name", response?.name);
    setValue("lastName", response?.lastName);
    setValue("email", response?.email);
    setValue("city", response?.city);
    setValue("cep", response?.cep);
    setValue("adress", response?.adress);
    setValue("district", response?.district);
    setValue("numberAdress", response?.numberAdress);
    setValue("complement", response?.complement);
    setLoading(false)
  };
  const onsubmit = handleSubmit(async (data) => {
    const updatePerfil = await fetch(`${baseUrl}/user-perfil`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
  });
  if(loading){
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Loading/>
      </section>
    )
  }
  return (
    <section className="w-full h-full flex  flex-col px-10   gap-5     ">
      <div className="w-full flex items-center justify-between border-b-[1px]   border-[#14b7a1] py-3">
        <h1 className="uppercase tex-base md:text-2xl font-bold">
          Editar Perfil
        </h1>
        <hr />
        <button className="text-sm bg-[#14b7a1] px-3 py-1 rounded-2xl text-white">
          Conta confirmada
        </button>
      </div>

      <div className="w-full">
        <form className="w-full h-full  py-4" onSubmit={onsubmit}>
          <div className="flex-col md:flex-row md:flex">
            <div className="w-full md:w-[30%] h-full flex flex-col gap-2 items-center justify-center">
              <div className="w-28 h-28 bg-[#14b7a1] rounded-md flex items-center justify-center">
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  hidden
                  id="file"
                   {...register("avatar", { 
      required: 'File is required',
      validate: (value) => {
        if (!value[0]) {
          return "Nenhum arquivo selecionado";
        }
        
        const acceptedFormats = ['jpeg', 'png', 'jpg']; // Add more image formats if needed
        const fileExtension = value[0]?.name.split('.').pop().toLowerCase();
        
        if (!acceptedFormats.includes(fileExtension)) {
          return "Formato inválido. Apenas imagens formato PNG, JP, JPEG";
        }
        
        return true; // Retorne true para indicar que a validação passou
      }
    })} 
    onChange={(e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        setAvatar(file);
      }
    }}
  />
              
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
                className="  bg-[#14b7a1]  px-3 py-1  text-white rounded-md  text-sm "
              >
                Carregar Arquivo
              </label>
              {errors.avatar && (
                    <p className="text-sm text-red-700">
                      {errors.avatar.message}
                    </p>
                  )}
            </div>
            <div className="w-full md:w-[70%] h-full flex flex-col gap-2 ">
              <div className="flex-col  md:flex md:flex-row gap-2   w-full">
                <div className="w-full py-2 md:w-[50%] flex flex-col gap-2">
                  <label htmlFor="">Nome</label>
                  <input
                    {...register("name", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 1,
                        message: "Preencha o campo corretamente",
                      },
                    })}
                    type="text"
                    placeholder="Nome"
                    className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-700">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="w-full py-2 md:w-[50%] flex flex-col gap-2">
                  <label htmlFor="">Sobre Nome</label>
                  <input
                    {...register("lastName", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 1,
                        message: "Preencha o campo corretamente",
                      },
                    })}
                    type="text"
                    placeholder="Sobrenome"
                    className=" capitalize w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-700">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Endereço de E-mail</label>
                <input
                  {...register("email", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 1,
                      message: "Preencha o campo corretamente",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Digite um endereço de e-mail válido",
                    },
                  })}
                  type="text"
                  placeholder="@E-mail"
                  className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                />
                {errors.email && (
                  <p className="text-sm text-red-700">{errors.email.message}</p>
                )}
              </div>

              <div className="flex-col md:flex md:flex-row gap-2   w-full">
                <div className="w-full md:w-[70%] flex flex-col gap-2">
                  <label htmlFor="">CEP</label>
                  <input
                    {...register("cep", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 8,
                        message: "O cep possui 8 digitos",
                      },
                    })}
                    type="text"
                    placeholder="CEP"
                    className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.cep && (
                    <p className="text-sm text-red-600">{errors.cep.message}</p>
                  )}
                </div>
                <div className="w-full justify-start text-base mt-1 md:w-[30%] flex  items-center md:justify-center md:mt-6 gap-2">
                  <Link
                    href={
                      "https://buscacepinter.correios.com.br/app/endereco/index.php"
                    }
                    target="_blank"
                    className="uppercase text-[#14B7A1] text-left"
                  >
                    Não sei meu cep
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Cidade</label>
                <input
                  {...register("city", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 1,
                      message: "Este campo é obrigatório",
                    },
                  })}
                  type="text"
                  placeholder="Cidade"
                  className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                />
                {errors.city && (
                  <p className="text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Bairro</label>
                <input
                  {...register("district", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 1,
                      message: "Este campo é obrigatório",
                    },
                  })}
                  type="text"
                  placeholder="Bairro"
                  className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                />
                {errors.district && (
                  <p className="text-sm text-red-700">
                    {errors.district.message}
                  </p>
                )}
              </div>
              <div className="md:flex md:flex-row gap-2   w-full">
                <div className="w-full py-2 md:w-[70%] flex flex-col gap-2">
                  <label htmlFor="">Rua/Avenida</label>
                  <input
                    {...register("adress", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 1,
                        message: "Este campo é obrigatório",
                      },
                    })}
                    type="text"
                    placeholder="Endereço"
                    className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.adress && (
                    <p className="text-sm text-red-600">
                      {errors.adress.message}
                    </p>
                  )}
                </div>
                <div className="w-full py-2 md:w-[30%] flex flex-col   gap-2">
                  <label htmlFor="">Numero</label>
                  <input
                    {...register("numberAdress", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 1,
                        message: "Este campo é obrigatório",
                      },
                    })}
                    type="text"
                    placeholder="N°"
                    className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                  />
                  {errors.numberAdress && (
                    <p className="text-sm text-red-600">
                      {errors.numberAdress.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Complemento</label>
                <input
                  {...register("complement", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 1,
                      message: "Este campo é obrigatório",
                    },
                  })}
                  type="text"
                  placeholder="Casa, Ap..."
                  className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                />
                {errors.complement && (
                  <p className="text-sm text-red-700">
                    {errors.complement.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full py-4 flex items-center justify-center">
            <button className="w-[250px] bg-[#14b7a1] px-4 py-2 rounded-md text-white">
              Atualizar Perfil
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditPerfil;
