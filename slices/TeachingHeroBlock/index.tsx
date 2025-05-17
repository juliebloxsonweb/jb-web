import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Title } from "@/components/Title";

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
      className="pt-32 md:pt-48"
    >
     <div className="container">
      <div className="w-full mx-auto text-center">
        <Title text={slice.primary.title} />
      </div>
     </div>
    </section>
  );
};

export default TeachingHeroBlock;
