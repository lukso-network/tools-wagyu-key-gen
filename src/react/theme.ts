import { createTheme } from "@mui/material";
import { amber, blue } from "@mui/material/colors";
import { Pink, Primary, Secondary } from "./colors";



const theme = createTheme({
  palette: {
    mode: "light",
    primary: Primary,
    secondary: Secondary,
    background: {
      paper: Pink,
      default: Pink
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: "2.25rem",
    },
    button: {
      letterSpacing: '0.05em',
      fontStretch: '115%',
    }
  }
});


export default theme;
