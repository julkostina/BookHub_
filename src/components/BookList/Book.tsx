import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface BookProps {
  title: string;
  first_publish_year: string;
  edition_count: number;
  author: any;
  id: string;
  cover_img: string;
}

const Book: React.FC<BookProps> = (book) => {
  return (
    <div className="book-item">
      <div className="book-item-img">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="book-item-info">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item">
          <span className="title name">{book.title}</span>
          </div>
        </Link>
        <div className="book-item-info-item">
          <span className="title">Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>
      </div>
      <div className="book-item-info-item">
        <span className="title">Total Editions: </span>
        <span>{book.edition_count}</span>
      </div>
      <div className="book-item-info-item">
        <span className="title">First Publish Year: </span>
        <span>{book.first_publish_year}</span>
      </div>
    </div>
  );
};

export default Book;
