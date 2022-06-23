import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Pokedex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: ${themeGet("space.sm")};
  margin: ${themeGet("space.lg")};
  @media (max-width:${themeGet("screenSizes.laptop")}) {
    margin: ${themeGet("space.sm")};
  }
  @media (min-width: ${themeGet("screenSizes.mobileL")}) and (max-width: ${themeGet("screenSizes.tablet")}) {
    gap: ${themeGet("space.lg")};
  }
`;
