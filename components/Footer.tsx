import { createClient } from "@/prismicio";

import { FooterClient } from "./FooterClient";

export const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("footer");
  const { title, content, research_group, links, copyright, contact, socials } =
    settings.data;

  return (
    <FooterClient
      title={title}
      content={content}
      researchGroup={research_group}
      links={links}
      contact={contact}
      copyright={copyright}
      socials={socials}
    />
  );
};
