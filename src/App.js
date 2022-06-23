import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonData, searchPokemons, loadPokemonsTypes, filterPokemonsByType } from "./loadData";
import themes from "./theme";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import SearchBar from "./components/SearchBar";
import Toggle from "./components/Toggle";
import Logo from "./components/Logo";
import { Text } from "./components/Text.styles";
import SelectByType from "./components/SelectByType";
import { Container } from "./components/Container.styles";
import PokemonDetails from "./components/PokemonDetails";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0)
  const ITENS_PER_PAGE = 24;
  const { currentTheme, switchTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [pokemonsTypes, setPokemonsTypes] = useState([]);
  const [evolution, setEvolution] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
      setNotFound(false);
      const data = await getPokemons(ITENS_PER_PAGE, ITENS_PER_PAGE * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setIsLoading(false);
      setTotalPages(Math.ceil(data.count / ITENS_PER_PAGE));
    } catch (error) {
      console.log("requesting error", error);
    }
  };

  const fetchPokemonsByType = async () => {
    try {
      const dataType = await loadPokemonsTypes();
      const promiseType = dataType.results.map(async (type) => {
        return await type.name
      });
      const resultsType = await Promise.all(promiseType);
      setPokemonsTypes(resultsType);;
    } catch (error) {
      console.log("requesting error", error);
    }
  }

  useEffect(() => {
    fetchPokemons();
    fetchPokemonsByType();
  }, [page]);

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

  const onSelectHandler = async (type) => {
    setIsLoading(true);
    setNotFound(false);
    const result = await filterPokemonsByType(type);
    if (!result) {
      setNotFound(true);
    } else {
      const sanitizedResult = result.pokemon.map((element) => element.pokemon)
      const promises = sanitizedResult.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const enrichedResult = await Promise.all(promises);
      setPokemons(enrichedResult);
    }
    setIsLoading(false);
  }

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Logo />
        <Toggle switchTheme={switchTheme} currentTheme={currentTheme} />
        <Container>
          <Text variant="subtitle">Select the pokémons by type: </Text>
          <SelectByType onSelectHandler={onSelectHandler} pokemonsTypes={pokemonsTypes} />
          <Text variant="subtitle">or Search your favorite pokémon by name or id: </Text>
          <SearchBar onSearchHandler={onSearchHandler} search={search} setSearch={setSearch} />
        </Container>
        {notFound ? (
          <Text variant="subtitle">Pokémon not found, try again </Text>
        ) : (
          <>
            <Cards pokemons={pokemons} isLoading={isLoading} page={page} setPage={setPage} totalPages={totalPages} openModal={openModal}/>
            { isOpen &&  <PokemonDetails pokemon={selectedPokemon} closeModal={closeModal} isOpen={isOpen}/>} 
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
