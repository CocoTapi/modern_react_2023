import SearchBar from "./components/SearchBar";

function App () {
    const handleSubmit = (term) => {
        console.log('Do a sesrch with', term);
    }

    return (
        <SearchBar onSubmit={handleSubmit}></SearchBar>
    )
};

export default App;