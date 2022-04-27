import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("<Card/>", () => {
  const setup = () => {
    const cardDetails = {
      id: '1',
      name: 'Bulbasaur', 
      types: [{
        type: {
          name: "grass"
        }
      }], 
      sprites: {
        other: {
          dream_world: {
            front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          }
        }
      }
    };
    render(<Card  pokemon={cardDetails}/> );
    return { cardDetails };
  }

  it("should render cards on the screen", () => {
    setup();
    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument();
  })

  it('should render a card with data details', () => {
    const { cardDetails } = setup();
    const pokemonImg = screen.getByRole('img', { name: /bulbasaur/i });
    const pokemonId = screen.getByText(`#${cardDetails.id}`);
    const pokemonName = screen.getByText(cardDetails.name);
    const pokemonType = screen.getByText(`Type: ${cardDetails.types[0].type.name}`);
    expect(pokemonImg).toBeInTheDocument();
    expect(pokemonId).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
  })
});





