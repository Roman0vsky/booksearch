import axios from "axios";
import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";
import "./Header.css";
import { optionsCategories, optionsSorting } from "./options";

type HeaderProps = {
  handleSearch: (book: string) => void;
};

export default function Header(props: HeaderProps) {
  const [book, setBook] = useState("");

  function handleChange(e: any) {
    const book = e.target.value.trim();
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
          <MySelect options={optionsCategories} />
        </div>
        <div className="container__inner">
          <span className="Header__text">Sorting by</span>
          <MySelect options={optionsSorting} />
        </div>
      </div>
    </div>
  );
}
