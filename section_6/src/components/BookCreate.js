import { useState, useContext } from 'react';
import BooksContext from '../context/Books';

function BookCreate () {
    const [title, setTitle] = useState('');
    const { handleCreateBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateBook\(title);
        //make input reset for next  
        setTitle('');
    }

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' value={title} onChange={handleChange}/>
                <button className='button' >Create!</button>
            </form>
        </div>
        
    )
}

export default BookCreate;