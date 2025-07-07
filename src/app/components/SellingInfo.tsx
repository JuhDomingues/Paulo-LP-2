'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import GreenCheck from '@/images/Symbol.svg';
import Pix from '@/images/pix.svg';
import PauloBlack from '@/images/bio.jpeg'

export default function SellingInfo() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
    };

    return (
        <div className="container mx-auto px-4">
            {/* Seção Título Principal */}
            <div className="mb-8 md:mb-12 lg:mb-16">
                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-white mb-6 mx-2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Por tudo isso, você pagará muito menos <br className="hidden lg:block"/>do que imagina!
                </motion.h1>
            </div>

            {/* Card de Vendas */}
            <motion.div
                className="flex justify-center mb-12 md:mb-20 lg:mb-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="w-full lg:w-11/12 xl:w-10/12 bg-[rgba(226,246,227,0.06)] py-6 md:py-10 flex flex-col lg:flex-row items-center justify-between rounded-2xl lg:rounded-[55px] border border-[#8EF27E] px-4 md:px-8 space-y-6 lg:space-y-0">
                    {/* Texto e Lista */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-normal text-white mb-4">
                            Transforme sua presença no <br className="hidden lg:block"/> 
                            <strong className="text-[#8EF27E] animate-pulse">Instagram</strong>, conquiste<br className="hidden sm:block"/> 
                            reconhecimento e <br className="hidden sm:block"/>
                            multiplique seu faturamento!
                        </h1>
                        <motion.h2
                            className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            O guia e o curso podem ser seus hoje, por um valor super acessível:
                        </motion.h2>
                        <div className="space-y-3 md:space-y-4">
                            {[
                                "Acesso completo ao Guia de 12 Passos",
                                "Curso de Implementação, na Prática",
                                "Garantia de 07 dias"
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-2"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + 0.3 * index, duration: 1 }}
                                >
                                    <Image className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0 animate-pulse" src={GreenCheck} alt="" />
                                    <p className="text-sm sm:text-base md:text-lg text-white text-start">
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Preço e Botão */}
                    <motion.div
                        className="lg:w-1/2 flex flex-col items-center justify-center w-full mt-6 lg:mt-0"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <div className="text-center space-y-4 w-full">
                            <motion.p
                                className="text-lg md:text-xl text-white"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 1 }}
                            >
                                De: <span className="line-through">R$197,00</span>
                            </motion.p>
                            <motion.h1
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 1 }}
                            >
                                POR APENAS<br />
                                <strong className="text-[#8EF27E] animate-pulse">R$29,90</strong>
                            </motion.h1>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-center items-center">
                                    <Image src={Pix} alt="" className="w-4 md:w-5 mr-2" />
                                    <p className="text-white text-sm md:text-base">À vista via PIX</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Image src={Pix} alt="" className="w-4 md:w-5 mr-2" />
                                    <p className="text-white text-sm md:text-base">Cartão em até 12x</p>
                                </div>
                            </div>
                        </div>
                        <motion.button
                            onClick={handleClick}
                            className="mt-6 md:mt-8 py-3 px-6 w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#8EF27E] text-black font-bold rounded-lg hover:scale-105 transition-transform duration-300 text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Quero aprender as técnicas
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Seção Paulo Collet */}
            <motion.div
                className="mb-12 md:mb-20 lg:mb-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">
                    Quem é Paulo Collet ?
                </h1>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
                    >
                        <Image
                            src={PauloBlack}
                            alt="Paulo André Collet"
                            className="w-full h-auto rounded-lg"
                            layout="responsive"
                        />
                    </motion.div>
                    <div className="lg:w-1/2 space-y-4 md:space-y-6">
                        <motion.h1
                            className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center md:text-left"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            Criador do método que vai transformar sua presença no Instagram.
                        </motion.h1>
                        <motion.p
                            className="text-sm md:text-base lg:text-lg text-white font-light text-justify leading-relaxed"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            {/* Texto mantido igual, apenas ajustado a formatação */}
                            Ele criou um método que transforma profissionais em autoridades no mercado - e tem provas disso... Em um cenário onde a excelência técnica já não garante reconhecimento profissional, Paulo Collet descobriu o segredo para se destacar.

Sendo um dos primeiros treinadores formados no Brasil, ele aprendeu cedo que, sem um posicionamento estratégico, mesmo os melhores profissionais poderiam permanecer invisíveis. 

Foi assim que, em 2008, nasceu o método Autoridade Máxima , um sistema que, até hoje, vem transformando centenas de profissionais em referências dentro e fora do país.

Através da sua metodologia, ele próprio se tornou uma referência no mercado. 
Palestrou em mais de 400 eventos presenciais em 8 estados e no Chile.

Teve também a oportunidade de aprender diretamente com nomes globais em desenvolvimento profissional, como Tony Robbins, T. Harv Eker, Roberto Shinyashiki e Nuno Cobra (preparador físico de Ayrton Senna).

Mas a maior prova de que o método funciona está nos resultados de seus mentorados com trajetórias internacionais:

<br/><br/>📌 Aline Tomazoni - De designer com medo de falar em público a mentora de superação mental, palestrante nº1 em um evento nacional e treinadora em 12 países.
<br/>📌 Elizabeth Bauer - Dentista concursada da prefeitura a consultora de moda e mentora de mulheres, palestrando no Brasil, Chile, México, Colômbia e Venezuela.
<br/>📌 Alexandre Tomazoni - Designer de agência a autoridade em Psicologia da Criação, com dois mestrados em Barcelona, hoje treina multinacionais como Pfizer, GM, O Boticário e L&apos;Occitane.
<br/>📌 Eduardo Basso - De psicólogo com o sonho de dar palestras a palestrante de sucesso, com mais de R$ 200 mil faturados com seus treinamentos.
<br/>📌 Orestes - De gerente a superintendente do Bradesco, antecipando por 3 anos sua promoção, ficando 24 meses consecutivos em 1&ordm; lugar na sua regional.

<br/><br/>Com 16 anos de experiência e um método validado por centenas de mentorados, Paulo Collet segue transformando conhecimento em autoridade, autoridade em influência e influência em faturamento.

A próxima história de sucesso pode ser a sua, acelerando seu resultados com o método certo.

Descubra agora como aplicar o método Autoridade Máxima e se tornar a referência no seu mercado.    
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}