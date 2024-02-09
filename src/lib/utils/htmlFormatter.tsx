import React from "react";

export const RenderHtmlFromString = (htmlString: string) => {
  return (
    <div
      className="text-base font-normal text-[#222]"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export const RemoveHtmlTags = (htmlString: string) => {
  return htmlString.replace(/<[^>]*>/g, "");
};

