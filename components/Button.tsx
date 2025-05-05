"use client";
import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import { useState } from "react";

type ButtonProps = {
  text: KeyTextField | string;
  link?: LinkField | null | undefined;
  className?: string;
};

export const Button = ({ text, link, className }: ButtonProps) => {
  const [hovered, setHover] = useState<KeyTextField | string>("");

  return (
    <div>
      <PrismicNextLink
        field={link}
        className={clsx("flex rounded-xl overflow-hidden", className)}
        onMouseEnter={() => setHover(text)}
        onMouseLeave={() => setHover("")}
      >
        <div className="w-full flex justify-center items-center text-white  py-1.5 px-2 md:py-2 md:px-3">
          <p className="text-lg font-medium capitalize px-2">{text}</p>
          <AnimatePresence>
            {hovered === text && (
              <motion.div
                key="circle-arrow"
                initial={{ x: 80, width: 0 }}
                animate={{ x: 0, width: 20 }}
                exit={{ x: 80, width: 0 }}
                transition={{ duration: 0.4 }}
                className="h-5 flex items-center"
              >
                <CircleArrowRight />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PrismicNextLink>
    </div>
  );
};
