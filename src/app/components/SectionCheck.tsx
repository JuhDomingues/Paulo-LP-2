'use client';

import { motion } from 'framer-motion';
import CheckCard from "./check";

export default function SectionCheck() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-12 xl:mb-[80px] ">
            <motion.h1
                className="text-white title font-bold text-border lg:mx-20 mx-6"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                A verdade que ninguém te conta sobre o Instagram…
            </motion.h1>
            <motion.h1
                className="text-white sm:text-xl md:text-2xl lg:text-[22px] xl:text-[1.750rem] mt-4 mb-3 lg:font-bold text-border lg:px-[12%] lg:mx-20 mx-6"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            > Eu sei que é dificil você ver pessoas que tem menos conhecimento que você, se tornando mais influentes, conseguindo se expressar com clareza nas redes sociais, influenciando muito mais pessoas que você.
            <br/><br/>Qual é o resultado disso? Elas vendem mais. <br></br> <br />
            Por que não importa se elas estiveram na universidade, se elas tem diploma ou não, o que importa é que as vozes delas falam mais do que a sua.
            
            </motion.h1>
            <div className="flex flex-col items-center lg:flex-row justify-center mt-12 lg:mt-[5vh] w-full max-w-[1200px]">
                <div className="flex flex-col items-center text-center lg:text-left xl:mr-0 mb-4 lg:mb-0 w-full lg:w-1/2">
                    <motion.p
                        className="sora text-white sm:text-xl md:text-2xl lg:text-[1.2rem] xl:text-[1.750rem] font-light leading-relaxed tracking-[-0.5px] mb-8 lg:mb-[6vh] max-w-[90%]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Na internet, três coisas fazem você crescer: liberdade, reconhecimento e dinheiro. E isso é possível quando você sabe como usar o Instagram para se expressar com clareza e atrair os clientes certos.
                    </motion.p>
                    <motion.p
                        className="sora text-white sm:text-xl md:text-2xl lg:text-[1.2rem] xl:text-[1.750rem] font-light leading-relaxed tracking-[-0.5px] max-w-[90%]"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Você pode continuar no ciclo da super qualificação técnica, ou pode se posicionar como autoridade e gerar resultados reais pelo Instagram
                    </motion.p>
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.9 }}
                        className="w-full max-w-[500px]"
                    >
                        <CheckCard text="Já se sentiu frustrado vendo outros ganharem mais sabendo menos?" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        className="w-full max-w-[500px] mt-4"
                    >
                        <CheckCard text="Não tem uma estratégia para atrair quem paga bem?" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.9 }}
                        className="w-full max-w-[500px] mt-4"
                    >
                        <CheckCard text="Tem medo de se expor, procrastina por não saber a estratégia que funciona?" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
