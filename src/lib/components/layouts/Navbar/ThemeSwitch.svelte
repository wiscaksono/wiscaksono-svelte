<script lang="ts">
	import { browser } from '$app/environment';

	export let type: 'desktop' | 'mobile' = 'desktop';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

{#if type === 'desktop'}
	<div class="relative w-6 h-6">
		<input
			type="checkbox"
			id="theme-toggle"
			checked={darkMode}
			on:click={handleSwitchDarkMode}
			class="hidden"
		/>
		<label for="theme-toggle" />
	</div>
{:else}
	<button
		on:click={handleSwitchDarkMode}
		class="py-2 font-semibold bg-medium-gray/10 w-full rounded-md text-18"
	>
		Theme: {darkMode ? 'Dark' : 'Light'}
	</button>
{/if}

<style lang="postcss">
	#theme-toggle {
		@apply invisible;
	}

	#theme-toggle + label {
		@apply inline-block cursor-pointer h-6 w-6 rounded-full duration-300 content-[''];
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -9px -8px 1px 1px #ddd;
	}
</style>
