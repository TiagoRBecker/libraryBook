"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const ArticleNav = () => {
     const path = usePathname()
    return ( 

        <section className="w-full h-full mt-16">
        
        <nav className="w-full flex items-center justify-center py-10 gap-2">
            <ul className="flex gap-4 text-xl">
                <li className={path === "/explore/free" ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"  : "text-black border-b-2 border-transparent"}><Link href={"/explore/free"}>Gratuito</Link></li>
                <li className={path === "/explore/recommendation" ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"  : "text-black border-b-2 border-transparent"}><Link href={"/explore/recommendation"} >Recomendações</Link></li>
                <li className={path === "/explore/trending" ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"  : "text-black border-b-2 border-transparent"} ><Link href={"/explore/trending"}>Tendencia</Link></li>
                <li className={path === "/explore/most-read" ? "text-[#14b7a1] border-b-2 border-[#14b7a1]"  : "text-black border-b-2 border-transparent"}><Link href={"/explore/most-read"}> Mais Lidos</Link></li>
            </ul>
        </nav>
</section>
     );
}
 
export default ArticleNav;