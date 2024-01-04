<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import LeadSpace from '$lib/components/LeadSpace.svelte';
  import { getImageLink } from '$lib/images';
  import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';
</script>

<style>
  .main {
    margin: 0 15px;
  }
</style>

<svelte:head>
	<!--<link rel="stylesheet" href="/global.css" />-->
</svelte:head>
<LeadSpace />

<main class='main'>

  <section class="flex flex-wrap md:flex-nowrap m-2.5 gap-5">
    <div class="w-full text-token grid grid-cols-1">
      <a class="card bg-initial card-hover overflow-hidden" href="/page1">
        <header>
          <img src={getImageLink({ id: 'VYuJLsF4XQQ', w: 400, h: 175 })} class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
        </header>
        <div class="p-4 space-y-4">
          <h6 class="h6" data-toc-ignore>Announcement</h6>
          <h3 class="h3" data-toc-ignore>The Allure of Illusion</h3>
          <article>
            <p>
              Mara's Dance of Deception and Desire in Buddhist Lore.
            </p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
          <Avatar src={getImageLink({ id: 'z_X0PxmBuIQ', w: 32, h: 32 })} width="w-8" />
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold" data-toc-ignore>By Mara</h6>
            <small>On {new Date().toLocaleDateString()}</small>
          </div>
        </footer>
      </a>
    </div>
    <div class="w-full text-token grid grid-cols-1">
      <a class="card bg-initial card-hover overflow-hidden" href="/page2">
        <header>
          <img src={getImageLink({ id: 'vjUokUWbFOs', w: 400, h: 175 })} class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
        </header>
        <div class="p-4 space-y-4">
          <h6 class="h6" data-toc-ignore>Announcement</h6>
          <h3 class="h3" data-toc-ignore>Embracing the Shadows</h3>
          <article>
            <p>
              Unveiling the Mystique of Lilith, the Night's Seductress.
            </p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
          <Avatar src={getImageLink({ id: 'YOErFW8AfkI', w: 32, h: 32 })} width="w-8" />
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold" data-toc-ignore>By Lilith</h6>
            <small>On {new Date().toLocaleDateString()}</small>
          </div>
        </footer>
      </a>
    </div>
  </section>
 
</main>