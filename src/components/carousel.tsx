'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './_scss/carousel.scss';

type Props = {
	images?: string[];
};

export default function Carousel({ images }: Props) {
	const list = Array.isArray(images) ? images : [];
	if (list.length === 0) return null;

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={0}
			effect="fade"
			fadeEffect={{ crossFade: true }}
			autoplay={{ delay: 2500, disableOnInteraction: true }}
			pagination={{ type: 'fraction' }}
			navigation
			speed={8000}
			modules={[Autoplay, EffectFade, Pagination, Navigation]}
			className="mySwiper"
		>
			{list.map((src, index) => (
				<SwiperSlide key={src}>
					<Image
						src={src}
						alt={`image-${index + 1}`}
						width={600}
						height={440}
						className="shade"
						loading={index === 0 ? 'eager' : 'lazy'}
						priority={index === 0}
						unoptimized
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}