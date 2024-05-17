/* eslint-disable react/prop-types */
import { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [coverImage, setCoverImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      name,
      author,
      releaseDate,
      coverImage: URL.createObjectURL(coverImage),
    };
    addBook(newBook);
    setName('');
    setAuthor('');
    setReleaseDate('');
    setCoverImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Book Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Book Name" required />
      </div>
      <div className="form-group">
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      </div>
      <div className="form-group">
        <label>Release Date:</label>
        <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="coverImage">Cover Image:</label>
        <input id="coverImage" type="file" onChange={(e) => setCoverImage(e.target.files[0])} accept="image/*" required />
      </div>
      <button type="submit" className="add-book-button">Add Book</button>
    </form>
  );
};

export default BookForm;
