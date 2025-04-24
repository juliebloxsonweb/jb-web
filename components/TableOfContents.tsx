"use client";
import { Section, TOCContext } from "@/utils/TOCContext";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useContext, useState } from "react";

export const TableOfContents = () => {
  const { sections, activeSection } = useContext(TOCContext);
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [showTOC, setShowTOC] = useState(activeSection >= 0);
  scrollYProgress.on("change", () => {
    setShowTOC(activeSection >= 0);
  });

  return (
    <div className="h-full px-4">
      <motion.div
        className="sticky top-20 h-[13vh] flex gap-4"
        initial={{ opacity: 0, display: "none" }}
        animate={{
          opacity: showTOC ? 1 : 0,
          display: showTOC ? "flex" : "none",
        }}
      >
        <div className="h-full w-1 border border-black bg-neutral-300 rounded-full overflow-hidden">
          <motion.div
            className="bg-green w-full origin-top"
            style={{ height: progressHeight }}
          />
        </div>
        <div className="hidden lg:flex flex-col gap-6 text-sm xl:text-base">
          {sections.map((item: Section, index) => (
            <span
              key={index}
              className={clsx(
                "cursor-pointer transition-colors duration-200",
                activeSection === item.id
                  ? "text-neutral-800 font-extrabold"
                  : "text-neutral-300"
              )}
              onClick={() =>
                document
                  .getElementById(`section-${item.id}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item.title}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
