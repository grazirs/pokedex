import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const CardContent = styled.div`
  display: flex;
  height: 200px;
  border: solid 1px ${themeGet("colors.darkGrey")};
  justify-content: center;
  align-items: center;
  border-radius: ${themeGet("radii.sm")};
  background-color: ${themeGet("colors.secondaryBackgroundColor")}; 
  padding: ${themeGet("space.xsm")};
  color: ${themeGet("colors.textColor")}; 
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.05)
  }
`;

export const ImgCard = styled.img`
  margin: ${themeGet("space.sm")};
  width: 90px;
  @media (min-width: ${themeGet("screenSizes.mobileS")}) and (max-width: ${themeGet("screenSizes.mobileL")}) {
    margin-right:${themeGet("space.lg")};
  }
`;
