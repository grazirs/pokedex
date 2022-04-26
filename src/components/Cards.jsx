import Card from "./Card";

const Cards = ({ pokemons, isLoading }) => {
  return (
    <>
      <div>
        {isLoading ? (
          <h2>The Pokémons are being loaded</h2>
        ) : (
          <div>
            {pokemons &&
              pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Cards;
