import React from 'react'
import Box from '@mui/material/Box';

interface HeaderProps {
  title: string,
  description: string,
  image: string,
  ctaText: string,
  ctaLink: string,
}

const Header = (props: HeaderProps) => {
  const { title, description, image, ctaText } = props;

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
      </Box>
    </Box>
  )
}

export default Header