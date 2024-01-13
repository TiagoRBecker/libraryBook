import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube  } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2">
      <div className="w-full h-full grid grid-cols-5">
        <div className="w-full h-full flex  justify-center ">
          <Link href={"/"}>
            <img src="/logo.png" alt="Logo" className="w-full h-12 " />
          </Link>
        </div>
        <div className=" w-full flex flex-col gap-3">
            <h1 className="font-bold uppercase">Sobre</h1>
            <nav>
                <ul>
                    <li>Notícias</li>
                    <li>Trabalhe conosco</li>
                </ul>
            </nav>
        </div>
        <div className=" w-full flex flex-col gap-3">
            <h1 className="font-bold uppercase">Ajuda</h1>
            <nav>
                <ul>
                    <li>Perguntas Frequentes</li>
                    <li>Ajuda</li>
                </ul>
            </nav>
        </div>
        <div className=" w-full flex flex-col gap-3">
            <h1 className="font-bold uppercase">Negócios</h1>
            <nav>
                <ul>
                    <li>Para Parceiros</li>
                    <li>para Editores</li>
                </ul>
            </nav>
        </div>
        <div className=" w-full flex flex-col gap-3">
            <h1 className="font-bold uppercase">Comprar</h1>
            <nav>
                <ul>
                    <li>Ganhe dinheiro comprando</li>
                    <li>Produtos</li>
                </ul>
            </nav>
        </div>
      </div>
      <div className="w-full flex items-center justify-around pt-10 pb-1 ">
        <div className="">
        <p>&copy;2021 a 2024 - Plash Todos os direitos reservados</p>
        </div>
        <div className="flex gap-3">
             <Link href={"#"}>
                Privacidade
             </Link>
             <Link href={"#"}>
                 Termos
             </Link>
             <Link href={"#"}>
                Cookies
             </Link>
        </div>
        <div className="flex items-center gap-10">
             <Link href={"#"}>
             <FaFacebookF  size={15} color="#000"/>
             </Link>
             <Link href={"#"}>
             <FaYoutube size={21} color="gray" />
             </Link>
             <Link href={"#"} >
             <FaInstagram size={18} color="gray"  />
             </Link>
        </div>
        
      </div>
      <div className="flex flex-col items-center justify-center border-t-[1px] border-gray-200 text-gray-600 pt-2">
               <p>Desenvolvido por Tiago Becker</p>
               <p>Soluções em sistemas e Automação</p>
        </div>
    </footer>
  );
};

export default Footer;
