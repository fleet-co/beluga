import React, { useEffect, useState } from "react";
import SupabaseService from "../tools/SupabaseClient";
import { useParams } from "react-router-dom";
import { Block } from "../types/types";
import { getComponentByType } from "../blocks";

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
    <div>
      {blocks.map((block: Block) => {
        const Component = getComponentByType(block.type);
        return <Component contents={block.contents} />;
      }
      )}
    </div>
  )
}


export default Page;
