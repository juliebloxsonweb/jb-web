import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Download } from "lucide-react";

/**
 * Props for `EtcrDownloadCard`.
 */
export type EtcrDownloadCardProps =
  SliceComponentProps<Content.EtcrDownloadCardSlice>;

/**
 * Component for "EtcrDownloadCard" Slices.
 */
const EtcrDownloadCard: FC<EtcrDownloadCardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-y-8 place-items-center bg-[#edf6e9] px-4 rounded-3xl border border-black py-8">
          <div className="bg-white w-[fit-content] rounded-full overflow-hidden">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
            />
          </div>

          <div className="flex flex-col space-y-8">
            <p className="text-lg">{slice.primary.content}</p>

            <div className="flex flex-col xl:flex-row gap-x-8 gap-y-6">
              {slice.primary.links.map((item, index) => (
                <div key={index}>
                  <PrismicNextLink
                    field={item.link_url}
                    download
                    className="flex items-center gap-x-2"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green text-white border border-black shrink-0">
                      <Download className="w-4 h-4 min-w-min min-h-min" />
                    </div>
                    <span className="text-[1.125rem] font-medium">
                      {item.title}
                    </span>
                  </PrismicNextLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtcrDownloadCard;
