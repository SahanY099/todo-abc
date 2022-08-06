import { createTheme } from "@mui/material/styles";
// import red

// Create a theme instance.
// const theme = createTheme({});

const theme = createTheme({
  mode: "dark",
  palette: {
    primary: {
      main: "#cacde8",
    },
    background: {
      paper: "#25273c",
      background: "#161722",
      default: "#161722",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Josefin Sans, sans-serif",
    body1: {
      fontSize: "1.2rem",
    },
  },
});

export default theme;
