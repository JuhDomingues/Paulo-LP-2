
import Image from 'next/image';
import PauloBio from '@/images/bio.jpeg';

export default function Bio() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto mt-20 lg:mt-32 px-4 sm:px-8 lg:px-12 gap-8 lg:gap-16">
            <div className="w-full lg:w-[30%]">
                <Image src={PauloBio} alt="Paulo" className="rounded-full mx-auto" width={250} height={250} />
            </div>
            <div className="w-full lg:w-[70%] text-center lg:text-left">
                <h2 className="text-white text-3xl lg:text-4xl font-bold">Quem é Paulo Collet?</h2>
                <p className="text-white text-lg mt-4 leading-relaxed">
                    Paulo Collet criou o método <strong>Autoridade Máxima</strong> ao perceber que excelência técnica, sozinha, não garante destaque profissional. Com 16 anos de experiência, ele se tornou uma referência, palestrando em mais de 400 eventos e aprendendo com gigantes como Tony Robbins e T. Harv Eker.
                    <br/><br/>
                    A maior prova do sucesso de seu método são seus mentorados: designers que se tornaram palestrantes internacionais, dentistas que viraram consultoras de moda em 5 países e psicólogos que faturaram mais de R$ 200 mil.
                    <br/><br/>
                    Ele transforma conhecimento em autoridade, e autoridade em influência e faturamento. A próxima história de sucesso pode ser a sua.
                </p>
            </div>
        </div>
    );
}
