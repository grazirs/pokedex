import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ToggleBtn } from "./Toggle.styles";

const Toggle = ({ currentTheme, switchTheme }) => {
  return (
    <ToggleBtn onClick={switchTheme} data-testid="toggle">{currentTheme === 'light' ? <MdDarkMode data-testid="darkIcon" color="blue" size="2rem" /> : <MdOutlineLightMode data-testid="lightIcon" color="yellow" size="2rem" />}</ToggleBtn>
  )
}

export default Toggle