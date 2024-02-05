"use client";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { baseUrl } from "../../../utils/api";

const signup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setloading] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Lista de URLs de imagens correspondentes a cada índice
    const imageUrlsList = [
      "/step_2.jpg",
      "/step_1.jpg",
      "/step_2.jpg",
      "/step_1.jpg",
      "/step_1.jpg",
    ];

    // Pré-carregar as imagens
    const preloadedImages = imageUrlsList.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });
    if (preloadedImages) {
      setImageUrls(preloadedImages);
      setloading(false);
    }
    // Atualizar o estado com as URLs pré-carregadas
  }, []);
  const steps = [
    { description: "Iniciais" },
    { description: "Endereço" },
    { description: "Cadastrar" },
    { description: "Concluido" },
  ];

  function Steep() {
    return (
      <Box w="100%" maxW="sm">
        <Stepper index={currentIndex} size="sm" colorScheme={"green"} gap={1}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }
  const handleStepNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handleStepPrev = () => {
    if (currentIndex === 0) {
      return;
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      const createAccount = await fetch(`${baseUrl}/signUp`,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( data ),
      })
      if(createAccount.status === 200){
      setCurrentIndex(currentIndex + 2);
      return
      }
    } catch (error) {
      console.log(error)
    }
    
   
      
    
  });
 

  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        carregando aguarde
      </section>
    );
  }
  return (
    <section className="w-full h-full md:h-screen overflow-y-hidden">
      <div className="w-full h-full flex ">
        <div className="w-full md:w-[55%] h-full px-10 flex flex-col gap-4  py-10 overflow-y-auto">
          <div className="hidden sm:w-full px-1 py-1 sm:flex justify-center items-center">
            {Steep()}
          </div>
          <h1 className="w-full text-center font-bold text-1xl tracking-[18px] uppercase">
            Magazine
          </h1>

          <form
            action=""
            className="w-full py-10 flex items-center justify-center flex-col"
          >
            <div className="w-full h-full py-4">
              {currentIndex === 0 && (
                <div className="w-full h-full flex flex-col gap-6  ">
                  <h1 className="text-center text-2xl font-bold">
                    Crie sua conta!E grátis.
                  </h1>
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
                        placeholder="Digite seu  nome"
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
                        placeholder="Digite seu sobre nome"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
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
                      placeholder="Digite seu sobre nome"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-700">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Senha</label>
                    <input
                      {...register("password", {
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
                    {errors.password && (
                      <p className="text-sm text-red-700">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Confirmar Senha</label>
                    <input
                      {...register("confPassword", {
                        required: "Este campo é obrigatório",
                        validate: (value) =>
                          value === getValues("password") ||
                          "As senhas não coincidem",
                      })}
                      type="password"
                      placeholder="Confirme sua senha"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                  </div>
                  {errors.confPassword && (
                      <p className="text-sm text-red-700">
                        {errors.confPassword.message}
                      </p>
                    )}
                </div>
              )}
              {currentIndex === 1 && (
                <div className="w-full h-full flex flex-col gap-8  overflow-y-visible">
                  <h1 className="text-center text-2xl font-bold">
                    Cadastrar Endereço
                  </h1>
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
                        placeholder="Digite seu cep"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                      {errors.cep && <p className="text-sm text-red-600">{errors.cep.message}</p>}
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
                      placeholder="Digite sua cidade"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                    {errors.city && <p className="text-sm text-red-600">{errors.city.message}</p>}
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
                      placeholder="Ditite seu bairro"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                     {errors.district && <p className="text-sm text-red-700">{errors.district.message}</p>}
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
                        placeholder="Digite seu  endereço"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                       {errors.adress && <p className="text-sm text-red-600">{errors.adress.message}</p>}
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
                        placeholder="Digite seu  numero"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                      {errors.numberAdress && <p className="text-sm text-red-600">{errors.numberAdress.message}</p>}
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
                      placeholder="ex: Casa, Ap..."
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                    {errors.complement && <p className="text-sm text-red-700">{errors.complement.message}</p>}
                  </div>
                </div>
              )}
              {currentIndex === 2 && (
                <div className="w-full h-full flex flex-col gap-8 ">
                  <div className="w-full flex items-center justify-center">
                    <button
                      onClick={onSubmit}
                      type="button"
                      className="w-40 bg-black px-4 py-3 rounded-sm text-white"
                    >
                      Cadastrar
                    </button>
                  </div>
                  <div className="w-full h-1 border-b-2 border-gray-400"></div>
                  <p className=" text-[#14B7A1] text-center">
                    Tem uma conta? <Link href={"/auth/signin"}>Entre</Link>
                  </p>

                  <div className="flex items-center justify-center flex-col">
                    <span>
                      Ao se inscrever voçê concorda com as as políticas da Plash
                      Magazine
                    </span>
                    <p className="text-[#14B7A1] ">
                      Termos de Serviço <span className="text-black">e</span>{" "}
                      Políticas de Privacidades
                    </p>
                  </div>
                </div>
              )}
              {currentIndex === 4 && (
                <div className="w-full h-full flex flex-col gap-8 ">
                  <h1 className="text-center text-xl font-bold">Concluído.</h1>
                  <h2 className="text-3xl font-bold text-center ">
                    Sua conta foi criada co sucesso!
                  </h2>
                  <p>
                    Parabéns voçê concluiu todos os passos.Agora você pode
                    desfrutar de todas as funcionalidades da{" "}
                    <span className="text-[#14B7A1] font-bold">
                      Plash Magazine
                    </span>{" "}
                    em suas compras e vendas.
                  </p>
                  <p>
                    Lá em{" "}
                    <span className="text-[#14B7A1] font-bold">
                      Meu Perfil você pode inserir seus dados cadastrais para
                      receber suas encomendas.
                    </span>
                  </p>
                  <p>
                    Clique no Botão para fazer Login e visitar nossos produtos.
                  </p>
                  <Link href={"/auth/signin"}>
                    <div className="w-full flex items-center justify-center">
                      <button
                        type="button"
                        className="w-40 bg-black px-4 py-3 rounded-sm text-white"
                      >
                        Continuar
                      </button>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full  flex items-center justify-center gap-5">
              {currentIndex === 4 ? (
                <></>
              ) : (
                <button
                  type="button"
                  onClick={handleStepPrev}
                  className="w-40 bg-[#14b7a1] px-4 py-1 rounded-sm text-white"
                >
                  Voltar
                </button>
              )}

              {currentIndex >= 2 || currentIndex === 4 ? (
                <></>
              ) : (
                <button
                  type="button"
                  onClick={handleStepNext}
                  className="w-40 bg-[#14b7a1] px-4 py-1 rounded-sm text-white"
                >
                  Proximo
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="hidden md:w-[45%] h-auto md:flex ">
          {currentIndex >= 0 && currentIndex < imageUrls.length && (
            <img
              src={imageUrls[currentIndex].src}
              alt="steps"
              className="w-full h-full object-cover "
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default signup;
