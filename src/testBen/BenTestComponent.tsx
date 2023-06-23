import supabase from "../APIconfig/config";

const { data: pages, error } = await supabase
  .from("pages")
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