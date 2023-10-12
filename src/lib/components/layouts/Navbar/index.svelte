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
			path: '/contact'
		},
		{
			name: 'More',
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

<!-- Desktop -->
<nav
	class="container hidden sticky z-10 top-8 mx-auto p-4 rounded-lg backdrop-blur-sm dark:bg-onyx/80 bg-dark-white-25 border border-dark-white-25 dark:border-transparent my-8 md:flex items-center justify-between font-medium dark:text-light-gray text-onyx transition-colors shadow-lg dark:shadow-light-card-border/10 shadow-dark-card-border/10"
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
					<a
						href={route.path}
						class={`dark:hover:text-white transition-colors ${
							$page.url.pathname === route.path &&
							'text-onyx dark:text-white underline underline-offset-4'
						}`}
					>
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

<!-- Mobile -->
<nav class="fixed inset-x-0 bottom-0 z-[99999] block px-4 pb-6 md:hidden">
	<div
		class="flex h-16 w-full items-center justify-between rounded-2xl border-[1px] border-onyx/30 bg-onyx/30 px-4 backdrop-blur-md dark:border-card-border/60 dark:bg-[#18181D]/30"
	>
		<nav class="w-full">
			<ul class="flex items-center justify-between gap-4">
				<li
					class="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10"
				>
					<a class="flex w-full items-center justify-center py-2" href="/"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							class="text-faint-white dark:text-white"
							><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .62.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/></svg
						></a
					>
				</li>
				<li
					class="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10"
				>
					<a class="flex w-full items-center justify-center py-2" href="/about"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							class="text-faint-white dark:text-white"
							><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
							/></svg
						></a
					>
				</li>
				<li
					class="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10 bg-black/30 dark:bg-white/10"
				>
					<a class="flex w-full items-center justify-center py-2" href="/work"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							class="text-faint-white dark:text-white"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.728 24.728 0 0 1 12 15.75a24.72 24.72 0 0 1-7.814-1.259c-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917.921-.138 1.846-.25 2.774-.334V5.25Zm7.5 0v.09a49.49 49.49 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
								clip-rule="evenodd"
							/><path
								fill="currentColor"
								d="M3 18.4v-2.796c.228.125.466.228.713.31A26.225 26.225 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427-2.166 0-4.33-.142-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"
							/></svg
						></a
					>
				</li>
				<li
					class="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10"
				>
					<a class="flex w-full items-center justify-center py-2" href="/notebook"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							class="text-faint-white dark:text-white"
							><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="m16.862 4.487 1.687-1.688a1.875 1.875 0 0 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487h-.001Zm0 0L19.5 7.125"
							/></svg
						></a
					>
				</li>
				<li
					class="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10"
				>
					<a class="flex w-full items-center justify-center py-2" href="/contact"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							class="text-faint-white dark:text-white"
							><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/></svg
						></a
					>
				</li>
				<li
					class="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray"
				>
					<button
						class="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition w-full py-2 text-light-gray"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							class="text-faint-white dark:text-white"
							><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M4 12.5h16.5M4 16.25h16.5M4 20h16.5M5.875 5h12.75a1.875 1.875 0 1 1 0 3.75H5.875a1.875 1.875 0 0 1 0-3.75Z"
							/></svg
						></button
					>
				</li>
			</ul>
		</nav>
	</div>
	<ul
		class="absolute inset-x-0 bottom-0 z-[-1] flex flex-col gap-4 rounded-t-2xl border-[1px] border-onyx/30 dark:border-card-border/60 bg-onyx/30 dark:bg-[#18181D]/60 p-4 backdrop-blur-md transition min-h-[440px] duration-300 pt-6 translate-y-full"
	>
		<li>
			<a
				class="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition w-full bg-medium-gray py-4 text-white hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
				href="/tech-stack">Tech stack</a
			>
		</li>
		<li>
			<a
				class="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition w-full bg-medium-gray py-4 text-white hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
				href="/bookshelf">Bookshelf</a
			>
		</li>
		<li>
			<a
				class="cursor-pointer rounded-lg justify-center items-center font-medium transition flex w-full gap-2 bg-medium-gray py-4 text-white hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
				target="_blank"
				href="https://www.figma.com/community/file/1266863403759514317"><span>This UIKit</span></a
			>
		</li>
		<li>
			<button
				class="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition w-full bg-medium-gray py-4 text-white hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
				>Theme:<!-- --> <span class="">&nbsp; Dark</span></button
			>
		</li>
	</ul>
</nav>
