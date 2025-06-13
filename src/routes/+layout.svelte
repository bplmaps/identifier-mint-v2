<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-gray-600 font-sans">
	<div class="max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center space-x-2">
				<div class="mr-10 text-white">
					<a class="font-black text-green-300 hover:underline" href="https://leventhalmap.org">
						LMEC
					</a>
					 ⧽
					<a class="font-bold text-white hover:underline" href="/">
						Identifier Minting Service
					</a>
				</div>
				<a href="mint/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-100">
					Mint new
				</a>
				<a href="obsolete/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-100">
					Mark obsolete
				</a>
				<a href="crosswalk/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-100">
					Update obsolete crosswalks
				</a>
			</div>
		</div>
	</div>
</nav>

{@render children()}
