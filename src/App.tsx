import "./App.css";
import Builder from "./builder/views/Builder";
import belugaLogo from "./assets/beluga_logo.png";
import "./App.css";
import ListPages from "./components/ListPages";

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
        <Builder />
      </div>

    </>
  );
};

export default App;
