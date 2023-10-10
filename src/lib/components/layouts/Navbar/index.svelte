<script lang="ts">
	import { page } from '$app/stores';
	import NavDropdown from '$lib/components/layouts/Navbar/NavDropdown.svelte';

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

<nav class="max-w-5xl mx-auto p-4 rounded-lg backdrop-blur-sm bg-onyx/30 my-8">
	<ul class="flex items-center gap-x-10 font-medium text-light-gray">
		{#each routes as route (route.name)}
			<li aria-current={route.name === $page.url.pathname ? 'page' : undefined}>
				<a href={route.path}>
					{route.name}
				</a>
			</li>
			{#if route.subRoutes}
				<NavDropdown routeName={route.name} subRoutes={route.subRoutes} />
			{/if}
		{/each}
	</ul>
</nav>
