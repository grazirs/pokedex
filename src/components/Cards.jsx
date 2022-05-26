import Card from "./Card";
import { Pokedex } from "./Cards.styles";
import Pagination from "./Pagination";
import { FiLoader } from "react-icons/fi";

const Cards = ({ pokemons, isLoading, page, totalPages, setPage }) => {
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
          <h3>The Pokémons are being loaded <FiLoader/></h3>
        ) : (
          <>
            {pokemons &&
              pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
              ))}
          </>
        )}
      </Pokedex>
    </>
  );
};
export default Cards;
