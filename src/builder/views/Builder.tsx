import React, { useState } from "react";
import EditBar from "../../components/EditBar";
import SelectBlockDialog from "../../components/SelectBlockDialog";
import "./Builder.css"
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton, Stack } from "@mui/material";
import { BlockComponent, BlockData } from "../../types/types";

function Builder() {
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [activeBlock, setActiveBlock] = useState<BlockData>();
  const [blocksData, setBlocksData] = useState<BlockComponent[]>([]);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleClose = (value: BlockComponent | undefined) => {
    setDialogOpen(false);
    if (value) {
      addBlock(value);
    }
  };

  const addBlock = (block: BlockComponent) => {
    console.log(block)
    setBlocks([...blocks, <block.Component isEditable />]);
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
      {isEditable && <EditBar activeBlock={activeBlock} />}
      {blocks}
    </>
  )
}

export default Builder
