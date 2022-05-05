import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonData, searchPokemons } from "./loadData";
import theme from "./theme";
import { Text } from "./components/Text.styles";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import SearchBar from "./components/SearchBar";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
      setNotFound(false);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setIsLoading(false);
    } catch (error) {
      console.log("requesting error", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setIsLoading(true);
    setNotFound(false);
    const result = await searchPokemons(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
    }
    setIsLoading(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Text variant="title">Pokédex</Text>
        <SearchBar onSearchHandler={onSearchHandler} />
        {notFound ? (
          <h3>Pokémon not found, try again </h3>
        ) : (
          <Cards pokemons={pokemons} isLoading={isLoading} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
