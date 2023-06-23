import { useEffect, useState } from "react";
import SupabaseService from "../tools/SupabaseClient";
import { useParams } from "react-router-dom";
import { Block } from "../types/types";
import Header from "./blocks/Header";
import ImageAndText from "./blocks/ImageAndText";
import BlablaBlock from "./blocks/BlablaBlock";

import Stack from '@mui/material/Stack/Stack'
import Container from "@mui/material/Container/Container"

const Page = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const slug = useParams().pageSlug;

  if (slug) {
    useEffect(() => {
      const sbs = new SupabaseService();

      sbs.getPageBySlug(slug).then((pageInfos: any) => {
        setBlocks(pageInfos.data[0].blocks.sort((a: Block, b: Block) => a.order - b.order));
      });
    }, [slug]);
  }


  return (
    <Container>
      <Stack spacing={2}>
        {blocks.map((block: Block) => {
          if (block.type === "HERO") {
            return (
              <Header title={block.contents.title} description={block.contents.description} ctaText={block.contents.cta_text} ctaLink={block.contents.cta_link} />
            )
          }
          if (block.type === "IMAGE") {
            return (
              <ImageAndText image={block.contents.img_url} />
            )
          }
          if (block.type === "TEXT") {
            return (
              <BlablaBlock title={block.contents.title} text={block.contents.description} />
            )
          }
        }
        )}
      </Stack>
    </Container>
  )
}


export default Page;
