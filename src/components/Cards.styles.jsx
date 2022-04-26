import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Pokedex = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${themeGet("space.sm")};
`;
