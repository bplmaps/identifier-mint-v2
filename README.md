# `identifier-mint-v2`

Version 2 of LMEC's Identifier Mint tool for minting new spatial data records in our ARK namespace. Built with SvelteKit. Requires `node` >=18.13.

## Develop locally

1. Clone this repository and `cd` into it
2. `npm install`
3. `npm run dev`

## Deploy to Wasabi

This app is currently deployed to Wasabi as a static site.

To "deploy," we run `npm run build` from the root. The `build` directory should update (you can always delete this folder before you `npm run build` to make sure it's updating).

Then, hand-copy the contents of `build` to `var/www/geoservices/identifier-mint` in Wasabi.

#### SvelteKit provides documentation on [deploying apps as a static site](https://svelte.dev/docs/kit/adapter-static). We _should_ only have to configure the app for this build chain once. For posterity, this is how I did it:

1. Install `@sveltejs/adapter-static`
2. Update the `svelte.config.js` according to SvelteKit docs
3. Create a file called `+layout.ts` inside of `/routes`
4. Add `export const prerender = true;`

