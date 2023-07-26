function SearchBar({ onSubmit }) {
    const handleClick = () => {
        onSubmit('cars')
    };

    return (
        <div>
            <input />
            <button onClick={handleClick}>Search</button>
        </div>
        
    )
};

export default SearchBar;