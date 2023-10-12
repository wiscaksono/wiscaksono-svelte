<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section class="mb-14">
	<header class="md:mb-14 md:mt-0 my-14 container">
		<h1 class="md:text-80 text-32 font-bold dark:text-white text-onyx transition-colors">
			Get in touch
		</h1>
		<p class="md:text-24 text-16">Let's build something great together.</p>
	</header>

	<div class="h-px w-full bg-black/10 dark:bg-white/10 transition-colors" />
</section>

<section class="container space-y-4">
	<div
		class="relative shadow-md min-h-[565px] overflow-hidden rounded-2xl border border-light-card-border bg-light-card-bg pb-3 dark:border-dark-card-border dark:bg-onyx transition-colors"
	>
		<div class="relative flex flex-col items-center justify-center py-4">
			<div class="absolute left-4 top-[22px] flex gap-2">
				<div class="h-3 w-3 rounded-full border border-[#F63636] bg-[#FF6057]" />
				<div class="h-3 w-3 rounded-full border border-[#F6C136] bg-[#FDBC2E]" />
				<div class="h-3 w-3 rounded-full border border-[#53CC28] bg-[#27C840]" />
			</div>
			<p class="mb-4 font-medium text-onyx dark:text-white transition-colors">New Message</p>
			<div class="h-px w-full bg-black/10 dark:bg-white/10 transition-colors" />
		</div>
		<form class="mb-4 px-6">
			<label for="email" class="my-4 flex items-center gap-2">
				<span class="font-medium text-onyx dark:text-white transition-colors">Email:</span>
				<input
					type="email"
					class="flex-1 text-onyx caret-fuchsia-400 placeholder:text-dark-gray focus:outline-none focus:ring-0 dark:text-light-gray dark:placeholder:text-medium-gray transition-colors"
					placeholder="Enter your email"
					id="email"
					name="email"
				/>
			</label>
			<div class="h-px w-full bg-black/10 dark:bg-white/10 transition-colors" />
			<label for="name" class="my-4 flex items-center gap-2">
				<span class="font-medium text-onyx dark:text-white transition-colors">Name:</span>
				<input
					class="flex-1 text-onyx caret-fuchsia-400 placeholder:text-dark-gray focus:outline-none focus:ring-0 dark:text-light-gray dark:placeholder:text-medium-gray transition-colors"
					placeholder="Enter your name"
					id="name"
					name="name"
				/>
			</label>
			<div class="h-px w-full bg-black/10 dark:bg-white/10 transition-colors" />
			<label for="subject" class="my-4 flex items-center gap-2">
				<span class="font-medium text-onyx dark:text-white transition-colors">Subject:</span><input
					class="flex-1 text-onyx caret-fuchsia-400 placeholder:text-dark-gray focus:outline-none focus:ring-0 dark:text-light-gray dark:placeholder:text-medium-gray transition-colors"
					placeholder="Enter subject"
					id="subject"
					name="subject"
				/>
			</label>
			<div class="h-px w-full bg-black/10 dark:bg-white/10 transition-colors" />

			<div class="relative my-4">
				<textarea
					class="shadow min-h-[200px] md:min-h-[320px] w-full resize-none rounded-lg bg-faint-white dark:bg-black/50 p-4 text-onyx dark:text-light-gray caret-fuchsia-400 dark:placeholder:text-medium-gray placeholder:text-dark-gray focus:outline-none focus:ring-0 border border-transparent transition-colors"
					name="message"
					placeholder="Write your message here"
				/>
			</div>
			<Button className="ml-auto">Send</Button>
		</form>
	</div>
</section>
