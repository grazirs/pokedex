import { variant } from "styled-system";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Text = styled.p`
  color: ${themeGet("colors.textColor")}; 
  font-family: ${themeGet("fonts.mainFont")};
  font-weight: ${themeGet("fontWeight.semiBold")};
  padding: calc(${themeGet("space.xsm")}/5);
  text-transform: capitalize; 
  @media (min-width: ${themeGet("screenSizes.mobileS")}) and (max-width: ${themeGet("screenSizes.mobileL")}) {
    font-size: ${themeGet("fontSizes.text")};
  }

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
      textUnit: {
        fontSize: "text",
        fontWeight: "regular",
        textTransform: "lowercase",
      }
    },
  })};
`;
