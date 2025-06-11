"use client";
import { FC, Fragment } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { motion } from "motion/react";

/**
 * Props for `GalleryBlock`.
 */
export type GalleryBlockProps = SliceComponentProps<Content.GalleryBlockSlice>;

/**
 * Component for "GalleryBlock" Slices.
 */
const GalleryBlock: FC<GalleryBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-16"
    >
      <div className="container">
        <div className="w-full mx-auto flex justify-center">
          <h2 className="text-5xl font-bold mb-8">Gallery</h2>
        </div>

        {/* Images */}
        <div className="flex justify-center items-center">
          <div className="flex overflow-hidden my-8  [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div
              animate={{
                x: "-50%",
              }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex"
            >
              {Array.from({ length: 2 }).map((_, index) => (
                <Fragment key={index}>
                  {slice.primary.images.map((item, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="image rounded-[1.875rem] -mr-4 mt-4 p-1 bg-white border border-neutral-100 shrink-0 overflow-hidden"
                    >
                      <PrismicNextImage
                        field={item.image}
                        className="h-52 w-52 md:h-96 md:w-96 object-cover shrink-0 border-6 border-white rounded-[1.875rem] cursor-pointer"
                        width={item.image.dimensions?.width}
                        height={item.image.dimensions?.height}
                        placeholder="blur"
                        blurDataURL={getBlurSvg}
                      />
                    </motion.div>
                  ))}
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryBlock;
