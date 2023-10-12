<script>
	import '../app.css';
	import TopGradient from '$lib/components/gradients/TopGradient.svelte';

	import Navbar from '$lib/components/layouts/Navbar/index.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
</script>

<svelte:head>
	<title>Wiscaksono</title>
	<meta name="description" content="Wiscaksono's personal website" />
</svelte:head>

<Navbar />
<TopGradient />
<main class="md:my-32">
	<slot />
</main>
<Footer />
