import Box from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
interface BlablaBlockProps {
  title: string,
  text: string,
}

const BlablaBlock = (props: BlablaBlockProps) => {
  const { text, title } = props;
  const primary = blueGrey['A100']
  return (
    <Box
      sx={{
        width: "100vw",
        display: 'flex',
        flexDirection: 'column',
        height: 400,
        backgroundColor: primary,
        color:"primary.dark"
      }}
    >
    <h2>{title}</h2>
    <p>{text}</p>
    </Box>
  );
};

export default BlablaBlock;