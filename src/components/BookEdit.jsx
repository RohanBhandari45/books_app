import { useState } from "react";
import useBooksContext from "../hooks/use_books_context";

const BookEdit = ({book, onSubmit}) => {

  const {editBookById}= useBooksContext();

  const [title, setTitle] = useState(book.title);


  const handleChange = (event) => {
    setTitle(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input"  value={title} onChange={handleChange}/>
      <button className="Button is-primary">
        Save
      </button>
    </form>
  )
}


export default BookEdit;
