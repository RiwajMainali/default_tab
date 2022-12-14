import React, { useRef, useEffect } from "react";
interface props {
  Trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  Search: string;
}
export default function Popup(props: props) {
  return props.Trigger ? (
    <>
      <div className="inset-y-0 flex h-100vh justify-items-center items-center ">
        <div className=" w-screen h-min-screen w-max-2xl bg-gray-400">
          <button
            className=" p-4  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => props.setTrigger(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
