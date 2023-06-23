import { useState } from "react";
import Button from "@mui/material/Button";
import Header from "../../components/Header";
import SelectBlockDialog from "../../components/SelectBlockDialog";

function Builder() {
  const [blocks, setBlocks] = useState<any>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      Bonjour jeune site builder
      <Button variant="contained" onClick={() => setBlocks([...blocks, <Header />])}>Ne pas cliquer</Button>
      <Button variant="contained" onClick={() => setDialogOpen(true)}>Choisir un block</Button>
      <SelectBlockDialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
      />
      {blocks}
    </>
  )
}

export default Builder
