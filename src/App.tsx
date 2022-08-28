import React, { useState, useEffect } from "react";
import { KeyboardEvent } from "react";
import Popup from "./Components/Popup";
function App() {
  const [search, setSearch] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yt = event.target.value;
    setSearch(yt);
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
          <input onKeyDown={keyDownHandler} onChange={inputHandler} />
        </div>
        <Popup Trigger={showPopup} setTrigger={setShowPopup}></Popup>
      </h1>
      {console.log(search)}
    </>
  );
}

export default App;
