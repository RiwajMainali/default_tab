import React, { useState, useEffect } from "react";
import { KeyboardEvent } from "react";
import { Colors } from "./Components/colorPicker";
import Popup from "./Components/Popup";
import { Youtube } from "./Components/youtube";
function App() {
  const [search, setSearch] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);
  const [bgColor, setBgColor] = React.useState("");
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yt = event.target.value;
    setSearch(yt);
  };
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (search === "" && event.code === "Enter") {
      alert("Search Query is blank");
    }
    if (event.code === "Enter") {
      setShowPopup(true);
    }
    if (event.code === "Escape") {
      setShowPopup(false);
    }
  };
  return (
    <>
      <h1
        className={
          showPopup
            ? "h-screen p-2 bg-[#000000]"
            : " h-screen p-2  bg-[#50d71e]"
        }
      >
        {/* <Colors bgColor={bgColor} setBgColor={setBgColor} /> */}
        <p className="text-3xl font-bold text-center underline py-3">
          Welcome~{" "}
        </p>
        <div className="grid grid-rows-2 grid-flow-col gap-4 v-screen place-items-center">
          <input onKeyDown={keyDownHandler} onChange={inputHandler} />
        </div>
        <Popup
          Trigger={showPopup}
          setTrigger={setShowPopup}
          Search={search}
        ></Popup>
      </h1>
      <Youtube />
    </>
  );
}

export default App;
