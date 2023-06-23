import React, { useState } from "react";
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
  const [pageName, setPageName] = useState<string>("");
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
    const insertedBlock = { ...block, order: blocks.length + 1 };
    setBlocks([...blocks, insertedBlock]);
  }

  const getSlugFromName = (name: string) => {
    return name.toLowerCase().replace(/ /g, "-");
  }

  const onSave = async () => {
    const pageData = {
      name: pageName,
      slug: getSlugFromName(pageName),
    }

    const sbs = new SupabaseService();

    const insertedPage = await sbs.createPage(pageData);
    if (insertedPage.error) {
      console.error(insertedPage.error);
      return;
    }

    for (const block of blocks) {
      const blockData = {
        ...block,
        page_id: insertedPage.data[0].id,
      }
      await sbs.createBlock(blockData);
    }

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
