import React from 'react'
import Box from '@mui/material/Box';

interface HeaderProps {
  title: string,
  description: string,
  image: string,
  ctaText: string,
  ctaLink: string,
  isEditable: boolean,
}

const Header = (props: HeaderProps) => {
  const { title, description, image, ctaText, isEditable } = props;

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
          flexDirection: 'column',
        }}
      >
        {title}{description}{image}{ctaText}
        {isEditable && <p>OK</p>}
      </Box>
    </Box>
  )
}

export default Header