import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import "tw-animate-css";

/**
 * Props for `CoursesBlock`.
 */
export type CoursesBlockProps = SliceComponentProps<Content.CoursesBlockSlice>;

/**
 * Component for "CoursesBlock" Slices.
 */
const CoursesBlock: FC<CoursesBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="mx-auto grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-4">
          {slice.primary.courses.map((item, index) => (
            <div key={index} className="rounded-md p-6">
              <div className="h-40 w-full rounded-lg bg-linear-to-r from-blue-200 to-sky-200" />
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
              <p className="mt-4 text-[1rem] text-justify" lang="en">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesBlock;
