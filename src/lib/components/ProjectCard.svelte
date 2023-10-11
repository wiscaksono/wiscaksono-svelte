<script lang="ts">
	import type ProjectData from '$lib/data/projects.json';
	import Arrow from './icons/Arrow.svelte';

	type Project = (typeof ProjectData)[0];

	export let project: Project;
</script>

<article
	class="dark:bg-onyx bg-light-card-bg rounded-4xl overflow-hidden p-14 relative min-h-[565px] flex flex-col border dark:border-dark-card-border border-light-card-border transition-colors"
>
	<div class="flex flex-col gap-y-4 w-1/2 h-full flex-1">
		<img src={project.icon} alt={project.name} class="aspect-square w-16 h-16" />
		<h3 class="text-32 font-extrabold dark:text-white text-onyx capitalize transition-colors">
			{project.name}
		</h3>
		<p class="flex-1">
			{project.description}
		</p>
		<a
			href={project.url}
			class="text-lg font-medium dark:text-white text-onyx w-max inline-flex items-center gap-x-2 group transition-colors"
		>
			Download App
			<Arrow className="group-hover:translate-x-1 transition-transform" />
		</a>
	</div>
	<a target="_blank" class="hidden lg:block" href={project.url}>
		<img
			alt="Subbi Icon"
			loading="lazy"
			width="457"
			height="565"
			decoding="async"
			data-nimg="1"
			class="absolute inset-y-0 right-0 transition duration-300 ease-out hover:rotate-[-6.21deg] hover:scale-110"
			src={project.image}
			style="color: transparent;"
		/>
	</a>
</article>
