import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Header from "../../components/blocks/Header";
import EditBar from "../../components/EditBar";
import SelectBlockDialog from "../../components/SelectBlockDialog";
import "./Builder.css"
import AddBoxIcon from '@mui/icons-material/AddBox';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Stack, TextField } from "@mui/material";
import { BlockData } from "../../types/types";
import { getComponentByType } from "../../blocks";
import SupabaseService from "../../tools/SupabaseClient";

const Builder = () => {
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [activeBlockIndex, setActiveBlockIndex] = useState<number>(0);
  const [pageName, setPageName] = useState<string>("");
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

  const getSlugFromName = (name: string) => {
    return name.toLowerCase().replace(/ /g, "-");
  }

  const onSave = () => {
    const pageData = {
      name: pageName,
      slug: getSlugFromName(pageName),
      blocks: blocks,
    }

    const sbs = new SupabaseService();
    sbs.createPage(pageData).then((p: any) => {
      console.log(p)
    }
    );
  }

  return (
    <>
      <Stack direction="row" position="fixed" top={16} right={16}>
        <TextField
          id="standard-basic"
          color="primary"
          label="Standard"
          variant="standard"
          value={pageName}
          onChange={
            (event: React.ChangeEvent<HTMLInputElement>) => {
              setPageName(event.target.value);
            }}
        />
        <IconButton
          color="primary"
          onClick={() => onSave()}
          disabled={pageName.length < 5}>
          <SaveIcon sx={{ fontSize: "32px" }} />
        </IconButton>
      </Stack>
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
  );
};

export default Builder;
