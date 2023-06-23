
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://npeoynokbejbzowsvxpr.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZW95bm9rYmVqYnpvd3N2eHByIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzUwNzY5NCwiZXhwIjoyMDAzMDgzNjk0fQ.pznBmmKTnFYPXYX85d124Wk8yiNN6g1E7QJIHUSZaS4';
const supabase = createClient(supabaseUrl, supabaseKey);

const { data: pages, error } = await supabase
  .from('pages')
  .select(`
    id,
    name,
    slug,
    blocks (id, order, type, contents)`);

const TestBenComponent = () => {
  console.log(pages);
  return pages?.map(page => <>{page.name} : {page.slug}</>);
};

export default TestBenComponent;