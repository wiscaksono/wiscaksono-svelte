<script lang="ts">
	import Send from '$lib/components/icons/Send.svelte';
	import Button from '$lib/components/Button.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import projectData from '$lib/data/projects.json';
	import getKnowMeData from '$lib/data/knowMe.json';
</script>

<section
	class="md:mb-80 min-h-[70vh] md:min-h-0 flex items-center justify-center md:block container"
>
	<header>
		<div class="flex flex-col items-center justify-center">
			<h1
				class="md:text-80 text-48 font-extrabold dark:text-white text-onyx text-center transition-colors"
			>
				<span class="text-dark-gray"> I'm </span>
				Wisnu
			</h1>
			<p class="md:text-24 text-15 font-medium text-center mb-10">
				A multidisciplinary front-end engineer and UI/UX designer helping startups turn their ideas
				into a digital reality. I specialize in designing and building modern mobile and web
				applications.
			</p>
			<div class="flex items-center gap-x-4 md:flex-row flex-col gap-y-4 w-full justify-center">
				<Button buttonType="primary">See my resume</Button>
				<Button buttonType="secondary">Get in touch</Button>
			</div>
		</div>
	</header>
</section>

<section class="md:mb-24 mb-14 md:space-y-8 space-y-4 container">
	<h2 class="font-bold md:text-48 text-32 dark:text-white text-onyx transition-colors">
		Selected Work
	</h2>
	{#each projectData as project}
		<ProjectCard {project} />
	{/each}
</section>

<section class="md:mb-24 mb-14 md:space-y-8 space-y-4 container">
	<h2 class="font-bold md:text-48 text-32 dark:text-white text-onyx transition-colors">
		Get to know me
	</h2>
	<ul class="md:mt-8 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each getKnowMeData as item, index}
			<li>
				<a
					class="group flex flex-col items-center justify-between overflow-hidden rounded-3xl border-[1px] border-light-card-border bg-light-card-bg md:pt-16 pt-8 transition dark:border-transparent dark:bg-onyx"
					href={item.url}
				>
					<div class="px-4">
						<p class="text-center text-2xl font-bold text-onyx dark:text-white">{item.title}</p>
						<p class="mt-2 text-center text-dark-gray">{item.description}</p>
					</div>
					<img
						alt={item.title}
						loading="lazy"
						width="505"
						height="365"
						decoding="async"
						class={`transition duration-500 ease-out  ${
							index !== 0
								? 'origin-bottom group-hover:translate-y-4 group-hover:scale-105'
								: 'origin-center group-hover:-rotate-6 group-hover:scale-105'
						}`}
						src={item.image}
					/>
				</a>
			</li>
		{/each}
	</ul>
</section>

<section
	class="flex md:flex-row flex-col items-center md:justify-between justify-center gap-y-8 container"
>
	<div class="md:w-1/2 w-full md:text-left text-center space-y-2 md:space-y-0">
		<h2 class="md:text-48 text-32 font-bold dark:text-white text-onyx transition-colors">
			Let's work together
		</h2>
		<p class="md:text-20 text-15">
			Want to discuss an opportunity to create something great? I’m ready when you are.
		</p>
	</div>

	<Button>
		<Send />
		Get in touch</Button
	>
</section>
