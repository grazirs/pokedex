import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const CardContent = styled.div`
  display: flex;
  height: 200px;
  border: solid 1px ${themeGet("colors.darkGrey")};
  justify-content: center;
  align-items: center;
  border-radius: ${themeGet("radii.sm")};
  background-color: ${themeGet("colors.white")};
  padding: ${themeGet("space.xsm")};
`;

export const Img = styled.img`
  margin: ${themeGet("space.sm")};
  width: 90px;
`;
