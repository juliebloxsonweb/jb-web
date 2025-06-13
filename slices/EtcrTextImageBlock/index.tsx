"use client";
import { FC, useCallback, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `EtcrTextImageBlock`.
 */
export type EtcrTextImageBlockProps =
  SliceComponentProps<Content.EtcrTextImageBlockSlice>;

/**
 * Component for "EtcrTextImageBlock" Slices.
 */
const EtcrTextImageBlock: FC<EtcrTextImageBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slice.primary.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [slice.primary.images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slice.primary.images.length - 1 : prevIndex - 1
    );
  }, [slice.primary.images.length]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="w-full mx-auto flex justify-center mb-4 md:mb-16">
          <h2 className="text-5xl font-bold mb-8 text-center">
            {slice.primary.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] gap-y-8 lg:gap-y-0 gap-x-4">
          {/* text one */}
          <div className="flex flex-col">
            <div className="text-6xl text-transparent leading-none font-extrabold text-outline">
              01.
            </div>
            <p className="text-lg">{slice.primary.text_one}</p>
          </div>

          {/* Image */}
          <div className="flex flex-col self-center col-span-1 row-span-1 lg:row-span-2">
            <div className="h-[500px] w-full relative rounded-[1.25rem] ">
              {slice.primary.images.map((item, index) => (
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  key={index}
                >
                  <PrismicNextImage
                    field={item.image}
                    width={item.image.dimensions?.width}
                    height={item.image.dimensions?.height}
                    className="object-cover flex justify-self-center"
                    placeholder="blur"
                    blurDataURL={getBlurSvg}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-2">
              <button
                type="button"
                className="z-40 h-10 w-10 rounded-full border border-black bg-green cursor-pointer flex items-center justify-center disabled:opacity-50"
                onClick={prevSlide}
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </button>

              <button
                type="button"
                className="z-40 h-10 w-10 rounded-full border border-black bg-green cursor-pointer flex items-center justify-center disabled:opacity-50"
                onClick={nextSlide}
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* text two */}
          <div className="flex flex-col">
            <div className="text-6xl text-transparent leading-none font-extrabold text-outline">
              02.
            </div>
            <p className="text-lg">{slice.primary.text_two}</p>
          </div>

          {/* text three */}
          <div className="flex flex-col">
            <div className="text-6xl text-transparent leading-none font-extrabold text-outline">
              03.
            </div>
            <p className="text-lg">{slice.primary.text_three}</p>
          </div>

          {/* text four */}
          <div className="flex flex-col">
            <div className="text-6xl text-transparent leading-none font-extrabold text-outline">
              04.
            </div>
            <p className="text-lg">{slice.primary.text_four}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtcrTextImageBlock;
