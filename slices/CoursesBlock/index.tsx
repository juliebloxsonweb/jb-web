import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";
import "tw-animate-css";

/**
 * Props for `CoursesBlock`.
 */
export type CoursesBlockProps = SliceComponentProps<Content.CoursesBlockSlice>;

/**
 * Component for "CoursesBlock" Slices.
 */
const CoursesBlock: FC<CoursesBlockProps> = ({ slice }) => {
    const getBlurSvg = staticBlurDataUrl();
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 lg:py-16"
    >
      <div className="container">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {slice.primary.courses.map((item, index) => (
            <div key={index} className="rounded-md py-4">
              <div className="h-50 w-full rounded-lg border border-black">
                <PrismicNextImage
                  field={item.image}
                  className="size-full object-cover object   rounded-lg"
                  placeholder="blur"
                  width={item.image.dimensions?.width}
                  height={item.image.dimensions?.height}
                  blurDataURL={getBlurSvg}
                />
              </div>
              <div className="mx-auto mt-4 max-w-lg text-2xl font-bold tracking-tight md:text-base">
                <PointerHighlight
                  rectangleClassName="bg-neutral-200 border-neutral-300 leading-loose"
                  pointerClassName="text-green h-3 w-3"
                  containerClassName="inline-block mr-1"
                >
                  <span className="relative z-10">{item.course_code}</span>
                </PointerHighlight>
                {item.title}
              </div>
              <p className="mt-4 text-[1rem] text-justify" lang="en">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesBlock;
