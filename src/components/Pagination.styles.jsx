import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const PaginationContainer = styled.div`
display: flex;
justify-content: right;
align-items: center;
margin: ${themeGet("space.lg")};
`;

export const PaginationBtn = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
`;