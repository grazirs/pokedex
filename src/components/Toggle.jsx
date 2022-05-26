import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ToggleBtn } from "./Toggle.styles";

const Toggle = ({currentTheme, switchTheme}) => {
  return (
    <ToggleBtn onClick={switchTheme}>{currentTheme === 'light' ? <MdDarkMode color="blue" size="2rem"/> : <MdOutlineLightMode color="yellow" size="2rem"/>}</ToggleBtn>
  )
}

export default Toggle