<script lang="ts">
  import { getImageLink } from "$lib/images";
  import { Avatar, CodeBlock } from "@skeletonlabs/skeleton";
  import Chart1 from '$lib/components/Chart1.svelte';
  import Chart2 from '$lib//components/Chart2.svelte';
</script>

<svelte:head></svelte:head>

<main class="main">
  <section class="flex flex-wrap md:flex-nowrap m-2.5 gap-5">
    <div class="w-full text-token grid grid-cols-1">
      <a class="card card-hover overflow-hidden" href="/page1">
        <header>
          <Chart1 />
        </header>
        <div class="p-4 space-y-4">
          <article>
            <p>A simple Bar Chart based on ChartJS</p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
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
          <Chart2 />
        </header>
        <div class="p-4 space-y-4">
          <article>
            <p>A simple Scatter Chart based on ChartJS</p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold" data-toc-ignore>By Lilith</h6>
            <small>On {new Date().toLocaleDateString()}</small>
          </div>
        </footer>
      </a>
    </div>
  </section>
</main>

<style>
  .main {
    margin: 0 15px;
  }
</style>
