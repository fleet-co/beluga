import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Header from "../../components/blocks/Header";
import EditBar from "../../components/EditBar";
import SelectBlockDialog from "../../components/SelectBlockDialog";
import "./Builder.css"
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton, Stack } from "@mui/material";
import { BlockData } from "../../types/types";
import { getComponentByType } from "../../blocks";

function Builder() {
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [activeBlockIndex, setActiveBlockIndex] = useState<number>(0);
  const [blocksData, setBlocksData] = useState<BlockData[]>([]);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleClose = (value: BlockData | undefined) => {
    setDialogOpen(false);
    if (value) {
      addBlock(value);
    }
  };

  const addBlock = (block: BlockData) => {
    setBlocks([...blocks, block]);
  };

  const updateBlockAtIndex = (index :number, updatedBlock :BlockData) => {
    let copyOfBlocks = [...blocks];
    copyOfBlocks[index] = updatedBlock;
    setBlocks(copyOfBlocks);
  };

  return (
    <>
      <Stack position="fixed" bottom={16} right={16}>
        <Button variant="contained" onClick={() => {setIsEditable(!isEditable)}}>Edit</Button>
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
      {isEditable && <EditBar activeBlock={blocks[activeBlockIndex]} setActiveBlockData={(block :BlockData) => updateBlockAtIndex(activeBlockIndex, block)} />}
      {blocks.map((block, index: number) => {
        const Component = getComponentByType(block.type);

        return (
          <div onClick={() => setActiveBlockIndex(index)}>
            <Component
              key={index}
              {...block.contents}
            />
          </div>

        )
      })}
    </>
  )
}

export default Builder
