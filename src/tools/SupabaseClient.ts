import { createClient } from '@supabase/supabase-js';

const pageDataToReturn = `
  id,
  name,
  slug,
  blocks (
    id,
    order,
    type,
    contents
    )`;


interface BlockData {
  "page_id": number,
  "name": string,
  "order": number,
  "type": string,
  "contents": any
}

interface PageData {
  "name": string,
  "slug": string,
}

class SupabaseService {
  client;
  constructor() {
    const supabaseUrl = "https://npeoynokbejbzowsvxpr.supabase.co";
    // const supabaseKey = process.env.SUPABASE_KEY;
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZW95bm9rYmVqYnpvd3N2eHByIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzUwNzY5NCwiZXhwIjoyMDAzMDgzNjk0fQ.pznBmmKTnFYPXYX85d124Wk8yiNN6g1E7QJIHUSZaS4";
    this.client = createClient(supabaseUrl, supabaseKey);
  }

  async getPages() {
    return await this.client.from("pages")
      .select(pageDataToReturn);
  }

  async getPageBySlug(slug: string) {
    return await this.client.from("pages")
      .select(pageDataToReturn)
      .eq("slug", slug);
  }

  async createPage(pageData: PageData) {
    return await this.client.from("pages")
      .upsert(pageData)
      .select();
  }

  async createBlock(blockData: BlockData) {
    return await this.client.from("blocks")
      .upsert(blockData)
      .select();
  }


  async modifyPage(pageId: number, pageData: PageData) {
    return await this.client.from("pages")
      .update(pageData)
      .eq("id", pageId)
      .select();
  }

  async modifyBlock(blockId: number, blockData: BlockData) {
    return await this.client.from("blocks")
      .update(blockData)
      .eq("id", blockId)
      .select();
  }

};

export default SupabaseService;
