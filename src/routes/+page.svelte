<script lang="ts">
	import Send from '$lib/components/icons/Send.svelte';
	import Button from '$lib/components/Button.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import projectData from '$lib/data/projects.json';
	import getKnowMeData from '$lib/data/knowMe.json';
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
	{#each projectData as project}
		<ProjectCard {project} />
	{/each}
</section>

<section class="mb-24 space-y-8">
	<h2 class="font-bold text-48 dark:text-white text-onyx transition-colors">Get to know me</h2>
	<ul class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each getKnowMeData as item, index}
			<li>
				<a
					class="group flex flex-col items-center justify-between overflow-hidden rounded-3xl border-[1px] border-light-card-border bg-light-card-bg pt-16 transition dark:border-transparent dark:bg-onyx"
					href={item.url}
				>
					<div>
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

<section class="flex items-center justify-between">
	<div class="w-1/2">
		<h2 class="text-48 font-bold dark:text-white text-onyx transition-colors">
			Let's work together
		</h2>
		<p class="text-20">
			Want to discuss an opportunity to create something great? I’m ready when you are.
		</p>
	</div>

	<Button>
		<Send />
		Get in touch</Button
	>
</section>
