<script>
  import uniqid from "uniqid";

  let prefixes = [
    { id: 1, text: `a` },
    { id: 2, text: `d` },
  ];

  let id = $state();
  let stampedIdentifier = $state();

  let creator = $state();
  let stampedCreator = $state();

  let prefix = $state();
  let selected = $state();

  function mint() {
    id = uniqid();
    prefix = `${selected.text}`;
    stampedIdentifier = prefix + id;
    if (creator) {
      stampedCreator = `${creator}`;
    } else {
      stampedCreator = `Anonymous`;
    }
  }

  function reset() {
    stampedIdentifier = ""
  }
</script>

<div class="m-12 space-y-4">
  <h1 class="font-black text-4xl">Mint new identifier</h1>
  <div class="flex flex-row">
    <form>
      <div class="flex flex-row m-4 justify-content justify-left">
        <p class="w-32 block text-lg font-medium text-gray-900">Prefix group</p>
        <select
          class="rounded"
          bind:value={selected}
          onchange={() => (stampedIdentifier = "")}
        >
          {#each prefixes as prefix}
            <option value={prefix}>
              {prefix.text}
            </option>
          {/each}
        </select>
      </div>
      <div class="flex flex-row m-4 justify-content justify-left">
        <p class="w-32 block text-lg font-medium text-gray-900">Creator name</p>
        <input
          class="rounded"
          placeholder="Norman B. Leventhal"
          bind:value={creator}
        />
      </div>
      <div class="flex flex-row m-4 justify-content justify-left">
        <div class="w-32">
          <button
            onclick={mint}
            class="rounded-md px-3 py-2 text-l font-medium bg-green-300 text-black hover:bg-gray-700 hover:text-white cursor-pointer transition duration-100"
          >
            Mint
          </button>
        </div>
        <div class="flex flex-row">
          {#if stampedIdentifier}
            <p class="font-mono text-red-400 p-2">
              {stampedIdentifier}
            </p>
          {/if}
        </div>
      </div>
    </form>
  </div>
</div>

{#if stampedIdentifier}
  <div class="m-12 space-y-4">
    <div class="flex flex-row">
      <h1 class="font-bold text-2xl">Mint completed!</h1>
      <button
        onclick={reset}
        class="mx-6 rounded-md px-3 py-2 text-sm font-medium bg-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer transition duration-100"
      >
        Clear
      </button>
    </div>

    <div class="ml-8 space-y-2">
      <div class="flex flex-row">
        <p class="w-32 text-lg font-medium text-gray-900 p-2">Identifier ⧽</p>
        <p class="font-mono text-red-400 p-2">{stampedIdentifier}</p>
      </div>

      <div class="flex flex-row">
        <p class="w-32 text-lg font-medium text-gray-900 p-2">ARK ⧽</p>
        <p class="font-mono text-red-400 p-2">
          ark:/76611/{stampedIdentifier}
        </p>
      </div>

      <div class="flex flex-row">
        <p class="w-32 text-lg font-medium text-gray-900 p-2">Creator ⧽</p>
        <p class="font-mono text-red-400 p-2">
          {stampedCreator}
        </p>
      </div>
    </div>
  </div>
{/if}
