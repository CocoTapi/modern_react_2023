import { useState } from 'react';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App () {
    const [books, setBooks] = useState([]);

    const handleCreateBook = (title) => {
        console.log('Need to create', title)
        setBooks([...books, title]);
    }

    return (
        <div>
            <BookList />
            <BookCreate onCreate={handleCreateBook} />
        </div>
    )
}

export default App;