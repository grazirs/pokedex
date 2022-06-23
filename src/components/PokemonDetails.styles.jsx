import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

export const ImgModal = styled.img`
  width: 150px;
  margin-top: ${themeGet("space.sm")};
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${themeGet("screenSizes.mobileL")}) {
    margin: ${themeGet("space.sm")} ${themeGet("space.lg")};
  }
`;

export const ButtonCloseDetails = styled.button`
  position: absolute;
  right: 30px;
  top: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: ${themeGet("screenSizes.tablet")}) {
    top: 50px;
  }
  @media (min-width: ${themeGet("screenSizes.mobileS")}) and (max-width: ${themeGet("screenSizes.mobileL")}) {
    top: 160px;
  }
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: ${themeGet("colors.mainBackgroundColor")};
  padding: ${themeGet("space.lg")};
  border-radius: ${themeGet("radii.sm")};
  position: relative;
  @media (min-width: ${themeGet("screenSizes.mobileS")}) and (max-width: ${themeGet("screenSizes.mobileL")}) {
    padding-top: 170px;
  }
`;

export const IdContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 30px;
  background-color: ${themeGet("colors.idBackgroundColor")};
  border-radius: 50%;
  padding: ${themeGet("space.xsm")};
  @media (max-width: ${themeGet("screenSizes.tablet")}) {
    top: 50px;
  }
  @media (min-width: ${themeGet("screenSizes.mobileS")}) and (max-width: ${themeGet("screenSizes.mobileL")}) {
    top: 160px;
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ColumnDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${themeGet("space.xsm")};
  width: 150px;
  @media (max-width: ${themeGet("screenSizes.mobileL")}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ResponsiveDetail = styled.div`
  display: flex;
  @media (max-width: ${themeGet("screenSizes.mobileL")}) {
    display: flex;
    flex-direction: column;
  }
`;

export const BarContainer = styled.div`
  display: flex;
  padding: ${themeGet("space.xsm")};
  justify-content: space-between;
  align-items: center;
  progress[value] {
    width: 400px;
    height: 40px;
  }
  @media (max-width: ${themeGet("screenSizes.laptop")}) {
    progress[value] {
      margin: 0;
      margin-right: ${themeGet("space.sm")};
    }
  }
`;

export const ImagesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: ${themeGet("space.lg")};
`;
