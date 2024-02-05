"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function userSettingsLayout({ children }) {
  const path = usePathname();
  return (
    <div className="w-full h-full flex flex-col ">
      <nav className="pl-2 md:flex  items-center md:pl-32 py-10 w-full border-b-[2px] border-[#14b7a1] pt-[90px] ">
        <ul className="flex  gap-6">
          <li className="flex flex-col gap-3">
            <Link
              href={"/account-settings/settings"}
              className={
                path === "/account-settings/settings"
                  ? "text-[#14b7a1] flex items-center gap-1 uppercase"
                  : "text-black flex items-center gap-1 uppercase"
              }
            >
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
              <p> Conta</p>
            </Link>
          </li>
          <li className="flex flex-col gap-3">
            <Link
              href={"/account-settings/requests"}
              className={
                path === "/account-settings/requests"
                  ? "text-[#14b7a1] flex items-center gap-1 uppercase"
                  : "text-black flex items-center gap-1 uppercase"
              }
            >
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
            </Link>
          </li>
          <li className="flex flex-col gap-3">
            <Link
              href={"/account-settings/favorites"}
              className={
                path === "/account-settings/favorites"
                  ? "text-[#14b7a1] flex items-center gap-1 uppercase"
                  : "text-black flex items-center gap-1 uppercase"
              }
            >
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
            </Link>
          </li>
          <li className="flex flex-col gap-3">
            <Link
              href={"/account-settings/dvl"}
              className={
                path === "/account-settings/dvl"
                  ? "text-[#14b7a1] flex items-center gap-1 uppercase"
                  : "text-black flex items-center gap-1 uppercase"
              }
            >
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
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <p> Financeiro</p>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="w-full">{children}</main>
    </div>
  );
}
