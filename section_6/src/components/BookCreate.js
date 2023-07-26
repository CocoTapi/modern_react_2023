import { useState } from 'react';

function BookCreate ({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        //make input reset for next  
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input  value={title} onChange={handleChange}/>
            <button>Create!</button>
        </form>
    )
}

export default BookCreate;