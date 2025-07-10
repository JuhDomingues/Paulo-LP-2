'use client';

import Image from "next/image";
import PauloHero from '@/images/SESSAO-INDIVIDUAL-2.png';
import { FaCheckCircle } from "react-icons/fa";

export default function MainSection() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:mt-[8vh] mt-[5vh] px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto gap-6 lg:gap-12">
            <div className="lg:mt-[8vh] w-full lg:max-w-[50%] text-center lg:text-left">
                <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.05vw]">
                    Cansado de se sentir <strong className="text-[#8EF27E]">frustrado</strong>? Cobre o preço justo pelo seu trabalho e atraia clientes de alto padrão no Instagram
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl font-light leading-7 mt-4 lg:w-[90%]">
                    Aprenda o passo a passo para construir uma autoridade inabalável no seu nicho, mesmo que você esteja começando do zero.
                </p>

                <div className="mt-8 space-y-3 text-left">
                    <div className="flex items-center gap-3">
                        <FaCheckCircle size="20px" className="text-[#8EF27E]" />
                        <p className="text-white text-lg">Como se posicionar como referência no seu mercado.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheckCircle size="20px" className="text-[#8EF27E]" />
                        <p className="text-white text-lg">As estratégias para criar conteúdo que vende sem dancinhas.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheckCircle size="20px" className="text-[#8EF27E]" />
                        <p className="text-white text-lg">O método para transformar seguidores em clientes fiéis.</p>
                    </div>
                </div>

                <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[100%]">
                    <button
                        onClick={handleClick}
                        className="w-full h-[7vh] button bg-white text-[#0B3E18] text-base sm:text-lg md:text-xl font-extrabold rounded-lg mt-6 lg:leading-7 hover:bg-gray-200 transition-colors"
                    >
                        QUERO TER UMA AUTORIDADE INABALÁVEL
                    </button>
                    <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
                        <p className="mt-4 text-white font-light text-base sm:text-lg md:text-xl text-center">
                            Toque no botão e comece a construir sua autoridade hoje.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full lg:w-[50%]">
                <Image className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[600px] xl:w-[700px] max-w-[900px] lg:mt-6 mt-16 rounded-lg" src={PauloHero} alt="Sessão Individual" loading="lazy" />
            </div>
        </div>
    );
}