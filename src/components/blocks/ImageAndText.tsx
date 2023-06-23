import React from 'react'
import Box from '@mui/material/Box';

interface ImageAndTextContents {
  img_url: string,
  text?: string,
}

interface ImageAndTextProps {
  contents: ImageAndTextContents
}

const ImageAndText = (props: ImageAndTextProps) => {
  const { contents } = props;

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
        {contents.text}
      </Box>
      <img src={contents.img_url} />
    </Box>
  )
}

export default ImageAndText;