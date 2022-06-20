import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: 'auto-fit',
    borderRadius: '8px',
    border: 'none',
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'column',
    backgroundColor:'rgba(128, 128, 128, .3)',
  }
}

export const ImgModal = styled.img`
  width: 150px;
  margin-top: ${themeGet("space.sm")};
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonCloseDetails = styled.button`
  position: absolute;
  right: 30px;
  top: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: ${themeGet("colors.mainBackgroundColor")};
  padding: ${themeGet("space.lg")};
  border-radius:  ${themeGet("radii.sm")};
  position: relative;
`

export const IdContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 30px;
  background-color: ${themeGet("colors.idBackgroundColor")};
  border-radius: 50%;
  padding:${themeGet("space.xsm")};
`
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding:${themeGet("space.xsm")};
`

export const ColumnDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding:${themeGet("space.xsm")};
`
export const BarContainer = styled.div`
  display: flex;
  padding:${themeGet("space.xsm")};
  progress[value]{
    width: 400px;
    height: 40px;
    margin-left:calc(${themeGet("space.xsm")}*10);
    margin-right: ${themeGet("space.sm")};
  }
`

export const ImagesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: ${themeGet("space.lg")};
`