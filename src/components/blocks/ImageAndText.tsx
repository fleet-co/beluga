import React from 'react'
import Box from '@mui/material/Box';

interface ImageAndTextProps {
  image: string,
  text?: string,
}

const ImageAndText = (props: ImageAndTextProps) => {
  const { text, image } = props;

  return (
    <Box
      sx={{
        width: "100vw",
        display: 'flex',
        height: 300,
        backgroundColor: 'primary.dark',
      }}
    >
      <Box
        sx={{
          width: "100vw",
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {text}
      </Box>
      <img src={image} />
    </Box>
  )
}

export default ImageAndText;