"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function settingsLayout({ children }) {
  const path = usePathname();
  return (
    <div className="w-full h-full flex flex-col md:flex-row  ">
      <nav className="pl-2  py-10 w-full md:w-[20%]  ">
        <ul className="w-full flex flex-row gap-6 items-center justify-center text-sm md:flex md:flex-col  ">
          <li className="w-32 flex flex-col gap-3">
            <Link
              href={"/account-settings/settings/edit-perfil"}
              className={
                path === "/account-settings/settings/edit-perfil"
                  ? "text-white text-left flex items-center gap-1 uppercase bg-[#14b7a1] px-4"
                  : "text-black  text-left flex items-center gap-1 uppercase px-4"
              }
            >
              
              <p>Perfil</p>
            </Link>
          </li>
          <li className="w-32 flex  flex-col gap-3">
            <Link
              href={"/account-settings/settings/edit-password"}
              className={
                path === "/account-settings/settings/edit-password"
                  ? "text-white text-left flex items-center gap-1 uppercase bg-[#14b7a1] px-4"
                  : "text-black text-left flex items-center gap-1 uppercase px-4"
              }
            >
            
              <p>Senha</p>
            </Link>
          </li>
          <li className="w-32 flex  flex-col gap-3 ">
            <Link
              href={"/account-settings/settings/delet-account"}
              className={
                path === "/account-settings/settings/delet-account"
                  ? "text-white  text-left flex items-center gap-1 uppercase bg-[#14b7a1] px-4"
                  : "text-black  text-left flex items-center gap-1 uppercase px-4"
              }
            >
             
              <p>Excluir</p>
            </Link>
          </li>
         
        </ul>
      </nav>
      <main className="w-full">{children}</main>
    </div>
  );
}
