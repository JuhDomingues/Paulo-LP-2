'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import PauloPhoto from '@/images/paulo-autoridade-instagram-_1_2.png';
import GreenCheck from '@/images/Symbol.svg';
import { FaShieldAlt, FaRegThumbsUp } from "react-icons/fa";

export default function SectionTwelve() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
    };

    return (
        <div className='px-6 md:px-12 xl:px-8'>
            <motion.div
                className="mb-12 lg:mb-16 xl:mb-24 text-center"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:mx-20 mx-6 mt-5">
                    Você está a um passo de ser reconhecido como uma autoridade no Instagram
                </h1>
                <p className="text-[#8EF27E] text-xl lg:text-2xl font-light mt-6 lg:mt-4">
                    Sem enrolação… Esse é o guia prático:
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-[80px] gap-12 lg:gap-24">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={PauloPhoto}
                            alt="Guia Autoridade no Instagram"
                            className="w-[280px] lg:w-[450px] rounded-lg shadow-2xl"
                        />
                    </motion.div>
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <motion.h2
                        className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        O que você vai receber ao entrar hoje:
                    </motion.h2>

                    <motion.div
                        className="space-y-4 mt-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        {[ 
                            "Guia de 12 Passos para Autoridade no Instagram",
                            "Curso de Implementação Prática",
                        ].map((text, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Image className="w-5 h-5 mt-1" src={GreenCheck} alt="check" />
                                <p className="text-white text-base sm:text-lg lg:text-xl font-light leading-relaxed">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                        
                    <div className="pb-4 mt-8 border border-white flex items-center justify-center">
                        <p className="text-white mt-4 text-lg sm:text-xl md:text-2xl">De R$127,00 por apenas <strong className="font-bold text-[#8EF27E]">R$29,90</strong></p>
                    </div>

                    <motion.button
                        onClick={handleClick}
                        className="w-full h-[60px] bg-white text-[#0B3E18] text-lg lg:text-xl font-extrabold mt-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        QUERO ACESSAR AGORA
                    </motion.button>

                    <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
                        <div className="flex items-center gap-2">
                            <FaShieldAlt className="text-white" />
                            <p className="text-white text-sm font-light">Compra segura</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegThumbsUp className="text-white" />
                            <p className="text-white text-sm font-light">Garantia de 7 dias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}