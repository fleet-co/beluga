import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import belugaLogo from '../../assets/beluga_logo.png'
import bragman from '../../assets/bragman.jpg'

interface HeaderProps {
  contents: HeaderContents
}
interface HeaderContents {
  title: string,
  description: string,
  image?: string,
  cta_text?: string,
  cta_link?: string,
  isEditable?: boolean,
}

const Header = (props: HeaderProps) => {
  const { contents } = props;

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        height: 300,
        backgroundColor: "warning.main",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h1>{contents.title || "hello"}</h1>
          <p>{contents.description || "lorum ipsum dolor con la visita de la sagrada familia"}</p>
          <Button variant="contained" href={contents.cta_link || bragman} target="_blank">{contents.cta_text || "Clique ici"}</Button>
        </div >
      </Box >
    </Box >
  );
};

export default Header;