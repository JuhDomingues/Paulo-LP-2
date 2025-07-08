'use client';

import CheckCard from "./check";

export default function SectionCheck() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-12 xl:mb-[80px]">
            <h1
                className="text-white title font-bold text-border lg:mx-20 mx-6"
            >
                A verdade que ninguém te conta sobre o Instagram…
            </h1>
            <p
                className="text-white sm:text-xl md:text-2xl lg:text-[22px] xl:text-[1.750rem] mt-4 mb-8 lg:font-bold text-border lg:px-[12%] lg:mx-20 mx-6"
            >
                É frustrante ver pessoas com menos conhecimento se destacando mais, simplesmente porque sabem se comunicar melhor nas redes sociais. O resultado? Elas vendem mais. Não importa o diploma, mas sim a capacidade de influenciar. E se você pudesse virar esse jogo?
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-[1200px] w-full px-4 lg:px-8">
                <div className="flex flex-col items-center text-center lg:text-left">
                    <div>
                        <p className="sora text-white sm:text-xl md:text-2xl lg:text-[1.2rem] xl:text-[1.750rem] font-light leading-relaxed tracking-[-0.5px] mb-8">
                            Na internet, três coisas impulsionam o crescimento: <strong className="font-bold text-[#8EF27E]">liberdade, reconhecimento e dinheiro.</strong> Isso se torna possível quando você domina a arte de se expressar com clareza e atrair os clientes certos no Instagram.
                        </p>
                        <p className="sora text-white sm:text-xl md:text-2xl lg:text-[1.2rem] xl:text-[1.750rem] font-light leading-relaxed tracking-[-0.5px]">
                            Você pode continuar no ciclo da superqualificação técnica ou pode se posicionar como uma autoridade e gerar resultados reais. A escolha é sua.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <div
                        className="w-full"
                    >
                        <CheckCard text="Já se sentiu frustrado vendo outros ganharem mais sabendo menos?" />
                    </div>
                    <div
                        className="w-full"
                    >
                        <CheckCard text="Não tem uma estratégia para atrair quem paga bem?" />
                    </div>
                    <div
                        className="w-full"
                    >
                        <CheckCard text="Tem medo de se expor e procrastina por não saber o que funciona?" />
                    </div>
                </div>
            </div>
        </div>
    );
}