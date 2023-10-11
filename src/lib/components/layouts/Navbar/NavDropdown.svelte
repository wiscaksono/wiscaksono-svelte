<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import ChevronDown from '$lib/components/icons/ChevronDown.svelte';

	export let subRoutes: { name: string; path: string }[] = [];
	export let routeName: string;

	let isExpanded = false;
</script>

<li class="relative">
	<button
		on:click={() => (isExpanded = !isExpanded)}
		class={`flex items-center ${isExpanded && 'text-white'} transition-colors`}
		>{routeName}
		<ChevronDown className={`${isExpanded && '-rotate-180'} transition-transform duration-500`} />
	</button>
	{#if isExpanded}
		<ul
			transition:slide
			class="absolute bg-onyx/60 p-4 space-y-4 rounded-b-lg w-max top-[165%] left-1/2 -translate-x-1/2 shadow-lg backdrop-blur-lg"
		>
			{#each subRoutes as subRoute (subRoute.name)}
				<li aria-current={subRoute.name === $page.url.pathname ? 'page' : undefined}>
					<a class="hover:text-white transition-colors" href={subRoute.path}>{subRoute.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
</li>
