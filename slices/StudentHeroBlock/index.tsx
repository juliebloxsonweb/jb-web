"use client";
import { Button } from "@/components/Button";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `StudentHeroBlock`.
 */
export type StudentHeroBlockProps =
  SliceComponentProps<Content.StudentHeroBlockSlice>;

/**
 * Component for "StudentHeroBlock" Slices.
 */
const StudentHeroBlock: FC<StudentHeroBlockProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-32"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-y-8 gap-x-16">
          <div className="h-full w-full min-h-[500px] flex flex-col space-y-16 justify-between">
            <h1 className="text-[2.625rem] md:text-7xl -tracking-[0.02em] mx-0">
              {slice.primary.title}
            </h1>

            <div className="flex -space-x-2">
              {slice.primary.images.map((item, index) => (
                <PrismicNextImage
                  key={index}
                  className="inline-block rounded-full w-24 h-24 md:w-42 md:h-42 lg:w-30 lg:h-30 xl:w-42 xl:h-42 ring-[#fffbf5] ring-6 md:ring-9 shadow-lg"
                  field={item.image}
                  placeholder="blur"
                  blurDataURL={getBlurSvg}
                />
              ))}
            </div>
            <div className="flex flex-col space-y-8 w-full">
              <p className="text-[1.125rem]">{slice.primary.content}</p>

              <div className="w-[fit-content]">
                <Button
                  className="bg-black"
                  text={slice.primary.btn_text}
                  link={slice.primary.btn_link}
                />
              </div>
            </div>
          </div>

          <div className="h-full shadow-lg border-6 md:border-9 border-white rounded-3xl overflow-hidden order-1 lg:order-2 relative">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              className="size-full object-cover rounded-3xl"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
            <div className="absolute bottom-4 right-2">
              <span className="bg-white text-lg px-4 py-2 rounded-xl font-bold border border-black capitalize">
                {/* {slice.primary.name} */} Seyram - M.S. Spring 2024
              </span>
            </div>
          </div>
        </div>

        {/* </motion  .div> */}
      </div>
    </section>
  );
};

export default StudentHeroBlock;
