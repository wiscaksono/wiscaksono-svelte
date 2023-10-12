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
		class={`flex items-center ${isExpanded && 'dark:text-white text-onyx'} transition-colors`}
		>{routeName}
		<ChevronDown className={`${isExpanded && '-rotate-180'} transition-transform duration-500`} />
	</button>
	{#if isExpanded}
		<ul
			transition:slide
			class="absolute z-20 transition-colors p-4 space-y-4 rounded-b-lg w-max top-[170%] left-1/2 -translate-x-1/2 shadow-lg backdrop-blur-lg dark:bg-onyx/80 bg-dark-white-25 border-t-0 border border-dark-white-25 dark:border-transparent"
		>
			{#each subRoutes as subRoute (subRoute.name)}
				<li aria-current={subRoute.name === $page.url.pathname ? 'page' : undefined}>
					<a
						class={`dark:hover:text-white transition-colors ${
							$page.url.pathname === subRoute.path && 'underline'
						}`}
						href={subRoute.path}>{subRoute.name}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</li>
