import { ContainerScroll } from "@/components/ContainerScroll";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ResearchHeroBlock`.
 */
export type ResearchHeroBlockProps =
  SliceComponentProps<Content.ResearchHeroBlockSlice>;

/**
 * Component for "ResearchHeroBlock" Slices.
 */
const ResearchHeroBlock: FC<ResearchHeroBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-center text-4xl font-bold lg:text-5xl xl:text-7xl">
                  {slice.primary.title}
                </h1>
                <p className="text-lg text-justify lg:text-center py-4">{slice.primary.content}</p>
              </>
            }
          >
            <PrismicNextImage
              field={slice.primary.image}
              height={slice.primary.image.dimensions?.height}
              width={slice.primary.image.dimensions?.width}
              className="mx-auto rounded-2xl size-full object-cover h-full object-left-top"
              draggable={false}
            />
            <p className="text-sm text-center pt-2">{slice.primary.image_caption}</p>
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default ResearchHeroBlock;
