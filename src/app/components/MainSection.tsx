'use client';

import Image from "next/image";
import PauloHero from '@/images/paulo-autoridade-instagram-_6_.png';

export default function MainSection() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:mt-[8vh] mt-[5vh] px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto gap-6 lg:gap-12">
            <div className="lg:mt-[8vh] w-full lg:max-w-[50%] text-center lg:text-left">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.05vw]">
                    Transforme seu Instagram em uma máquina de <strong className="text-[#8EF27E]">atrair clientes</strong> em 12 passos simples!
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl font-light leading-7 mt-4 lg:w-[90%]">
                    Descubra as técnicas secretas que os grandes players do mercado escondem sobre ganhar dinheiro de verdade com o Instagram.
                </p>

                <div className="pb-4 mt-4 border border-white flex items-center justify-center lg:w-[100%] animate-pulse">
                    <p className="text-white mt-4 text-base sm:text-lg md:text-xl">De R$:127,00 por R$:29,90</p>
                </div>
                <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[100%]">
                    <button
                        onClick={handleClick}
                        className="w-full h-[7vh] button bg-white text-[#0B3E18] text-lg sm:text-xl md:text-2xl font-extrabold rounded-lg mt-6 lg:leading-7 shadow-lg"
                    >
                        QUERO APRENDER AS TÉCNICAS
                    </button>
                    <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
                        <p className="mt-4 text-white font-light text-base sm:text-lg md:text-xl text-center">
                            Toque no botão acima, comece hoje.
                        </p>
                        <div className="flex items-center justify-center mt-4 space-x-2">
                            <div className="flex items-center justify-center">
                                <p className="text-white text-sm sm:text-base md:text-lg font-light">compra segura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full lg:w-[50%]">
                <Image className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[600px] xl:w-[700px] max-w-[900px] lg:mt-6 mt-16" src={PauloHero} alt="Paulo Autoridade Instagram" loading="lazy" />
            </div>
        </div>
    );
}
