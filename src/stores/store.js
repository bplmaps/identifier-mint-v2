import { writable } from "svelte/store";

export const appState = writable({
  state: "Mint",
  metadata: {
    stampedId: null,
    stampedCreator: null,
    stampedUrl: null,
  },
});
