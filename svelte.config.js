import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://svelte.dev/docs/kit/integrations
// 	// for more information about preprocessors
	// preprocess: vitePreprocess(),

// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// import adapter from '@sveltejs/adapter-static';

// export default {
// preprocess: vitePreprocess(),
//   kit: {
//     adapter: adapter({
//       pages: 'build',
//       assets: 'build',
//       fallback: null // or '200.html' if using SPA fallback
//     }),
//     paths: {
//       base: '/my-app' // IMPORTANT: matches your deployment path
//     },
//     prerender: {
//       entries: ['*'] // prerender all reachable pages
//     }
//   }
// };
