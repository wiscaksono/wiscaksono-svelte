<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	import Wiscaksono from '$lib/components/icons/Wiscaksono.svelte';
	import Home from '$lib/components/icons/Home.svelte';
	import About from '$lib/components/icons/About.svelte';
	import Work from '$lib/components/icons/Work.svelte';
	import Notebook from '$lib/components/icons/Notebook.svelte';
	import Contact from '$lib/components/icons/Contact.svelte';
	import More from '$lib/components/icons/More.svelte';

	import ThemeSwitch from './ThemeSwitch.svelte';

	let isExpanded = false;

	const routes = [
		{
			icon: Home,
			path: '/'
		},
		{
			icon: About,
			path: '/about'
		},
		{
			icon: Work,
			path: '/work'
		},
		{
			icon: Notebook,
			path: '/notebook'
		},
		{
			icon: Contact,
			path: '/contact'
		},
		{
			icon: More,
			subRoutes: [
				{
					name: 'Bookshelf',
					path: '/bookshelf'
				},
				{
					name: 'Tech Stack',
					path: '/tech-stack'
				}
			]
		}
	];
</script>

<span class="absolute top-5 left-1/2 -translate-x-1/2">
	<Wiscaksono />
</span>

<nav class="fixed inset-x-0 bottom-0 z-20 block px-4 pb-6 md:hidden">
	<div
		class="w-full p-2 rounded-lg backdrop-blur-sm dark:bg-onyx/80 bg-onyx/30 border border-dark-white-25 dark:border-transparent shadow-lg dark:shadow-light-card-border/10 shadow-dark-card-border/10"
	>
		<ul class="flex flex-wrap items-center justify-between">
			{#each routes as route}
				{#if !route.subRoutes}
					<li aria-current={route.path === $page.url.pathname ? 'page' : undefined}>
						<a
							href={route.path}
							class={`py-2 px-4 rounded-lg flex transition-colors text-white ${
								$page.url.pathname === route.path
									? 'dark:bg-dark-white-10 bg-black/50'
									: 'bg-transparent'
							}`}
						>
							<svelte:component this={route.icon} />
						</a>
					</li>
				{:else}
					<button
						class={`py-2 px-4 rounded-lg flex transition-colors text-white ${
							isExpanded ? 'dark:bg-dark-white-10 bg-black/50' : 'bg-transparent'
						}`}
						on:click={() => (isExpanded = !isExpanded)}
					>
						<svelte:component this={route.icon} />

						{#if isExpanded}
							<ul
								transition:slide
								class="p-2 backdrop-blur-sm space-y-1 w-full absolute right-0 bottom-[calc(100%+4px)] dark:bg-onyx/80 bg-onyx/30 border border-dark-white-25 dark:border-transparent rounded-lg"
							>
								{#each route.subRoutes as subRoute}
									<li>
										<a
											href={subRoute.path}
											class={`py-2 inline-block w-full rounded-md text-18 font-medium ${
												$page.url.pathname === subRoute.path ? 'bg-black/50' : 'bg-medium-gray/10'
											}`}
										>
											{subRoute.name}
										</a>
									</li>
								{/each}
								<li>
									<ThemeSwitch type="mobile" />
								</li>
							</ul>
						{/if}
					</button>
				{/if}
			{/each}
		</ul>
	</div>
</nav>
