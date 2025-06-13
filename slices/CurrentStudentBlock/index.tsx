"use client";
import { CloseIcon } from "@/components/CloseIcon";
import { Title } from "@/components/Title";
import { useOutsideClick } from "@/hooks/useClickOutside";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { FC, useEffect, useId, useRef, useState } from "react";

/**
 * Props for `CurrentStudentBlock`.
 */
export type CurrentStudentBlockProps =
  SliceComponentProps<Content.CurrentStudentBlockSlice>;


/**
 * Component for "CurrentStudentBlock" Slices.
 */
const CurrentStudentBlock: FC<CurrentStudentBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  const [active, setActive] = useState<
    (typeof slice.primary.students)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <Title text={slice.primary.title} />

        {/* Current Students  */}
        <>
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0  grid place-items-center z-[100]">
                <motion.button
                  key={`button-${active.name}-${id}`}
                  layout
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.05,
                    },
                  }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.name}-${id}`}
                  ref={ref}
                  className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white sm:rounded-3xl overflow-hidden"
                >
                  <motion.div layoutId={`image-${active.name}-${id}`}>
                    <PrismicNextImage
                      width={active.image.dimensions?.width}
                      height={active.image.dimensions?.height}
                      field={active.image}
                      className="w-full h-80 lg:h-90 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    />
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-start p-4">
                      <div className="">
                        <motion.h2
                          layoutId={`title-${active.name}-${id}`}
                          className="font-black text-black  text-base"
                        >
                          {active.name}
                        </motion.h2>
                        <motion.p
                          layoutId={`description-${active.name}-${id}`}
                          className="text-base"
                        >
                          {active.biography}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
          <ul className="mx-auto w-full grid md:grid-cols-2 lg:grid-cols-3  items-start gap-4 md:gap-16">
            {slice.primary.students.map((card) => (
              <motion.li
                key={card.name}
                layoutId={`card-${card.name}-${id}`}
                onClick={() => setActive(card)}
                className="py-4 flex flex-col hover:bg-neutral-50 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col w-full">
                  <motion.div layoutId={`image-${card.name}-${id}`}>
                    <PrismicNextImage
                      width={card.image.dimensions?.width}
                      height={card.image.dimensions?.height}
                      field={card.image}
                      placeholder="blur"
                      blurDataURL={getBlurSvg}
                      className="h-90 w-full  rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="flex justify-between items-center">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${card.name}-${id}`}
                        className="text-2xl"
                      >
                        {card.name}
                      </motion.h3>
                      <motion.p className="text-[1rem]">
                        {card.graduation_year}
                      </motion.p>
                    </div>

                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green text-black border border-black shrink-0">
                        <Expand className="h-5 w-5 min-w-min min-h-min text-white" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </>
      </div>
    </section>
  );
};

export default CurrentStudentBlock;
