import { useContext } from 'react';
import BooksContext from '../context/Books';
import BookShow from "./BookShow";

function BookList ({books, onDelete, onEdit}) {

    const renderedBooks = books.map((book) => {
        return <BookShow  onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    })

    return (
        <div className="book-List">
            {renderedBooks}
        </div>
    )
}

export default BookList;