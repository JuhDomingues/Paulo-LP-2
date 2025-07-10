import Image from "next/image";
import Notebook from '@/images/paulo-autoridade-instagram-_2_.png';

export default function BonusCourse() {
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 md:px-12 xl:px-16 max-w-7xl mx-auto mb-8 lg:mb-[100px]">
            <div className="text-center lg:text-left lg:max-w-[50%]">
                <p className="text-[#8EF27E] text-lg font-semibold">BÔNUS EXCLUSIVO</p>
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2 mb-6">
                    Curso de Implementação Prática
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-white">
                    Coloque o que aprendeu em prática com um curso simples e direto. Descubra como aplicar cada passo com confiança e comece a ver resultados rapidamente, transformando teoria em ação imediata.
                </p>
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center">
                <Image
                    src={Notebook}
                    alt="Notebook com o curso de implementação"
                    className="w-[280px] lg:w-[400px] h-auto rounded-lg"
                />
            </div>
        </div>
    );
}