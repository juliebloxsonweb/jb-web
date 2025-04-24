import { TOCContext } from "@/utils/TOCContext";
import { useScroll } from "motion/react";
import React, { HTMLProps, useContext, useEffect, useRef } from "react";

type TrackedSectionProps = {
  sectionId: number;
  tocTitle: string;
  isFirst?: boolean;
  isLast?: boolean;
};

export const TrackedSection = ({
  sectionId,
  tocTitle,
  isFirst = false,
  isLast = false,
  ...props
}: TrackedSectionProps & HTMLProps<HTMLElement>) => {
  const { registerSection, setActiveSection } = useContext(TOCContext);


  useEffect(() => {
    registerSection({ id: sectionId, title: tocTitle });
  }, [registerSection, sectionId, tocTitle]);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  scrollYProgress.on("change", (value) => {

    if (value > 0 && value < 1) {
      setActiveSection(sectionId);
    }

    if ((value <= 0 && isFirst) || (value >= 1 && isLast)) {
      setActiveSection(-1);
    }
  });
  return (
    <section
      ref={container}
      id={`section-${sectionId}`}
      style={{ scrollMargin: "10vh" }}
      {...props}
    />
  );
};
