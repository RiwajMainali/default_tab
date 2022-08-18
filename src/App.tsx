import React from "react";
import youtube from "@yimura/scraper";
function App() {
  // const Scraper = require("@yimura/scraper").default;

  // const youtube = new Scraper();
  // const getVideo = async (url: string): Promise<T> => {
  //   youtube.search("Never gonna give you up");
  // };

  return (
    <h1 className=" h-screen p-2  bg-indigo-500">
      <h1 className="text-3xl font-bold text-center underline py-3">
        Welcome~{" "}
      </h1>
      <div className="flex text-center">
        <button className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          Search Engine
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          Youtube
        </button>
        {}
      </div>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        Misc
      </button>
    </h1>
  );
}

export default App;
