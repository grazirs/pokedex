import React, { useState } from "react";

const SearchBar = ({ onSearchHandler }) => {
  const [search, setSearch] = useState("ditto");

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      onSearchHandler(undefined);
    }
  };

  const onClickHandler = () => {
    onSearchHandler(search);
  };

  return (
    <>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickHandler}>Search</button>
    </>
  );
};

export default SearchBar;
