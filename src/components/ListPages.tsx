import { useEffect, useState } from "react";
import SupabaseService from "../tools/SupabaseClient";
import { Page } from "../types/types";

import { Link } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import AbcIcon from "@mui/icons-material/Abc";

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
            <TimelineDot>
              <AbcIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Link href={`page/${page.slug}`} underline="none">
              {page.name}
            </Link>
          </TimelineContent>
        </TimelineItem>,
      )}
    </Timeline>
  );


};

export default ListPages;