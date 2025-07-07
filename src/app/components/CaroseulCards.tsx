
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

import Card from "./card";

import Key from '@/images/Key.svg';
import Mark from '@/images/Mark.svg';
import Badge from '@/images/Badge.svg';

export default function CaroseulCards() {
    const cards = [
        { title: "Acesso imediato", desc: "Seu login e senha serão enviados ao seu e-mail logo após o processamento do pagamento na plataforma.", img: Key },
        { title: "7 dias de garantia", desc: "Sua inscrição com risco zero. Você poderá pedir a devolução de 100% do seu dinheiro dentro de 7 dias.", img: Mark },
        { title: "Pagamento seguro", desc: "Somos parceiros da maior e melhor plataforma de cursos online do Brasil. Seu pagamento está 100% seguro.", img: Badge },
    ];

    return (
        <div className="mt-[5vh] mb-11 xl:px-[3%] lg:px[10%]">
            <Swiper
                className='flex justify-center items-center'
                loop={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={15}
                modules={[Autoplay]}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <Card title={card.title} desc={card.desc} img={card.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
