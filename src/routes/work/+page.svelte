<script lang="ts">
	import { goto } from '$app/navigation';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/Button.svelte';

	import Star from '$lib/components/icons/Star.svelte';
	import Send from '$lib/components/icons/Send.svelte';

	import projectData from '$lib/data/projects.json';
</script>

<section class="mb-14">
	<header class="md:mb-14 md:mt-0 my-14 container">
		<h1 class="md:text-80 text-32 font-bold dark:text-white text-onyx transition-colors">
			Projects
		</h1>
		<p class="md:text-24 text-16">Projects that I've worked on.</p>
	</header>

	<div class="h-px w-full bg-black/10 dark:bg-white/10 transition-colors" />
</section>

<section class="container space-y-4">
	{#each projectData as project}
		<ProjectCard {project} />
	{/each}

	<article
		class="dark:bg-onyx md:py-24 md:px-0 py-8 px-10 bg-light-card-bg rounded-4xl overflow-hidden relative md:min-h-[565px] min-h-[358px] flex flex-col items-center border border-dashed dark:border-dark-gray border-medium-gray transition-colors"
	>
		<Star />
		<h1
			class="text-center uppercase md:text-32 text-20 font-extrabold dark:text-white text-onyx md:mb-4 mb-2 md:mt-2.5 mt-1"
		>
			Your project goes here
		</h1>
		<p class="md:mb-24 mb-20 md:text-16 text-15">Let’s turn your idea into a visual reality</p>
		<Button on:click={() => goto('/contact')}>
			<Send />
			Get in touch
		</Button>
	</article>
</section>
