import React, { MouseEventHandler, useEffect, useRef } from "react";
import "./index.scss";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import BookList from "../BookList";
interface SearchFormProps {
  bookList: boolean;
  setBookList: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchForm: React.FC<SearchFormProps> = ({bookList, setBookList}) => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef<HTMLInputElement>(null);
  const [showBookList, setShowBookList] = React.useState(bookList); 

  useEffect(() => searchText.current?.focus(), []);
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    let TempSearchTerm = searchText.current?.value.trim();
    if (TempSearchTerm?.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please enter something...");
    } else {
      setSearchTerm(searchText.current?.value);
    }
    setBookList(true);
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem">
              <input
                type="text"
                className="form-control"
                placeholder="Find your book"
                ref={searchText}
              />
              <button type="submit">
                <FaSearch size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
