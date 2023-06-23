import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle, List, ListItem } from "@mui/material";
import blocks from "../blocks";
import { BlockData } from "../types/types";

export interface SelectBlockDialogProps {
  open: boolean;
  onClose: (value: BlockData | undefined) => void;
}

const SelectBlockDialog = (props: SelectBlockDialogProps) => {
  const [preSelectedBlock, setPreSelectedBlock] = useState<BlockData>()

  const handleClose = (value: BlockData | undefined) => {
    props.onClose(value);
  }

  const onSubmit = () => {
    if (preSelectedBlock) {
      handleClose(preSelectedBlock)
    }
  }

  return (
    <Dialog onClose={() => handleClose(undefined)} aria-labelledby="simple-dialog-title" open={props.open}>
      <DialogTitle>Choose a block</DialogTitle>
      <List sx={{ pt: 0 }}>
        {blocks.map((block) => (
          <ListItem
            key={block.name}
            onClick={() => {
              setPreSelectedBlock(block)
            }}
          >
            {block.name}
            {block === preSelectedBlock && " (selected)"}
          </ListItem>
        ))}
      </List>
      <DialogActions>
        <Button disabled={!Boolean(preSelectedBlock)} onClick={onSubmit}>Ok</Button>
        <Button onClick={() => handleClose(undefined)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SelectBlockDialog;