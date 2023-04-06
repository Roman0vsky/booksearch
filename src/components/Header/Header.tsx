import React from "react";
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <span className="Header__title">Search for books</span>
      <MyInput placeholder="Search..." />
      <div className="container">
        <span className="Header__text">Categories</span>
        <MySelect>
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </MySelect>
        <span className="Header__text">Sorting by</span>
        <MySelect>
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </MySelect>
      </div>
    </div>
  );
}
