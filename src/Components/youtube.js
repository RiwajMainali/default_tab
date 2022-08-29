import youtube from "@yimura/scraper";
import React from "react";

export const Youtube = () => {
  const yt = new youtube.default();
  yt.search("Never gonna give you up").then((results) => {
    console.log(results.videos[0]);
  });

  return <div>youtube</div>;
};
