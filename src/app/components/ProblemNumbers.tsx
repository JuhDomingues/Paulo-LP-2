'use client'

import { motion } from 'framer-motion';
import Image from "next/image";
import Number from './numbers';
import Chair from '@/images/chair.png';

export default function ProblemNumbers() {
    const handleClick = () => {
            window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
          };

    return (
        <div className="px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className="title font-bold leading-tight tracking-[-1.75px] text-center text-white">
                    Você não é o protagonista ainda...
                </h1>
                <motion.p
                    className="text-white sm:text-xl md:text-2xl lg:text-[22px] xl:text-[1.750rem] mt-4 mb-12 lg:font-bold text-border lg:px-[12%] text-center mx-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 1 }}
                >
                    Você quer crescer na internet ? Então o 1° passo é se posicionar como Autoridade    
                </motion.p>
            </motion.div>

            <motion.div
                className="flex flex-col lg:flex-row items-center justify-center mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="mb-6 lg:mr-[4%] lg:mt-12">
                    <Image src={Chair} alt="Cadeira" className="w-40 lg:w-[400px] drop-shadow-2xl" />
                </div>
                <div className="text-center flex flex-col w-[100%] lg:w-auto lg:text-left">
                    {[
                        "Se você quer parar de depender de indicações e começar a atrair clientes no automático, eu tenho a solução para você.",
                        "Transforme sua audiência no Instagram em clientes fiéis e recorrentes, com um método claro e estratégico que realmente funciona.",
                        "Não importa o quanto você já tenha tentado crescer, este guia vai te dar a estrutura necessária para alcançar seus objetivos de uma vez por todas.",
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
                        >
                            <Number text={text} numbers={`0${index + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center justify-center mb-[100px] md:mb-[130px] lg:mb-[160px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 1 }}
            >
                <button
                    onClick={() => handleClick()}
                    className="rounded-md text-[#0B3E18] w-[96%] max-w-xs md:max-w-sm lg:max-w-[40%] h-16 md:h-20 lg:h-23 xl:h-24 xl:max-w-[32%] bg-white mt-6 manrope text-lg md:text-xl lg:text-2xl xl:text-[2.25rem] font-extrabold leading-tight text-center button"
                >
                    Quero ter os mesmos<br className="hidden md:block" /> resultados
                </button>
                <motion.p
                    className="mt-4 text-white font-light text-base md:text-lg lg:text-[1.25rem]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    Toque no botão acima, comece hoje.
                </motion.p>
                <div className="flex items-center mt-2">
                    <motion.p
                        className="mt-2 text-white ml-2 font-extralight text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        compra segura
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
