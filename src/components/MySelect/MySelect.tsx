import React from "react";
import "./MySelect.css";

type Option = {
  value: string;
};
type MySelectProps = {
  options: Array<Option>;
  sortBy: (sort: string) => void;
};

export default function MySelect(props: MySelectProps) {
  function changeSort(e: any) {
    e.preventDefault()
    props.sortBy(e.target.value);
  }

  return (
    <select className="MySelect" onChange={changeSort}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>{option.value}</option>
      ))}
    </select>
  );
}
