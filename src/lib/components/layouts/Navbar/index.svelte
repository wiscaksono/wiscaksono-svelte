<script lang="ts">
	import { page } from '$app/stores';
	import NavDropdown from '$lib/components/layouts/Navbar/NavDropdown.svelte';
	import ThemeSwitch from '$lib/components/layouts/Navbar/ThemeSwitch.svelte';

	import Wiscaksono from '$lib/components/icons/Wiscaksono.svelte';
	import LinkedIn from '$lib/components/icons/LinkedIn.svelte';
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';

	const routes = [
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Work',
			path: '/work'
		},
		{
			name: 'Notebook',
			path: '/notebook'
		},
		{
			name: 'Contact',
			path: '/about'
		},
		{
			name: 'More',
			subRoutes: [
				{
					name: 'Bookself',
					path: '/bookself'
				},
				{
					name: 'Tech Stack',
					path: '/tech-stack'
				},
				{
					name: 'This UI Kit',
					path: '/ui-kit'
				}
			]
		}
	];
</script>

<nav
	class="max-w-5xl sticky z-10 top-8 mx-auto p-4 rounded-lg backdrop-blur-sm dark:bg-onyx/80 bg-dark-white-25 border border-dark-white-25 dark:border-transparent my-8 flex items-center justify-between font-medium dark:text-light-gray text-onyx transition-colors shadow-lg dark:shadow-light-card-border/10 shadow-dark-card-border/10"
>
	<ul class="flex items-center gap-x-10">
		<li>
			<a href="/" class="dark:hover:text-white transition-colors">
				<Wiscaksono className="w-6 h-6" />
			</a>
		</li>
		{#each routes as route (route.name)}
			{#if !route.subRoutes}
				<li aria-current={route.name === $page.url.pathname ? 'page' : undefined}>
					<a href={route.path} class="dark:hover:text-white transition-colors">
						{route.name}
					</a>
				</li>
			{:else}
				<NavDropdown routeName={route.name} subRoutes={route.subRoutes} />
			{/if}
		{/each}
	</ul>

	<ul class="flex items-center gap-x-6">
		<li>
			<a href="/" class="dark:hover:text-white transition-colors">
				<LinkedIn />
			</a>
		</li>
		<li>
			<a href="/" class="dark:hover:text-white transition-colors">
				<GitHub />
			</a>
		</li>
		<li>
			<a href="/" class="dark:hover:text-white transition-colors">
				<Twitter />
			</a>
		</li>
		<li>
			<div class="h-6 w-px dark:bg-dark-white-25 bg-onyx transition-colors" />
		</li>
		<li>
			<ThemeSwitch />
		</li>
	</ul>
</nav>
