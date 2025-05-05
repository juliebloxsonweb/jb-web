"use client";
import { FC, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useScroll, useTransform, motion } from "motion/react";

/**
 * Props for `HeroBlock`.
 */
export type HeroBlockProps = SliceComponentProps<Content.HeroBlockSlice>;

/**
 * Component for "HeroBlock" Slices.
 */
const HeroBlock: FC<HeroBlockProps> = ({ slice }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20"
    >
      <motion.div ref={ref}>
        <motion.div style={{ scale: scale }}>
          

        </motion.div>
        <div className="container"></div>
      </motion.div>
    </section>
  );
};

export default HeroBlock;
