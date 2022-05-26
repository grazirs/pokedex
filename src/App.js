import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonData, searchPokemons } from "./loadData";
import themes from "./theme";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import SearchBar from "./components/SearchBar";
import Toggle from "./components/Toggle";
import Logo from "./components/Logo";

const useTheme = () => {
  const localStorageTheme = () => {
    const theme = localStorage.getItem('body');
      return theme ? theme : 'light';
  }
  const [currentTheme, setCurrentTheme] = useState(localStorageTheme());

  useEffect(() => {
    localStorage.setItem('body', currentTheme);
  },[currentTheme]);

  const switchTheme = () => {
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme
    ('light')
  }
  return { currentTheme, switchTheme }
}

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const { currentTheme, switchTheme } = useTheme();

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
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Logo/>
        <Toggle switchTheme={switchTheme} currentTheme={currentTheme} />
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
