"use client";
import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { AnimatePresence, motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import { useState } from "react";

type ButtonProps = {
  text: KeyTextField | string;
  link: LinkField | null | undefined;
};

export const Button = ({ text, link }: ButtonProps) => {
  const [hovered, setHover] = useState<KeyTextField | string>("");
  console.log("text", text);

  return (
    <div>
      <PrismicNextLink
        field={link}
        className="flex bg-gradient-to-br from-gray-500 hover:from-gray-400 to-50% to-neutral-900 p-px rounded-xl overflow-hidden"
        onMouseEnter={() => setHover(text)}
        onMouseLeave={() => setHover("")}
      >
        <div className="w-full flex justify-center items-center text-white bg-gradient-to-br from-neutral-900/60 from-35% to-white/5 py-1.5 px-2 md:py-2 md:px-3">
          <p className="text-lg font-medium capitalize px-2">
            {text}
          </p>
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
