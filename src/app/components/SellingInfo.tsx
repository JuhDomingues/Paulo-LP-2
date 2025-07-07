
'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import GreenCheck from '@/images/Symbol.svg';
import Pix from '@/images/pix.svg';

export default function SellingInfo() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
    };

    return (
        <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12 lg:mb-16">
                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-white mb-6 mx-2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Por tudo isso, você pagará muito menos do que imagina!
                </motion.h1>
            </div>

            <motion.div
                className="flex justify-center mb-12 md:mb-20 lg:mb-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="w-full lg:w-11/12 xl:w-10/12 bg-[rgba(226,246,227,0.06)] py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between rounded-2xl border border-[#8EF27E] px-6 md:px-10 space-y-8 lg:space-y-0">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-normal text-white mb-6">
                            Transforme sua presença no <strong className="text-[#8EF27E]">Instagram</strong>, conquiste reconhecimento e multiplique seu faturamento!
                        </h2>
                        <div className="space-y-4">
                            {[
                                "Acesso completo ao Guia de 12 Passos",
                                "Curso de Implementação Prática",
                                "Garantia de 7 dias"
                            ].map((text, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Image className="w-5 h-5" src={GreenCheck} alt="check" />
                                    <p className="text-base md:text-lg text-white text-start">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex flex-col items-center justify-center w-full mt-8 lg:mt-0">
                        <div className="text-center space-y-4 w-full">
                            <p className="text-lg md:text-xl text-white">
                                De: <span className="line-through">R$197,00</span>
                            </p>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                POR APENAS<br />
                                <strong className="text-[#8EF27E]">R$29,90</strong>
                            </h3>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-center items-center gap-2">
                                    <Image src={Pix} alt="pix" className="w-5 h-5" />
                                    <p className="text-white text-sm md:text-base">À vista via PIX ou cartão</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleClick}
                            className="mt-6 py-4 px-8 w-full max-w-sm bg-[#8EF27E] text-black font-bold rounded-lg hover:bg-[#76d469] transition-colors text-base md:text-lg"
                        >
                            QUERO TRANSFORMAR MEU INSTAGRAM
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
