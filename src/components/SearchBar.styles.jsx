import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Input = styled.input`
width: 350px;
height: 38px;
border-radius: ${themeGet("radii.sm")} 0 0 ${themeGet("radii.sm")};
border: solid 2px ${themeGet("colors.darkBlue")};
outline: none;
padding: ${themeGet("space.none")} ${themeGet("space.xsm")};
font-size: ${themeGet("fontSizes.text")};
margin-left: ${themeGet("space.sm")};
`;

export const Button = styled.button`
width: 100px;
height: 42px;
border-radius: 0 ${themeGet("radii.sm")} ${themeGet("radii.sm")} 0;
border: solid 2px ${themeGet("colors.darkBlue")};
background-color:${themeGet("colors.darkBlue")};
color:${themeGet("colors.white")};
font-size: ${themeGet("fontSizes.textButton")};
right:775px;
`;

export const SearchContainer = styled.div`
display:flex;
justify-content: center;
margin: ${themeGet("space.sm")};
`;

