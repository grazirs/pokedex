import Card from "./Card";
import { Pokedex } from "./Cards.styles";

const Cards = ({ pokemons, isLoading }) => {
  return (
    <Pokedex>
      {isLoading ? (
        <h2>The Pokémons are being loaded</h2>
      ) : (
        <>
          {pokemons &&
            pokemons.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
        </>
      )}
    </Pokedex>
  );
};
export default Cards;
