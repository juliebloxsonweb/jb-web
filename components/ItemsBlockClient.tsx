import { TOCContext, useTOCContextValues } from "@/utils/TOCContext";
import { TableOfContents } from "./TableOfContents";
import { TrackedSection } from "./TrackedSection";
import { Content, GroupField, KeyTextField } from "@prismicio/client";
import { Simplify } from "@/prismicio-types";

type ItemsBlockProps = {
  publicationText: KeyTextField;
  publicationData: GroupField<
    Simplify<Content.ItemsBlockSliceDefaultPrimaryPublicationsItem>
  >;
  eventText: KeyTextField;
  eventData: GroupField<
    Simplify<Content.ItemsBlockSliceDefaultPrimaryEventsItem>
  >;
  awardText: KeyTextField;
  awardData: GroupField<
    Simplify<Content.ItemsBlockSliceDefaultPrimaryAwardsItem>
  >;
};

export function ItemsBlockClient({
  publicationText,
  publicationData,
  eventText,
  eventData,
  awardText,
  awardData,
}: ItemsBlockProps) {
  const { values } = useTOCContextValues();
  return (
    <TOCContext.Provider value={values}>
      <div className="container">
        <div className="grid grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr] my-2">
          <TableOfContents />
          <article className="min-h-screen mx-auto max-w-[100ch] w-[80vw] space-y-16">
            <TrackedSection sectionId={0} tocTitle="Publications" isFirst>
              <h3 className="text-4xl leading-[1.25em] mb-4 font-bold">
                {publicationText}
              </h3>
              <div className="mb-2">
                {publicationData?.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-x-4 mb-2">
                    <div className="w-2 h-2 flex items-center justify-center rounded-full bg-green text-white border border-black shrink-0"></div>
                    <span className="text-[1.125rem]">{item.text}</span>
                  </div>
                ))}
              </div>
            </TrackedSection>

            <TrackedSection sectionId={1} tocTitle="Speaking Events">
              {/* Speaking Events */}
              <h3 className="text-4xl leading-[1.25em] mb-4 font-bold">
                {eventText}
              </h3>
              <div className="mb-2">
                {eventData?.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-x-4 mb-2">
                    <div className="w-2 h-2 flex items-center justify-center rounded-full bg-green text-white border border-black shrink-0"></div>
                    <span className="text-[1.125rem]">{item.text}</span>
                  </div>
                ))}
              </div>
            </TrackedSection>

            <TrackedSection sectionId={2} tocTitle="Awards" isLast>
              {/* Awards and Grants */}
              <h3 className="text-4xl leading-[1.25em] mb-4 font-bold">
                {awardText}
              </h3>
              <div className="mb-2">
                {awardData?.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-x-4 mb-2">
                    <div className="w-2 h-2 flex items-center justify-center rounded-full bg-green text-white border border-black shrink-0"></div>
                    <span className="text-[1.125rem]">{item.text}</span>
                  </div>
                ))}
              </div>
            </TrackedSection>
          </article>
        </div>
      </div>
    </TOCContext.Provider>
  );
}
