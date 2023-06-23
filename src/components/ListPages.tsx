
import supabase from '../APIconfig/config';
import { Link } from '@mui/material';


const { data: pages, error } = await supabase
  .from('pages')
  .select();

const allPagesExisting = () => {
  return pages?.map(page => <Link href={page.slug}>{page.name}</Link>);
};

export default allPagesExisting;