import React, { useState } from "react";
import { Input, Button, SearchContainer } from "./SearchBar.styles";
import { Text } from "./Text.styles";

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
    <SearchContainer>
      <Text variant="title">Search your favorite pokémon</Text>
      <Input type="text" onChange={onChangeHandler} />
      <Button onClick={onClickHandler}>Search</Button>
    </SearchContainer>
  );
};

export default SearchBar;
