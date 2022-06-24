import { Text } from "./Text.styles";
import { CardContent, ImgCard } from "./Card.styles";
import { FiLoader } from "react-icons/fi";
import { getPokemonData } from "../loadData";
import { useEffect, useState } from "react";
import { Pokemon } from "../pokemon";

const Card = ({ initialPokemonData, openModal }) => {
  
  const [pokemon, setPokemon] = useState(initialPokemonData);

  const fetchDetails = async () => {
    const details = await getPokemonData(pokemon.url);
    const types = details.types.map((type) => type.type.name);
    setPokemon(new Pokemon(pokemon.id, pokemon.name, types, details.sprites.other.dream_world.front_default));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <CardContent data-testid="card" onClick={() => openModal(pokemon)}>
        {pokemon.image ? (
          <ImgCard src={pokemon.image} alt={pokemon.name} />
        ) : (
          <FiLoader />
        )}

        <div>
          <Text variant="subtitle">#{pokemon.id}</Text>
          <Text variant="title"> {pokemon.name}</Text>
          <>
            {pokemon.types.map((type, index) => {
              return (
                <Text variant="text" key={index}>
                  Type: {type}
                </Text>
              );
            })}
          </>
        </div>
      </CardContent>
    </>
  );
};

export default Card;
