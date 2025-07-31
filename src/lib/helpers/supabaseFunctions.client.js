import { createClient } from "@supabase/supabase-js";

const sb = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const getAllMints = async () => {
  const { data, error } = await sb
    .from("atlascope")
    .select("*")
    .order("lmec_mint", { ascending: false });
  return data;
};

export const addNewMint = async (currentId, creator, url, password) => {
  const res = await fetch('/api/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      currentId,
      creator,
      url,
      password
    })
  });

  if (!res.ok) {
    const message = await res.text();
    console.error("Save failed:", message);
    alert("Error or wrong password")
    return null;
  }

  const { data } = await res.json();
  alert(`Saved ${currentId}!`)
  return data;
};