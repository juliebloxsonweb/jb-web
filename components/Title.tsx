import { KeyTextField } from "@prismicio/client";
import React from "react";

type TitleProps = {
  text: KeyTextField;
};

export const Title = ({text}: TitleProps) => {
  return (
    <div className="">
      <h2 className="text-5xl font-bold mb-8">{text}</h2>
    </div>
  );
};
