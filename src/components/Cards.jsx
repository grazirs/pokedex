import Card from "./Card";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const Pokedex = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${themeGet("space.sm")};
`;

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
