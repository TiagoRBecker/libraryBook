"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showUser, setShowUser] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      if (showUser) {
        setShowUser(false);
      }
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[position,showUser]);

  const cls = visible ? "visible_menu" : "hidden_menu";

  const showMenu = () => {
    setShowUser(!showUser);
  };
  const handleMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  return (
    <header className={cls}>
      <div className="w-[70%] justify-start md:w-[30%]  h-full flex items-center md:justify-center gap-4">
        <div
          className="w-[15%] h-full  flex items-center justify-center cursor-pointer md:hidden"
          onClick={handleMenuMobile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <Link
          href={"/"}
          className="w-[40%] md:w-[30%] h-full flex items-center justify-center"
        >
          <img src="/logo.png" alt="Logo" className="w-36 md:w-26 h-12" />
        </Link>
      </div>

      <nav className="hidden md:w-[40%] md:flex items-center justify-center text-black relative">
        <ul className=" flex  items-center gap-10 uppercase">
          <li>
            <Link href={"/magazine"}>Revistas</Link>
          </li>
          <li>
            <Link href={"/explore"}>Explorar</Link>
          </li>
          <li>
            <Link href={"/library"}>Biblioteca</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <nav className={showMenuMobile ? "showMenu " : "hiddeMenu"}>
        <ul className=" flex flex-col gap-10 absolute top-0 left-0 bottom-0 right-0 bg-white w-[300px] px-4 py-2">
          <div className="w-full flex items-center justify-between">
            <Link
              href={"/"}
              className="w-full h-full flex items-center justify-start bg-red-300"
            >
              <img src="/logo.png" alt="Logo" className=" w-32 h-12" />
            </Link>
            <p onClick={() => setShowMenuMobile(false)} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </p>
          </div>
          <li>
            <Link href={"/magazine"}>Revistas</Link>
          </li>
          <li>
            <Link href={"/explore"}>Explorar</Link>
          </li>
          <li>
            <Link href={"/library"}>Biblioteca</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-10 w-[30%]  relative">
        <div className="hidden md:flex cursor-pointer transiton duration-150 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="cursor-pointer transiton duration-150 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div
          id="teste"
          className="cursor-pointer transiton duration-150"
          onClick={showMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div
          className={
            showUser
              ? "flex flex-col gap-9 w-[300px] h-[400px] bg-white rounded-sm absolute top-11 right-3  z-50 px-4 py-2"
              : "hidden"
          }
        >
          <h3 className="text-black font-bold  py-2">Perfil Usuário</h3>

          <Link
            href={"/account-settings/settings"}
            onClick={() => setShowUser(false)}
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p>Conta</p>
            </div>
          </Link>
          <Link
            href={"/account-settings/favorites"}
            onClick={() => setShowUser(false)}
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p>Favoritos</p>
            </div>
          </Link>
          <Link
            href={"/account-settings/requests"}
            onClick={() => setShowUser(false)}
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              <p>Pedidos</p>
            </div>
          </Link>
          <div className=" flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            <p> Sair</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
