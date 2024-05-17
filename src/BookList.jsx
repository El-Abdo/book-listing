/* eslint-disable react/prop-types */
import BookItem from './BookItem';

const BookList = ({ books, removeBook }) => {
  return (
    <div className="books-container">
      {books.map(book => (
        <BookItem key={book.id} book={book} removeBook={removeBook} />
      ))}
    </div>
  );
};

export default BookList;
