import React, { useState, useEffect } from "react";
import { KeyboardEvent } from "react";
import Popup from "./Components/Popup";
function App() {
  const [YoutubeSearch, setYoutubeSearch] = React.useState("");
  const [GoogleSearch, setGoogleSearch] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);
  const YinputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yt = event.target.value;
    setYoutubeSearch(yt);
  };

  const GinputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gg = event.target.value;
    setGoogleSearch(gg);
  };
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      setShowPopup(true);
    }
  };
  return (
    <>
      <h1 className=" h-screen p-2  bg-indigo-500">
        <p className="text-3xl font-bold text-center underline py-3">
          Welcome~{" "}
        </p>
        <div className="grid grid-rows-2 grid-flow-col gap-4 v-screen place-items-center">
          <input
            onKeyDown={keyDownHandler}
            onChange={YinputHandler}
            className="grid-rows-1"
          />
          <input
            onKeyDown={keyDownHandler}
            onChange={GinputHandler}
            className="grid-rows-2"
          />
          <input onKeyDown={keyDownHandler} className="grid-rows-3" />
        </div>
        <Popup Trigger={showPopup} setTrigger={setShowPopup}></Popup>
      </h1>
      {console.log(GoogleSearch)}
    </>
  );
}

export default App;
