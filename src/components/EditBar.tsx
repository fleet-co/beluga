import React, {useState} from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BlockData } from "../../blocks";
import "./EditBar.css";
import blocks from '../blocks';


const ImageAndTextEditor = (props? :any) => null;
const BlablaBlockEditor = () => null;
const HeaderEditor = () => null;


function getBlockEditFormByType(type: string): (props?: any) => JSX.Element | null {
  switch (type) {
    case "TEXTIMAGE":
      return ImageAndTextEditor;
    case "BLABLA":
      return BlablaBlockEditor;
    case "HERO":
      return HeaderEditor;
    default:
      return () => null;
  }
}

const EditBar = ({ activeBlock, setActiveBlockData }: BlockData) => {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  console.log("actif", activeBlock);

  const updateBlockField = (field :string, value : any) => {
    console.log(field);
    console.log(value);
    console.log(activeBlock);
    setActiveBlockData({
      ...activeBlock,
      contents: {...activeBlock.contents, [field]: value},
    });
  }

  const CustomEditor = getBlockEditFormByType(activeBlock.type);
  return (
    <div className="editBarContainer">
      <CustomEditor block={activeBlock} setBlock={setActiveBlockData} />
      <TextField id="standard-basic" label="Description" variant="standard" value={activeBlock.contents.title} onChange={(e: any) => updateBlockField('title', e.target.value)} />
      <TextField id="standard-basic" label="Description" variant="standard" value={activeBlock.contents.description}  onChange={(e: any) => updateBlockField('description', e.target.value)} />
    </div>
  )
}

export default EditBar