"use client";
import { FC, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Title } from "@/components/Title";
import { useScroll, useTransform, motion } from "motion/react";

/**
 * Props for `AboutCoreLab`.
 */
export type AboutCoreLabProps = SliceComponentProps<Content.AboutCoreLabSlice>;

/**
 * Component for "AboutCoreLab" Slices.
 */
const AboutCoreLab: FC<AboutCoreLabProps> = ({ slice }) => {
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr]">
          <motion.div
            className="hidden lg:block lg:sticky lg:top-20"
            style={{ height: progressHeight }}
          >
            <Title text={slice.primary.title} />
          </motion.div>
          <div className="flex lg:hidden">
            <Title text={slice.primary.title} />
          </div>

          <div ref={contentRef}>
            <p className="text-lg">{slice.primary.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoreLab;
