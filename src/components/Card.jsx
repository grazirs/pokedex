import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Text } from "./Text";

const CardContent = styled.div`
  display: flex;
  height: 200px;
  border: solid 1px ${themeGet("colors.darkGrey")};
  justify-content: center;
  align-items: center;
  border-radius: ${themeGet("radii.sm")};
  background-color: ${themeGet("colors.white")};
  padding: ${themeGet("space.xsm")};
`;

const Img = styled.img`
  margin: ${themeGet("space.sm")};
  width: 90px;
`;

const Card = ({ pokemon }) => {
  return (
    <CardContent>
      <Img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <div>
      <Text variant="subtitle">#{pokemon.id}</Text>
      <Text variant="title"> {pokemon.name}</Text>
      <>
        {pokemon.types.map((type, index) => {
          return (
            <Text variant="text" key={index}>
              Type:{type.type.name}{" "}
            </Text>
          );
        })}
      </>
      </div>
    </CardContent>
  );
};

export default Card;
