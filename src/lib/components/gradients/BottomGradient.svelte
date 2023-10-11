<script>
	import bottomGradient from '$lib/images/bottomGradient.svg';
</script>

<div class="absolute inset-x-0 bottom-0 h-[550px]">
	<div class="relative h-full w-full overflow-hidden">
		<picture
			class="absolute bottom-0 left-1/2 block h-[550px] w-[1440px] -translate-x-1/2 select-none"
		>
			<img
				class="rotate-180"
				draggable="false"
				alt="gradient"
				loading="lazy"
				decoding="async"
				data-nimg="fill"
				sizes="100vw"
				src={bottomGradient}
			/>
		</picture>
	</div>
</div>
