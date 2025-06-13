"use client";
import { Title } from "@/components/Title";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "motion/react";
import { FC } from "react";

/**
 * Props for `TextImageBlock`.
 */
export type TextImageBlockProps =
  SliceComponentProps<Content.TextImageBlockSlice>;

/**
 * Component for "TextImageBlock" Slices.
 */
const TextImageBlock: FC<TextImageBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-16"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-y-8 lg:max-w-[37.5rem]"
          >
            <h2 className="text-5xl font-bold">{slice.primary.title}</h2>
            <p className="text-lg text-justify">{slice.primary.content}</p>

            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
              className="flex lg:hidden rounded-lg mb-4"
            />

          </motion.div>

          {/* Image */}
          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <PrismicNextImage
              field={slice.primary.image}
              height={1000}
              className="rounded-lg"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TextImageBlock;
