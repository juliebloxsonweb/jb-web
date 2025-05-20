import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Title } from "@/components/Title";

/**
 * Props for `AboutCoreLab`.
 */
export type AboutCoreLabProps = SliceComponentProps<Content.AboutCoreLabSlice>;

/**
 * Component for "AboutCoreLab" Slices.
 */
const AboutCoreLab: FC<AboutCoreLabProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="">
          <div className="mx-auto text-center max-w-[60rem]">
            <Title text={slice.primary.title} />
          </div>
          <div className="grid md:grid-cols-3">
            <p className="text-lg">{slice.primary.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoreLab;
