import React from "react";
import Box from "@mui/material/Box";
import { blueGrey } from '@mui/material/colors';


interface BlablaBlockContents {
  title: string,
  text?: string,
}

interface BlablaBlockProps {
  contents: BlablaBlockContents
}



const BlablaBlock = (props: BlablaBlockProps) => {

  const { contents } = props;

  const primary = blueGrey['A100'];
  return (
    <Box
      sx={{
        width: "100vw",
        display: 'flex',
        flexDirection: 'column',
        height: 400,
        backgroundColor: primary,
        color: "primary.dark"
      }}
    >
      <h2>{contents.title}</h2>
      <p>{contents.text}</p>
    </Box >
  );
};

export default BlablaBlock;