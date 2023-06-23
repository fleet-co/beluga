import React from "react";
import Box from "@mui/material/Box";


interface BlablaBlockContents {
  title: string,
  text?: string,
}

interface BlablaBlockProps {
  contents: BlablaBlockContents
}

const BlablaBlock = (props: BlablaBlockProps) => {

  const { contents } = props;

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        height: 300,
        backgroundColor: "primary.dark",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {contents.title}{contents.text}
      </Box>
    </Box>
  );
};

export default BlablaBlock;