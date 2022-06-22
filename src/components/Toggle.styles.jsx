import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const ToggleBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 60px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width:${themeGet("screenSizes.laptop")}) {
    right: 20px;
  }
`;