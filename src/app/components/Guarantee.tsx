'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import GuaranteeIMG from '@/images/paulo-autoridade-instagram-_4_.png';

export default function Guarantee() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center my-20 gap-12 lg:gap-24 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }} 
            >
                <Image src={GuaranteeIMG} alt="Selo de Garantia de 7 dias" className="w-[200px] lg:w-[300px]" />
            </motion.div>

            <div className="flex flex-col justify-center text-center lg:text-left max-w-lg">
                <motion.h1 
                    className="title font-bold leading-tight tracking-[-0.1094rem] sans text-white mb-6 text-3xl lg:text-5xl"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    7 DIAS DE GARANTIA
                </motion.h1>
                <motion.p 
                    className="sora text-lg lg:text-xl font-light tracking-[-0.0375rem] text-white leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Testou e não gostou? Devolvemos seu investimento sem perguntas. Aproveite sem medo e com total confiança no seu resultado.
                </motion.p>
            </div>
        </div>
    )
}