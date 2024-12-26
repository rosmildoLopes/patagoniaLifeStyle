"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

type CarouselProps = {
  options?: EmblaOptionsType;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    size: string;
    name?: string;
    profesion?: string;
    description?: string;
  }[];
};

const Carousel = ({ options, images }: CarouselProps) => {
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
  };

  const carouselOptions: EmblaOptionsType = {
    loop: true,
    ...options,
  };

  const [emblaRef] = useEmblaCarousel(carouselOptions, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div className="embla__viewport w-full md:hidden" ref={emblaRef}>
      <div className="embla__container flex gap-1">
        {images.map((image, index) => (
          <div
            className="embla__slide flex mx-auto w-[80%] h-[35vh] px-2 my-auto"
            key={index}
          >
            <div
              className={`${image.size} mx-auto flex flex-col embla__slide__content h-full`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full"
                layout="intrisic"
              />
              <div className="flex flex-col text-center gap-4 px-3">
                <h2 className="text-text font-bold text-[1rem]">
                  {image.name}
                </h2>
                <h3 className="text-text italic text-[1rem]">
                  {image.profesion}
                </h3>
                <p className="text-black text-[1rem]">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
