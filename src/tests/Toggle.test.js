import {
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle from "../components/Toggle";

describe("<Toggle/>", () => {
  const switchTheme = jest.fn(() => {});
  const setup = () => {
    const currentTheme = "light";
    render(<Toggle switchTheme={switchTheme} currentTheme={currentTheme} />);
  };

  it("should call switchTheme when toggle is clicked", () => {
    setup();
    const toggle = screen.getByTestId("toggle");
    userEvent.click(toggle);
    expect(switchTheme).toHaveBeenCalled();
  });
});
