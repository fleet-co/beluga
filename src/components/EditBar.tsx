import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BlockData } from "../../blocks";
import "./EditBar.css";
import blocks from '../blocks';


const ImageAndTextEditor = ({ block, setBlock }: any) => {
  return <>
    <TextField id="standard-basic" label="Image" variant="standard" value={block.contents.image} onChange={(e: any) => setBlock('image', e.target.value)} />
    <TextField id="standard-basic" label="Text" variant="standard" value={block.contents.text} onChange={(e: any) => setBlock('text', e.target.value)} />
  </>;
};


const BlablaBlockEditor = ({ block, setBlock }: any) => {
  return <>
    <TextField id="standard-basic" label="Title" variant="standard" value={block.contents.title} onChange={(e: any) => setBlock('title', e.target.value)} />
    <TextField id="standard-basic" label="Text" variant="standard" value={block.contents.text} onChange={(e: any) => setBlock('text', e.target.value)} />
  </>;
};


const HeaderEditor = ({block, setBlock} : any) =>{
  console.log(block);
  return <>
    <TextField id="standard-basic" label="Title" variant="standard" value={block.contents.title} onChange={(e: any) => setBlock('title', e.target.value)} />
    <TextField id="standard-basic" label="Description" variant="standard" value={block.contents.description} onChange={(e: any) => setBlock('description', e.target.value)} />
    <TextField id="standard-basic" label="Image URL" variant="standard" value={block.contents.image} onChange={(e: any) => setBlock('image', e.target.value)} />
    <TextField id="standard-basic" label="CTA Text" variant="standard" value={block.contents.cta_text} onChange={(e: any) => setBlock('cta_text', e.target.value)} />
    <TextField id="standard-basic" label="CTA Link" variant="standard" value={block.contents.cta_link} onChange={(e: any) => setBlock('cta_link', e.target.value)} />
  </>;
};


function getBlockEditFormByType(type: string): (props?: any) => any {
  switch (type) {
    case "TEXTIMAGE":
      return ImageAndTextEditor;
    case "BLABLA":
      return BlablaBlockEditor;
    case "HERO":
      console.log(HeaderEditor)
      return HeaderEditor;
    default:
      return () => null;
  }
}

const EditBar = ({ activeBlock, setActiveBlockData }: any) => {
  const updateBlockField = (field :string, value : any) => {
    setActiveBlockData({
      ...activeBlock,
      contents: {...activeBlock.contents, [field]: value},
    });
  }

  const CustomEditor = getBlockEditFormByType(activeBlock.type);
  return (
    <div className="editBarContainer">
      <CustomEditor block={activeBlock} setBlock={updateBlockField} />
    </div>
  );
};

export default EditBar;