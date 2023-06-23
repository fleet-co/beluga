import { useState } from "react";
import Button from "@mui/material/Button";
import Header from "../../components/Header";
import SelectBlockDialog from "../../components/SelectBlockDialog";
import { BlockData } from "../../blocks";

const App = () => {
  const [blocks, setBlocks] = useState<any>([]);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleClose = (value: BlockData | undefined) => {
    setDialogOpen(false);
    if (value) {
      addBlock(value);
    }
  };

  const addBlock = (block: BlockData) => {
    console.log(block)
    setBlocks([...blocks, block.component]);
  }
  return (
    <>
      Bonjour jeune site builder
      <Button variant="contained" onClick={() => setBlocks([...blocks, <Header />])}>Ne pas cliquer</Button>
      <Button variant="contained" onClick={() => setDialogOpen(true)}>Choisir un block</Button>
      <SelectBlockDialog
        open={isDialogOpen}
        onClose={handleClose}
      />
      {blocks}
    </>
  );
};

export default App;