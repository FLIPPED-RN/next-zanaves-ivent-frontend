import Image from "next/image";

export default function Header(){
    return(
        <div className="flex items-center justify-between mx-10 py-3">
            <Image 
                src={'/zanaves2.svg'}
                alt="Железный Занавес логотип"
                width={100}
                height={100}
            />
            <div className="flex items-center gap-4 max-sm:flex-col">
                <a href="tel:+79062160876" className="hover:text-[#C68C2A] transition">+7 (906) 216-08-76</a>
                <p>ул. Ялтинская, 81А</p>
            </div>
        </div>
    )
}