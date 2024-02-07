import React from "react";

const RenderHtmlFromString = (htmlString: string) => {
  return <div className="text-base font-normal text-[#222]" dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default RenderHtmlFromString;
