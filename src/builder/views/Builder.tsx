import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditBar from "../../components/EditBar";
import SelectBlockDialog from "../../components/SelectBlockDialog";
import "./Builder.css"
import AddBoxIcon from '@mui/icons-material/AddBox';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Stack, TextField, Avatar, Box, Link } from "@mui/material";
import { BlockData } from "../../types/types";
import { getComponentByType } from "../../blocks";
import SupabaseService from "../../tools/SupabaseClient";
import belugaLogo from '../../assets/beluga_logo.png'

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

  const updateBlockAtIndex = (index: number, updatedBlock: BlockData) => {
    let copyOfBlocks = [...blocks];
    copyOfBlocks[index] = updatedBlock;
    setBlocks(copyOfBlocks);
  };

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
      <Box
        sx={{
          width: "90vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link href="/"><Avatar alt="Remy Sharp" src={belugaLogo} /></Link>
        <div>
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
        </div>
    
      </Box>

      </Stack>
      <Stack position="fixed" bottom={16} right={16}>
        <Button variant="contained" onClick={() => { setIsEditable(!isEditable) }}>Edit</Button>
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
      {isEditable && <EditBar activeBlock={blocks[activeBlockIndex]} setActiveBlockData={(block: BlockData) => updateBlockAtIndex(activeBlockIndex, block)} />}
      {blocks.map((block, index: number) => {
        const Component = getComponentByType(block.type);

        return (
          <div onClick={() => setActiveBlockIndex(index)}>
            <Component
              key={index}
              contents={block.contents}
            />
          </div>

        )
      })}
    </>
  );
};

export default Builder;
