function Searchbar({ search, setsearch }) {
    return (
        <input
        type="text"
        placeholder="Search projects"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        />
    );
}

export default Searchbar;