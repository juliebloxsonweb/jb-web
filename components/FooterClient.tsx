"use client";

import { FooterDocumentDataContactItem, FooterDocumentDataLinksItem, FooterDocumentDataSocialsItem, Simplify } from "@/prismicio-types";
import { GroupField, KeyTextField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { LocateIcon, Mail, PhoneCall } from "lucide-react";
import { JSX } from "react";
import { BackToTopBtn } from "./BackToTopBtn";
import { Icons } from "./Icons";
type FooterProps = {
  title: KeyTextField;
  content: KeyTextField;
  researchGroup: KeyTextField;
  links: GroupField<Simplify<FooterDocumentDataLinksItem>>;
  contact: GroupField<Simplify<FooterDocumentDataContactItem>>;
  copyright: KeyTextField;
  socials: GroupField<Simplify<FooterDocumentDataSocialsItem>>;
};

export const FooterClient = (props: FooterProps): JSX.Element => {
  const { title, content, copyright, links, contact, researchGroup, socials } = props;

  const year = new Date().getFullYear();

  const iconsArray = new Map([
    [0, LocateIcon],
    [1, PhoneCall],
    [2, Mail],
  ]);

  const socialArray = new Map([
    [0, Icons.Instagram],
    [1, Icons.Facebook],
    [2, Icons.LinkedIn],
  ]);

  return (
    <footer className="backdrop-blur-md bg-black text-white relative mt-32">
      <div className="container">
        <div className="py-16">
          <div className="flex items-center gap-3"></div>
          <div className="grid lg:grid-cols-3 gap-4 xl:gap-8">
            {/* Logo and Description */}
            <div className="flex flex-col gap-y-4">
              <h1 className="capitalize text-green text-2xl font-bold">
                {title}
              </h1>

              <h2 className="text-xl text-white/80">{content}</h2>

              <div className="flex space-x-4 md:space-x-8 pt-2">
                {socials.map((item, index) => {
                  const IconComponent = socialArray.get(index);
                  return (
                    IconComponent && (
                      <div key={index}>
                        <PrismicNextLink field={item.url} type="button">
                          <IconComponent className="w-10 h-10" />
                        </PrismicNextLink>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
            {/* Navigation Links */}
            <div>
              <div className="flex flex-col lg:items-center">
                <span className="mt-16 lg:mt-0 lg:mb-8 font-bold uppercase text-green">
                  navigation
                </span>
              </div>
              <nav className="flex flex-col lg:items-center gap-8 mt-8 lg:mt-0">
                {links.map((item, index) => (
                  <div key={index} className="relative">
                    <PrismicNextLink
                      field={item.link}
                      className="inline-flex capitalize text-lg h-auto px-0 border-transparent after:content-[''] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:bg-lime hover:after:w-[8%] md:hover:after:w-full focus:outline-none"
                    >
                      {item.link_text}
                    </PrismicNextLink>
                  </div>
                ))}
              </nav>
            </div>

            {/* Navigation Links */}
            <div className="">
              <div className="flex flex-col lg:items-left">
                <span className="text-green mt-16 lg:mt-0 lg:mb-8 font-bold uppercase">
                  contact
                </span>
              </div>
              <nav className="flex flex-col lg:items-left gap-8 mt-8 lg:mt-0">
                {contact.map((item, index) => {
                  const IconComponent = iconsArray.get(index);
                  return (
                    IconComponent && (
                      <div key={index}>
                        <PrismicNextLink field={item.link} type="button">
                          <div className="flex items-center gap-x-2 text-lg">
                            <IconComponent className="w-6 h-6 text-green" />
                            {item.text}
                          </div>
                        </PrismicNextLink>
                      </div>
                    )
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <BackToTopBtn />

        <div className="pt-16 text-center">
          <h1 className="text-5xl md:text-5xl xl:text-[5.25rem] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {researchGroup}
          </h1>
        </div>

        <div className="max-w-xl lg:max-w-7xl mx-auto py-4 text-center">
          <p className="text-green/50">{`${year} - ${copyright}`}</p>
        </div>
      </div>
    </footer>
  );
};
