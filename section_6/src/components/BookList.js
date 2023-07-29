import { useContext } from 'react';
import BooksContext from '../context/Books';
import BookShow from "./BookShow";

function BookList ({books, onDelete, onEdit}) {
    const value =  useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return <BookShow  onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    })

    console.log(renderedBooks);

    return (
        <div className="book-List">
            {value}
            {renderedBooks}
        </div>
    )
}

export default BookList;