import { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import SearchSort from './SearchSort';
import './styles.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortCriteria === 'name') return a.name.localeCompare(b.name);
    if (sortCriteria === 'author') return a.author.localeCompare(b.author);
    if (sortCriteria === 'releaseDate') return new Date(a.releaseDate) - new Date(b.releaseDate);
    return 0;
  });

  return (
    <div className="App">
      <h1>Book Listing</h1>
      <div className="container">
        <BookForm addBook={addBook} />
      </div>
      <div className="container">
        <SearchSort onSearch={handleSearch} onSort={handleSort} />
      </div>
      <BookList books={sortedBooks} removeBook={removeBook} />
    </div>
  );
};

export default App;
