import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectByType from "../components/SelectByType";

describe("<SelectByType/>", () => {
  const setup = () => {
    const results = [
      "normal", "water"
    ]
    render(<SelectByType pokemonsTypes={results}/>);
    return { results }
  };

  it("should render the select field", () => {
    setup();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  })

  it('should correctly set default option', () => {
    setup()
    expect(screen.getByRole('option', {name: 'Select a type'}).selected).toBe(true)
  })

  it('should display the correct number of options', () => {
    setup()
    expect(screen.getAllByRole('option').length).toBe(3)
  })

  describe("when user chooses a type", () => {
    it("renders the chosen type", () => {
      setup();
      const selectType = screen.getByRole('option', { name: /select a type/i });
      userEvent.click(selectType);
      const chosenType = screen.getByRole('option', { name: /normal/i });
      userEvent.click(chosenType);
      expect(chosenType).toBeInTheDocument();
    })
  });
});