import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Content.css";

type ContentProps = {
  books: Array<any>;
  isLoading: boolean;
};

export default function Content(props: ContentProps) {
  const loadingTemplate = <h1>Loading...</h1>;

  const defaultTemplate = (
    <ul className="Content">
      {props.books.map((book) => (
        <Book
          key={book.id}
          bookImg={book.volumeInfo.imageLinks?.thumbnail}
          bookCategories={book.volumeInfo?.categories}
          bookTitle={book.volumeInfo?.title}
          bookAuthors={book.volumeInfo?.authors}
        />
      ))}
    </ul>
  );

  return props.isLoading ? loadingTemplate : defaultTemplate;
}
