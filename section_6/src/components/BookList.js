import BookShow from "./BookShow";
import useBooksContext from '../hooks/use-books-context';

// function useBooksContext() {
//     return useContext(BooksContext);
// }

function BookList () {
    const { books } = useBooksContext();

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    })

    return (
        <div className="book-List">
            {renderedBooks}
        </div>
    )
}

export default BookList;