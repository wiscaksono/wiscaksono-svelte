<script>
	import '../app.css';
	import TopGradient from '$lib/components/gradients/TopGradient.svelte';
	import BottomGradient from '$lib/components/gradients/BottomGradient.svelte';
	import Navbar from '$lib/components/layouts/Navbar/index.svelte';
</script>

<TopGradient />
<Navbar />

<main class="container">
	<slot />
</main>

<BottomGradient />
