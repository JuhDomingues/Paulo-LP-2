
import Image from 'next/image';
import PauloBio from '@/images/bio.jpeg';

export default function Bio() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto mt-20 lg:mt-32 px-4 sm:px-8 lg:px-12 gap-8 lg:gap-16">
            <div className="w-full lg:w-[30%]">
                <Image src={PauloBio} alt="Paulo" className="rounded-full shadow-2xl mx-auto" width={250} height={250} />
            </div>
            <div className="w-full lg:w-[70%] text-center lg:text-left">
                <h2 className="text-white text-3xl lg:text-4xl font-bold">Quem é Paulo?</h2>
                <p className="text-white text-lg mt-4 leading-relaxed">
                    Paulo é especialista em marketing digital e já ajudou mais de 5.000 pessoas a transformarem seus negócios no Instagram. Com um método prático e direto ao ponto, ele ensina as mesmas estratégias que usou para construir sua própria autoridade e conquistar clientes de alto valor.
                </p>
            </div>
        </div>
    );
}
