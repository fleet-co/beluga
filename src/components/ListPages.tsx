import { useEffect, useState } from 'react';
import SupabaseService from "../tools/SupabaseClient";

import { Link } from '@mui/material';

interface Block {
  id: number;
  order: number;
  slug: string;
  type: string;
  contents: any;
}
interface Page {
  id: number;
  name: string;
  slug: string;
  blocks: Block[];
}

const ListPages = () => {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const sbs = new SupabaseService();
    sbs.getPages().then((p: any) => {
      setPages(p.data);
    });
  }, []);

  return <>{pages?.map(page => <Link href={page.slug}>{page.name}</Link>)}</>;
};

export default ListPages;