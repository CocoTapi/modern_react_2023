import { useEffect, useContext } from 'react';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from './context/Books';


function App () {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);


    // const [books, setBooks] = useState([]);

    // const fetchBooks = async () => {
    //     const response = await axios.get('http://localhost:3001/books');

    //     setBooks(response.data);
    // }

    //Don't call fetchBooks() here because it'll be in the infinite loop

    // const editBookById = async (id, newTitle) => {
    //     const response = await axios.put(`http://localhost:3001/books/${id}`, {
    //         title: newTitle
    //     })

    //     const updatedBooks = books.map((book) => {
    //         if (book.id === id) {
    //             return {...book, ...response.data};
    //         }
    //         return book
    //     })
    //     setBooks(updatedBooks);
    // }

    // const deleteBookById = async (id) => {
    //     await axios.delete(`http://localhost:3001/books/${id}`);

    //     const updatedBooks = books.filter((book) => {
    //         return book.id !== id;
    //     })
    //     setBooks(updatedBooks);
    // }

    // const handleCreateBook = async (title) => {
    //     const response = await axios.post('http://localhost:3001/books', {
    //         title
    //     });

    //     const updatedBooks = [
    //         ...books, response.data
    //     ] ;
    //     setBooks(updatedBooks);
    // }

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList  />
            <BookCreate />
        </div>
    )
}

export default App;