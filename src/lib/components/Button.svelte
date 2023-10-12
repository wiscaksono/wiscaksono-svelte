<script lang="ts">
	import ChevronDown from './icons/ChevronDown.svelte';
	import Plus from './icons/Plus.svelte';

	export let buttonType = 'primary' as keyof typeof buttonTypes;
	export let withPlusIcon = false;
	export let withChevronIcon = false;
	export let className = '';

	const buttonTypes = {
		primary:
			'px-8 py-4 rounded-lg bg-dark-gradient shadow btn-primary-shadow flex items-center justify-center gap-x-2 text-white',
		secondary:
			'px-8 py-4 rounded-lg dark:hover:text-white hover:shadow hover:btn-primary-shadow dark:bg-onyx dark:hover:bg-dark-gradient hover:btn-primary-shadow bg-light-faint-white shadow flex items-center justify-center gap-x-2 dark:text-dark-gray text-onyx transition-colors',
		text: 'text-black flex items-center gap-x-2'
	};
</script>

<button
	on:click
	class={`md:w-max w-full text-18 font-medium ${className} ${buttonTypes[buttonType]}`}
>
	{#if withPlusIcon}
		<Plus />
	{/if}
	<slot />
	{#if withChevronIcon}
		<ChevronDown className="-rotate-90" />
	{/if}
</button>

<style>
	.btn-primary-shadow {
		box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(255, 255, 255, 0.08) inset,
			0px 1px 2px 0px rgba(255, 255, 255, 0.02) inset;
	}
</style>
