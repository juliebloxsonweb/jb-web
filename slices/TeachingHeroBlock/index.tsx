import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `TeachingHeroBlock`.
 */
export type TeachingHeroBlockProps =
  SliceComponentProps<Content.TeachingHeroBlockSlice>;

/**
 * Component for "TeachingHeroBlock" Slices.
 */
const TeachingHeroBlock: FC<TeachingHeroBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-32 md:pt-44"
    >
      <div className="container">
        <div className="w-full mx-auto text-center">
          <h1 className="text-center text-4xl font-bold lg:text-5xl xl:text-7xl">
            {slice.primary.title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TeachingHeroBlock;
