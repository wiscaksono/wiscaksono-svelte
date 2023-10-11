<script>
	import '../app.css';
	import TopGradient from '$lib/components/gradients/TopGradient.svelte';
	import BottomGradient from '$lib/components/gradients/BottomGradient.svelte';
	import Navbar from '$lib/components/layouts/Navbar/index.svelte';
</script>

<svelte:head>
	<title>Wiscaksono</title>
	<meta name="description" content="Wiscaksono's personal website" />
</svelte:head>

<TopGradient />
<Navbar />

<main class="container my-32">
	<slot />
</main>

<BottomGradient />
