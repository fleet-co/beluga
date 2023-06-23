import React from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

interface ImageAndTextContents {
  img_url: string,
  text?: string,
}

interface ImageAndTextProps {
  contents: ImageAndTextContents
}

const ImageAndText = (props: ImageAndTextProps) => {
  const defautlImg = "https://s2.qwant.com/thumbr/0x380/7/f/dac2957cddf977d609ce87dc527188c2c16fc68630d47e7e3236b0462ad709/Belugas-formam-sociedades-complexas.jpg?u=https%3A%2F%2Fsocientifica.com.br%2Fwp-content%2Fuploads%2F2020%2F07%2FBelugas-formam-sociedades-complexas.jpg&q=0&b=1&p=0&a=0"
  const { contents } = props;

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        height: 400,
        backgroundColor: "primary.light",
      }}
    >
      <Box
        sx={{
          width: "90vw",
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          gap: "24px",
          height: "90%",
        }}
      >
        <Typography component="p" sx={{
          fontSize: "1.5rem",
          width: "50%",
        }}>
          {contents.text || "lorum ipsum dolor con la visita de la sagrada familia"}
        </Typography>
        <img src={contents.img_url || defautlImg} style={{ "height": "100%", "width": "auto", "borderRadius": "4px" }} />
      </Box >
    </Box >
  );
};

export default ImageAndText;