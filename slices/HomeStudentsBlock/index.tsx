import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeStudentsBlock`.
 */
export type HomeStudentsBlockProps =
  SliceComponentProps<Content.HomeStudentsBlockSlice>;

/**
 * Component for "HomeStudentsBlock" Slices.
 */
const HomeStudentsBlock: FC<HomeStudentsBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_students_block (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HomeStudentsBlock;
