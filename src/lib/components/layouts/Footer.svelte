<script lang="ts">
	import Wiscaksono from '../icons/Wiscaksono.svelte';

	import BottomGradient from '../gradients/BottomGradient.svelte';

	const categories = [
		{
			title: 'Links',
			routes: [
				{
					name: 'About',
					path: '/about'
				},
				{
					name: 'Work',
					path: '/work'
				},
				{
					name: 'Tech Stack',
					path: '/tech-stack'
				},
				{
					name: 'Bookself',
					path: '/bookself'
				},
				{
					name: 'Contact',
					path: '/contact'
				}
			]
		},
		{
			title: 'Elsewhere',
			routes: [
				{
					name: 'LinkedIn',
					path: 'https://www.linkedin.com/in/wiscaksono'
				},
				{
					name: 'GitHub',
					path: 'https://github.com/wiscaksono'
				},
				{
					name: 'X (Twitter)',
					path: 'https://twitter.com/wiscaksono'
				},
				{
					name: 'Discord',
					path: 'https://discord.com/users/wiscaksono'
				}
			]
		}
	];
</script>

<footer class="relative mt-16 min-h-[326px] pb-32 md:pb-12 container">
	<div class="h-px w-full bg-black/10 dark:bg-white/10" />
	<div
		class="relative z-10 mt-20 flex w-full flex-col items-start justify-between gap-12 md:h-[236px] md:flex-row"
	>
		<div class="flex h-full flex-col justify-between">
			<div class="flex flex-col">
				<Wiscaksono className="w-14 h-14" />
				<p class="mt-4 text-onyx/60 dark:text-white/40">
					Thanks for stopping by <span class="text-2xl">ッ</span>
				</p>
			</div>
			<p class="mt-10 text-sm text-onyx/60 dark:text-white/40 md:mt-0">
				© <!-- -->{new Date().getFullYear()}<!-- --> Wisnu Wicaksono. All Rights Reserved.
			</p>
		</div>
		<div class="-order-1 grid grid-cols-1 gap-10 md:order-2 md:grid-cols-2 md:gap-20">
			{#each categories as item}
				<div class="flex flex-col gap-8">
					<p class="font-bold text-onyx dark:text-white">{item.title}</p>
					<ul class="flex flex-col gap-4">
						{#each item.routes as route}
							<li
								class="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white"
							>
								<a class="transition-colors duration-150" href={route.path}>
									{route.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
	<BottomGradient />
</footer>
