import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("teaching");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    image: page.data.meta_image,
    keywords: page.data.keywords,
  };
}

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("teaching");

  return <SliceZone slices={page.data.slices} components={components} />;
}
