'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import PauloPhoto from '@/images/paulo-autoridade-instagram-_1_2.png';
import GreenCheck from '@/images/Symbol.svg';

export default function SectionTwelve() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
    };

    return (
        <div className='px-6 md:px-12 xl:px-8'>
            <motion.div
                className="mb-12 lg:mb-16 xl:mb-24 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold leading-tight lg:mx-20 mx-6  mt-5">
                    Você está a um passo de transformar ser reconhecido como uma autoridade através do Instagram <br className='hidden lg:block'/>
                </h1>
                <p className="text-[#8EF27E] text-2xl lg:text-3xl font-light mt-10 animate-pulse lg:mt-4">
                    Sem enrolação… Esse é o guia prático:
                </p>
            </motion.div>

            <motion.div
                className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-[80px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-lg text-center lg:text-left lg:mr-[12%]">
                    <motion.h1
                        className="text-white text-xl sm:text-2xl lg:text-3xl font-bold"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        O que você vai receber ao entrar hoje:
                    </motion.h1>

                    <motion.div
                        className="space-y-4 mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        {[ 
                            "Guia de 12 Passos para Autoridade no Instagram",
                            "Curso de Implementação Prática",
                        ].map((text, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <Image className="w-4 h-4 mt-1" src={GreenCheck} alt="check" />
                                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                        
                    <div className="pb-4 mt-4 border border-white flex items-center justify-center lg:w-[100%] animate-pulse">
                        <p className="text-white mt-4 text-base sm:text-lg md:text-xl">De R$:127,00 por R$:29,90</p>
                    </div>
                    <motion.button
                        onClick={handleClick}
                        className="w-full h-[60px] bg-white text-[#0B3E18] text-lg lg:text-xl font-extrabold mt-6 rounded-lg shadow-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        QUERO ACESSAR AGORA
                    </motion.button>

                    <div className="flex flex-col items-center mt-4">
                        <motion.p
                            className="text-white text-sm lg:text-lg font-light text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            Toque no botão acima e comece hoje mesmo!
                        </motion.p>
                        <div className="flex items-center gap-2 mt-4">
                            <motion.p
                                className="text-white text-sm lg:text-base font-light"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 1 }}
                            >
                                Compra segura
                            </motion.p>
                        </div>
                    </div>
                </div>

                <div className='block lg:hidden'>
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl text-center font-bold leading-tight lg:leading-[48px] tracking-[-1px] mb-6 lg:mb-12 mt-12">
                        Guia Autoridade no Instagram
                    </h1>
                </div>

                <div className="relative flex justify-center">
                    <Image
                        src={PauloPhoto}
                        alt="Paulo"
                        className="w-[220px] lg:w-[400px] mt-7 lg:mt-0"
                    />
                </div>

            </motion.div>
        </div>
    );
}
