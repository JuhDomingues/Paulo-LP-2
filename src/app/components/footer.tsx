
import Image from "next/image";
import Cast from '@/images/paulo-autoridade-instagram-_7_.png';

export default function Footer() {
    return (
        <footer className="bg-[rgba(217,217,217,0.06)] flex flex-col justify-center items-center pt-12 pb-8 px-4">
          <Image src={Cast} alt="Paulo André" className="mb-8 w-32 h-32 rounded-full shadow-xl" />
          <p className="text-base font-semibold text-white sans mb-2">Copyright ©2024 Paulo André</p>
          <p className="manrope text-[#8EF27E] text-sm font-normal mb-6">Todos os direitos reservados.</p>
          
          <div className="flex gap-4 mb-8">
              <a href="#" className="text-white text-xs hover:underline">Política de Privacidade</a>
              <a href="#" className="text-white text-xs hover:underline">Termos de Serviço</a>
          </div>

          <p className="text-gray-400 text-xs font-medium">
              Desenvolvido por <a href="https://www.instagram.com/Mariafernanda" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#8EF27E]">@Mariafernanda</a>
          </p>
        </footer>
    )
}
