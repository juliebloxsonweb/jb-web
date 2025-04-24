"use client";
import { ItemsBlockClient } from "@/components/ItemsBlockClient";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ItemsBlock`.
 */
export type ItemsBlockProps = SliceComponentProps<Content.ItemsBlockSlice>;

/**
 * Component for "ItemsBlock" Slices.
 */
const ItemsBlock: FC<ItemsBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-32"
    >
      <ItemsBlockClient
        publicationText={slice.primary.publication_text}
        publicationData={slice.primary.publications}
        eventText={slice.primary.events_title}
        eventData={slice.primary.events}
        awardText={slice.primary.awards_text}
        awardData={slice.primary.awards}
      />
    </section>
  );
};

export default ItemsBlock;
