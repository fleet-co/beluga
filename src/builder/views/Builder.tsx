import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Builder.css';

function Builder() {
  const [blocks, setBlocks] = useState<any>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const newDiv = (title: string, description: string) => {
    return (
      <div className="newDivContainer" sx={{}}>
        <h4>
          {title}
        </h4>
        <p>
        {description}
        </p>
      </div>
    )
  };

  return (
    <div className="builderContainer">
      <div className="toolBar">
        Bonjour jeune site builder
        <TextField id="standard-basic" label="Titre" variant="standard" onChange={(e: any) => setTitle(e.target.value)} />
        <TextField id="standard-basic" label="Description" variant="standard" onChange={(e: any) => setDescription(e.target.value)} />
        <Button variant="contained" onClick={() => setBlocks([...blocks, newDiv(title, description)])}>Ne pas cliquer</Button>
      </div>
      {blocks}
    </div>
  )
}

export default Builder
