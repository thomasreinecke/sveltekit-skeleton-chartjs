<script lang="ts">
	import '../app.postcss';
	import Icon from '@iconify/svelte';
	import LeadSpace from '$lib//components/LeadSpace.svelte';

	import '@fortawesome/fontawesome-free/css/all.css';
	import { AppShell, AppBar, Modal, LightSwitch } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
  import { page } from '$app/stores';
	import { dev } from '$app/environment';


	function gotoHome() {
		goto('/');
	}

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="logo-button" on:click={gotoHome}>
						<Icon icon="fa6-solid:explosion" />
				</button>
				<a href='/'><strong class="text-xl uppercase">SvelteKit + Skeleton + ChartJs Demo</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn-icon variant-glass-secondary"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-github text-lg"></i>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<LeadSpace />
	<slot />
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>

<style>
	.logo-button {
		padding-right: 0.75rem;
		font-size: 2rem;
	}
</style>
