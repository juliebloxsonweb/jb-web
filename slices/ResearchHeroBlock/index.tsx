import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for research_hero_block (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ResearchHeroBlock;
