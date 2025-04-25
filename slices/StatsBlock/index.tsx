"use client";
import { StatsCounter } from "@/components/StatsCounter";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `StatsBlock`.
 */
export type StatsBlockProps = SliceComponentProps<Content.StatsBlockSlice>;

/**
 * Component for "StatsBlock" Slices.
 */

const StatsBlock: FC<StatsBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="w-full max-w-[90ch] mx-auto bg-gray rounded-md border border-black">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 px-4 py-8">
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
    </section>
  );
};

export default StatsBlock;
