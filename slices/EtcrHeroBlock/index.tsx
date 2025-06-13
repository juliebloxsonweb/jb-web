import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Button } from "@/components/Button";

/**
 * Props for `EtcrHeroBlock`.
 */
export type EtcrHeroBlockProps =
  SliceComponentProps<Content.EtcrHeroBlockSlice>;

/**
 * Component for "EtcrHeroBlock" Slices.
 */
const EtcrHeroBlock: FC<EtcrHeroBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-20"
    >
      <div className="container">
        <div className=" grid md:grid-cols-2 gap-y-8 md:gap-x-8 bg-[#edf6e9] p-4 rounded-3xl border border-black">
          {/* Image */}
          <div className="h-full  rounded-3xl overflow-hidden relative">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              className="object-cover rounded-3xl"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
            <div className="absolute bottom-4 right-2"></div>
          </div>
          <div className="h-full w-full min-h-[500px]  rounded-3xl px-4 py-4">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <span className="text-lg uppercase">{slice.primary.title}</span>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-medium mb-8 lg:mb-16">
                {slice.primary.content}
              </h1>
              <Button
                className="bg-black text-white"
                text={slice.primary.btn_text}
                link={slice.primary.btn_url}
              />
            </div>
          </div>

          {/* Button */}
        </div>
      </div>
    </section>
  );
};

export default EtcrHeroBlock;
