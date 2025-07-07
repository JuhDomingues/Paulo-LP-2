'use client'

import { motion } from 'framer-motion';
import Number from './numbers';
import { FaShieldAlt, FaRegThumbsUp } from "react-icons/fa";

export default function ProblemNumbers() {
    const handleClick = () => {
            window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
          };

    return (
        <div className="px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="title font-bold leading-tight tracking-[-1.75px] text-white">
                    Você ainda não é o protagonista...
                </h1>
                <p className="text-white sm:text-xl md:text-2xl lg:text-[22px] xl:text-[1.750rem] mt-4 mb-12 lg:font-bold text-border lg:px-[12%] mx-6">
                    Se você quer crescer na internet, o primeiro passo é se posicionar como autoridade.
                </p>
            </motion.div>

            <div className="flex flex-col items-center justify-center mb-12">
                <div className="text-center flex flex-col w-full lg:w-auto lg:text-left space-y-8 max-w-3xl">
                    {[ 
                        "Se você quer parar de depender de indicações e começar a atrair clientes no automático, eu tenho a solução.",
                        "Transforme sua audiência no Instagram em clientes fiéis e recorrentes com um método claro e estratégico.",
                        "Não importa o quanto já tenha tentado, este guia vai te dar a estrutura para alcançar seus objetivos de uma vez por todas.",
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
            </div>

            <motion.div
                className="flex flex-col items-center justify-center mb-[100px] md:mb-[130px] lg:mb-[160px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 1 }}
            >
                <button
                    onClick={() => handleClick()}
                    className="rounded-md text-[#0B3E18] w-[96%] max-w-md h-16 md:h-20 bg-white mt-6 manrope text-lg md:text-xl lg:text-2xl font-extrabold leading-tight text-center button hover:bg-gray-200 transition-colors"
                >
                    QUERO TER OS MESMOS RESULTADOS
                </button>
                <div className="flex items-center justify-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                        <FaShieldAlt className="text-white" />
                        <p className="text-white text-sm font-light">Compra segura</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegThumbsUp className="text-white" />
                        <p className="text-white text-sm font-light">Garantia de 7 dias</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}