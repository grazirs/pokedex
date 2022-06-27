import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import { Pokemon } from "../pokemon";
import { mockPokemons } from "./mock_data/mockPokemons";
import * as loadDataModule from "../loadData";

describe("<Card/>", () => {
  const setup = () => {
    const pokemon = new Pokemon(
      1,
      "bulbasaur",
      [],
      null,
      "https://pokeapi.co/api/v2/pokemon/bulbasaur"
      );
    render(<Card initialPokemonData={pokemon} />);
    return pokemon;
  }

  it("should render cards on the screen", () => {
    setup();
    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument();
  })

  it('should render a card with initial pokemon details', () => {
    const pokemon  = setup();
    jest.spyOn(loadDataModule, "getPokemonData").mockImplementation(async (url) => {
      console.log(url)
    })
    const pokemonId = screen.getByText(`#${pokemon.id}`);
    const pokemonName = screen.getByText(pokemon.name);
    expect(pokemonId).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
  })
});
