# `identifier-mint-v2`

Version 2 of LMEC's Identifier Mint tool for minting new spatial data records in our ARK namespace. Built with SvelteKit. Manipulates a Supabase backend and a password gate to write new atlas layer metadata.

## Requirements

I think it needs `node` >=22, which means you'll probably need `nvm` as well.

## Develop locally

1. Clone this repository
2. `cd` into it
3. `npm install`
4. `npm run dev`

## Deploy to Netlify

This app deploys to <https://identifier-mint.leventhal.center> via Github and Netlify. It needs to deploy to Netlify, as opposed to e.g. a static site on `geoservices`, because the password gate depends on server-side code that wouldn't run on a static site.

For details on LMEC's Netlify build chain, see our [digital project best practices]().

## Deploy to Wasabi as static site \[deprecated\]

Previously, this app deployed to Wasabi as a static site at <https://geoservices.leventhalmap.org/identifier-mint>. The build chain was manual, like so:

1. Ran `npm run build` from the root
2. The `build` directory should update (you can always delete this folder before you `npm run build` to make sure it's updating)
3. Then, hand-copy the contents of `build` to `var/www/geoservices/identifier-mint` in Wasabi.

SvelteKit provides documentation on [deploying apps as a static site](https://svelte.dev/docs/kit/adapter-static). We _should_ only have to configure the app for this build chain once. For posterity, this is how I did it:

1. Install `@sveltejs/adapter-static`
2. Update the `svelte.config.js` according to SvelteKit docs
3. Create a file called `+layout.ts` inside of `/routes`
4. Add `export const prerender = true;`

