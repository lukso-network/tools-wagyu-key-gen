import { createTheme } from "@mui/material";
import { amber, blue } from "@mui/material/colors";
import { Pink, Primary } from "./colors";



const theme = createTheme({
  palette: {
    mode: "light",
    primary: Primary,
    secondary: blue,
    background: {
      paper: Pink,
      default: Pink
    }
  },
  typography: {
    h1: {
      fontSize: "2.25rem"
    }
  }
});


export default theme;
