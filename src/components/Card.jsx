import { Text } from "./Text.styles";
import { CardContent, ImgCard } from "./Card.styles";

const Card = ({ pokemon, openModal }) => {
  return (
    <>
      <CardContent data-testid="card" onClick={()=> openModal(pokemon)}>
        <ImgCard
          src={pokemon.image}
          alt={pokemon.name}
        />
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
