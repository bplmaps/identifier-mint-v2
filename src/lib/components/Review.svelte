<script>
  import { appState } from "../../stores/store";
  import { getAllMints } from "$lib/helpers/supabaseFunctions.client";

  let mints;
  let tableHeaderStyle =
    "sticky top-0 px-4 py-3 font-black text-left text-gray-700 bg-gray-50";
  let headers = ["Numbers", "Barcode", "LMEC Mint", "Commonwealth ID", "Who"];

  function handleMints() {
    getAllMints().then((d) => {
      mints = d;
    });
  }

  handleMints()
  
</script>

<h1 class="font-black text-4xl">Review all mints</h1>
<div class="flex flex-row m-4 justify-content justify-left">
  <div class="w-32 flex gap-2">
  </div>
</div>

  <div
    class="max-h-96 max-w-fit overflow-y-auto border border-gray-200 shadow-lg"
  >
    <table class="divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          {#each headers as header}
            <th class={tableHeaderStyle}>{header}</th>
          {/each}
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        {#each mints as mint, i}
          <tr>
            <td class="px-4 py-3 text-gray-900">{mints.length + 1 - (i + 1)}</td
            >
            <td class="px-4 py-3 text-gray-900">{mint.barcode}</td>
            <td class="px-4 py-3 text-blue-500 underline break-all"
              ><a
                class="hover:text-blue-700"
                href="https://s3.us-east-2.wasabisys.com/urbanatlases/{mint.lmec_mint}/tileset.json"
                target="_blank">{mint.lmec_mint}</a
              ></td
            >
            <td class="px-4 py-3 text-blue-500 underline break-all">
              <a class="hover:text-blue-700" href={mint.url} target="_blank">
                {mint.url ? mint.url.substring(43) : "null"}
              </a>
            </td>
            <td class="px-4 py-3 text-gray-900">{mint.who_mint}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
