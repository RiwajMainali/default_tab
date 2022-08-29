import { ColorPicker, useColor } from "react-color-palette";
import React, { useRef, useEffect } from "react";
import "react-color-palette/lib/css/styles.css";
interface props {
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
}
export const Colors = (Props: props) => {
  const [color, setColor] = useColor("hex", "#121212");

  return (
    <div>
      <ColorPicker
        width={456}
        height={228}
        color={color}
        onChange={setColor}
        hideHSV
        dark={false}
      />
    </div>
  );
};
