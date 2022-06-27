import { Text } from "./Text.styles";
import { CardContent, ImgCard } from "./Card.styles";
import { FiLoader } from "react-icons/fi";
import { getPokemonData } from "../loadData";
import { useEffect, useState } from "react";
import { Pokemon, PokemonStat } from "../pokemon";

const Card = ({ initialPokemonData, openModal }) => {
  const [pokemon, setPokemon] = useState(initialPokemonData);
  const fetchDetails = async () => {
    const details = await getPokemonData(pokemon.url);

    const types = details.types.map((type) => type.type.name);
    const abilities = details.abilities.map((ability) => ability.ability.name);
    const heldItems = details.held_items.map((item) => item.item.name);
    const stats = details.stats.map((stat) => new PokemonStat(stat.stat.name, stat.base_stat));
    setPokemon(
      new Pokemon(
        details.id,
        details.name,
        types,
        details.sprites.other.dream_world.front_default,
        pokemon.url,
        [details.sprites.front_default, details.sprites.back_default],
        [details.sprites.front_shiny, details.sprites.back_shiny],
        details.weight,
        details.height,
        details.base_experience,
        abilities,
        heldItems,
        stats,
      )
    );
  };

  useEffect(() => {
    if(!pokemon.image) fetchDetails();
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
