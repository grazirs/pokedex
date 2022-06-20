import { Input, Button, SearchContainer } from "./SearchBar.styles";

const SearchBar = ({ onSearchHandler, search, setSearch }) => {
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
      <Input type="search" onChange={onChangeHandler} placeholder="Please enter name or pokémon ID"/>
      <Button onClick={onClickHandler}>Search</Button>
    </SearchContainer>
  );
};

export default SearchBar;
