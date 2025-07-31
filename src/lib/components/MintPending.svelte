<script>
  import uniqid from "uniqid";
  import { appState } from "../../stores/store.js";
  import { addNewMint } from "$lib/helpers/supabaseFunctions.client.js";

  let prefixes = [
    { id: 1, text: `a` },
    { id: 2, text: `d` },
  ];

  let password = $state("");
  let creator = $state();
  let selected = $state();
  let commonwealthUrl = $state()

  function mint() {
    const uid = uniqid();
    const prefix = `${selected.text}`;

    appState.update((state) => {
      return {
        ...state,
        metadata: {
          ...state.metadata,
          stampedId: prefix + uid,
          stampedCreator: creator ? `${creator}` : "Anonymous",
          stampedUrl: creator ? `${commonwealthUrl}` : "???",
        },
      };
    });
  }

  function reset() {
    if ($appState) {
      $appState["metadata"]["stampedId"] = null;
      password=''
    }
  }

  function handleSave() {
    addNewMint(
      $appState["metadata"]["stampedId"],
      $appState["metadata"]["stampedCreator"],
      $appState["metadata"]["stampedurl"],
      password
    );
    reset();
  }

  let mintable =
    "rounded-md px-3 py-2 text-l font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer transition duration-100";
  let clear =
    "rounded-md px-3 py-2 text-l font-medium bg-red-100 text-red-700 hover:bg-red-200  cursor-pointer transition duration-100";
  let save =
    "rounded-l px-3 py-2 text-l font-medium bg-green-100 text-green-700 hover:bg-green-200  cursor-pointer transition duration-100";
  let notClickable = "bg-gray-200 text-gray-500 cursor-not-allowed";
</script>

<h1 class="font-black text-4xl">Mint new identifier</h1>
<div class="flex flex-row">
  <form>
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 m-4">
      <p class="text-base sm:text-md font-medium text-gray-900">Prefix group</p>
      <select
        class="rounded border border-gray-300 text-sm sm:text-base"
        bind:value={selected}
        onchange={() => ($appState["metadata"]["stampedId"] = "")}
      >
        {#each prefixes as prefix}
          <option value={prefix}>
            {prefix.text}
          </option>
        {/each}
      </select>
    </div>
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 m-4">
      <p class="text-base sm:text-md font-medium text-gray-900">Creator name</p>
      <input
        class="rounded"
        placeholder="Norman B. Leventhal"
        bind:value={creator}
      />
    </div>
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 m-4">
      <p class="text-base sm:text-md font-medium text-gray-900">Commonwealth URL</p>
      <input
        class="rounded"
        placeholder="Norman B. Leventhal"
        bind:value={commonwealthUrl}
      />
    </div>
    <div>
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 m-4">
        <button
          onclick={mint}
          class={`${!$appState["metadata"]["stampedId"] ? mintable : notClickable} rounded-md px-3 py-2 text-l font-medium w-full transition duration-200`}
          disabled={$appState["metadata"]["stampedId"]}
        >
          Mint
        </button>

        <button
          onclick={reset}
          class={`${$appState["metadata"]["stampedId"] ? clear : notClickable} rounded-md px-3 py-2 text-l font-medium w-full transition duration-200`}
          disabled={!$appState["metadata"]["stampedId"]}
        >
          Clear
        </button>
        <div class="flex flex-row">
        <button
          onclick={handleSave}
          class={`${$appState["metadata"]["stampedId"] ? save : notClickable} px-3 py-2 text-l font-medium w-full transition duration-200`}
          disabled={!$appState["metadata"]["stampedId"]}
        >
          Save
        </button>
        <input
          id="saver"
          type="password"
          bind:value={password}
          placeholder="Enter password"
          class={`${$appState["metadata"]["stampedId"] ? "rounded-r border-8 border-green-100 text-sm italic bg-white px-2 py-1 focus:outline-none" : "hidden"}`}
        /></div>
      </div>
    </div>
  </form>
</div>

<style>
  input[type="password"]::placeholder {
    color:rgb(200, 200, 200)
  }
</style>