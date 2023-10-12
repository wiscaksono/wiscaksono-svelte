<script lang="ts">
	import { goto } from '$app/navigation';

	import Signature from '$lib/components/icons/Signature.svelte';
	import Send from '$lib/components/icons/Send.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="mb-14">
	<header class="md:mb-14 md:mt-0 my-14 container">
		<h1 class="md:text-80 text-32 font-bold dark:text-white text-onyx transition-colors">
			A little bit about me
		</h1>
		<p class="md:text-24 text-16">Who I am and what I do.</p>
	</header>

	<div class="h-px w-full bg-black/10 dark:bg-white/10 transition-colors" />
</section>

<section class="container grid md:grid-cols-3 gap-x-16 gap-y-10">
	<article class="md:col-span-2 space-y-8 row-start-2 md:row-auto">
		<div class="space-y-2">
			<h3 class="uppercase font-semibold dark:text-dark-gray/50 text-onyx transition-colors">
				Who am i
			</h3>
			<p class="md:text-18 text-15">
				I’m <span class="dark:text-white text-onyx transition-colors">Wisnu</span>
				a multi-disciplinary front-end engineer based in Jakarta, Indonesia 🇮🇩
			</p>
		</div>
		<div class="space-y-2">
			<h3 class="uppercase font-semibold dark:text-dark-gray/50 text-onyx transition-colors">
				What i do
			</h3>
			<p class="md:text-18 text-15">
				Over the last two years, I've passionately immersed myself in this field, where I've become
				proficient in React.js and Next.js. My strength lies in transforming design concepts from
				Figma into elegant, efficient code. I also wield Tailwind CSS with confidence to craft
				stunning user interfaces. My unwavering attention to detail and commitment to producing
				clean, organized code consistently yield high-quality results. With each project, I endeavor
				to seamlessly marry functionality with visual appeal. As I continue to nurture my skills, my
				goal is to make a positive impact in the realm of Front End Development.
			</p>
		</div>
		<div class="space-y-2">
			<h3 class="uppercase font-semibold dark:text-dark-gray/50 text-onyx transition-colors">
				What i did
			</h3>
			<p class="md:text-18 text-15">
				Before delving into the realm of front end engineering, I spent five years as a graphic
				designer. This background has equipped me with a keen eye for aesthetics and a deep
				understanding of user-centered design principles. It enables me to seamlessly blend
				functionality and visual appeal in every project I undertake.
			</p>
		</div>
		<div class="space-y-14">
			<p class="md:text-18 text-15">
				Feel free to reach out via
				<a
					href="mailto:wwicaksono96@gmail.com"
					target="_blank"
					class="dark:text-white text-onyx transition-colors">Email</a
				>
				, or follow me on
				<a
					href="https://twitter.com/wiscaksono"
					target="_blank"
					class="dark:text-white text-onyx transition-colors">Twitter</a
				>. Want to see where I’ve worked? Check out my
				<a href="/" class="dark:text-white text-onyx transition-colors">Resume</a>, or Connect with
				me on
				<a
					href="https://www.linkedin.com/in/wiscaksono"
					class="dark:text-white text-onyx transition-colors">LinkedIn</a
				>.
			</p>
			<div class="space-y-4">
				<p class="md:text-18 text-15">Let's build something great!</p>
				<Signature />
			</div>
		</div>
	</article>
	<div class="place-self-center md:place-self-auto space-y-10">
		<picture
			class="block w-fit overflow-hidden rounded-2xl border border-card-border sm:rotate-3 hover:rotate-0 transition-transform place-self-center md:place-self-auto"
		>
			<img
				alt="Portrait of Wisnu Wicaksono"
				class="grayscale hover:grayscale-0 transition-all"
				loading="lazy"
				width="344"
				height="443"
				decoding="async"
				src="https://avatars.githubusercontent.com/u/63142229?v=4"
			/>
		</picture>
		<Button className="mx-auto" on:click={() => goto('/contact')}>
			<Send />
			Get in touch
		</Button>
	</div>
</section>
