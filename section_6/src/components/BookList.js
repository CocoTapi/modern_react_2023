import BookShow from "./BookShow";

function BookList ({books, onDelete}) {
    const renderedBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} key={book.id} book={book} />
    })

    console.log(renderedBooks);

    return (
        <div className="book-List">
            {renderedBooks}
        </div>
    )
}

export default BookList;