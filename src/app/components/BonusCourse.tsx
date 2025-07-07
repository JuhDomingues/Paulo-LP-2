import Image from "next/image";
import Notebook from '@/images/paulo-autoridade-instagram-_2_.png';

export default function BonusCourse() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 md:px-12 xl:px-16 max-w-7xl mx-auto mb-8 lg:mb-[100px]">
            <div className="text-center lg:text-left lg:max-w-[40%]">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight lg:leading-[48px] tracking-[-1px] mb-6 lg:mb-12">
                    Curso de Implementação Prática
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed lg:leading-[28px] tracking-[-0.6px] text-white mx-6">
                    Coloque o que aprendeu em prática com um curso simples e direto. Descubra como aplicar cada passo com confiança e começar a ver resultados rapidamente.
                </p>
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex lg:justify-end justify-center">
                <Image
                    src={Notebook}
                    alt="Notebook"
                    className="w-[250px] lg:w-[320px] h-auto drop-shadow-xl"
                />
            </div>
        </div>
    );
}
