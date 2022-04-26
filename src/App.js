import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonData } from "./loadData";
import theme from "./theme";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Pokédex</h1>
        <Cards pokemons={pokemons} isLoading={isLoading} />
      </ThemeProvider>
    </>
  );
}

export default App;
