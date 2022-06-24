import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import {
  getPokemons,
  searchPokemon,
  loadPokemonsTypes,
  filterPokemonsByType,
} from "./loadData";
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
import { Pokemon, PokemonStat } from "./pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
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
      const results = data.results.map((element)=> new Pokemon(
        null,
        element.name,
        [],
        null,
        element.url
      ));
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
        return await type.name;
      });
      const resultsType = await Promise.all(promiseType);
      setPokemonsTypes(resultsType);
    } catch (error) {
      console.log("requesting error", error);
    }
  };

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
    const result = await searchPokemon(pokemon);

    const types = result.types.map((type) => type.type.name);
    const abilities = result.abilities.map((ability) => ability.ability.name);
    const heldItems = result.held_items.map((item) => item.item.name);
    const stats = result.stats.map((stat) => new PokemonStat(stat.stat.name, stat.base_stat));
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([new Pokemon(
        result.id,
        result.name,
        types,
        result.sprites.other.dream_world.front_default,
        pokemon.url,
        [result.sprites.front_default, result.sprites.back_default],
        [result.sprites.front_shiny, result.sprites.back_shiny],
        result.weight,
        result.height,
        result.base_experience,
        abilities,
        heldItems,
        stats,
      )]);
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

      const results = result.pokemon.map((element)=> new Pokemon(
        null,
        element.pokemon.name,
        [],
        null,
        element.pokemon.url
      ));

      setPokemons(results);
    }
    setIsLoading(false);
  };

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Logo />
        <Toggle switchTheme={switchTheme} currentTheme={currentTheme} />
        <Container>
          <Text variant="subtitle">Select the pokémons by type: </Text>
          <SelectByType
            onSelectHandler={onSelectHandler}
            pokemonsTypes={pokemonsTypes}
          />
          <Text variant="subtitle">
            or Search your favorite pokémon by name or id:{" "}
          </Text>
          <SearchBar
            onSearchHandler={onSearchHandler}
            search={search}
            setSearch={setSearch}
          />
        </Container>
        {notFound ? (
          <Text variant="subtitle">Pokémon not found, try again </Text>
        ) : (
          <>
            <Cards
              pokemons={pokemons}
              isLoading={isLoading}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              openModal={openModal}
            />
            {isOpen && (
              <PokemonDetails
                pokemon={selectedPokemon}
                closeModal={closeModal}
                isOpen={isOpen}
              />
            )}
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
