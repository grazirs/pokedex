const colors = {
  darkRed: "#cc0000",
  lightGrey: "#f3f3f3",
  darkGrey: "#a9a9a9",
  purple: "#5e6ec9",
  darkBlue: "#1161c9",
  grey: "#c5c5c5",
  black: "#242428",
  white: "#fbfbfb",
  yellow: "#ffff00",
};

const font = {
  body: "Nunito",
};

const space = {
  none: "0px",
  xsm: "10px",
  sm: "20px",
  lg: "40px",
};

const fontSizes = {
  title: "30px",
  subtitle: "20px",
  text: "18px",
  textButton: "14px",
};

const fontWeight = {
  regular: "400",
  semiBold: "600",
  bold:"700",
};
const radii = {
  sm: "8px",
  md: "20px",
  lg: "50px",
};

const theme = {
  colors,
  font,
  space,
  fontSizes,
  fontWeight,
  radii,
};

const themes = {
  light: {
    ...theme,
    colors: {
      ...theme.colors,
      mainBackgroundColor: '#f4f4f4', 
      secondaryBackgroundColor: '#f9f9f9',
      textColor: '#222',
      idBackgroundColor: '#c7ebf2',
    }
  },
  dark: {
    ...theme,
    colors: {
      ...theme.colors,
      mainBackgroundColor: '#222',
      secondaryBackgroundColor: '#555',
      textColor: '#f9f9f9',
      idBackgroundColor: '#1161c9',
    }
  }
}

export default themes;
