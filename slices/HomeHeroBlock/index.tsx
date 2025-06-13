"use client";
import { Button } from "@/components/Button";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "motion/react";
import { FC } from "react";

/**
 * Props for `HomeHeroBlock`.
 */
export type HomeHeroBlockProps =
  SliceComponentProps<Content.HomeHeroBlockSlice>;

/**
 * Component for "HomeHeroBlock" Slices.
 */
const HomeHeroBlock: FC<HomeHeroBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20"
    >
      <div className="container">
        <div className="relative mx-auto my-10 flex flex-col items-center justify-center">
          <div className="absolute inset-x-0 top-0 h-px w-full bg-neutral-200/80">
            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-green to-transparent" />
          </div>
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-green to-transparent" />
          </div>
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-green to-transparent" />
          </div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80">
            <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-green to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80">
            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-green to-transparent" />
          </div>
          <div className="px-4 py-10 md:py-20">
            <h1 className="relative z-10 mx-auto max-w-4xl text-center text-4xl font-bold lg:text-5xl xl:text-7xl">
              {slice.primary.title?.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.5,
              }}
              className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg"
            >
              {slice.primary.content}
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.6,
              }}
              className="relative z-10 mt-8 flex flex-wrap items-center justify-center"
            >
              <Button
                className="bg-green text-white border border-black"
                text={slice.primary.btn_text}
                link={slice.primary.btn_link}
              />
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-x-8 place-items-center">
              {slice.primary.images.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7,
                  }}
                  className="relative z-10 mt-20 rounded-3xl border border-white bg-white p-4 shadow-md w-[fit-content] h-[fit-content]"
                >
                  <div className="w-full overflow-hidden rounded-xl border border-gray-300">
                    <PrismicNextImage
                      field={item.image}
                      width={item.image.dimensions?.width}
                      height={item.image.dimensions?.height}
                      className="size-full md:h-[40rem] lg:h-[35rem] xl:h-[50rem] w-full object-contain"
                      placeholder="blur"
                      blurDataURL={getBlurSvg}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroBlock;
