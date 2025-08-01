import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { WRITE_PASSWORD } from '$env/static/private';


const sb = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function POST({ request }) {
  const { currentId, creator, url, password } = await request.json();

  if (password !== WRITE_PASSWORD) {
    return new Response('Unauthorized', { status: 401 });
  }

  console.log("URL is:" + url)
  const { data, error } = await sb
    .from('atlascope')
    .insert({
      lmec_mint: currentId,
      who_mint: creator,
      url: url,
      barcode: 999
    })
    .select();

  if (error) {
    console.error("Supabase error:", error);
    return json({ error: error.message }, { status: 500 });
  }
  return json({ data });
}
