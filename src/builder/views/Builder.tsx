import React, { useState } from "react";
import Button from "@mui/material/Button";
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import SelectBlockDialog from "../../components/SelectBlockDialog";
import { BlockData } from "../../blocks";
import "./Builder.css"

function Builder() {
  const [blocks, setBlocks] = useState<any>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleClose = (value: BlockData | undefined) => {
    setDialogOpen(false);
    if (value) {
      addBlock(value);
    }
  };

  const addBlock = (block: BlockData) => {
    console.log(block)
    setBlocks([...blocks, React.createElement(block.component)]);
  }
  return (
    <>
      <div className="toolBar">
        Bonjour jeune site builder
        <TextField id="standard-basic" label="Titre" variant="standard" onChange={(e: any) => setTitle(e.target.value)} />
        <TextField id="standard-basic" label="Description" variant="standard" onChange={(e: any) => setDescription(e.target.value)} />
        <Button variant="contained" onClick={() => setBlocks([...blocks, <Header />])}>Ne pas cliquer</Button>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>Choisir un block</Button>
        <SelectBlockDialog
          open={isDialogOpen}
          onClose={handleClose}
        />
      </div>
      {blocks}
    </>
  )
}

export default Builder
