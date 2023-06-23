import React, { useState } from "react";
import EditBar from "../../components/EditBar";
import SelectBlockDialog from "../../components/SelectBlockDialog";
import "./Builder.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton, Stack } from "@mui/material";
import { BlockData } from "../../types/types";
import { getComponentByType } from "../../blocks";

const Builder = () => {
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [activeBlock, setActiveBlock] = useState<BlockData>();
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

  console.log(blocks);

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
      {blocks.map((block, index) => {
        const Component = getComponentByType(block.type);

        return (
          <Component
            key={index}
            {...block.contents}
          />
        );
      })}
    </>
  );
};

export default Builder;
