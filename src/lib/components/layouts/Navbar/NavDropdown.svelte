<script lang="ts">
	import { slide } from 'svelte/transition';
	import ChevronDown from '$lib/components/icons/ChevronDown.svelte';

	export let subRoutes: { name: string; path: string }[] = [];
	export let routeName: string;

	let isExpanded = false;
</script>

<li class="relative">
	<button on:click={() => (isExpanded = !isExpanded)} class="flex items-center"
		>{routeName}
		<ChevronDown className={`${isExpanded && '-rotate-180'} transition-transform duration-500`} />
	</button>
	{#if isExpanded}
		<ul
			transition:slide
			class="absolute bg-onyx/60 p-4 space-y-4 rounded-b-lg w-max top-[165%] left-1/2 -translate-x-1/2"
		>
			{#each subRoutes as subRoute (subRoute.name)}
				<li>
					<a href={subRoute.path}>{subRoute.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
</li>
