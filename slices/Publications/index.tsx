import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Publications`.
 */
export type PublicationsProps = SliceComponentProps<Content.PublicationsSlice>;

/**
 * Component for "Publications" Slices.
 */
const Publications: FC<PublicationsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for publications (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Publications;
