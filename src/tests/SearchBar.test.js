import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

describe("<SearchBar/>", () => {
  const setup = () => {
    const onSearchHandler = () => { };
    const setSearch = jest.fn(() => { })
    const search = {
      name: "eevee"
    }
    render(<SearchBar onSearchHandler={onSearchHandler} setSearch={setSearch} search={search} />);
    return { search };
  }

  it("should render an searchBox field", () => {
    setup();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  })

  it("should render the placeholder", () => {
    setup();
    expect(screen.getByPlaceholderText(/please enter name or pokémon id/i)).toBeInTheDocument();
  })

  it('should render a button', () => {
    setup();
    const button = screen.getByRole('button', { name: /search/i })
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  })

  describe("when user writes a pokemon name or id", () => {
    it("should update on change", () => {
      const { search } = setup();
      const searchPokemon = screen.getByRole('searchbox')
      fireEvent.change(searchPokemon, { target: { value: search.name } });
      expect(searchPokemon.value).toBe(search.name)
    })
  });
});
