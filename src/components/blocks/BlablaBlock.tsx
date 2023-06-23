import React from "react";
import Box from "@mui/material/Box";

interface BlablaBlockProps {
  title: string,
  text: string,
}

const BlablaBlock = (props: BlablaBlockProps) => {
  const { text, title } = props;

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
        {title}{text}
      </Box>
    </Box>
  );
};

export default BlablaBlock;