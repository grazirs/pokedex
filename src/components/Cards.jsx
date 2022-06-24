import Card from "./Card";
import { Pokedex } from "./Cards.styles";
import Pagination from "./Pagination";
import { FiLoader } from "react-icons/fi";
import { Text } from "./Text.styles";

const Cards = ({ pokemons, isLoading, page, totalPages, setPage, openModal }) => {
  const onBeforeClickHandler = () => {
    if(page > 0) return setPage(page - 1)
  }
  const onNextClickHandler = () => {
    if(page + 1 !== totalPages) return setPage(page + 1)
  }
  return (
    <>
      <Pagination 
        page={page + 1} 
        totalPages={totalPages} 
        onBeforeClick={onBeforeClickHandler} 
        onNextClick={onNextClickHandler} 
        setPage={setPage} />
      <Pokedex>
        {isLoading ? (
          <Text>The Pokémons are being loaded <FiLoader/></Text>
        ) : (
          <>
            {pokemons &&
              pokemons.map((pokemon) => (
                <Card key={pokemon.name} initialPokemonData={pokemon} openModal={openModal}/>
              ))}
          </>
        )}
      </Pokedex>
    </>
  );
};
export default Cards;
