import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesComponent from "./routes";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RoutesComponent />
    </ThemeProvider>
  </React.StrictMode>,
);
