import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Button } from "@/components/Button";

/**
 * Props for `AboutHeroBlock`.
 */
export type AboutHeroBlockProps =
  SliceComponentProps<Content.AboutHeroBlockSlice>;

/**
 * Component for "AboutHeroBlock" Slices.
 */
const AboutHeroBlock: FC<AboutHeroBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-20 pb-16"
    >
      <div className="container">
        <div className=" grid md:grid-cols-2 gap-y-8 md:gap-x-8">
          <div className="h-full w-full min-h-[500px] bg-[#ebf96d] rounded-3xl px-4 py-4 border border-black order-2 lg:order-1">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <span className="text-lg uppercase">{slice.primary.title}</span>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-medium mb-8 lg:mb-16">
                {slice.primary.content}
              </h1>
              <Button
                className="bg-black text-white"
                text={slice.primary.btn_text}
                link={slice.primary.btn_link}
              />
            </div>
          </div>
          <div className="h-full border border-black rounded-3xl overflow-hidden order-1 lg:order-2 relative">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              className="size-full object-cover object-top rounded-3xl"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
            <div className="absolute bottom-4 right-2">
              <span className="bg-white text-lg px-4 py-2 rounded-xl font-bold border border-black capitalize">
                {slice.primary.name}
              </span>
            </div>
          </div>

          {/* Button */}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroBlock;
