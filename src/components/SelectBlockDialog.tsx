import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle, List, ListItem, Stack, Typography } from "@mui/material";
import blocks from "../blocks";
import { BlockData } from "../types/types";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getBlockIcon } from "../blocks";

export interface SelectBlockDialogProps {
  open: boolean;
  onClose: (value: BlockData | undefined) => void;
}

const SelectBlockDialog = (props: SelectBlockDialogProps) => {
  const [preSelectedBlock, setPreSelectedBlock] = useState<BlockData>();

  const handleClose = (value: BlockData | undefined) => {
    props.onClose(value);
  };

  const onSubmit = () => {
    if (preSelectedBlock) {
      handleClose(preSelectedBlock);
    }
  };

  return (
    <Dialog onClose={() => handleClose(undefined)} aria-labelledby="simple-dialog-title" open={props.open}>
      <DialogTitle>Choose a block</DialogTitle>
      <List sx={{ pt: 0, width: 360 }}>
        {blocks.map((block) => {
          const isSelected = block === preSelectedBlock;
          const Icon = getBlockIcon(block.type);
          return (
            <ListItem
              key={block.name}
              onClick={() => {
                setPreSelectedBlock(block);
              }}
            >
              <Stack
                padding={4}
                borderRadius={2}
                width="100%"
                direction="row"
                spacing={2}
                sx={
                  {
                    backgroundColor: (theme) => isSelected ? theme.palette.success.main : "transparent",
                    cursor: "pointer",
                    color: (theme) => isSelected ? "white" : "black",
                  }}
              >
                <Icon />
                <Typography component="p">
                  {block.name}
                </Typography>
                {isSelected && <CheckCircleIcon />}
              </Stack>
            </ListItem>
          )
        })}
      </List>
      <DialogActions>
        <Button disabled={!preSelectedBlock} onClick={onSubmit}>Ok</Button>
        <Button onClick={() => handleClose(undefined)}>Cancel</Button>
      </DialogActions>
    </Dialog >
  );
};

export default SelectBlockDialog;