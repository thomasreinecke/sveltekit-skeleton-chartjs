<script>
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
  let tabSet = 0;
</script>

<style>
  .tabgroup {
    position: relative; /* Position absolutely within the container */
		top: -2.5rem;
  }
</style>

<div class='tabgroup'>
	<TabGroup>
		<TabAnchor href="/">Home</TabAnchor>
		<TabAnchor href="/page1">Page 1</TabAnchor>
		<TabAnchor href="/page2">Page 2</TabAnchor>
	</TabGroup>
</div>
