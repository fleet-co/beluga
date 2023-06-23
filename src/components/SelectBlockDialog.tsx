import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle, List, ListItem } from "@mui/material";
import blocks, { BlockData } from "../blocks";

export interface SelectBlockDialogProps {
  open: boolean;
  onClose: (value: BlockData) => void;
}

const SelectBlockDialog = (props: SelectBlockDialogProps) => {
  const [preSelectedBlock, setPreSelectedBlock] = useState<BlockData>()

  const handleClose = (value: BlockData) => {
    props.onClose(value);
  }

  const onSubmit = () => {
    if (preSelectedBlock) {
      handleClose(preSelectedBlock)
    }
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
      <DialogTitle>Choose a block</DialogTitle>
      <List sx={{ pt: 0 }}>
        {blocks.map((block) => (
          <ListItem
            key={block.title}
            onClick={() => {
              setPreSelectedBlock(block)
            }}
          >
            {block.title}
            {block === preSelectedBlock && " (selected)"}
          </ListItem>
        ))}
      </List>
      <DialogActions>
        <Button disabled={Boolean(preSelectedBlock)} onClick={onSubmit}>Ok</Button>
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SelectBlockDialog;