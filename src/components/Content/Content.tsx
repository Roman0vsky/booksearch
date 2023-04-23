import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Content.css";

type ContentProps = {
  books: Array<any>;
  isLoading: boolean;
  totalItems: number;
  loadMore: () => void;
};

export default function Content(props: ContentProps) {
  const loadingTemplate = <h1>Loading...</h1>;

  const defaultTemplate = (
    <div className="Content">
      <ul className="Content__ul">
        {props.books === undefined || props.books.length === 0 ? (
          <h1>No results</h1>
        ) : (
          props.books.map((book) => (
            <Book
              key={book.id}
              bookImg={book.volumeInfo.imageLinks?.thumbnail}
              bookCategories={book.volumeInfo?.categories}
              bookTitle={book.volumeInfo?.title}
              bookAuthors={book.volumeInfo?.authors}
            />
          ))
        )}
      </ul>
      <button
      onClick={props.loadMore}
        className={
          props.books.length < props.totalItems
            ? "LoadMoreButton"
            : "LoadMoreButtonDisabled"
        }
        disabled={props.books.length < props.totalItems ? false : true}
      >
        Load more
      </button>
    </div>
  );

  return props.isLoading ? loadingTemplate : defaultTemplate;
}
