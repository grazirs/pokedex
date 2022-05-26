import { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const GlobalStyle = createGlobalStyle`
  * {
    margin: ${themeGet("space.none")};
    padding: ${themeGet("space.none")};
  }
  body {
    background-color: ${themeGet("colors.mainBackgroundColor")}; 
    font-family: ${themeGet("font.body")};
    color: ${themeGet("colors.textColor")}; 
  }
`;
export default GlobalStyle;
