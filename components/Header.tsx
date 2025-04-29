import Image from "next/image";
import { Button } from "./ui/button";

export default function Header(){
    return(
        <div className="flex items-center justify-between mx-10 py-3">
            <Image 
                src={'/zanaves.svg'}
                alt="Железный Занавес логотип"
                width={100}
                height={100}
            />
            <div className="flex items-center gap-4 max-sm:flex-col">
                <a href="tel:+79114867644" className="hover:text-[#C68C2A] transition">+7 (911) 486-76-44</a>
                <p>ул. Ялтинская, 81А</p>
            </div>
        </div>
    )
}