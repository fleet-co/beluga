import { createTheme } from "@mui/material/styles";
import { orange, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
    success: {
      main: green[500],
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  components: {
    MuiButton: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiTimelineDot: {
      defaultProps: {
        variant: "outlined",
        color: "success",
      },
    },
  },
});

export default theme;
