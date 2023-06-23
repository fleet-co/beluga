import { useState } from "react";
import Button from "@mui/material/Button";
import Header from "../../components/Header";

const App = () => {
  const [blocks, setBlocks] = useState<any>([]);

  return (
    <>
      Bonjour jeune site builder
      <Button variant="contained" onClick={() => setBlocks([...blocks, <Header />])}>Ne pas cliquer</Button>
      {blocks}
    </>
  );
};

export default App;