import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { StatsCounter } from "@/components/StatsCounter";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";

/**
 * Props for `AboutMeBlock`.
 */
export type AboutMeBlockProps = SliceComponentProps<Content.AboutMeBlockSlice>;

/**
 * Component for "AboutMeBlock" Slices.
 */
const AboutMeBlock: FC<AboutMeBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <h2 className="text-5xl font-bold mb-8">{slice.primary.title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[50%_1fr] xl:grid-cols-[35%_1fr] gap-y-8 md:gap-x-8">
          {/* Image */}
          <div className="h-full border border-black rounded-3xl overflow-hidden ">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              className="size-full object-cover object-right rounded-3xl"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between items-center space-y-8 xl:space-y-0">
            <p
              className="text-xl -leading-[0.02em] text-justify first-letter:font-bold first-letter:uppercase first-letter:text-4xl"
              lang="en"
            >
              {slice.primary.content}
            </p>
            <div className="w-full mx-auto bg-[#fffbf5] rounded-md border border-black">
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8 px-4 py-8">
                {slice.primary.stats.map((item, index) => (
                  <StatsCounter
                    key={index}
                    text={item.text}
                    count={Number(item.number)}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Stats Block */}
        </div>
      </div>
    </section>
  );
};

export default AboutMeBlock;
