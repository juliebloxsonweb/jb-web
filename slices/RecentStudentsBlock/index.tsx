import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RecentStudentsBlock`.
 */
export type RecentStudentsBlockProps =
  SliceComponentProps<Content.RecentStudentsBlockSlice>;

/**
 * Component for "RecentStudentsBlock" Slices.
 */
const RecentStudentsBlock: FC<RecentStudentsBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for recent_students_block (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default RecentStudentsBlock;
