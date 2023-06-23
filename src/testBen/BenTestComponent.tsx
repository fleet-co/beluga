import { useEffect, useState } from 'react';
import SupabaseService from "../tools/SupabaseClient";

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
const TestBenComponent = () => {
  const [pages, setPages] = useState<Page[]>([]);
  useEffect(() => {
    const sbs = new SupabaseService();
    sbs.getPages().then((p: any) => {
      setPages(p.data);
    });
  }, []);

  return pages?.map((page: Page) => <>{page.name} : {page.slug}</>);
};

export default TestBenComponent;