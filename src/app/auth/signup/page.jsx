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

import { useState } from "react";
const signup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const steps = [
    { title: "1", description: "Dados Iniciais" },
    { title: "2", description: "Endereço" },
    { title: "3", description: "Cadastrar" },
    { title: "4", description: "Concluido" },
  ];

  function Steep() {
    return (
      <Stepper index={currentIndex} size="md" colorScheme={"green"}>
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
    );
  }
  const handleStepNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handleStepPrev = () => {
    if (currentIndex === 0) {
      return;
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleSubmit = () => {
    const simulator = true;
    if (simulator) {
      setCurrentIndex(currentIndex + 2);
    } else {
      alert("Não foi possivel criar sua conta");
    }
  };

    
  return (
    <section className="w-full   h-screen overflow-y-hidden">
      <div className="w-full h-full flex  ">
        <div className=" w-[70%] h-full px-10 flex flex-col gap-4  py-10 overflow-y-auto">
          <div className="py-10">{Steep()}</div>
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
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Senha</label>
                    <input
                      type="text"
                      placeholder="Digite sua senha"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Confirmar Senha</label>
                    <input
                      type="text"
                      placeholder="Confirme sua senha"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                  </div>
                 
                </div>
              )}
              {currentIndex === 1 && (
                <div className="w-full h-full flex flex-col gap-8  overflow-y-visible">
                  <h1 className="text-center text-2xl font-bold">
                   Cadastrar Endereço
                  </h1>
                  <div className="flex gap-2   w-full">
                    <div className="w-[70%] flex flex-col gap-2">
                      <label htmlFor="">CEP</label>
                      <input
                        type="text"
                        placeholder="Digite seu cep"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                    </div>
                    <div className="w-[30%] flex flex-col items-center justify-center mt-6 gap-2">
                      <Link
                        href={
                          "https://buscacepinter.correios.com.br/app/endereco/index.php"
                        }
                        target="_blank"
                        className="uppercase text-[#14B7A1]"
                      >
                        Não sei meu cep
                      </Link>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Cidade</label>
                    <input
                      type="text"
                      placeholder="Digite sua cidade"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Bairro</label>
                    <input
                      type="text"
                      placeholder="Ditite seu bairro"
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                  </div>
                  <div className="flex gap-2   w-full">
                    <div className="w-[70%] flex flex-col gap-2">
                      <label htmlFor="">Rua/Avenida</label>
                      <input
                        type="text"
                        placeholder="Digite seu  endereço"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                    </div>
                    <div className="w-[30%] flex flex-col   gap-2">
                      <label htmlFor="">Numero</label>
                      <input
                        type="text"
                        placeholder="Digite seu  numero"
                        className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Complemento</label>
                    <input
                      type="text"
                      placeholder="ex: Casa, Ap..."
                      className="w-full outline-none h-10 border-[1px] border-gray-200 rounded-md pl-3"
                    />
                  </div>
                  
                </div>
              )}
              {currentIndex === 2 && (
                <div className="w-full h-full flex flex-col gap-8 ">
                  <div className="w-full flex items-center justify-center">
                  <button
                    onClick={handleSubmit}
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
                  <h1 className="text-center text-xl font-bold">
                    Concluído.
                  </h1>
                  <h2 className="text-3xl font-bold text-center ">Sua conta foi criada co sucesso!</h2>
                   <p>Parabéns voçê concluiu todos os passos.Agora você pode desfrutar de todas as funcionalidades da <span className="text-[#14B7A1] font-bold">Plash Magazine</span> em suas compras e vendas.</p>
                 <p>Lá em <span className="text-[#14B7A1] font-bold">Meu Perfil você pode inserir seus dados cadastrais para receber suas encomendas.</span></p>
                 <p>Clique no Botão para fazer Login e visitar nossos produtos.</p>
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
                    className="w-40 bg-black px-4 py-1 rounded-sm text-white"
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
                    className="w-40 bg-black px-4 py-1 rounded-sm text-white"
                  >
                    Proximo
                  </button>
                )}
                  </div>
            </form>
          
        </div>
        <div className="w-[30%] h-auto ">
          {currentIndex === 0 && <img src="/step_2.jpg" alt="" className="w-full h-full object-fill" /> }
          {currentIndex === 1 && <img src="/step_1.jpg" alt="" className="w-full h-full object-fill" /> }
          {currentIndex === 2 && <img src="/step_2.jpg" alt="" className="w-full h-full object-fill" /> }
          {currentIndex === 4 && <img src="/step_2.jpg" alt="" className="w-full h-full object-fill" /> }
            
          </div>

       
      </div>
    </section>
  );
};

export default signup;
