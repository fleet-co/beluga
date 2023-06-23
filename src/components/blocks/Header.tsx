import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import belugaLogo from "../../assets/beluga_logo.png";
import bragman from "../../assets/bragman.jpg";
interface HeaderProps {
  title: string,
  description: string,
  image?: string,
  ctaText?: string,
  ctaLink?: string,
  isEditable?: boolean,
}

const Header = (props: HeaderProps) => {
  const { title, description, image, ctaText, ctaLink } = props;

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
          <h1>{title || "hello"}</h1>
          <p>{description || "lorum ipsum dolor con la visita de la sagrada familia"}</p>
          <Button variant="contained" href={ctaLink || bragman} target="_blank">{ctaText || "Clique ici"}</Button>
        </div>
        <img src={image || belugaLogo}/>
      </Box>
    </Box>
  );
};

export default Header;