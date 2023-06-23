import { useState } from 'react'
import Button from '@mui/material/Button';

function App() {
  const [blocks, setBlocks] = useState<any>([])

  return (
    <>
      Bonjour jeune site builder
      <Button variant="contained" onClick={() => setBlocks([...blocks, <div>e</div>])}>Ne pas cliquer</Button>
      {blocks}
    </>
  )
}

export default App