<script>
  import MintPending from "$lib/components/MintPending.svelte";
  import MintCompleted from "$lib/components/MintCompleted.svelte";
  import { appState } from "../stores/store.js";
  import Review from "$lib/components/Review.svelte";
</script>

{#if $appState["state"] === "Mint"}
  <div
    class={`flex flex-col m-4 space-y-4 ${$appState["metadata"]["stampedId"] ? "box rounded transition" : ""}`}
  >
    <MintPending />
  </div>
  {#if $appState["state"] === "Mint" && $appState["metadata"]["stampedId"]}
    <MintCompleted />
  {/if}
{/if}

{#if $appState["state"] === "Review"}
  <div class="m-4 space-y-4">
    <Review />
  </div>
{/if}
