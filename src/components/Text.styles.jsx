import { variant } from "styled-system";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Text = styled.p`
  color: ${themeGet("colors.textColor")}; 
  font-family: ${themeGet("fonts.mainFont")};
  font-weight: ${themeGet("fontWeights.bold")};
  ${variant({
    variants: {
      title: {
        fontSize: "title",
      },
      subtitle: {
        fontSize: "subtitle",
      },
      text: {
        fontSize: "text",
        fontWeight: "regular",
      },
      textButton: {
        fontSize: "textButton",
      },
    },
  })};
`;
