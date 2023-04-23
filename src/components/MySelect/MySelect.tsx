import React from "react";
import "./MySelect.css";

type Option = {
  value: string;
};
type MySelectProps = {
  options: Array<Option>;
};

export default function MySelect(props: MySelectProps) {
  return (
    <select className="MySelect">
      {props.options.map((option) => (
        <option value={option.value}>{option.value}</option>
      ))}
    </select>
  );
}
