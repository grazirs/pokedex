import { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const GlobalStyle = createGlobalStyle`
  * {
    margin: ${themeGet("space.none")};
    padding: ${themeGet("space.none")};
  }
  body {
    background-color: ${themeGet("colors.lightGrey")};
    font-family: ${themeGet("font.body")};
  }
`;
export default GlobalStyle;
