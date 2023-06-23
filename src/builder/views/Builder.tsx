import React, { useState } from "react";
import SelectBlockDialog from "../../components/SelectBlockDialog";
import "./Builder.css"
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton, Stack } from "@mui/material";
import { BlockComponent } from "../../types/types";

function Builder() {
  const [blocks, setBlocks] = useState<any>([]);
  const [blocksData, setBlocksData] = useState<BlockComponent[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleClose = (value: BlockComponent | undefined) => {
    setDialogOpen(false);
    if (value) {
      addBlock(value);
    }
  };

  const addBlock = (block: BlockComponent) => {
    console.log(block)
    setBlocks([...blocks, <block.Component />]);
  }
  return (
    <>
      <Stack position="fixed" bottom={16} right={16}>
        <IconButton
          color="primary"
          onClick={() => setDialogOpen(true)}>
          <AddBoxIcon sx={{ fontSize: "78px" }} />
        </IconButton>
      </Stack>
      <SelectBlockDialog
        open={isDialogOpen}
        onClose={handleClose}
      />
      {blocks}
    </>
  )
}

export default Builder
