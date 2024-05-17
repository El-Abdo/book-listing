/* eslint-disable react/prop-types */

const BookItem = ({ book, removeBook }) => {
  return (
    <div className="book-item">
      <img src={book.coverImage} alt={`${book.name} cover`} />
      <div>
        <h2>Book Title: {book.name}</h2>
        <p>Author: {book.author}</p>
        <p>Release Date: {book.releaseDate}</p>
        <button className="remove-button" onClick={() => removeBook(book.id)}>Remove From List</button>
      </div>
    </div>
  );
};

export default BookItem;
