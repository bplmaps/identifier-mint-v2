# `identifier-mint-v2`

Version 2 of LMEC's Identifier Mint tool for minting new spatial data records in our ARK namespace. Built in SvelteKit. Requires `node` >=18.13.

## Develop locally

1. Clone this repository and `cd` into it
2. `npm install`
3. `npm run dev`

## Deploy to Wasabi

This app is currently deployed to Wasabi as a static site.

To "deploy," we run `npm run build` from the root. The `build` directory should update (you can always delete this folder before you `npm run build` to make sure it's updating).

Then, hand-copy the contents of `build` to `var/www/geoservices/identifier-mint` Wasabi.

> SvelteKit provides documentation on deploying apps as a static site: https://svelte.dev/docs/kit/adapter-static

#### Setting up the static site deployment is only something we should need to do *one time*. For posterity, this is how I did it:

1. Install `@sveltejs/adapter-static`
2. Update the `svelte.config.js` according to SvelteKit docs
3. Create a file called `+layout.ts` inside of `/routes`