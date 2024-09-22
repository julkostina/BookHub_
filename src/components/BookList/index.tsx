import React from 'react';
import './index.scss';
import { useGlobalContext } from '../../context';
import Loader from '../Loader'; 
import Book from './Book';
import Header from '../Header';

const BookList: React.FC = () => { const {books, loading, resultTitle} = useGlobalContext();
const booksWithCovers = books.map((singleBook: any) => {
  return {
    ...singleBook,
    id: (singleBook.id).replace("/works/", ""),
    cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` :  `${process.env.PUBLIC_URL}/img/book-cover.png`
  }
});

if(loading) return <Loader />;

  return (
    <section className='bookList'>
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="bookList-content">
          {booksWithCovers.slice(0,30).map((item: any, index:number) => {
            return (
              <Book key={index} {...item} />
            )
          })}
          </div>
      </div>
    </section>
  );
};

export default BookList;