"use client";
import { Title } from "@/components/Title";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Props for `ImageSlider`.
 */
export type ImageSliderProps = SliceComponentProps<Content.ImageSliderSlice>;

/**
 * Component for "ImageSlider" Slices.
 */
const ImageSlider: FC<ImageSliderProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <Title text={slice.primary.title} />

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -65,
            depth: 250,
            modifier: 3.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {slice.primary.images.map(({ image, caption }, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col rounded-lg shadow-3xl border-black border bg-white overflow-hidden">
               
                <div className="aspect-square">
                  <PrismicNextImage
                    field={image}
                    className="size-full object-cover border-t border-b border-black"
                    placeholder="blur"
                    blurDataURL={getBlurSvg}
                  />
                </div>

                <div className="flex px-6 pt-6 pb-4">
                 <p>{caption}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="relative bottom-0 flex items-center justify-center gap-[10px]">
            <div className="swiper-button-prev">
              <button
                type="button"
                className="relative z-40 h-10 w-10 rounded-full border border-black bg-green cursor-pointer flex items-center justify-center disabled:opacity-50"
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="swiper-button-next">
              <button
                type="button"
                className="relative z-40 h-10 w-10 rounded-full border border-black bg-green cursor-pointer flex items-center justify-center disabled:opacity-50"
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;
