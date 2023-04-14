import axios from "axios";
import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";
import "./Header.css";

type HeaderProps = {
  handleSearch: (book: string) => void;
};

export default function Header(props: HeaderProps) {
  const [book, setBook] = useState("");

  function handleChange(e: any) {
    const book = e.target.value;
    setBook(book);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.handleSearch(book);
  }

  return (
    <div className="Header">
      <span className="Header__title">Search for books</span>
      <form onSubmit={handleSubmit} className="Header__form">
        <div className="container">
          <MyInput onChange={handleChange} placeholder="Search..." />
          <MyButton type="submit" />
        </div>
      </form>
      <div className="container">
        <div className="container__inner">
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
        </div>
        <div className="container__inner">
          <span className="Header__text">Sorting by</span>
          <MySelect>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </MySelect>
        </div>
      </div>
    </div>
  );
}
