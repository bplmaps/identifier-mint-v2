<script>
  import { appState } from "../../stores/store.js";

  let kv = {
    stampedId:"ARK",
    stampedCreator:"Creator",
    stampedUrl:"URL"
  }

</script>

<div class="py-4 pr-8 pl-16 bg-gray-100 border-l-16 border-green-300 shadow-xl max-w-fit rounded">
  <div class="flex flex-row">
    <h1 class="font-bold text-xl">Mint completed!</h1>
  </div>

  {#each Object.entries(kv) as [key, value]}
    <div class="ml-6">
      <div class="flex flex-row">
        <p class="w-32 text-lg font-medium text-gray-900 p-2">{value} ⧽</p>
        <p class="font-mono text-red-400 p-2">{$appState.metadata[key]}</p>
      </div>
    </div>
  {/each}

</div>
