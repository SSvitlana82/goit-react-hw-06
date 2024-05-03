import style from "./SearchBox.module.css";

const SearchBox = ({ filterContact, setFilterContact }) => {
  const filter = (event) => {
    setFilterContact(event.target.value);
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        onInput={filter}
        value={filterContact}
        className={style.searchField}
      />
    </div>
  );
};

export default SearchBox;
