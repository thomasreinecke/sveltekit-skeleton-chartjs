<script lang="ts">
	import '../app.postcss';
	import Icon from '@iconify/svelte';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { AppShell, AppBar, Modal, LightSwitch } from '@skeletonlabs/skeleton';
	import { initializeStores, getModalStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
  import { page } from '$app/stores';
	import { dev } from '$app/environment';


	// supabase auth codes
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data;
	let currentRoute:string;

	// Subscribe to the $page store
	const unsubscribe = page.subscribe($page => {
		currentRoute = $page.route.id ? $page.route.id : '/';
    // console.log('Current route:', $page.route.id);
  });
	// TODO make sure we destroy 
	// onDestroy(unsubscribe);

	initializeStores();

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
				<a href='/'><strong class="text-xl uppercase">Svelte+Skeleton Boilerplate</strong></a>
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

				{#if currentRoute !== '/auth'}
					<button class="btn variant-filled-primary">Login</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>

<style>
	.logo-button {
		padding-right: 0.75rem;
		font-size: 2rem;
	}
</style>
