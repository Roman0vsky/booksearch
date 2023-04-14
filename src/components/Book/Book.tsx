import React from "react";
import "./Book.css";

type BookProps = {
  bookImg: string;
  bookCategories: Array<string>;
  bookTitle: string;
  bookAuthors: Array<string>;
};

export default function Book(props: BookProps) {
  return (
    <li className="Book">
      <img src={props.bookImg} alt={`IMG: ${props.bookTitle}`} />
      <span>{props.bookCategories?.join(", ")}</span>
      <span>{props.bookTitle}</span>
      <span>{props.bookAuthors?.join(", ")}</span>
    </li>
  );
}
