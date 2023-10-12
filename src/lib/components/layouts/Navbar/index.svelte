<script lang="ts">
	import DesktopNavbar from './DesktopNavbar.svelte';
	import MobileNavbar from './MobileNavbar.svelte';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if screenSize > 768}
	<DesktopNavbar />
{:else}
	<MobileNavbar />
{/if}
