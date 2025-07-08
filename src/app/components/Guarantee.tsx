'use client'

import Image from "next/image";
import GuaranteeIMG from '@/images/paulo-autoridade-instagram-_4_.png';

export default function Guarantee() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center my-20 gap-12 lg:gap-24 px-4">
            <div>
                <Image src={GuaranteeIMG} alt="Selo de Garantia de 7 dias" className="w-[200px] lg:w-[300px]" />
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left max-w-lg">
                <h1 
                    className="title font-bold leading-tight tracking-[-0.1094rem] sans text-white mb-6 text-3xl lg:text-5xl"
                >
                    7 DIAS DE GARANTIA
                </h1>
                <p 
                    className="sora text-lg lg:text-xl font-light tracking-[-0.0375rem] text-white leading-relaxed"
                >
                    Testou e não gostou? Devolvemos seu investimento sem perguntas. Aproveite sem medo e com total confiança no seu resultado.
                </p>
            </div>
        </div>
    )
}