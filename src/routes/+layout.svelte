<script lang="ts">
  import "../app.css";
  import { appState } from "../stores/store";

  let { children } = $props();

  const services = ["Mint", "Review"];

  function loadService(service) {
    if (service['service']) {$appState['state'] = service['service']}
    else {$appState['state'] = service}
    console.log($appState['state'])
  }

</script>

<nav class="bg-gray-600 font-sans">
  <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center space-x-2">
        <div class="mr-10 text-white">
          <a
            class="font-black text-green-300 hover:underline"
            href="https://leventhalmap.org"
            target="blank"
          >
            LMEC
          </a>
          ⧽
          <button onclick={() => loadService("Mint")} class="font-bold text-white hover:underline">
            Identifier Minting Service
          </button>
        </div>
        {#each services as service}
          <button
            onclick={() => loadService({service})}
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-100 hover:cursor-pointer"
          >
            {service}
      </button>
        {/each}
      </div>
    </div>
  </div>
</nav>

{@render children()}
