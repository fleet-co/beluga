import "./App.css";
import belugaLogo from "./assets/beluga_logo.png";
import "./App.css";
import ListPages from "./components/ListPages";
import { Button } from "@mui/material";
import Page from "./components/Page";

const App = () => {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <div>
        <img src={belugaLogo} />
        <h1>Welcome to Beluga</h1>
      </div>

      <div className="section">
        <ListPages />
        <Button variant="contained" href="/builder/new">Create a website</Button>
      </div>
      <Page />
    </>
  );
};

export default App;
