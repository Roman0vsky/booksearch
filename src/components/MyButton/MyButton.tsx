import React from "react";
import "./MyButton.css";

export default function MyButton(props: any) {
  return (
    <button className="MyButton" {...props}>
      Search
    </button>
  );
}
