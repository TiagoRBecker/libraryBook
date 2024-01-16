import Link from "next/link";

const ArticleNav = () => {
    return ( 

        <section className="w-full h-full mt-16">
        
        <nav className="w-full flex items-center justify-center py-10 gap-2">
            <ul className="flex gap-4 text-xl">
                <li><Link href={"/explore/free"}>Gratuito</Link></li>
                <li><Link href={"/explore/recommendation"} >Recomendações</Link></li>
                <li><Link href={"/explore/trending"}>Tendencia</Link></li>
                <li><Link href={"/explore/most-read"}> Mais Lidos</Link></li>
            </ul>
        </nav>
</section>
     );
}
 
export default ArticleNav;