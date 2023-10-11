<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import ProjectData from '$lib/data/projects.json';
</script>

<section class="mb-80">
	<header>
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-80 font-extrabold dark:text-white text-onyx text-center transition-colors">
				<span class="text-dark-gray"> I'm </span>
				Wisnu
			</h1>
			<p class="text-24 font-medium text-center mb-10">
				A multidisciplinary front-end engineer and UI/UX designer helping startups turn their ideas
				into a digital reality. I specialize in designing and building modern mobile and web
				applications.
			</p>
			<div class="flex items-center gap-x-4">
				<Button buttonType="primary">See my resume</Button>
				<Button buttonType="secondary">Get in touch</Button>
			</div>
		</div>
	</header>
</section>

<section class="mb-24 space-y-8">
	<h2 class="font-bold text-48 dark:text-white text-onyx transition-colors">Selected Work</h2>
	{#each ProjectData as project}
		<ProjectCard {project} />
	{/each}
</section>

<section class="mb-24 space-y-8">
	<h2 class="font-bold text-48 dark:text-white text-onyx transition-colors">Get to know me</h2>
	<ul class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2" style="opacity: 1;">
		<li>
			<a
				class="group flex flex-col items-center justify-between overflow-hidden rounded-3xl border-[1px] border-light-card-border bg-light-card-bg pt-16 transition dark:border-transparent dark:bg-onyx"
				href="/about"
			>
				<div>
					<p class="text-center text-2xl font-bold text-onyx dark:text-white">About me</p>
					<p class="mt-2 text-center text-dark-gray">Who I am and what I do</p>
				</div>
				<img
					alt="About me"
					loading="lazy"
					width="505"
					height="365"
					decoding="async"
					class="transition duration-500 ease-out group-hover:-rotate-6 origin-center group-hover:scale-105"
					src="https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fillustrations%2Fabout.png&w=640&q=75"
				/>
			</a>
		</li>
		<li>
			<a
				class="group flex flex-col items-center justify-between overflow-hidden rounded-3xl border-[1px] border-light-card-border bg-light-card-bg pt-16 transition dark:border-transparent dark:bg-onyx"
				href="/about"
			>
				<div>
					<p class="text-center text-2xl font-bold text-onyx dark:text-white">About me</p>
					<p class="mt-2 text-center text-dark-gray">Who I am and what I do</p>
				</div>
				<img
					alt="About me"
					loading="lazy"
					width="505"
					height="365"
					decoding="async"
					class="transition duration-500 ease-out group-hover:-rotate-6 origin-center group-hover:scale-105"
					src="https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fillustrations%2Fabout.png&w=640&q=75"
				/>
			</a>
		</li>
	</ul>
</section>
