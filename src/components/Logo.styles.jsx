import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${themeGet("space.sm")};;
`;

export const LogoImg = styled.img`
  width: 20vw;
`;
