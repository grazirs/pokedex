import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Select = styled.select`
width: 280px;
height: 42px;
border-radius: ${themeGet("radii.sm")};
border: solid 2px ${themeGet("colors.darkBlue")};
outline: none;
padding: ${themeGet("space.none")} ${themeGet("space.xsm")};
font-size: ${themeGet("fontSizes.text")};
margin: ${themeGet("space.sm")};
background-color: ${themeGet("colors.white")}; 
cursor: pointer;

`;

export const Option = styled.option`
  margin: ${themeGet("space.sm")};
  width: 90px;
`;
