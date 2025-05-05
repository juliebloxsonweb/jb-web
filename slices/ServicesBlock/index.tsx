"use client";

import { valueVariants } from "@/utils/animation";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

/**
 * Props for `ServicesBlock`.
 */
export type ServicesBlockProps =
  SliceComponentProps<Content.ServicesBlockSlice>;

/**
 * Component for "ServicesBlock" Slices.
 */
const ServicesBlock: FC<ServicesBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <h2 className="text-5xl font-bold mb-8">{slice.primary.title}</h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-4 xl:gap-x-8 gap-y-8">
          {slice.primary.services.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={valueVariants}
              viewport={{ once: true }}
            >
              <PrismicNextLink
                field={item.btn_link}
                key={index}
                className="flex flex-col h-full min-h-[55ch] md:min-h-[80ch] lg:min-h-[60ch] xl:min-h-[70ch] border border-black rounded-3xl relative overflow-hidden transition hover:scale-105"
                style={
                  item.bg_image?.url
                    ? {
                        backgroundImage: `url(${item.bg_image.url})`,
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover",
                        backgroundSize: "100%",
                        borderRadius: "1.5rem",
                      }
                    : undefined
                }
              >
                <div className="bg-black/10 w-full h-full absolute z-[1] inset-0 bg-gradient-to-b from-transparent from-20% to-black lg:from-30%"></div>
                <div className="absolute top-2 right-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green text-white border border-black shrink-0 cursor-pointer">
                    <ArrowUpRight className="w-8 h-8 min-w-min min-h-min" />
                  </div>
                </div>

                <div className="flex flex-col h-full justify-end text-white z-[2] px-4 xl:px-8 py-4">
                  <div className="">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-lg">{item.content}</p>
                  </div>
                </div>
              </PrismicNextLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;
