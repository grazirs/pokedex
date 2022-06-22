import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${themeGet("space.xsm")};
  @media (max-width:  ${themeGet("screenSizes.laptop")}) {
    flex-direction: column;
    margin: ${themeGet("space.lg")};
  }
`;
