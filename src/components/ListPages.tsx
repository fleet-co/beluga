import { useEffect, useState } from 'react';
import SupabaseService from "../tools/SupabaseClient";

import { Link } from '@mui/material';
import { Timeline, TimelineItem, TimelineDot, TimelineSeparator, TimelineConnector,TimelineContent } from '@mui/lab';

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

  return (
    <Timeline position="alternate">
        {pages?.map(page =>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><Link href={page.slug} underline="none">{page.name}</Link></TimelineContent>
        </TimelineItem>
        )}
    </Timeline>  
    );


};

export default ListPages;